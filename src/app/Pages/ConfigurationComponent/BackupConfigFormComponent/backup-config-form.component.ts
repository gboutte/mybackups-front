import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { BackupConfig } from 'src/app/Models/backup-config.model';
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
      Validators.required,
    ]),
    enabled: new FormControl(true),
    to_keep: new FormControl(null, [
      Validators.required,
    ]),
    frequency: new FormControl(null, [
      Validators.required,
      cronValidator(),
    ]),
    to_type: new FormControl(null, [
      Validators.required,
    ]),
    from_type: new FormControl(null, [
      Validators.required,
    ])

  });

  public originType: BackupType | null = null;
  public destinationType: BackupType | null = null;
  public dialogRef: MatDialogRef<BackupConfigFormComponent>

  private toastr: ToastrService;
  constructor(
    dialogRef: MatDialogRef<BackupConfigFormComponent>,
    public backupTypeService: BackupTypeService,
    toastr: ToastrService
  ) {
    this.toastr = toastr;
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
    // if (this.validateForm() && this.destinationType !== null && this.originType !== null) {
    // let backupConfig = new BackupConfig(this.name, this.enabled, this.to_keep, this.frequency, this.originType.code, this.destinationType.code, {}, {});
    // console.log(backupConfig);
    // }
    // this.dialogRef.close(this.added);
    if (this.backupConfigForm.valid) {
      let backupConfig = new BackupConfig(
        this.backupConfigForm.controls.name.value,
        this.backupConfigForm.controls.enabled.value,
        this.backupConfigForm.controls.to_keep.value,
        this.backupConfigForm.controls.frequency.value,
        this.backupConfigForm.controls.from_type.value.code,
        this.backupConfigForm.controls.to_type.value.code,
        {},
        {}
      );
      console.log(backupConfig);
    } else {
      this.toastr.error('The values typed in the form are invalid.', 'Error');
    }

  }
}
function cronValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let regexCron = /(@(annually|yearly|monthly|weekly|daily|hourly|reboot))|(@every (\d+(ns|us|µs|ms|s|m|h))+)|((((\d+,)+\d+|(\d+(\/|-)\d+)|\d+|\*) ?){5,7})/;
    let match = control.value?.match(regexCron);
    return !match ? { cronFormat: true } : null;
  };
}
