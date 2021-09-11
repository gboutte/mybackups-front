import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'mb-dashboard-page',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public constructor(private titleService: Title) {
    titleService.setTitle('Dashboard');
  }
}
