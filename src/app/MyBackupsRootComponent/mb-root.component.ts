import { Component } from '@angular/core';

@Component({
  selector: 'mb-root',
  templateUrl: './mb-root.component.html',
  styleUrls: ['./mb-root.component.scss']
})
export class MBRootComponent {
  public isExpanded = false;

  public constructor() {
  }

  public toggleMenu() {
    this.isExpanded = !this.isExpanded;
  }
}
