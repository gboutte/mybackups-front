import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { BackupConfig } from 'src/app/Models/backup-config.model';
import { BackupConfigService } from 'src/app/Services/backup-config.service';
import { BackupConfigFormComponent } from './BackupConfigFormComponent/backup-config-form.component';

@Component({
  selector: 'mb-configuration-page',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent {
  backupConfigs: BackupConfig[] = [];

  public constructor(
    private titleService: Title,
    private backupConfigService: BackupConfigService,
    public dialog: MatDialog,
  ) {
    titleService.setTitle('Configuration');
    backupConfigService.getAll().subscribe((r) => { this.backupConfigs = r; });

    // backupConfigService.create(
    //   new BackupConfig(
    //     'Test',
    //     true,
    //     5,
    //     '50 23 * * *',
    //     'local',
    //     'local',
    //     { path: 'C:\\Users\\Greg\\Desktop\\backups_test\\origin\\test.txt' },
    //     { path: 'C:\\Users\\Greg\\Desktop\\backups_test\\dest' }
    //   )
    // ).subscribe((r) => console.log(r));
  }
  refreshBackupConfigs() {
    this.backupConfigService.getAll().subscribe((r) => { this.backupConfigs = r; });
  }


  openDialog() {
    const dialogRef = this.dialog.open(BackupConfigFormComponent, {
      minWidth: '90vw',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }
}
