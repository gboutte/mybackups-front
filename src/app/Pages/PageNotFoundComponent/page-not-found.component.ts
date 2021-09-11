import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'mb-dashboard-page',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {
  public constructor(private titleService: Title) {
    this.titleService.setTitle("Page Not Found")
  }
}