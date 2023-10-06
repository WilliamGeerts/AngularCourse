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
import { CommunicationComponent } from './communication/communication.component';
import { ExampleInputComponent } from './communication/example-input/example-input.component';
import { ExampleOutputComponent } from './communication/example-output/example-output.component';
import { ExampleTwoWayBindingComponent } from './communication/example-two-way-binding/example-two-way-binding.component';
import { PipesComponent } from './pipes/pipes.component';
import { LengthStrPipe } from './pipes/length-str.pipe';
import { JsonFilterPipe } from './pipes/json-filter.pipe';
import {AppRoutingModule} from "./app-routing.module";
import { IndexComponent } from './index/index.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    GradeComponent,
    ChapterFormComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    ServicesComponent,
    Child1Component,
    Child2Component,
    CommunicationComponent,
    ExampleInputComponent,
    ExampleOutputComponent,
    ExampleTwoWayBindingComponent,
    PipesComponent,
    LengthStrPipe,
    JsonFilterPipe,
    IndexComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
