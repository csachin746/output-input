import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit , OnChanges   {

  @Input() childData: string | undefined;
  @Output() childEvent = new EventEmitter<string>();

  sendEvent(){
    this.childEvent.emit(" Called Perent Component"); 
  }

  ngOnInit(): void {
    console.log(this.childData);
    console.log('this Click');
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
