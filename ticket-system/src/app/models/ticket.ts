import { HttpClient } from "@angular/common/http";
import { BaseService } from "./base-service";

export class Ticket extends BaseService {
    Id: number;
    State: string;
    Title: string;
    Type: string;
    CreateDate: string;
    Description: string;
    Effort: string;
    IsNew: boolean;
    

    constructor(public httpClient: HttpClient)
    {
        super(httpClient);        
    }
    
    DeleteTicket(id: number) {
        let response: Promise<Ticket> = super.Delete("/Ticket/delete", id)
        return response;
    }
    
    GetAllTickets(): Promise<Ticket> {
        let response: Promise<Ticket> = super.PostReturn("/Ticket/findAll", this)
        return response;
    }
}
