using System;
using System.Collections.Generic;

namespace Backend.Models
{
    public class Order
    {
        public int Id { get; set; }
        public string UserId { get; set; } = string.Empty;
        public ApplicationUser? User { get; set; }
        public decimal TotalAmount { get; set; }
        public DateTime OrderDate { get; set; } = DateTime.UtcNow;
        public List<OrderItem> OrderItems { get; set; } = new();
    }

    public class OrderItem
    {
        public int Id { get; set; }
        public int OrderId { get; set; }
        public Order? Order { get; set; }
        public int PartId { get; set; }
        public Part? Part { get; set; }
        public int Quantity { get; set; }
        public decimal UnitPrice { get; set; }
    }
}
