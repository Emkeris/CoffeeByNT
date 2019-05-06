import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MomentsComponent } from './moments/moments.component';
import { ContactComponent } from './contact/contact.component';
import { StoryComponent } from './story/story.component';
import { CateringComponent } from './catering/catering.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'moments', component: MomentsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'our-story', component: StoryComponent},
  {path: 'catering', component: CateringComponent},
  {path: 'blog', component: BlogComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
