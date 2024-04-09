import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MessegeService } from 'src/app/service/messege.service';

@Component({
  selector: 'app-perent',
  templateUrl: './perent.component.html',
  styleUrls: ['./perent.component.css']
})
export class PerentComponent implements OnInit ,OnChanges{
  @Input() childEvent :string | undefined
  myArry = ['Angular 5','Angular 6','Angular 7']
  toogle: boolean = false
  test:any
  msg:String  ;
  
  constructor(private MessageService: MessegeService){
    console.log("peret  constructor");
    this.msg = MessageService.getMessages();
    alert(this.msg);
  }

  parentData = ' ';

  onChildEvent(eventData: string) {
    this.test = eventData;
  }

  onSendChild(){
    this.parentData = 'Called  Child  Component'
  }


  loadunload() {
    this.toogle = !this.toogle;
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(" perent ngOnChanges called");
    console.log(changes);
  }

  ngOnInit(): void {  
    console.log("Perent  NgOnInit Called "); 
  }
  addValue(): void {
    this.myArry.push('Angular 8')
  }
  

}
