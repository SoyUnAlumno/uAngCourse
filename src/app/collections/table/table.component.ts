import { Component, OnInit, Input } from '@angular/core';
import { Data } from './../../interfaces/Data'
import { Header } from './../../interfaces/Header'
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  // Input aliasing
 @Input('class') classNames = '';
@Input() data: Data[] = [];//{name: string , age:number, job:string}[] = [];
@Input() headers: Header[] = [];//{key: string, label: string} [] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
