import { AfterViewInit, Component, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BackupConfig } from 'src/app/Models/backup-config.model';
import { BackupConfigService } from 'src/app/Services/backup-config.service';

@Component({
  selector: 'mb-backup-configs-table',
  styleUrls: ['backup-configs-table.component.scss'],
  templateUrl: 'backup-configs-table.component.html',
})
export class BackupConfigsTableComponent implements AfterViewInit, OnInit, OnChanges {
  displayedColumns: string[] = ['name', 'enabled', 'to_keep', 'frequency', 'from_type', 'to_type', 'actions'];
  nbColumnsHide = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  backupConfigService: BackupConfigService;
  @Input() backupConfigs: BackupConfig[] = [];
  dataSource = new MatTableDataSource<BackupConfig>(this.backupConfigs);
  @Output() refreshList = new EventEmitter<boolean>();

  ngOnInit() {
    this.onResize();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnChanges() {
    this.dataSource = new MatTableDataSource<BackupConfig>(this.backupConfigs);
  }

  delete(backupConfig: BackupConfig) {
    this.backupConfigService.delete(backupConfig).subscribe(() => {
      this.refreshList.emit(true);
    });
  }

  constructor(backupConfigService: BackupConfigService) {
    this.backupConfigService = backupConfigService;
  }
  @HostListener('window:resize', ['$event'])
  private onResize() {
    if (window.innerWidth < 420) {
      this.nbColumnsHide = 3;
    } else if (window.innerWidth < 550) {
      this.nbColumnsHide = 2;
    } else {
      this.nbColumnsHide = 0;
    }
  }
}

