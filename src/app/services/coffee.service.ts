import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CoffeeModel } from "../models/CoffeeModel";

@Injectable({
  providedIn: "root"
})
export class CoffeeService {

  constructor() { }
  Coffees$ = new BehaviorSubject<CoffeeModel[]>([
    {name: "Espresso", description: "A classic Italian coffee, a shot of espresso is a concentrated and bold coffee with a rich flavor and crema. It's the base for many other coffee drink." , price : 20},
    {name: "Cappuccino", description: "Cappuccino consists of one-third espresso, one-third steamed milk, and one-third milk foam. It's known for its creamy texture and a sprinkle of cocoa or cinnamon on top.", price: 28},
    {name: "Latte", description: "A latte is made with one shot of espresso and a generous amount of steamed milk, resulting in a smooth and milder coffee with a frothy surface.", price: 25},
    {name: "Americano", description: "Americano is a diluted espresso, made by adding hot water to a shot of espresso. It offers a coffee flavor similar to drip coffee but with the intensity of espresso.", price: 22},
    {name: "Mocha", description: "A mocha combines espresso, steamed milk, and chocolate, creating a delightful blend of coffee and cocoa. It's often garnished with whipped cream.", price: 32},
    {name: "Macchiato", description: "An espresso macchiato is a shot of espresso 'stained' or 'marked' with a small amount of frothy milk, resulting in a bolder coffee flavor.", price: 18}, 
    {name: "Flat White", description: "Originally from Australia/New Zealand, a flat white is made with espresso and creamy, velvety microfoam milk. It's known for its balance and smoothness.", price: 30},
    {name: "Turkish Coffee", description: "Turkish coffee is a unique and strong coffee preparation where very finely ground coffee is simmered in water with sugar and sometimes cardamom. It's traditionally served unfiltered.", price: 25}
  ])
}
