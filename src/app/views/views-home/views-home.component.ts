import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces/Item';
import { Stats } from 'src/app/interfaces/Stats';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
items:Item[] = [
  {
    image: '/assets/images/trees.png',
    title: 'Trees',
    description: 'Should be another image but I only had a tree'
  },
  {
    image: '/assets/images/mountain.png',
    title: 'Mountain',
    description: 'Should be another image but I only had a tree'
  },
]

  stats: Stats[] = [
    {
      value: 22, 
      label: '# of Users'
    },
    {
      value: 900, 
      label: 'Revenue'
    },
    {
      value: 50, 
      label: 'Reviews'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
