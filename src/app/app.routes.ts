import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { ContactComponent } from './contact/contact.component';

import { SignUpComponent } from './sign-up/sign-up.component';

import { UserProfileComponent } from './user-profile/user-profile.component';

import { MenuComponent } from './menu/menu.component';


const ROUTES: Routes = [

  { path: 'home', component: HomeComponent },

  { path: 'contact', component: ContactComponent },

  { path: '', component: UserProfileComponent},

  { path: 'Sign up', component: SignUpComponent},

  { path: 'Menu', component: MenuComponent},

  { path: 'User Profile', component: UserProfileComponent},

];


export { ROUTES };