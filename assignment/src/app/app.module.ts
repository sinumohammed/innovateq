import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';
import { AppHeaderComponent } from './_layout/app-header/app-header.component';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { CardComponent } from './components/card/card.component';
import { PanelComponent } from './components/panel/panel.component';
import { BlogComponent } from './components/blog/blog.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user-list/user/user.component';
import { SideNavComponent } from './_layout/side-nav/side-nav.component';
//import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    AppHeaderComponent,
    HomeComponent,
    UserListComponent,
    CardComponent,
    PanelComponent,
    BlogComponent,
    UserListComponent,
    UserComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    //ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
