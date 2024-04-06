import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDeatilsComponent } from './components/item-deatils/item-deatils.component';

const routes: Routes = [
  {path:'item-detail', component: ItemDeatilsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
