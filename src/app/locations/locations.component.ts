import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  constructor(private _dataService: DataService) { }

  location: number;

  ngOnInit() {
  }

    // GetGold is a function that is called in the locations.html
        // it then calls on the FarmGold function in the data.service.ts
              // data.service.ts is where all the logic should occur
  GetGold(sender:string, min, max){
    this.location = this._dataService.FarmGold(sender, min, max);
    console.log ("in GetGold, locations.component.ts", this.location);
  } // end of GetGold Function
    // this function establishes how much gold is earned/lossed (console.log)

}
