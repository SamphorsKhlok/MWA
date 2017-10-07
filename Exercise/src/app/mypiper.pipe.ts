import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypiper'
})
export class MypiperPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let result = [];
    //console.log(args);
    value.forEach(function (item) {
      if(args.indexOf(item.title)){
        //console.log(item);
        result.push(item);
      }
    });

    return result;
  }

}
