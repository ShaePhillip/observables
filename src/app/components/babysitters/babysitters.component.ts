import { Component, OnInit } from '@angular/core';
import { EventModel } from 'src/app/models/EventModel';
import { PersonModel } from 'src/app/models/PersonModel';
import { CoffeeService } from 'src/app/services/coffee.service';
import { HistoryService } from 'src/app/services/history.service';
import { SitterService } from 'src/app/services/sitter.service';

@Component({
  selector: 'app-babysitters',
  templateUrl: './babysitters.component.html',
  styleUrls: ['./babysitters.component.css']
})
export class BabysittersComponent implements OnInit{

constructor(private sitterService:SitterService, private historyService:HistoryService){
}

ngOnInit(): void {
this.sitterService.Sitters$().subscribe(val => {
  this.availableSitters = val.filter(s=>!s.hired) ;
}) ; 
  }

  availableSitters:PersonModel[] = [] ;

  hiredSitter : PersonModel | undefined ;

  newSitterName? : string;

  newSitterNumber? : string;

  hireClicked(sitter:PersonModel){
    this.hiredSitter = sitter 
    sitter.hired = true ;
    // this.sitterService.Sitters$.next(this.sitterService.Sitters$.value) ; 
    let event = new EventModel() ; 
    event.name = sitter.name + ' added' ; 
    event.origin = 'BabysittersComponent';
    this.historyService.addEvent(event) ; 
  }

  unhireClicked(){
    this.hiredSitter = undefined ;
  }

  blacklistClicked(sitter:PersonModel){ 
    sitter.blackListed = true ; 
    let event = new EventModel() ;
    event.name = sitter.name + ' blacklisted'
    event.origin = 'BabysittersComponent' ; 
    this.historyService.addEvent(event)
  }

  cancelClicked(sitter:PersonModel){
    sitter.blackListed=false ;
  }

  addClicked(){
    let newSitter = new PersonModel()  ; 
    newSitter.name = this.newSitterName ;
    newSitter.cell = this.newSitterNumber ; 
    this.availableSitters.push(newSitter) ; 
    this.newSitterName = undefined ;
    this.newSitterNumber = undefined ;
  }

  removeClicked(index:number){
    this.availableSitters.splice(index, 1) ; 
    
  }
}
