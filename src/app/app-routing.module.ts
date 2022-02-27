import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CricappsComponent } from './cricapps/cricapps.component';
import { WccComponent } from './cricapps/wcc/wcc.component';
import { Wcc2Component } from './cricapps/wcc2/wcc2.component';
import { Wcc3Component } from './cricapps/wcc3/wcc3.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'aboutus', component: AboutusComponent },
  {
    path: 'cricapps', component: CricappsComponent, children: [
      { path: 'wcc', component: WccComponent },
      { path: 'wcc2', component: Wcc2Component },
      { path: 'wcc3', component: Wcc3Component }]},
    { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
