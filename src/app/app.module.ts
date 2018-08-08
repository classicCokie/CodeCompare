import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchListComponent } from './search-list/search-list.component';
import { AppRoutingModule } from './/app-routing.module';
import { PersonProfileComponent } from './person-profile/person-profile.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { UserWelcomeComponent } from './user-welcome/user-welcome.component';
import { AddCodeComponent } from './add-code/add-code.component';
import { ReviewCodeComponent } from './review-code/review-code.component';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';

@NgModule({
  declarations: [
    AppComponent,
    SearchListComponent,
    PersonProfileComponent,
    LoginComponent,
    SignUpComponent,
    CreateProfileComponent,
    UserWelcomeComponent,
    AddCodeComponent,
    ReviewCodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CodemirrorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
