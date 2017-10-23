import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class SessionService {

  public firstName: string;
  public lastName: string;
  public emailAddress: string;
  public addressLine1: string;
  public addressLine2: string;
  public city: string;
  public state: string;
  public zipCode: string;

  public userID: number;
  public isAuthenicated: Boolean;
  public sessionEvent: EventEmitter<any>;
  public apiServer: string;
  public version: string;
  
  constructor() {      
     this.sessionEvent = new EventEmitter();        
  }

}
