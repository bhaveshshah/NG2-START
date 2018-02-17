import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class RestCallingService {

  constructor(private http: Http) { }

  authenticateUser(userName: string, password: string) {
    return this.http.post('https://reqres.in/api/login', { email: userName, password: password });
  }

  addNewUser(obj) {
    return this.http.post('https://reqres.in/api/users', { name: obj.name, job: obj.job });
  }

  getAllUser() {
    return this.http.get('https://reqres.in/api/users?per_page=10');
  }


  getPriorityList() {
    return ['High', 'Medium', 'Low'];
  }

  getStatusList() {
    return ['Pending', 'Hold', 'Completed'];
  }
  // todo restapi calls

  getData(data) {
    return JSON.parse(sessionStorage.getItem(data));
  }

  setData(key, data) {
    sessionStorage.setItem(key, JSON.stringify(data));
  }
}
