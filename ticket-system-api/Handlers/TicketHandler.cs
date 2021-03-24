using System.Collections.Generic;
using ticket_system_api.Interfaces;
using ticket_system_api.Models;

namespace ticket_system_api.Handlers
{
    public class TicketHandler : Table<TicketRequest>
    {
        private readonly IDatabaseHandler _databaseHandler;

        public TicketHandler(IDatabaseHandler repository) : base(repository)
        {
            _databaseHandler = repository;
        }

        public new int Insert(TicketRequest insert_item)
        {
            return _databaseHandler.Insert(insert_item);
        }

        public new bool Delete(int id)
        {
            return _databaseHandler.Delete<TicketRequest>(id);
        }

        public new bool Update(TicketRequest ticket)
        {
            return _databaseHandler.Update(ticket);
        }

        public new TicketRequest Find(object searchCriteria)
        {
            return _databaseHandler.Find<TicketRequest>(searchCriteria);
        }

        public new ICollection<TicketRequest> FindAll(object searchCriteria)
        {
            return _databaseHandler.FindAll<TicketRequest>(searchCriteria);
        }

       
    }
}