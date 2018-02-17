import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './accounts/login/login.component';
import { PagenotfoundComponent } from './common/pagenotfound/pagenotfound.component';
import { AuthgaurdService } from './common/authgaurd.service';
import { UsersComponent } from './users/users.component';
import { AddtaskComponent } from './addtask/addtask.component';

const routes: Routes = [
    { path: '', redirectTo: '/home/todo', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
        path: 'home', canActivate: [AuthgaurdService], component: HomeComponent,
        children: [
            { path: 'todo', component: TodoComponent },
            { path: 'about', component: AboutComponent },
            { path: 'user-list', component: UsersComponent },
            { path: 'add-task', component: AddtaskComponent },
            { path: 'add-task/:id', component: AddtaskComponent }
        ]
    },
    { path: '**', component: PagenotfoundComponent }
];

export const routing = RouterModule.forRoot(routes);
