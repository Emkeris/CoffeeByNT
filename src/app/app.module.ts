import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { HeaderSectionsComponent } from './header/header-sections/header-sections.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutUsShortComponent } from './about-us/about-us-short/about-us-short.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MomentsComponent } from './moments/moments.component';
import { ContactComponent } from './contact/contact.component';
import { StoryComponent } from './story/story.component';
import { CateringComponent } from './catering/catering.component';
import { BlogComponent } from './blog/blog.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    HeaderSectionsComponent,
    AboutUsComponent,
    AboutUsShortComponent,
    FooterComponent,
    HomeComponent,
    MomentsComponent,
    ContactComponent,
    StoryComponent,
    CateringComponent,
    BlogComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
