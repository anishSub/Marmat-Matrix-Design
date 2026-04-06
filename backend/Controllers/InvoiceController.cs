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
        public async Task<ActionResult<IEnumerable<Backend.DTOs.OrderDto>>> GetOrders()
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var role = User.FindFirstValue(ClaimTypes.Role);

            IQueryable<Order> query = _context.Orders.Include(o => o.OrderItems);
            
            if (role != "Admin" && role != "Staff")
            {
                query = query.Where(o => o.UserId == userId);
            }

            var orders = await query.ToListAsync();
            var dtos = orders.Select(o => new Backend.DTOs.OrderDto
            {
                Id = o.Id,
                UserId = o.UserId,
                TotalAmount = o.TotalAmount,
                OrderDate = o.OrderDate,
                OrderItems = o.OrderItems.Select(oi => new Backend.DTOs.OrderItemDto
                {
                    Id = oi.Id,
                    OrderId = oi.OrderId,
                    PartId = oi.PartId,
                    Quantity = oi.Quantity,
                    UnitPrice = oi.UnitPrice
                }).ToList()
            }).ToList();

            return Ok(dtos);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Backend.DTOs.OrderDto>> GetOrder(int id)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var role = User.FindFirstValue(ClaimTypes.Role);

            var order = await _context.Orders
                .Include(o => o.OrderItems)
                .FirstOrDefaultAsync(o => o.Id == id);

            if (order == null) return NotFound();
            if (role != "Admin" && role != "Staff" && order.UserId != userId) return Forbid();

            var dto = new Backend.DTOs.OrderDto
            {
                Id = order.Id,
                UserId = order.UserId,
                TotalAmount = order.TotalAmount,
                OrderDate = order.OrderDate,
                OrderItems = order.OrderItems.Select(oi => new Backend.DTOs.OrderItemDto
                {
                    Id = oi.Id,
                    OrderId = oi.OrderId,
                    PartId = oi.PartId,
                    Quantity = oi.Quantity,
                    UnitPrice = oi.UnitPrice
                }).ToList()
            };

            return Ok(dto);
        }

        [HttpPost("Checkout")]
        public async Task<ActionResult<Backend.DTOs.OrderDto>> Checkout([FromBody] CheckoutRequest request)
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

            var dto = new Backend.DTOs.OrderDto
            {
                Id = order.Id,
                UserId = order.UserId,
                TotalAmount = order.TotalAmount,
                OrderDate = order.OrderDate,
                OrderItems = order.OrderItems.Select(oi => new Backend.DTOs.OrderItemDto
                {
                    Id = oi.Id,
                    OrderId = oi.OrderId,
                    PartId = oi.PartId,
                    Quantity = oi.Quantity,
                    UnitPrice = oi.UnitPrice
                }).ToList()
            };

            return CreatedAtAction(nameof(GetOrder), new { id = order.Id }, dto);
        }
    }

    public class CheckoutRequest { public List<CheckoutItem> Items { get; set; } = new(); }
    public class CheckoutItem { public int PartId { get; set; } public int Quantity { get; set; } }
}
