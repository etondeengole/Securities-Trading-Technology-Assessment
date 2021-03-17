import { AppConfig } from './app-config';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ticket-system';

  constructor(
    private httpClient: HttpClient
  ) {
    this.GetConfig().subscribe(
      (config: string) => {
        AppConfig.Config = JSON.parse(config);

      }, error => { alert(error); });

  }

  private GetConfig(): Observable<string> {
    const jsonFile = `assets/config/config.json`;
    return this.httpClient.get(jsonFile, { responseType: "text" });
  }

}
