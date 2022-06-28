import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time',
})
export class TimePipe implements PipeTransform {
  transform(milliseconds: any): string {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    seconds = seconds % 60;
    minutes = minutes % 60;
    hours = hours % 24;

    let timeString = '';
    let letter = ' s';

    timeString = String(milliseconds % 1000);

    if (seconds != 0) {
      timeString = seconds + '.' + timeString;
    } else {
      timeString = '0.' + timeString;
    }
    if (minutes != 0) {
      timeString = minutes + ':' + timeString;
      letter = ' m';
    }
    if (hours != 0) {
      timeString = hours + ':' + timeString;
      letter = ' h';
    }

    timeString = timeString + letter;

    return timeString;
  }
}
