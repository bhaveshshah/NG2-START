import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = '[{"task":"Close the tap","priority":"High","status":"Completed","assignedBy":"Amit"},{"task":"Prepare for session","priority":"High","status":"Hold","assignedBy":"Anil"},{"task":"Catch up with a meeting","priority":"High","status":"In Progress","assignedBy":"Nimit Shah"},{"task":"Check Income Tax Return","priority":"High","status":"In Progress","assignedBy":"Nilesh Shah"},{"task":"Check Office Bill","priority":"High","status":"In Progress","assignedBy":"Dev Shah"}]';

  constructor() {
    if (!sessionStorage.getItem('data')) {
      sessionStorage.setItem('data', this.data);
      sessionStorage.setItem('userDetails', JSON.stringify({ name: 'Bhavesh Shah', email: 'me@bhaveshshah.com' }));
    }

  }

  showOptions(event) {
    event.preventDefault();
    alert('you selected is correct');
  }
}
