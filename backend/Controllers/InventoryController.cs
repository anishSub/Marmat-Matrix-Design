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
        public async Task<ActionResult<IEnumerable<Backend.DTOs.PartDto>>> GetParts()
        {
            var parts = await _context.Parts.ToListAsync();
            var dtos = parts.Select(p => new Backend.DTOs.PartDto
            {
                Id = p.Id,
                SKU = p.SKU,
                Name = p.Name,
                Description = p.Description,
                Price = p.Price,
                StockQuantity = p.StockQuantity,
                Category = p.Category,
                ImageUrl = p.ImageUrl
            }).ToList();
            return Ok(dtos);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Backend.DTOs.PartDto>> GetPart(int id)
        {
            var part = await _context.Parts.FindAsync(id);
            if (part == null) return NotFound();
            var dto = new Backend.DTOs.PartDto
            {
                Id = part.Id,
                SKU = part.SKU,
                Name = part.Name,
                Description = part.Description,
                Price = part.Price,
                StockQuantity = part.StockQuantity,
                Category = part.Category,
                ImageUrl = part.ImageUrl
            };
            return Ok(dto);
        }

        [Authorize(Roles = "Admin,Staff")]
        [HttpPost]
        public async Task<ActionResult<Backend.DTOs.PartDto>> PostPart(Backend.DTOs.PartDto partDto)
        {
            var part = new Part
            {
                SKU = partDto.SKU,
                Name = partDto.Name,
                Description = partDto.Description,
                Price = partDto.Price,
                StockQuantity = partDto.StockQuantity,
                Category = partDto.Category,
                ImageUrl = partDto.ImageUrl
            };
            _context.Parts.Add(part);
            await _context.SaveChangesAsync();
            partDto.Id = part.Id;
            return CreatedAtAction(nameof(GetPart), new { id = part.Id }, partDto);
        }

        [Authorize(Roles = "Admin,Staff")]
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPart(int id, Backend.DTOs.PartDto partDto)
        {
            if (id != partDto.Id) return BadRequest();
            var part = await _context.Parts.FindAsync(id);
            if (part == null) return NotFound();

            part.SKU = partDto.SKU;
            part.Name = partDto.Name;
            part.Description = partDto.Description;
            part.Price = partDto.Price;
            part.StockQuantity = partDto.StockQuantity;
            part.Category = partDto.Category;
            part.ImageUrl = partDto.ImageUrl;

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
