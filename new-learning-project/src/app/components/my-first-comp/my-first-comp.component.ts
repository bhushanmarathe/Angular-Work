// import { CommonModule } from '@angular/common';
// import { Component, inject } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { MessageDetailsComponent } from '../message-details/message-details.component';
// import { MyfirstserviceService } from '../../services/myfirstservice.service';

// @Component({
//   selector: 'app-my-first-comp',
//   standalone: true,
//   imports: [FormsModule, CommonModule, MessageDetailsComponent],
//   templateUrl: './my-first-comp.component.html',
//   styleUrl: './my-first-comp.component.scss',
// })
// export class MyFirstCompComponent {
//   name: string = '';
//   email: string = '';
//   message: string = '';
//   isSubmitted: boolean = false;
//   messages: Array<any> = [];

//   //private service: MyfirstserviceService = inject(MyfirstserviceService);
//   // Injecting the service using the inject function
//   // This is a new way of injecting services in Angular in the form of property injection
//   // instead of constructor injection. This is useful for standalone components

//   constructor(private service: MyfirstserviceService) {
//     this.messages = this.service.getAllMessages();
//     this.isSubmitted = this.messages.length > 0;
//     // Get all messages from the service
//     // The constructor is called when the component is created
//     // and the service is injected into the component
//     // to access the messages array and other methods
//   } // Constructor to initialize the messages array

//   // onSubmit() {
//   //   console.log('Name:', this.name);
//   //   console.log('Email:', this.email);
//   //   console.log('Message:', this.message);
//   //   this.isSubmitted = true;
//   //   this.messages.push({
//   //     name: this.name,
//   //     email: this.email,
//   //     message: this.message,
//   //   });
//   //   this.name = '';
//   //   this.email = '';
//   //   this.message = '';
//   // }

//   onSubmit() {
//     // Method to handle form submission
//     // when the submit button is clicked
//     this.isSubmitted = true;
//     this.service.insert({
//       name: this.name,
//       email: this.email,
//       message: this.message,
//     });
//     // Insert the message into the messages array
//     // using the service method
//     this.name = '';
//     this.email = '';
//     this.message = '';
//   }

//   onDelete(index: number) {
//     // Method to handle message deletion
//     // when the delete button is clicked
//     this.service.deleteMessage(index);
//     // Delete the message from the messages array
//     // using the service method
//   }
//   // deleteMessage(index: number) {
//   //   this.messages.splice(index, 1);
//   // }
// }

import { Component } from '@angular/core';
import { MyFirstService } from '../../services/myfirstservice.service';

@Component({
  selector: 'app-my-first-comp',
  templateUrl: './my-first-comp.component.html',
  styleUrls: ['./my-first-comp.component.scss'],
})
export class MyFirstCompComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  isSubmitted: boolean = false;
  messages: Array<any> = [];

  constructor(private service: MyFirstService) {
    this.messages = this.service.getAllMessages();
    this.isSubmitted = this.messages.length > 0;
  }

  onSubmit() {
    this.isSubmitted = true;
    this.service.insert({
      name: this.name,
      email: this.email,
      message: this.message,
    });
    console.log(this.messages);
  }

  deleteMessage(index: number) {
    this.service.deleteMessage(index);
  }
}
