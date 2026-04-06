using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ServiceController : ControllerBase
    {
        [HttpPost("book")]
        public IActionResult BookService([FromBody] ServiceRequest request)
        {
            return Ok(new { message = "Service booked successfully", data = request });
        }

        [HttpPost("request-part")]
        public IActionResult RequestPart([FromBody] PartRequest request)
        {
            return Ok(new { message = "Part request received", data = request });
        }
    }

    public class ServiceRequest { public string ServiceType { get; set; } = string.Empty; public string TechnicianLevel { get; set; } = string.Empty; public string Date { get; set; } = string.Empty; }
    public class PartRequest { public string PartName { get; set; } = string.Empty; public string Sku { get; set; } = string.Empty; public string Urgency { get; set; } = string.Empty; public string Description { get; set; } = string.Empty; }
}
