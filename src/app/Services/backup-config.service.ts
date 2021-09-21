import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Deserialize, Serialize } from 'cerialize';
import { Observable } from 'rxjs';
import { AbstractService } from './abstract.service';
import { map } from 'rxjs/operators';
import { BackupConfig } from '../Models/backup-config.model';

@Injectable()
export class BackupConfigService extends AbstractService {
  private endpoint: string;
  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.endpoint = this.getDomain() + '/backup/config';
  }
  getAll(): Observable<BackupConfig[]> {

    return this.httpClient.get<BackupConfig[]>(this.endpoint, {}).pipe(
      map((response: any) => Deserialize(response, BackupConfig))
    );
  }

  create(backupConfig: BackupConfig) {
    return this.httpClient.post<BackupConfig>(
      this.endpoint,
      Serialize(backupConfig)
    ).pipe(
      map((response: any) => console.log(response))
    );
  }
  delete(backupConfig: BackupConfig) {
    return this.httpClient.request(
      'delete',
      this.endpoint,
      { body:Serialize(backupConfig)}
    ).pipe(
      map((response: any) => console.log(response))
    );
  }
}
