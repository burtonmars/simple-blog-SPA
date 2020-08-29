import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogComponent } from './blogs/blog/blog.component';
import { QuickViewProfileComponent } from './quick-view-profile/quick-view-profile.component';
import { NewBlogComponent } from './blogs/new-blog/new-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlogsComponent,
    BlogComponent,
    QuickViewProfileComponent,
    NewBlogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
