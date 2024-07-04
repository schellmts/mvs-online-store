import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'pipeOpcional',
  standalone: true
})

export class CustomPipe implements PipeTransform {
  transform(value: string, ...args: any[]): string {
    return value + ' (opcional caso não tenha).';
  }
}
