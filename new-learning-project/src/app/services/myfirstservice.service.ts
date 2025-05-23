// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root', // This service is provided in the root injector
//   // so it can be injected anywhere in the application. making it a singleton
//   // ensuring that only one instance of the service is created and shared across the
//   // application.
//   // If you want to provide it in a specific module, you can remove this line
//   // if declared as 'any', it will be provided in the module injector
//   // and a new instance will be created for each module that imports it.
//   // providedIn: 'any', // This service is provided in the module injector
//   // so it can be injected only in the module that imports it.
//   //if declared as 'null', it will not be provided in any injector
//   // providedIn: null, // This service is not provided in any injector
//   // so it cannot be injected anywhere in the application.
// })
// export class MyfirstserviceService {
//   messages: Array<any> = []; // Array to store messages
//   constructor() {
//     this.init();
//   } // Constructor to initialize the messages array
//   // The constructor is called when the service is created

//   init(): void {
//     // Method to initialize the messages array with some default messages
//     this.messages = [
//       {
//         email: 'bhushanmarathe12@gmail.com',
//         name: 'Bhushan Marathe',
//         message: 'Hello, this is a test message!',
//       },
//       {
//         email: 'marathebhushan2821@gmail.com',
//         name: 'Vilas Marathe',

//         message: 'Hello, this is a test message!',
//       },
//       {
//         email: 'marathebhushan8080@gmail.com',
//         name: 'Suchita Marathe',
//         message: 'Hello, this is a test message!',
//       },
//     ];
//   }

//   insert(message: { email: string; name: string; message: string }) {
//     // Method to insert a message into the messages array
//     this.messages.push(message);
//   }
//   getAllMessages() {
//     // Method to get all messages from the messages array
//     return this.messages;
//   }

//   deleteMessage(index: number) {
//     // Method to delete a message from the messages array
//     this.messages.splice(index, 1);
//   }
// }

import { Injectable } from '@angular/core';

@Injectable()
export class MyFirstService {
  messages: Array<any> = [];

  constructor() {
    this.init();
  }

  init(): void {
    this.insert({
      name: 'bhushan',
      email: 'bhushan@mail.com',
      message: 'Hello world',
    });
    this.insert({
      name: 'vilas',
      email: 'vilas@mail.com',
      message: 'Hello world - John',
    });
    this.insert({
      name: 'marathe',
      email: 'marathe@mail.com',
      message: 'Hello world - Doe',
    });
  }

  insert(message: { name: string; email: string; message: string }): void {
    this.messages.push(message);
  }

  getAllMessages() {
    return this.messages;
  }

  deleteMessage(index: number): void {
    this.messages.splice(index, 1);
  }
}
