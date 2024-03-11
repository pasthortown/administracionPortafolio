using System;

namespace Backend.Domain.Entities
{
    public class PorfolioItem
    {
        public int Id { get; set; }
        public int Year { get; set; }
        public string AgileGroup { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Priority { get; set; }
        public string SapProject { get; set; }
        public string Front { get; set; }
        public string Country { get; set; }
        public string Contact { get; set; }
        public string Area { get; set; }
        public string Approval { get; set; }
        public string Progress { get; set; }
        public string CustomerPriority { get; set; }
        public string PoPriority { get; set; }
        public string Dependency { get; set; }
        public string Complexity { get; set; }
        public decimal CountryFactor { get; set; }
        public int Weeks { get; set; }
        public int People { get; set; }
        public decimal LaborCostPerWeek { get; set; }
        public decimal OtherCosts { get; set; }
        public decimal Total { get; set; }
        public decimal RecurrentCosts { get; set; }
        public decimal Roi { get; set; }
        public DateTime DevelopmentStart { get; set; }
        public DateTime DevelopmentEnd { get; set; }
        public DateTime PilotStart { get; set; }
        public DateTime PilotEnd { get; set; }
        public DateTime DeploymentStart { get; set; }
        public DateTime DeploymentEnd { get; set; }
        public string Notes { get; set; }
        public decimal Roi2 { get; set; }
        public decimal Roi3 { get; set; }

        public PorfolioItem()
        {
            Description = string.Empty;
            AgileGroup = string.Empty;
            Title = string.Empty;
            Priority = string.Empty;
            SapProject = string.Empty;
            Front = string.Empty;
            Country = string.Empty;
            Contact = string.Empty;
            Area = string.Empty;
            Approval = string.Empty;
            Dependency = string.Empty;
            Notes = string.Empty;
            Year = 0;
            CustomerPriority = string.Empty;
            PoPriority = string.Empty;
            Progress = string.Empty;
            Complexity = string.Empty;
            CountryFactor = 0;
            Weeks = 0;
            People = 0;
            LaborCostPerWeek = 0;
            OtherCosts = 0;
            Total = 0;
            RecurrentCosts = 0;
            Roi = 0;
            Roi2 = 0;
            Roi3 = 0;
            DevelopmentStart = DateTime.MinValue;
            DevelopmentEnd = DateTime.MinValue;
            PilotStart = DateTime.MinValue;
            PilotEnd = DateTime.MinValue;
            DeploymentStart = DateTime.MinValue;
            DeploymentEnd = DateTime.MinValue;
        }
    }
}
