import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-perent',
  templateUrl: './perent.component.html',
  styleUrls: ['./perent.component.css']
})
export class PerentComponent {
  parentData = ' ';
  @Input() childEvent :string | undefined
  test:any

  onChildEvent(eventData: string) {
    this.test = eventData;
  }

  onSendChild(){
    this.parentData = 'Called  Child  Component'
  }

}
