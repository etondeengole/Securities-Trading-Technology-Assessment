using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using ticket_system_api.Interfaces;
using ticket_system_api.Models;

namespace ticket_system_api.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class TicketController : ControllerBase
    {
        private readonly Table<TicketRequest> _ticketHandler;

        public TicketController(Table<TicketRequest> ticketHandler)
        {
            _ticketHandler = ticketHandler;
        }

        [HttpPut("create")]
        public IActionResult Create([FromBody] TicketRequest ticket)
        {
            try
            {
                var response = _ticketHandler.Insert(ticket);
                if (response != 1)
                    throw new Exception("Failed to insert record");

                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("delete")]
        public IActionResult Delete([FromQuery] int Id)
        {
            try
            {
                var response = _ticketHandler.Delete(Id);
                if (!response)
                    throw new Exception("Failed to delete record");

                return Ok(response);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpPost("update")]
        public IActionResult Update([FromBody] TicketRequest ticket)
        {
            try
            {
                var response = _ticketHandler.Update(ticket);
                if (!response)
                    throw new Exception("Failed to delete record");

                return Ok(response);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpPost("find")]
        public IActionResult Find([FromBody] Object searchItem)
        {
            try
            {
                var data = System.Text.Json.JsonSerializer.Serialize(searchItem);

                var item = JsonConvert.DeserializeObject(data);

                var response = _ticketHandler.Find(item);

                return Ok(response);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [EnableCors("CorsPolicy")]
        [HttpPost("findAll")]
        public IActionResult FindAll([FromBody] object searchItem)
        {
            try
            {
                var response = _ticketHandler.FindAll(searchItem);

                return Ok(response);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}