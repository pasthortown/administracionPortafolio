using System;

namespace Backend.Domain.Entities
{
    public class PorfolioCost
    {
        public int Id { get; set; }
        public int PorfolioItemId { get; set; }
        public string Code { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public decimal SubTotal { get; set; }
        public decimal Taxes { get; set; }
        public decimal Total { get; set; }
        public DateTime Date { get; set; }

        public PorfolioCost()
        {
            Code = string.Empty;
            Title = string.Empty;
            Description = string.Empty;
            PorfolioItemId = 0;
            SubTotal = 0;
            Taxes = 0;
            Total = 0;
            Date = DateTime.MinValue;
        }
    }
}
