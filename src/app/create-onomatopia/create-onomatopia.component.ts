import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.scss']
})
export class CreateOnomatopiaComponent {

  newOnomatopia: string = "";

  @Output()
  sendOnomatopiaToParent: EventEmitter<string> = new EventEmitter();

  constructor() { }

  createOnomatopia(): void {
    console.log("Here is the new Onomatopée " + this.newOnomatopia);
    this.sendOnomatopiaToParent.emit(this.newOnomatopia);
  }



}
