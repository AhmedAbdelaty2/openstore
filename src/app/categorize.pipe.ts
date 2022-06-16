import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categorize'
})
export class CategorizePipe implements PipeTransform {

  transform(items: any, sel?: any): any {
    if (!items) return null;
    if(!sel) return items;
    if(sel ==='all') return items;
    return !sel ? items : items.filter(function (sal: any) {
      console.log(sal.category)
      return sal.category === sel
    });
  }

}
