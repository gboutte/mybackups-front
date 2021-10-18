import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BackupType } from 'src/app/Models/backup-type.model';
import { BackupTypeService } from 'src/app/Services/backup-type.service';

@Component({
  selector: 'mb-backup-config-form',
  templateUrl: 'backup-config-form.component.html',
  styleUrls: ['./backup-config-form.component.scss']
})
export class BackupConfigFormComponent {
  public added = true;
  public backupTypes: BackupType[] = [];
  public backupTypesOrigin: BackupType[] = [];
  public backupTypesDestination: BackupType[] = [];

  public originType: BackupType | null = null;
  public destinationType: BackupType | null = null;
  constructor(
    public dialogRef: MatDialogRef<BackupConfigFormComponent>,

    public backupTypeService: BackupTypeService) {

    backupTypeService.getAll().subscribe((r) => {
      this.backupTypes = r;
      this.backupTypes.forEach(type => {

        if (type.isDestination) {
          this.backupTypesDestination.push(type);
        }

        if (type.isOrigin) {
          this.backupTypesOrigin.push(type);
        }
      });
    });

  }

  onSaveClick(): void {
    this.dialogRef.close(this.added);
  }
}
