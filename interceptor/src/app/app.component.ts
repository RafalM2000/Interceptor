import { Component, OnInit} from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private myService: HttpService) { }

  ngOnInit() { }

  httpRequest() {
    this.myService.getData()
    .subscribe(data => {
      console.log(data);
    });
  }
}
