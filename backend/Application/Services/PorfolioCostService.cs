using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Domain.Entities;
using Backend.Infrastructure;
using Microsoft.EntityFrameworkCore;

namespace Backend.Application.Services
{
    public class PorfolioCostService
    {
        private readonly SQLDBContext _dbContext;

        public PorfolioCostService(SQLDBContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task CreatePorfolioCostAsync(PorfolioCost cost)
        {
            await _dbContext.PorfolioCosts.AddAsync(cost);
            await _dbContext.SaveChangesAsync();
        }

        public async Task<List<PorfolioCost>> GetPorfolioCostsAsync(int porfolioItemId)
        {
            var porfolioCosts = await _dbContext.PorfolioCosts
                .Where(cost => cost.PorfolioItemId == porfolioItemId)
                .ToListAsync();
                
            if (porfolioCosts == null || !porfolioCosts.Any())
            {
                throw new InvalidOperationException($"No se encontraron PorfolioCosts asociados con el PorfolioItem ID {porfolioItemId}.");
            }

            return porfolioCosts;
        }
        
        public async Task DeletePorfolioCostAsync(int id)
        {
            var existingCost = await _dbContext.PorfolioCosts.FirstOrDefaultAsync(cost => cost.Id == id);
            if (existingCost == null)
            {
                throw new InvalidOperationException($"No se encontró un costo de item de portafolio con ID {id}.");
            }
            _dbContext.PorfolioCosts.Remove(existingCost);
            await _dbContext.SaveChangesAsync();
        }

        public async Task UpdatePorfolioCostAsync(int id, PorfolioCost updatedCost)
        {
            var existingCost = await _dbContext.PorfolioCosts.FirstOrDefaultAsync(cost => cost.Id == id);

            if (existingCost == null)
            {
                throw new InvalidOperationException($"No se encontró un costo de item de portafolio con ID {id}.");
            }

            existingCost.PorfolioItemId = updatedCost.PorfolioItemId;
            existingCost.Code = updatedCost.Code;
            existingCost.Title = updatedCost.Title;
            existingCost.Description = updatedCost.Description;
            existingCost.SubTotal = updatedCost.SubTotal;
            existingCost.Taxes = updatedCost.Taxes;
            existingCost.Total = updatedCost.Total;
            existingCost.Date = updatedCost.Date;

            await _dbContext.SaveChangesAsync();
        }
    }
}
