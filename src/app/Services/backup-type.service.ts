import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Deserialize } from 'cerialize';
import { Observable } from 'rxjs';
import { BackupType } from '../Models/backup-type.model';
import { AbstractService } from './abstract.service';
import { map } from 'rxjs/operators';

@Injectable()
export class BackupTypeService extends AbstractService {
  private endpoint: string;
  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.endpoint = this.getDomain() + '/backup/type';
  }
  getAll(): Observable<BackupType[]> {

    return this.httpClient.get<BackupType[]>(this.endpoint, {}).pipe(
      map((response: any) => Deserialize(response, BackupType))
    );
  }
}
