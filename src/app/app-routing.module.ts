import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ChapterFormComponent} from "./chapter-form/chapter-form.component";
import {ServicesComponent} from "./services/services.component";
import {CommunicationComponent} from "./communication/communication.component";
import {PipesComponent} from "./pipes/pipes.component";
import {AppComponent} from "./app.component";
import {IndexComponent} from "./index/index.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  {path: ".", pathMatch: "full", component: IndexComponent},
  {path: "forms", component: ChapterFormComponent},
  {path: "services", component: ServicesComponent},
  {path: "communication", component: CommunicationComponent},
  {path: "pipes", component: PipesComponent},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [RouterModule]
})

export class AppRoutingModule {
}
