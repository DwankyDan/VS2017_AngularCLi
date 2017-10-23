import { Component, OnInit, ElementRef } from '@angular/core';
import { SessionService } from './services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public webApiEndPoint: string;

  public ngOnInit() {
  }
  constructor(private sessionService: SessionService, private elementRef: ElementRef) {

    let native = this.elementRef.nativeElement;
    this.webApiEndPoint = native.getAttribute("webApiEndPoint");
    sessionService.apiServer = this.webApiEndPoint;
  }
}
