import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchListComponent } from './search-list/search-list.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { UserWelcomeComponent } from './user-welcome/user-welcome.component';
import { AddCodeComponent } from './add-code/add-code.component';
import { ReviewCodeComponent } from './review-code/review-code.component';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    SearchListComponent,
    LoginComponent,
    SignUpComponent,
    CreateProfileComponent,
    UserWelcomeComponent,
    AddCodeComponent,
    ReviewCodeComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CodemirrorModule,
    HttpClientModule,
    NgbModule.forRoot(),
  ],
  providers: [HttpClientModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
