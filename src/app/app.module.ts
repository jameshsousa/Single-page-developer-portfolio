import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { HeaderComponent } from './component/header/header.component';
import { SkillsComponent } from './component/skills/skills.component';
import { ProjectsComponent } from './componet/projects/projects.component';
import { ProjectComponent } from './component/project/project.component';
import { ContactComponent } from './component/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    HeaderComponent,
    SkillsComponent,
    ProjectsComponent,
    ProjectComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
