import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { BaseService } from "./base-service";
import { IAppConfig } from "./iapp-config";

export class TicketRequest extends BaseService {
    Id: number;
    State: string;
    Title: string;
    Type: string;
    CreateDate: string;
    Description: string;
    Effort: string;
    Product: string;
    ClientDescription: string;
    IsNew: boolean;

    constructor(public httpClient: HttpClient)
    {
        super(httpClient);        
    }


    public Save(): Promise<TicketRequest> {
        console.log(this);
        let response: Promise<TicketRequest> = super.Put("/Ticket/create", this);
        return response;
    }

    Update(): Promise<TicketRequest> {
        console.log(this);
        let response: Promise<TicketRequest> = super.PostReturn("/Ticket/update", this);
        return response;
    }
      

    GetAllTickets(): Promise<TicketRequest> {
        let response: Promise<TicketRequest> = super.PostReturn("/Ticket/findAll", this)
        return response;
    }

    DeleteTicket(id: number) {
        let response: Promise<TicketRequest> = super.Delete("/Ticket/delete", id)
        return response;
      }    
}
