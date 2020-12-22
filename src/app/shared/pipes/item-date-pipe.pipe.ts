import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'itemDatePipe'
})
export class ItemDatePipePipe implements PipeTransform {

  transform(value: Date): string {
    const datePipe = new DatePipe('en-EN');
    const customDate = datePipe.transform(value, 'dd-MM-yyyy');
    return customDate;
  }

}
