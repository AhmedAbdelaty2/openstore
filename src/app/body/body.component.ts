import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  items: any = [];
  categories = ['all', 'simple', 'complex'];
  query:string = "";
  simples = 0;
  complexes = 0;

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.itemsService.allItems().subscribe((response)=>{
      this.items.push(...response)
      for (let i = 0; i < this.items.length; i++) {
        if(this.items[i].category==="complex"){
          this.complexes++;
        }
      }
      this.simples= this.items.length - this.complexes;
    })    
  }

  changeCategory(category:string){
    this.query = category;
    document.getElementById(category.toString())?.classList.add('active')
    for (let i = 0; i <= this.categories.length ; i++) {
      if(this.categories[i] !== category){
        document.getElementById(this.categories[i])?.classList.remove('active')
      }
    }
  }
}
