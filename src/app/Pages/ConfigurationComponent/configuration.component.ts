import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BackupConfig } from 'src/app/Models/backup-config.model';
import { BackupConfigService } from 'src/app/Services/backup-config.service';

@Component({
  selector: 'mb-configuration-page',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent {
  public constructor(private titleService: Title) {
  backupConfigs:BackupConfig[] =[];

  public constructor(private titleService: Title, private backupConfigService: BackupConfigService) {
    titleService.setTitle('Configuration');
    backupConfigService.getAll().subscribe((r) => {this.backupConfigs = r;});
  }
  refreshBackupConfigs(){
    this.backupConfigService.getAll().subscribe((r) => {this.backupConfigs = r;});
  }
}
