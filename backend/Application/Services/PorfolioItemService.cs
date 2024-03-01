using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Domain.Entities;
using Backend.Infrastructure;
using Microsoft.EntityFrameworkCore;

namespace Backend.Application.Services
{
    public class PorfolioItemService
    {
        private readonly SQLDBContext _dbContext;

        public PorfolioItemService(SQLDBContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task CreatePorfolioItemAsync(PorfolioItem item)
        {
            await _dbContext.PorfolioItems.AddAsync(item);
            await _dbContext.SaveChangesAsync();
        }

        public async Task<List<PorfolioItem>> GetPorfolioItemsAsync()
        {
            return await _dbContext.PorfolioItems.ToListAsync();
        }

        public async Task DeletePorfolioItemAsync(int id)
        {
            var existingItem = await _dbContext.PorfolioItems.FirstOrDefaultAsync(item => item.Id == id);
            if (existingItem == null)
            {
                throw new InvalidOperationException($"No se encontró un item de portafolio con ID {id}.");
            }
            _dbContext.PorfolioItems.Remove(existingItem);
            await _dbContext.SaveChangesAsync();
        }

        public async Task UpdatePorfolioItemAsync(int id, PorfolioItem updatedItem)
        {
            var existingItem = await _dbContext.PorfolioItems.FirstOrDefaultAsync(item => item.Id == id);

            if (existingItem == null)
            {
                throw new InvalidOperationException($"No se encontró un item de portafolio con ID {id}.");
            }

            existingItem.Year = updatedItem.Year;
            existingItem.AgileGroup = updatedItem.AgileGroup;
            existingItem.Title = updatedItem.Title;
            existingItem.Description = updatedItem.Description;
            existingItem.Priority = updatedItem.Priority;
            existingItem.SapProject = updatedItem.SapProject;
            existingItem.Front = updatedItem.Front;
            existingItem.Country = updatedItem.Country;
            existingItem.Contact = updatedItem.Contact;
            existingItem.Area = updatedItem.Area;
            existingItem.Approval = updatedItem.Approval;
            existingItem.Progress = updatedItem.Progress;
            existingItem.CustomerPriority = updatedItem.CustomerPriority;
            existingItem.PoPriority = updatedItem.PoPriority;
            existingItem.Dependency = updatedItem.Dependency;
            existingItem.Complexity = updatedItem.Complexity;
            existingItem.CountryFactor = updatedItem.CountryFactor;
            existingItem.Weeks = updatedItem.Weeks;
            existingItem.People = updatedItem.People;
            existingItem.LaborCostPerWeek = updatedItem.LaborCostPerWeek;
            existingItem.OtherCosts = updatedItem.OtherCosts;
            existingItem.Total = updatedItem.Total;
            existingItem.RecurrentCosts = updatedItem.RecurrentCosts;
            existingItem.Roi = updatedItem.Roi;
            existingItem.DevelopmentStart = updatedItem.DevelopmentStart;
            existingItem.DevelopmentEnd = updatedItem.DevelopmentEnd;
            existingItem.PilotStart = updatedItem.PilotStart;
            existingItem.PilotEnd = updatedItem.PilotEnd;
            existingItem.DeploymentStart = updatedItem.DeploymentStart;
            existingItem.DeploymentEnd = updatedItem.DeploymentEnd;
            existingItem.Notes = updatedItem.Notes;
            existingItem.Roi2 = updatedItem.Roi2;
            existingItem.Roi3 = updatedItem.Roi3;

            await _dbContext.SaveChangesAsync();
        }
    }
}
