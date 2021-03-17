import { AppConfig } from './../app-config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IAppConfig } from './iapp-config';

export abstract class BaseService {
  public appSettings: IAppConfig;
  constructor(public httpClient: HttpClient) {
    this.appSettings = AppConfig.Config;
  }

  public async PostReturn<T, U>(controllerInfo: string, info: T): Promise<U> {
    const requestInfo = JSON.stringify(info);
    return await this.httpClient.post<U>(this.appSettings.BaseUrl + controllerInfo, requestInfo,
      { headers: new HttpHeaders().set('content-type', 'application/json') }).toPromise();
  }

  public async Post<U>(controllerInfo: string): Promise<U> {
    return await this.httpClient.post<U>(this.appSettings.BaseUrl + controllerInfo,
      { headers: new HttpHeaders().set('content-type', 'application/json') }).toPromise();
  }

  public async Get<U>(controllerInfo: string): Promise<U> {
    return await this.httpClient.get<U>(this.appSettings.BaseUrl + controllerInfo,
      { headers: new HttpHeaders().set('content-type', 'application/json') }).toPromise();
  }

  public async GetWithRowId<U>(controllerInfo: string, RowId: number): Promise<U> {
    return await this.httpClient.get<U>(this.appSettings.BaseUrl + controllerInfo + `/${RowId}`,
      { headers: new HttpHeaders().set('content-type', 'application/json') }).toPromise();
  }

  public async Put<T, U>(controllerInfo: string, info: T): Promise<U> {
    const requestInfo = JSON.stringify(info);
    return await this.httpClient.put<U>(this.appSettings.BaseUrl + controllerInfo, requestInfo,
      { headers: new HttpHeaders().set('content-type', 'application/json') }).toPromise();
  }

  public async Delete<U>(controllerInfo: string, RowId: number): Promise<U> {
    return await this.httpClient.delete<U>(this.appSettings.BaseUrl + controllerInfo + `?Id=${RowId}`,
      { headers: new HttpHeaders().set('content-type', 'application/json') }).toPromise();
  }
}
