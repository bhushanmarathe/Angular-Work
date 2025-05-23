// import { Component, EventEmitter, Input, Output } from '@angular/core';

// @Component({
//   selector: 'app-message-details',
//   standalone: true,
//   imports: [],
//   templateUrl: './message-details.component.html',
//   styleUrl: './message-details.component.scss',
// })
// export class MessageDetailsComponent {
//   @Input() // Input property to receive the message object from the parent component
//   // which contains the name, email, and message details
//   message: any = {};

//   @Input()
//   index: number = -1;

//   @Output() // EventEmitter to emit the index of the message to be deleted
//   // when the delete button is clicked and sent to the parent component
//   // to remove the message from the messages array
//   deleteChild: EventEmitter<any> = new EventEmitter();

//   onDelete() {
//     // Method to emit the index of the message to be deleted
//     // when the delete button is clicked
//     this.deleteChild.emit(this.index);
//   }
// }

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.component.html',
  styleUrls: ['./message-details.component.scss'],
})
export class MessageDetailsComponent {
  @Input()
  message: any = {};
  @Input()
  index: number = -1;

  @Output()
  delete: EventEmitter<number> = new EventEmitter<number>();

  onDelete() {
    this.delete.emit(this.index);
  }
}
