using Backend.Data;
using Backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InventoryController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public InventoryController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Part>>> GetParts()
        {
            return await _context.Parts.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Part>> GetPart(int id)
        {
            var part = await _context.Parts.FindAsync(id);
            if (part == null) return NotFound();
            return part;
        }

        [Authorize(Roles = "Admin,Staff")]
        [HttpPost]
        public async Task<ActionResult<Part>> PostPart(Part part)
        {
            _context.Parts.Add(part);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetPart), new { id = part.Id }, part);
        }

        [Authorize(Roles = "Admin,Staff")]
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPart(int id, Part part)
        {
            if (id != part.Id) return BadRequest();
            _context.Entry(part).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePart(int id)
        {
            var part = await _context.Parts.FindAsync(id);
            if (part == null) return NotFound();
            _context.Parts.Remove(part);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
