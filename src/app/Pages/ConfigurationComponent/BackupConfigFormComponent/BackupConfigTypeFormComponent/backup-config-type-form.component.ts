import { Component, Input } from '@angular/core';
import { BackupType } from 'src/app/Models/backup-type.model';
@Component({
  selector: 'mb-backup-config-type-form',
  templateUrl: 'backup-config-type-form.component.html',
  styleUrls: ['./backup-config-type-form.component.scss']
})
export class BackupConfigTypeFormComponent {
  @Input() backupType: BackupType | null = null;

}
