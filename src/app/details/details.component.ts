import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Details } from './details';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  details: Details[] = [];
  todo: string;

  constructor(public api: ApiServiceService) { }

  ngOnInit(): void {

    this.show();
  }

  show(){
    this.api.Details().subscribe(data => {
      this.details = data;
    },
    err => {

    });
  }

  Add(){
    let d = new Details();

    d.TODO = this.todo;

    this.api.Add(d).subscribe(data => {
      this.show();
    });
  }

  Remove(d: Details){
  
    this.api.Remove(d).subscribe(data => {
      this.show();
    });
  }

}
