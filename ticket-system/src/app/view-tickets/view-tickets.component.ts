import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from '../../environments/environment';
import { Bug } from '../models/bug';
import { Enhancement } from '../models/enhancement';
import { Ticket } from '../models/ticket';
import { TicketItem } from '../models/ticket-item';
import { TicketList } from '../models/ticket-list';
import { TicketRequest } from '../models/ticket-request';

@Component({
  selector: 'app-view-tickets',
  templateUrl: './view-tickets.component.html',
  styleUrls: ['./view-tickets.component.scss']
})
export class ViewTicketsComponent implements OnInit {
  headers: HttpHeaders;
  ticketList: TicketList;
  viewTicketList: TicketItem[] = [];
  apiUrl: string;
  ticketTypes : string[] = ["Bug", "Enhancment"];
  ticketStates: string[] = ["Not yet started", "Working on", "Testing", "Done"];

  ticketTitle: string;
  ticketType: string;
  ticketDescription: string;
  ticketEffort: string;
  ticketProduct: string;
  ticketClientDescription: string;
  ticketState: string;
  ticketIsNew: boolean = true;
  ticketId: number;

  ticketRequest: TicketRequest;
  editTicketIsVissible: boolean = false;;
  viewTicketListIsVissible: boolean = true;

  constructor(private httpClient: HttpClient) 
  {
    
  }


  ngOnInit(): void {
      this.InitializeTicketItem();
    }

  IsBugType(type: string): boolean {
    return type === "Bug";
  }

  InitializeTicketItem() {
    this.ticketTitle = "";
    this.ticketType = "Bug";
    this.ticketDescription = "";
    this.ticketEffort = "";
    this.ticketProduct = "";
    this.ticketClientDescription = "";
    this.ticketState = "Not yet started";
    this.ticketIsNew = true;
  }

  NewTicket(){
    this.InitializeTicketItem();
    this.viewTicketListIsVissible = false;
    this.editTicketIsVissible = true;
    this.viewTicketList = [];
  }
  
    EditTicket(ticket: TicketRequest): void {
      let jsonString: string = JSON.stringify(ticket);
      let ticketReq = JSON.parse(jsonString);
      this.ticketTitle = ticketReq.title;
      this.ticketType = ticketReq.type;
      this.ticketDescription = ticketReq.description;
      this.ticketEffort = ticketReq.effort;
      this.ticketProduct = ticketReq.product;
      this.ticketClientDescription = ticketReq.clientDescription;
      this.ticketState = ticketReq.state;
      this.ticketIsNew = false;
      this.ticketId = Number(ticketReq.id);
      this.viewTicketListIsVissible = false;
      this.editTicketIsVissible = true;
      this.viewTicketList = [];
    }

    SaveTicket(): void {
        if (this.ticketType === "Bug")
        {
          let ticket: Bug = new Bug(this.httpClient);
          ticket.appSettings.BaseUrl = environment.apiBaseUrl;
          ticket.Title = this.ticketTitle;
          ticket.Type = this.ticketType;
          ticket.Description = this.ticketDescription;
          ticket.State = this.ticketState;
          ticket.Effort = this.ticketEffort; 
          ticket.Id = this.ticketId; 
          if (this.ticketIsNew) {
            let response = ticket.Save();
            response.then(val => 
              {
                  this.InitializeTicketItem();
                  this.GetAllTickets();
              },
              error => 
              {
                Promise.reject(error);
              });
          }
          else {
            let response = ticket.Update();
            response.then(val => 
              {
                  this.GetAllTickets();
              },
              error => 
              {
                Promise.reject(error);
              });
          }          
        }
        else
        {
          let ticket: Enhancement = new Enhancement(this.httpClient);
          ticket.appSettings.BaseUrl = environment.apiBaseUrl;
          ticket.Title = this.ticketTitle;
          ticket.Type = this.ticketType;
          ticket.Description = this.ticketDescription;
          ticket.Product = this.ticketProduct;
          ticket.ClientDescription = this.ticketClientDescription;
          ticket.State = this.ticketState;
          ticket.Effort = this.ticketEffort; 
          ticket.Id = this.ticketId;
          if (this.ticketIsNew) {
            let response = ticket.Save();
            response.then(val => 
              {
                  this.InitializeTicketItem();
                  this.GetAllTickets();
              },
              error => 
              {
                Promise.reject(error);
              });
          }
          else {
            let response = ticket.Update();
            response.then(val => 
              {
                  this.GetAllTickets();
              },
              error => 
              {
                Promise.reject(error);
              });
          } 
        }      
         
      this.viewTicketListIsVissible = true;
      this.editTicketIsVissible = false;
    }

  GetAllTickets() {
    let ticketRequest = new Ticket(this.httpClient);
    ticketRequest.appSettings.BaseUrl = environment.apiBaseUrl;
    let response: Promise<Ticket> = ticketRequest.GetAllTickets();
    response.then(value => {
      let jsonString: string = JSON.stringify(value);
      this.viewTicketList = new Array<TicketItem>();
      this.viewTicketList = JSON.parse(jsonString);
      console.log(this.viewTicketList);
    })

  }

  DeleteTicket(id: number): void {
    this.ticketRequest = new TicketRequest(this.httpClient);
    this.ticketRequest.appSettings.BaseUrl = environment.apiBaseUrl;
    let response = this.ticketRequest.DeleteTicket(id);
    response.then(val => 
      {
          this.GetAllTickets();
      },
      error => 
      {
        Promise.reject(error);
      });
  }
}

