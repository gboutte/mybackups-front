import { NgModule } from '@angular/core';
import { BackupsConfigsTableComponent } from '../Pages/ConfigurationComponent/BackupsConfigsTableComponent/backups-configs-table.component';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';
import { ConfigurationComponent } from '../Pages/ConfigurationComponent/configuration.component';
import { BackupTypeService } from '../Services/backup-type.service';

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
  ],
  declarations: [
    ConfigurationComponent,
    BackupsConfigsTableComponent,
  ],
  exports: [],
  providers: [
    BackupTypeService
  ],
  entryComponents: []
})
export class ConfigurationModule {
}
