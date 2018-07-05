import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  // pure: false - Use to apply digest cycles on every change applies by filter
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filteredStatus: string, status: string): any {
    if (value.length == 0 || filteredStatus == "") { return value; }
    else {
      var resultArray = [];
      for (let todo of value) {
        if (todo["status"] == filteredStatus) {
          resultArray.push(todo);
        }
      }
      return resultArray;
    }
  }

}
