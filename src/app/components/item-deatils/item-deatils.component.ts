import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-deatils',
  templateUrl: './item-deatils.component.html',
  styleUrls: ['./item-deatils.component.css']
})
export class ItemDeatilsComponent {
  @Input() item:string | undefined;
  @Input() date:any | undefined;
}
