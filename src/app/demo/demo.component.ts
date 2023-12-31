import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  displayText: string = "Marvellous Infosystems";

  handleClick(): void {
    this.displayText = "Educating for Better tomorrow";
  }
}
