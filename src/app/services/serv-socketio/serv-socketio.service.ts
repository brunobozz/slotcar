import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class ServSocketioService {
  SOCKET_URL = 'http://localhost:3000/';

  socket = io(this.SOCKET_URL);

  listen() {
    return new Observable((observer) => {
      this.socket.on('lap', (message) => {
        observer.next(message);
      });
    });
  }
}
