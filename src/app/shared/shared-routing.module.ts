import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThankComponent } from './thank/thank.component';
import { ApserviceComponent } from './apservice/apservice.component';

const routes: Routes = [{
    path:'thank',component:ThankComponent
},
{
  path:'aps',component:ApserviceComponent

}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
