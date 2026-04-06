using System;

namespace Backend.Models
{
    public class TelemetryData
    {
        public int Id { get; set; }
        public int VehicleId { get; set; }
        public Vehicle? Vehicle { get; set; }
        public int HealthScore { get; set; }
        public string Status { get; set; } = string.Empty;
        public DateTime LastSync { get; set; } = DateTime.UtcNow;
    }
}
