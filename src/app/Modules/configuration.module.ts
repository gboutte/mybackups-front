import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';
import { ConfigurationComponent } from '../Pages/ConfigurationComponent/configuration.component';
import { BackupTypeService } from '../Services/backup-type.service';
import { BackupConfigService } from '../Services/backup-config.service';
import { BackupConfigsTableComponent } from '../Pages/ConfigurationComponent/BackupConfigsTableComponent/backup-configs-table.component';
import { BackupConfigFormComponent } from '../Pages/ConfigurationComponent/BackupConfigFormComponent/backup-config-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BackupConfigTypeFormComponent } from '../Pages/ConfigurationComponent/BackupConfigFormComponent/BackupConfigTypeFormComponent/backup-config-type-form.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      countDuplicates: true,
      preventDuplicates: true
    }),
  ],
  declarations: [
    ConfigurationComponent,
    BackupConfigsTableComponent,
    BackupConfigFormComponent,
    BackupConfigTypeFormComponent
  ],
  exports: [],
  providers: [
    BackupTypeService,
    BackupConfigService,
  ],
  entryComponents: []
})
export class ConfigurationModule {
}
