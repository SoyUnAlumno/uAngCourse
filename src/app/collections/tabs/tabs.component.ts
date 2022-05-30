import { Component, OnInit } from '@angular/core';
import { Data } from './../../interfaces/Data'
import { Header } from './../../interfaces/Header'
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
 
  data:Data[] = [
    {
      name: 'James',
      age: 24,
      job: 'Designer',
    },
    {
      name: 'Jill',
      age: 26,
      job: 'Engineer',
    },
    {
      name: 'Elyse',
      age: 25,
      job: 'Engineerr',
    },
  ];

  headers: Header[] = [
    {
      key: 'name',
      label: 'Name',      
    },
    {
      key: 'age',
      label: 'Age',      
    },
    {
      key: 'job',
      label: 'Job',      
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
