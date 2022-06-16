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
    this.items =JSON.parse(localStorage.getItem('items') || '{}')
    this.simples =JSON.parse(localStorage.getItem('simples') || '{}')
    this.complexes = JSON.parse(localStorage.getItem('complexes') || '{}')
  }

  syncAll(){
    this.itemsService.allItems().subscribe((response)=>{
      let complexes = 0
      let simples = 0
      let items = [];
      items.push(...response)
      localStorage.setItem("items", JSON.stringify(items))
      for (let i = 0; i < this.items.length; i++) {
        if(this.items[i].category==="complex"){
          complexes++;
        }
      }
      simples= items.length - complexes;
      localStorage.setItem("simples", JSON.stringify(simples))
      localStorage.setItem("complexes", JSON.stringify(complexes))
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


// localStorage.setItem("items", JSON.stringify(this.items));
      // let one =JSON.parse(localStorage.getItem('items') || '{}')
      // console.log(one)