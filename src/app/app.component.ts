import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(private http: HttpClient) {

  }
  title = 'ps6';
  sourceData: Array<any> = [];

  handleSearch(){
    console.log('start search')
    // return this.http.get(this.configUrl);
    this.http.get('assets/mock.json').subscribe((res:any) => {
      
      this.sourceData = res;
      console.log(res)
    })
  }
}
