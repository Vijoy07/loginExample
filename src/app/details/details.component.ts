import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  details: string[] = [];

  constructor(public api: ApiServiceService) { }

  ngOnInit(): void {

    this.api.Details().subscribe(data => {
      this.details = data;
    },
    err => {

    });
  }

}
