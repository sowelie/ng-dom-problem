import { Component, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'child-a',
    template: `
    <div class="child-a">
        <button (click)="toggle()">Toggle</button>
        <div #panel [hidden]="!panelOpen" class="panel">
            This is a panel
        </div>
    </div>
    `
})
export class ChildA {
    private panelOpen: boolean = false;
    @ViewChild('panel') private panel: ElementRef;
    @Output() public widthChange: EventEmitter<number> = new EventEmitter()

    toggle(): void {
        this.panelOpen = !this.panelOpen;
    }

    ngAfterViewChecked(): void {
      this.widthChange.emit(this.panel ? this.panel.nativeElement.getBoundingClientRect().width : 0);
    }
}
