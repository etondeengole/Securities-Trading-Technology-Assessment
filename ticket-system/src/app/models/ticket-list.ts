import { TicketRequest } from "./ticket-request";

export class TicketList {
    
    Tickets: TicketRequest[];
    
    constructor(array: TicketRequest[] )
    {
        this.Tickets = array;
    }
}
