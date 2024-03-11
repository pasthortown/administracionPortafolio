using Microsoft.AspNetCore.Mvc;
using Backend.Domain.Entities;
using Backend.Application.Services;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Backend.Application.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PorfolioItemController : ControllerBase
    {
        private readonly PorfolioItemService _porfolioItemService;

        public PorfolioItemController(PorfolioItemService porfolioItemService)
        {
            _porfolioItemService = porfolioItemService;
        }

        [HttpPost]
        public async Task<IActionResult> CreatePorfolioItem([FromBody] PorfolioItem item)
        {
            try
            {
                await _porfolioItemService.CreatePorfolioItemAsync(item);
                return Ok(new { message = "Item de portafolio creado correctamente." });
            }
            catch (Exception ex)
            {
                return BadRequest(new { error = $"Error al crear el item de portafolio: {ex.Message}" });
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetPorfolioItems()
        {
            try
            {
                var items = await _porfolioItemService.GetPorfolioItemsAsync();
                return Ok(items);
            }
            catch (Exception ex)
            {
                return BadRequest(new { error = $"Error al obtener los items de portafolio: {ex.Message}" });
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePorfolioItem(int id)
        {
            try
            {
                await _porfolioItemService.DeletePorfolioItemAsync(id);
                return Ok(new { message = $"Item de portafolio con ID {id} eliminado correctamente." });
            }
            catch (Exception ex)
            {
                return BadRequest(new { error = $"Error al eliminar el item de portafolio: {ex.Message}" });
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdatePorfolioItem(int id, [FromBody] PorfolioItem updatedItem)
        {
            try
            {
                await _porfolioItemService.UpdatePorfolioItemAsync(id, updatedItem);
                return Ok(new { message = $"Item de portafolio con ID {id} actualizado correctamente." });
            }
            catch (InvalidOperationException ex)
            {
                return NotFound(new { error = $"Error al actualizar el item de portafolio: {ex.Message}" });
            }
            catch (Exception ex)
            {
                return BadRequest(new { error = $"Error al actualizar el item de portafolio: {ex.Message}" });
            }
        }
    }
}
