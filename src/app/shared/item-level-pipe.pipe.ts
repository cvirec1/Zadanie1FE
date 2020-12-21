import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'itemLevelPipe'
})
export class ItemLevelPipePipe implements PipeTransform {

  transform(point: number): string {
    return point < 0.5 ? ' low' : 'high';
  }

}
