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
    public class HealthController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public HealthController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet("Telemetry/{vehicleId}")]
        public async Task<ActionResult<Backend.DTOs.TelemetryDataDto>> GetTelemetry(int vehicleId)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var role = User.FindFirstValue(ClaimTypes.Role);

            var vehicle = await _context.Vehicles.FindAsync(vehicleId);
            if (vehicle == null) return NotFound();
            if (role != "Admin" && role != "Staff" && vehicle.UserId != userId) return Forbid();

            var telemetry = await _context.TelemetryData
                .Where(t => t.VehicleId == vehicleId)
                .OrderByDescending(t => t.LastSync)
                .FirstOrDefaultAsync();

            if (telemetry == null)
            {
                return Ok(new Backend.DTOs.TelemetryDataDto { VehicleId = vehicleId, HealthScore = 94, Status = "CRITICAL: CYLINDER 4 THERMAL TOLERANCE EXCEEDED BY 0.04%", LastSync = DateTime.UtcNow });
            }

            var dto = new Backend.DTOs.TelemetryDataDto
            {
                Id = telemetry.Id,
                VehicleId = telemetry.VehicleId,
                HealthScore = telemetry.HealthScore,
                Status = telemetry.Status,
                LastSync = telemetry.LastSync
            };

            return Ok(dto);
        }

        [HttpPost("Telemetry")]
        [Authorize(Roles = "Admin,Staff")]
        public async Task<ActionResult<Backend.DTOs.TelemetryDataDto>> PostTelemetry(Backend.DTOs.TelemetryDataDto telemetryDto)
        {
            var telemetryData = new TelemetryData
            {
                VehicleId = telemetryDto.VehicleId,
                HealthScore = telemetryDto.HealthScore,
                Status = telemetryDto.Status,
                LastSync = DateTime.UtcNow
            };

            _context.TelemetryData.Add(telemetryData);
            await _context.SaveChangesAsync();

            telemetryDto.Id = telemetryData.Id;
            telemetryDto.LastSync = telemetryData.LastSync;

            return CreatedAtAction("GetTelemetry", new { vehicleId = telemetryData.VehicleId }, telemetryDto);
        }
    }
}
