import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  sender: String = "";
  sum: number = 0;
  rand: number;
  NinjaGold: number[] = [];
  messages: String[] = [];


  constructor() { }

FarmGold(sender:String, min, max){
  console.log(this.sender, min, max)
  console.log("from dataService")
  this.rand = Math.floor(Math.random() *(max - min + 1) + min);
    // this includes the max and min for the random function


  this.NinjaGold.push(this.rand);
  console.log("random amount = ", this.rand)
  this.sum += this.rand;
  console.log("sum ", this.sum);
  this.displayMessage(sender, this.rand);
  return this.rand;

}

displayMessage(sender: String, gold:number){
  if(gold<0){
    this.messages.push("You loss " + gold +  " gold at the " + sender + "... Whomp whomp...")
  } else {
    this.messages.push("You earned " + gold + " gold at the " +  sender + "! You're rich!!") 
  }
}


}
