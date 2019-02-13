import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { AttributebindingComponent } from './attributebinding/attributebinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'databinding',
    component: DatabindingComponent
  },
  {
    path: 'attributebinding',
    component: AttributebindingComponent
  },
  {
    path: 'eventbinding',
    component: EventbindingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
