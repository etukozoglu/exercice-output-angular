import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-onomatopia',
  templateUrl: './parent-onomatopia.component.html',
  styleUrls: ['./parent-onomatopia.component.scss']
})
export class ParentOnomatopiaComponent {

  onomatopoeiaList: Array<string> = []

  onReceiveNewOnomatopia(event: any): void {
    this.onomatopoeiaList.push(event);
  }

}
