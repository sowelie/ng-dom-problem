import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <div>
      <child-a (widthChange)="panelWidth = $event"></child-a>
      <child-b [marginLeft]="panelWidth"></child-b>
    </div>
  `
})
export class AppComponent {
  title = 'app works!';

  private panelWidth: number = 0;

  private onWidthChange(width: number): void {
    console.log(width);
  }
}
