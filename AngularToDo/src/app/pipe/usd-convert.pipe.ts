import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdConvert'
})
export class UsdConvertPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    let [price] = args
    return value*price;
  }

}
