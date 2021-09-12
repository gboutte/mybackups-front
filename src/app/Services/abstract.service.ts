import { HttpClient, HttpHeaders } from '@angular/common/http';


export abstract class AbstractService {
  private readonly domain = 'http://localhost:8888';
  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  protected httpClient: HttpClient;
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }
  public getDomain(): string {
    return this.domain;
  }

  public getHttpOptions(): any {
    return this.httpOptions;
  }
}
