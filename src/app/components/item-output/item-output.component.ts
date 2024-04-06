import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item-output',
  templateUrl: './item-output.component.html',
  styleUrls: ['./item-output.component.css']
})
export class ItemOutputComponent {

  @Output()  newItemEvent = new EventEmitter<any>();

  addnewItem(value:string) {
    this.newItemEvent.emit(value);
  }
  
}
