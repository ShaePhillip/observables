import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EventModel } from '../models/EventModel';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor() { }

  eventHistory$ = new BehaviorSubject<EventModel[]>([{name:'Tester', origin: 'Service'}]) ; 
  
  addEvent(event:EventModel){
    let events = this.eventHistory$.value ; 
    events.push(event) ; 
    this.eventHistory$.next(events) ; 
  } 

}
