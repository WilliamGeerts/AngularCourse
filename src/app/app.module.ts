import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GradeComponent } from './grade/grade.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ChapterFormComponent } from './chapter-form/chapter-form.component';
import { TemplateDrivenFormComponent } from './chapter-form/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './chapter-form/reactive-form/reactive-form.component';
import { ServicesComponent } from './services/services.component';
import { Child1Component } from './services/child1/child1.component';
import { Child2Component } from './services/child2/child2.component';

@NgModule({
  declarations: [
    AppComponent,
    GradeComponent,
    ChapterFormComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    ServicesComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
