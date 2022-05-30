import { Component, Input, OnInit } from '@angular/core';
import { Items } from 'src/app/interfaces/Items';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent implements OnInit {
  @Input() items: Items[] = [];
  openedItemIndex: number = 0;
  constructor() {}

  onClick(index: number) {
    if (index === this.openedItemIndex) {
      this.openedItemIndex = -1;
    } else {
      this.openedItemIndex = index;
    }
  }
  ngOnInit(): void {}
}
