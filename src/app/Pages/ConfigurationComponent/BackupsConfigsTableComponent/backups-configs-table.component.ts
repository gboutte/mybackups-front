import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface BackupsConfig {
  name: string;
  enabled: boolean;
  to_keep: number;
  frequency: string;
  from_type: string;
  to_type: string;
}

const BACKUPS_CONFIG_DATA: BackupsConfig[] = [
  { name: 'Backup config 1', enabled: true, to_keep: 7, frequency: '* * * * *', from_type: 'local', to_type: 'local' },
  { name: 'Backup config 2', enabled: true, to_keep: 5, frequency: '* * * * *', from_type: 'local', to_type: 'local' },
  { name: 'Backup config 3', enabled: false, to_keep: 7, frequency: '* * * * *', from_type: 'local', to_type: 'local' },
  { name: 'Backup config 4', enabled: true, to_keep: 1, frequency: '* * * * *', from_type: 'local', to_type: 'local' },
  { name: 'Backup config 5', enabled: false, to_keep: 10, frequency: '* * * * *', from_type: 'local', to_type: 'local' },
  { name: 'Backup config 5', enabled: false, to_keep: 10, frequency: '* * * * *', from_type: 'local', to_type: 'local' },
  { name: 'Backup config 5', enabled: false, to_keep: 10, frequency: '* * * * *', from_type: 'local', to_type: 'local' },
  { name: 'Backup config 5', enabled: false, to_keep: 10, frequency: '* * * * *', from_type: 'local', to_type: 'local' },
  { name: 'Backup config 5', enabled: false, to_keep: 10, frequency: '* * * * *', from_type: 'local', to_type: 'local' },
];

@Component({
  selector: 'mb-backups-configs-table',
  styleUrls: ['backups-configs-table.component.scss'],
  templateUrl: 'backups-configs-table.component.html',
})
export class BackupsConfigsTableComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['name', 'enabled', 'to_keep', 'frequency', 'from_type', 'to_type'];
  dataSource = new MatTableDataSource<BackupsConfig>(BACKUPS_CONFIG_DATA);
  nbColumnsHide = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    this.onResize();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
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

