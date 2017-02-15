import { Component, Input } from '@angular/core';

@Component({
    selector: 'child-b',
    template: `
    <div [style.margin-left.px]="marginLeft" class="child-b">
        This is another panel
    </div>
    `
})
export class ChildB {
  @Input() private marginLeft: number = 0;
}
