import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit , OnChanges   {
  currentvalue: string |undefined;
  @Input() childData: string | undefined;
  @Input() arrylist:any;
  // @Output() childEvent = new EventEmitter<string>();

  // sendEvent(){
  //   this.childEvent.emit(" Called Perent Component"); 
  // }
  constructor(){
    console.log("child  Constructor Called");
  }

  ngOnInit(): void {

    console.log(' child this NgOnInit Called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(" child ngOnChanges called");
    console.log(changes);

  }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log('this child NGDoCheck');
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('This Call ngOnDestroy called');
  }
  ngAfterContentInit(){
    console.log("after content init");
  }
}
