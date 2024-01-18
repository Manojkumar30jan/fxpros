import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThankComponent } from './thank/thank.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ApserviceComponent } from './apservice/apservice.component';



@NgModule({
  declarations: [
    ThankComponent,
    ApserviceComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
