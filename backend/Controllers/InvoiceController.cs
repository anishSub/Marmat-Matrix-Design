using Backend.Data;
using Backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class InvoiceController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public InvoiceController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Order>>> GetOrders()
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var role = User.FindFirstValue(ClaimTypes.Role);

            if (role == "Admin" || role == "Staff")
            {
                return await _context.Orders.Include(o => o.OrderItems).ThenInclude(oi => oi.Part).ToListAsync();
            }

            return await _context.Orders
                .Where(o => o.UserId == userId)
                .Include(o => o.OrderItems)
                .ThenInclude(oi => oi.Part)
                .ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Order>> GetOrder(int id)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var role = User.FindFirstValue(ClaimTypes.Role);

            var order = await _context.Orders
                .Include(o => o.OrderItems)
                .ThenInclude(oi => oi.Part)
                .FirstOrDefaultAsync(o => o.Id == id);

            if (order == null) return NotFound();
            if (role != "Admin" && role != "Staff" && order.UserId != userId) return Forbid();

            return order;
        }

        [HttpPost("Checkout")]
        public async Task<ActionResult<Order>> Checkout([FromBody] CheckoutRequest request)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            if (string.IsNullOrEmpty(userId)) return Unauthorized();

            var order = new Order { UserId = userId, OrderDate = DateTime.UtcNow, TotalAmount = 0 };

            foreach (var item in request.Items)
            {
                var part = await _context.Parts.FindAsync(item.PartId);
                if (part == null || part.StockQuantity < item.Quantity) return BadRequest($"Part unavailable.");
                part.StockQuantity -= item.Quantity;
                _context.Entry(part).State = EntityState.Modified;
                order.OrderItems.Add(new OrderItem { PartId = item.PartId, Quantity = item.Quantity, UnitPrice = part.Price });
                order.TotalAmount += (item.Quantity * part.Price);
            }

            _context.Orders.Add(order);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetOrder), new { id = order.Id }, order);
        }
    }

    public class CheckoutRequest { public List<CheckoutItem> Items { get; set; } = new(); }
    public class CheckoutItem { public int PartId { get; set; } public int Quantity { get; set; } }
}
