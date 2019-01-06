import { Injectable } from '@angular/core';
import { Application } from '../models/Application';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApplicationService {

  BASE_URL = 'http://127.0.0.1:5000';

  constructor(private http: HttpClient) { }

  getApplications() {
    return this.http.get<Application[]>(this.BASE_URL + '/applications', { observe: 'response' });
  }

  getApplicationById(id: string) {
    return this.http.get<Application[]>(this.BASE_URL + '/application/' + id, { observe: 'response' });
  }
}
