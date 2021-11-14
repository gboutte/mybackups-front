import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BackupType } from 'src/app/Models/backup-type.model';
@Component({
  selector: 'mb-backup-config-type-form',
  templateUrl: 'backup-config-type-form.component.html',
  styleUrls: ['./backup-config-type-form.component.scss']
})
export class BackupConfigTypeFormComponent implements OnInit {
  @Input() backupType: BackupType | null = null;
  @Input() backupTypeFormGroup: FormGroup | null = null;
  @Output() updateEmitter = new EventEmitter<FormGroup>();

  constructor() {
  }
  ngOnInit() {
    if (this.backupTypeFormGroup !== null && this.backupType !== null) {
      this.backupTypeFormGroup = new FormGroup({});
      for (let parameter of this.backupType.parameters) {
        this.backupTypeFormGroup.addControl(parameter.name, new FormControl(null, [
          Validators.required,
        ]));
      }
      this.backupTypeFormGroup.valueChanges.subscribe(() => {
        this.updateBackupForm();
      });
    }
  }

  updateBackupForm() {
    this.updateEmitter.emit(this.backupTypeFormGroup as FormGroup);
  }
}
