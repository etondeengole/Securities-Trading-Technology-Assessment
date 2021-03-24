import { HttpClient } from "@angular/common/http";
import { Ticket } from "./ticket";

export class Enhancement extends Ticket {
    ClientDescription: string;
    Product: string;

    constructor(public httpClient: HttpClient)
    {
        super(httpClient);        
    }

    public Save(): Promise<Enhancement> {
        console.log(this);
        let response: Promise<Enhancement> = super.Put("/Ticket/create", this);
        return response;
    }

    Update(): Promise<Enhancement> {
        console.log(this);
        let response: Promise<Enhancement> = super.PostReturn("/Ticket/update", this);
        return response;
    }
      

    GetAllTickets(): Promise<Enhancement> {
        let response: Promise<Enhancement> = super.PostReturn("/Ticket/findAll", this)
        return response;
    }
}
