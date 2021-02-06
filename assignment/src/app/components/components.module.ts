import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { PanelComponent } from './panel/panel.component';
import { BlogComponent } from './blog/blog.component';



@NgModule({
  declarations: [
    CardComponent,
    PanelComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
