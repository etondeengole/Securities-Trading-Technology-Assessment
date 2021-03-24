import { HttpClient } from "@angular/common/http";
import { Ticket } from "./ticket";

export class Bug extends Ticket {
    
    constructor(public httpClient: HttpClient)
    {
        super(httpClient);        
    }

    public Save(): Promise<Bug> {
        console.log(this);
        let response: Promise<Bug> = super.Put("/Ticket/create", this);
        return response;
    }

    Update(): Promise<Bug> {
        console.log(this);
        let response: Promise<Bug> = super.PostReturn("/Ticket/update", this);
        return response;
    }
      

    

    
}
