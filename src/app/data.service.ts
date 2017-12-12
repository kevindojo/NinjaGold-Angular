import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  //create these variables so you can use them in the functions below

  sender: String = "";
  sum: number = 0;
  rand: number;
  messages: String[] = [];


  constructor() { 

  }

//When this function is called by 'GetGold' button pressed.... Do the following:

  FarmGold(sender:String, min, max){
    //location calcuations
    this.rand = Math.floor(Math.random() *(max - min + 1) + min);
      // this includes the max and min values for the random function
    console.log(this.sender, min, max)
    console.log("from dataService")

    // gold count amount
    this.sum += this.rand;
    console.log("sum ", this.sum);

    this.displayMessage(sender, this.rand);
    return this.rand;

  }


  //display the activity
  displayMessage(sender: String, gold:number){
    if(gold<0){
      this.messages.push("You loss " + gold +  " gold at the " + sender + "... Whomp whomp...")
    } else {
      this.messages.push("You earned " + gold + " gold at the " +  sender + "! You're rich!!") 
    }

  }



} // end of export
