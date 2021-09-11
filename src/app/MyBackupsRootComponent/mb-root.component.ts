import { Component } from '@angular/core';

@Component({
  selector: 'mb-root',
  templateUrl: './mb-root.component.html',
  styleUrls: ['./mb-root.component.scss']
})
export class MBRootComponent {
  public isExpanded = false;
  public marginLeft = 60;
  private isMobile = false;

  public constructor() {
    var matchMedia = window.matchMedia("(max-width: 700px)")
    this.isMobile = matchMedia['matches'];
  }

  public toggleMenu() {
    this.isExpanded = !this.isExpanded;
    this.calcMargin();
  }
  private calcMargin() {
    if (this.isMobile) {
      this.marginLeft = 60;
    } else {
      this.marginLeft = !this.isExpanded ? 60 : 250;
    }
  }
}
