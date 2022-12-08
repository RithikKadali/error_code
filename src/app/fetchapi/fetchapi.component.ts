import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../services/apicall.service';

@Component({
  selector: 'app-fetchapi',
  templateUrl: './fetchapi.component.html',
  styleUrls: ['./fetchapi.component.css'] ,
})
export class FetchapiComponent implements OnInit {
  todosList:any;
  constructor(private appService : ApicallService) { }

  ngOnInit(): void {
   this.todosList= this.appService.getTodos();
  }

}
