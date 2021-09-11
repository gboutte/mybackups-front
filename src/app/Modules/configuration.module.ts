import { NgModule } from "@angular/core";
import { BackupsConfigsTableComponent } from "../Pages/ConfigurationComponent/BackupsConfigsTableComponent/backups-configs-table.component";
import { MaterialModule } from "./material.module";
import { CommonModule } from '@angular/common';
import { ConfigurationComponent } from "../Pages/ConfigurationComponent/configuration.component";

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
  ],
  declarations: [
    ConfigurationComponent,
    BackupsConfigsTableComponent,
  ],
  exports: [
    
  ],
  providers: [
    
  ],
  entryComponents: []
})
export class ConfigurationModule {
}
