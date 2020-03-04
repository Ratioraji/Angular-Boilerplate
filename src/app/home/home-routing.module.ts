import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { IndexComponent } from './index/index.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {
    path: '',
    component:HomeComponent,
    children :[
      {
        path:'', //index
        component:IndexComponent ,
      },
      {
        path:'job-opportunities', //index
        component:AboutUsComponent ,
      },
      {
        path:'career-advice', //index
        component:AboutUsComponent ,
      },
      {
        path:'companies', //index
        component:AboutUsComponent ,
      },
      {
        path:'about-us', //index
        component:AboutUsComponent ,
      },
      {
        path:'sign-in', //index
        component:SignInComponent ,
      },
      {
        path:'sign-up', //index
        component:SignUpComponent ,
      },
      {
        path:'contact', //index
        component:ContactComponent ,
      },
    ]
  },
  { 
    path: '**', 
    redirectTo: 'home', 
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
