import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchListComponent } from './search-list/search-list.component';
import { PersonProfileComponent } from './person-profile/person-profile.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { UserWelcomeComponent } from './user-welcome/user-welcome.component';

const routes: Routes = [
  { path: '', redirectTo: '/suche', pathMatch: 'full' },
  { path: 'suche', component: SearchListComponent },
  { path: 'profiel', component: PersonProfileComponent},
  { path: 'login', component: LoginComponent},
  { path: 'anmelden', component: SignUpComponent},
  { path: 'profiel_erstellen', component: CreateProfileComponent},
  { path: 'willkommen', component: UserWelcomeComponent},

];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})

export class AppRoutingModule {}