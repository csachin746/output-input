import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentItem = 'Sachin j Chauhan   (Paas To Perent To child)'
  currentDate = new Date();
  items = ['item1', 'item2', 'item3', 'item4'];

  addnewItem(newItem:any) {
    this.items.push(newItem);
  }
}
