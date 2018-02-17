import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AuthgaurdService } from './common/authgaurd.service';
import { RestCallingService } from './common/rest-calling.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './accounts/login/login.component';
import { PagenotfoundComponent } from './common/pagenotfound/pagenotfound.component';
import { AutocompleteComponent } from './common/autocomplete/autocomplete.component';
import { UsersComponent } from './users/users.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { RadioDirective } from './common/directives/radio.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodoComponent,
    AboutComponent,
    LoginComponent,
    PagenotfoundComponent,
    AutocompleteComponent,
    UsersComponent,
    AddtaskComponent,
    RadioDirective
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AuthgaurdService, RestCallingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
