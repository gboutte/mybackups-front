import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { BackupConfig } from 'src/app/Models/backup-config.model';
import { BackupType } from 'src/app/Models/backup-type.model';
import { BackupConfigService } from 'src/app/Services/backup-config.service';
import { BackupTypeService } from 'src/app/Services/backup-type.service';

interface TypeParameter {
  [key: string]: any
}

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
    ]),
    to_parameters: new FormGroup({

    }),
    from_parameters: new FormGroup({

    })

  });

  public originType: BackupType | null = null;
  public destinationType: BackupType | null = null;
  public dialogRef: MatDialogRef<BackupConfigFormComponent>

  private toastr: ToastrService;
  constructor(
    dialogRef: MatDialogRef<BackupConfigFormComponent>,
    public backupTypeService: BackupTypeService,
    public backupConfigService: BackupConfigService,
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
    if (this.backupConfigForm.valid) {

      let fromParameters: TypeParameter = {};
      let toParameters: TypeParameter = {};

      Object.keys(this.formGroupFromParameters.controls).forEach((key: string) => {
        fromParameters[key] = this.formGroupFromParameters.controls[key].value;
      });

      Object.keys(this.formGroupToParameters.controls).forEach((key: string) => {
        toParameters[key] = this.formGroupToParameters.controls[key].value;
      });

      let backupConfig = new BackupConfig(
        this.backupConfigForm.controls.name.value,
        this.backupConfigForm.controls.enabled.value,
        this.backupConfigForm.controls.to_keep.value,
        this.backupConfigForm.controls.frequency.value,
        this.backupConfigForm.controls.from_type.value.code,
        this.backupConfigForm.controls.to_type.value.code,
        fromParameters,
        toParameters
      );
      this.dialogRef.close(this.added);
    } else {
      this.toastr.error('The values typed in the form are invalid.', 'Error');
    }

  }

  updateFormGroupFromParameters(formGroup: FormGroup) {
    this.backupConfigForm.controls.from_parameters = formGroup;
  }

  updateFormGroupToParameters(formGroup: FormGroup) {
    this.backupConfigForm.controls.to_parameters = formGroup;
  }

  get formGroupFromParameters() {
    return this.backupConfigForm.controls.from_parameters as FormGroup;
  }
  get formGroupToParameters() {
    return this.backupConfigForm.controls.to_parameters as FormGroup;
  }
}
function cronValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let regexCron = /(@(annually|yearly|monthly|weekly|daily|hourly|reboot))|(@every (\d+(ns|us|µs|ms|s|m|h))+)|((((\d+,)+\d+|(\d+(\/|-)\d+)|\d+|\*) ?){5,7})/;
    let match = control.value?.match(regexCron);
    return !match ? { cronFormat: true } : null;
  };
}
