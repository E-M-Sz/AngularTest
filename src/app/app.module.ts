import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostsComponent } from './components/posts/posts.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { DataService } from './providers/data.service';

const appRoutes: Routes = [
  {path:'', component:HomeComponent},
  {path:'posts', component:PostsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase, 'my-app-name'), // imports firebase/app needed for everything
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
