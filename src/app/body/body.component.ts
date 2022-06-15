import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  items: any = []

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.itemsService.allItems().subscribe((response)=>{
      this.items.push(...response)
      console.log(this.items)
    })
  }

}
