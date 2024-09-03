import { Component, Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'profit', standalone: true })
export class ProfitPipe implements PipeTransform {
  transform(value: number, profitPercentage = 10): string {
    return (value * profitPercentage * 0.01).toFixed(2);
  }
  standlone: true | undefined;
}
