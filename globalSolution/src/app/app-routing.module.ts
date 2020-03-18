import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NavComponent } from './nav/nav.component';
import { TodoListRoutingModule } from './component/todo-list/todo-list-routing.module';

const routes: Routes = [
{path: 'home', component: HomeComponent},
{path: 'services', component: ServicesComponent},
{path: 'aboutus', component: AboutUsComponent},
{path: 'contact', component: ContactUsComponent},
{ path: 'nav', component: NavComponent },  
{path: 'todolist', component: TodoListRoutingModule},
{path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
