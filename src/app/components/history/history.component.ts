import { Component, OnInit } from '@angular/core';
import { EventModel } from 'src/app/models/EventModel';
import { HistoryService } from 'src/app/services/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit{

  constructor (private historyService : HistoryService) {
  }
  ngOnInit(): void {
  this.historyService.eventHistory$.subscribe(events => this.eventHistory = events) ; 
  }
  eventHistory : EventModel[] = [] ; 

}
