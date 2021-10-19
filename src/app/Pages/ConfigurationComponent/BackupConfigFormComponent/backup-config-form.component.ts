import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
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


  //Backup Config

  public backupConfigForm = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ]),
    enabled: new FormControl(true),
    to_keep: new FormControl(null, [
      Validators.required
    ]),
    frequency: new FormControl(null, [
      Validators.required,
      cronValidator()
    ]),

  });

  public originType: BackupType | null = null;
  public destinationType: BackupType | null = null;
  public dialogRef: MatDialogRef<BackupConfigFormComponent>


  constructor(
    dialogRef: MatDialogRef<BackupConfigFormComponent>,
    public backupTypeService: BackupTypeService) {

    this.dialogRef = dialogRef;
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
function cronValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let regexCron = /(@(annually|yearly|monthly|weekly|daily|hourly|reboot))|(@every (\d+(ns|us|µs|ms|s|m|h))+)|((((\d+,)+\d+|(\d+(\/|-)\d+)|\d+|\*) ?){5,7})/;
    let match = control.value?.match(regexCron);
    return !match ? { cronFormat: true } : null;
  };
}
