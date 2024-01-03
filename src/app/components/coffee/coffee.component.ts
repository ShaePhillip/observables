import { Component, OnInit } from '@angular/core';
import { CoffeeModel } from 'src/app/models/CoffeeModel';
import { CoffeeService } from 'src/app/services/coffee.service';
import { HistoryService } from 'src/app/services/history.service';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit{
  coffees : CoffeeModel[] = [] ; 

constructor(private coffeeService:CoffeeService, private historyService:HistoryService){}
  ngOnInit(): void {
    this.coffeeService.Coffees$.subscribe(value => this.coffees = value) ; 
  }

 openModal(){

 }

 orderClicked(coffee:CoffeeModel){
  if(!coffee.quantity){
   coffee.quantity = 0;
  }
  
  coffee.quantity += 1 ; 
  this.historyService.addEvent({name:"Order Clicked:"+ coffee.name, origin: "Coffee Component" })
  
 }
}

