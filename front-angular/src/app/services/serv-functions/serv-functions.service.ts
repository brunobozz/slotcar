import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServFunctionsService {

  // async await delay
  public delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
