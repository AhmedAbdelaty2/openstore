import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  items_url = "https://captello.firebaseio.com/products.json";
  item_url = "https://captello.firebaseio.com/products/";

  constructor(private http: HttpClient) { }

  getAllItems(){
    return this.http.get<any>(this.items_url)
  }

  getOneItem(id:string){
    return this.http.get<any>(this.item_url+id+'.json')
  }
}
