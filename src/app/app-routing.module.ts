import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { ThankComponent } from './shared/thank/thank.component';
import { ApserviceComponent } from './shared/apservice/apservice.component';

const routes: Routes = [{
  path:'home',component:HomeComponent
},
{path:"",component:HomeComponent},
 {
  path:'about', component:AboutComponent },
  {path:'thank',component:ThankComponent},
  {path:'aps',component:ApserviceComponent},
 {
  path:'contact', component:ContactComponent
 },
 {  
  path:'service', component:ServiceComponent
 },
 {path:'shared',loadChildren:()=>import('./shared/shared.module').then(mod=>mod.SharedModule)},


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
