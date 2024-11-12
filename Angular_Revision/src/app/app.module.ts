import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GithubProfileComponent } from './components/github-profile/github-profile.component';
import { GithubProfileCardComponent } from './components/github-profile-card/github-profile-card.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { GithubReposComponent } from './components/github-repos/github-repos.component';
import { GithubAppComponent } from './components/github-app/github-app.component';

@NgModule({
  declarations: [
    AppComponent,
    
    GithubProfileComponent,
    GithubProfileCardComponent,
    ProfileDetailsComponent,
    GithubReposComponent,
    GithubAppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

