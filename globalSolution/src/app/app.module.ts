import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NavComponent } from './nav/nav.component';
import { BootstrapFormComponent } from './bootstrap-form/bootstrap-form.component';
import { BootstrapTableComponent } from './bootstrap-table/bootstrap-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {SlideshowModule} from 'ng-simple-slideshow';
import { SlideshowModule } from '../../public_api';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    AboutUsComponent,
    ContactUsComponent,
    NavComponent,
    BootstrapFormComponent,
    BootstrapTableComponent,
    // TodoListRoutingModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
     SlideshowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
