using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Backend.Domain.Entities;

namespace Backend.Infrastructure
{
    public class SQLDBContext : DbContext
    {
        private readonly IConfiguration _configuration;

        public SQLDBContext(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public DbSet<PorfolioItem> PorfolioItems { get; set; }

        public DbSet<PorfolioCost> PorfolioCosts { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionString = _configuration.GetSection("ConnectionStrings:DBContext").Value;
            optionsBuilder.UseSqlServer(connectionString);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<PorfolioItem>().HasKey(m => new { m.Id} );
            modelBuilder.Entity<PorfolioCost>().HasKey(m => new { m.Id} );
            
            modelBuilder.Entity<PorfolioItem>().Property(v => v.Total).HasColumnType("decimal(18,2)");
            modelBuilder.Entity<PorfolioItem>().Property(v => v.LaborCostPerWeek).HasColumnType("decimal(18,2)");
            modelBuilder.Entity<PorfolioItem>().Property(v => v.OtherCosts).HasColumnType("decimal(18,2)");
            modelBuilder.Entity<PorfolioItem>().Property(v => v.RecurrentCosts).HasColumnType("decimal(18,2)");
            modelBuilder.Entity<PorfolioItem>().Property(v => v.Roi).HasColumnType("decimal(18,2)");
            modelBuilder.Entity<PorfolioItem>().Property(v => v.Roi2).HasColumnType("decimal(18,2)");
            modelBuilder.Entity<PorfolioItem>().Property(v => v.Roi3).HasColumnType("decimal(18,2)");   
            
            modelBuilder.Entity<PorfolioCost>().Property(v => v.SubTotal).HasColumnType("decimal(18,2)");
            modelBuilder.Entity<PorfolioCost>().Property(v => v.Taxes).HasColumnType("decimal(18,2)");
            modelBuilder.Entity<PorfolioCost>().Property(v => v.Total).HasColumnType("decimal(18,2)");
            
            base.OnModelCreating(modelBuilder);
        }
    }
}
