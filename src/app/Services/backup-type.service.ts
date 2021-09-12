import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BackupType } from '../Models/backup-type.model';
import { AbstractService } from './abstract.service';

@Injectable()
export class BackupTypeService extends AbstractService {
  private endpoint: string;
  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.endpoint = this.getDomain() + '/backup/type';
  }
  getAll() {

    let subject = new Subject<BackupType[]>();
    this.httpClient.get<BackupType[]>(this.endpoint, {}).subscribe((items => {
      let types:BackupType[] = [];
      items.map(item => {
        types.push(new BackupType(item));
      });
      subject.next(types);
    }));
    return subject.asObservable();
  }
}
