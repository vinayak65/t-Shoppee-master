import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'trim'
})
export class TrimStringPipe implements PipeTransform {

    transform(value: string, arg?: number){
        return value.slice(0,arg)+"...";
    }

}