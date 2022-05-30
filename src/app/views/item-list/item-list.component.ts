import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces/Item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
@Input() items:Item[] = [];
  constructor() { 
    console.log(this.items);
  }

  ngOnInit(): void {
  }  
}
