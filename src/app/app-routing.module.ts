import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    component: AboutUsComponent,
    path:'aboutUs'
 },{
  component: TermsOfServiceComponent,
  path:'TermsOfService'
 },
 {
  component: HomePageComponent,
  path:''
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
