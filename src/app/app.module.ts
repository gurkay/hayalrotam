import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Add my form
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// Add my components
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { AppComponent } from './app.component';

// After setup angular matrial component
// Information https://material.angular.io/ all module feutures
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatPaginatorModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent, // My Component
    HeaderComponent, // My header component
    PostListComponent // My Post List Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // import my module of Routes
    ReactiveFormsModule, // import my module of forms
    BrowserAnimationsModule, // import my module of forms
    MatInputModule, // import angular material MatInputModule of Modules
    MatCardModule, // import angular material MatCardModule of Modules
    MatButtonModule, // import angular material MatButtonModule of Modules
    MatToolbarModule, // import angular material MatToolbarModule of Modules
    MatExpansionModule, // import angular material MatExpansionModule of Modules
    HttpClientModule, // import angular material HttpClientModule of Modules
    MatProgressSpinnerModule, // import angular material spinner of Modules
    MatPaginatorModule // import angular material paginator of Modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
