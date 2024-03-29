using Microsoft.AspNetCore.Mvc;
using Backend.Domain.Entities;
using Backend.Application.Services;
using System;
using System.Threading.Tasks;

namespace Backend.Application.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PorfolioCostController : ControllerBase
    {
        private readonly PorfolioCostService _porfolioCostService;

        public PorfolioCostController(PorfolioCostService porfolioCostService)
        {
            _porfolioCostService = porfolioCostService;
        }

        [HttpPost]
        public async Task<IActionResult> CreatePorfolioCost([FromBody] PorfolioCost item)
        {
            try
            {
                await _porfolioCostService.CreatePorfolioCostAsync(item);
                return Ok(new { message = "Costo de Item de portafolio creado correctamente." });
            }
            catch (Exception ex)
            {
                return BadRequest(new { error = $"Error al crear el costo de item de portafolio: {ex.Message}" });
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetPortolioCosts(int id)
        {
            try
            {
                var items = await _porfolioCostService.GetPorfolioCostsAsync(id);
                
                if (items == null || items.Count == 0)
                {
                    return Ok(new List<PorfolioCost>());
                }

                return Ok(items);
            }
            catch (Exception ex)
            {
                return BadRequest(new { error = $"Error al obtener los costos asociados al item de portafolio: {ex.Message}" });
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePorfolioCost(int id)
        {
            try
            {
                await _porfolioCostService.DeletePorfolioCostAsync(id);
                return Ok(new { message = $"Costo de Item de portafolio con ID {id} eliminado correctamente." });
            }
            catch (Exception ex)
            {
                return BadRequest(new { error = $"Error al eliminar el costo de item de portafolio: {ex.Message}" });
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdatePorfolioCost(int id, [FromBody] PorfolioCost updatedItem)
        {
            try
            {
                await _porfolioCostService.UpdatePorfolioCostAsync(id, updatedItem);
                return Ok(new { message = $"Costo de item de portafolio con ID {id} actualizado correctamente." });
            }
            catch (InvalidOperationException ex)
            {
                return NotFound(new { error = $"Error al actualizar el costo de item de portafolio: {ex.Message}" });
            }
            catch (Exception ex)
            {
                return BadRequest(new { error = $"Error al actualizar el costo de item de portafolio: {ex.Message}" });
            }
        }
    }
}
