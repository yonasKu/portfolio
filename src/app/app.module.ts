import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { WorkComponent } from './work/work.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, MainComponent, AboutComponent, ContactComponent, ServicesComponent, WorkComponent],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
