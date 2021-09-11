import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mb-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() isExpanded?: boolean;
  @Output() toggleMenu = new EventEmitter();

  public routeLinks = [
    { link: 'dashboard', name: 'Dashboard', icon: 'dashboard' },
    { link: 'configuration', name: 'Configuration', icon: 'settings' },
  ];
}
