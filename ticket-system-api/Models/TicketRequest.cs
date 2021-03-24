using System;

namespace ticket_system_api.Models
{
    public class TicketRequest
    {
        public int Id { get; set; }

        public string State { get; set; }

        public string Type { get; set; }

        public string Title { get; set; }

        public DateTime CreateDate { get; set; }

        public string Description { get; set; }

        public string Effort { get; set; }

        public string Product { get; set; }

        public string ClientDescription { get; set; }
    }
}