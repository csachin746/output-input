import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessegeService {

  constructor() { }

  getMessages(): String {
    return "Sachin  Chuahan";
  }
}
