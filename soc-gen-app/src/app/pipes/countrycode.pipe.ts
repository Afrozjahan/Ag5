import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countrycode'
})
export class CountrycodePipe implements PipeTransform {

  transform(value: any, arg: any = '91'): any {
    return "+" + arg + value;
  }
}
