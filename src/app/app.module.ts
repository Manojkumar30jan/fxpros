import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import{NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { IonicModule } from '@ionic/angular';
import { SharedModule} from './shared/shared.module';
import {HttpClientModule} from '@angular/common/http';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    ContactComponent,
   
  ],
  imports: [
    BrowserModule,
    NgbCarouselModule,
    BrowserAnimationsModule,
    MatTabsModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
      AppRoutingModule,
      SharedModule,
      HttpClientModule,
    IonicModule.forRoot()
    
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
