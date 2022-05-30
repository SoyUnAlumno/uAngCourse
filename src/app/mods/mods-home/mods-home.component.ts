import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})

export class ModsHomeComponent implements OnInit {
modalOpen = false;
items = [
  {
    title:'Some title',
    content: 'some content'
  },
  {
    title:'Second entry',
    content: 'more text'
  },
  {
    title:'Info',
    content: 'contact us at: @info'
  },
]
  constructor() { }
  onClick() {
    this.modalOpen = !this.modalOpen;
  }
  ngOnInit(): void {
  }

}
