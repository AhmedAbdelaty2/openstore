import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  items_url = "https://captello.firebaseio.com/products.json";

  constructor(private http: HttpClient) { }

  allItems(){
    return this.http.get<any>(this.items_url)
  }
}
