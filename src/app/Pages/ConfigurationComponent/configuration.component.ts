import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'mb-configuration-page',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent {
  public constructor(private titleService: Title) {
    this.titleService.setTitle("Configuration")
  }
}