using System;

namespace Backend.DTOs
{
    public class TelemetryDataDto
    {
        public int Id { get; set; }
        public int VehicleId { get; set; }
        public int HealthScore { get; set; }
        public string Status { get; set; } = string.Empty;
        public DateTime LastSync { get; set; }
    }
}
