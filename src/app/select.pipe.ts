import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'select'
})
export class SelectPipe implements PipeTransform {
    transform(value: any) {
        if (value.name !== 'Roll Shape') {
            return value;
        }
    }
    
}