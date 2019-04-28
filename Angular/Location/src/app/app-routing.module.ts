import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditLocationComponent } from './edit-location/edit-location.component';

const routes: Routes = [{
  path:'home',
  component:EditLocationComponent

},
{path:'',
redirectTo: '/home',
pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }