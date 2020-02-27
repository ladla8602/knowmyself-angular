import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { IndexListComponent } from './components/index-list/index-list.component';


const routes: Routes = [
    {   path: '', redirectTo: 'category', pathMatch: 'full'},
    {
        path: 'category',
        component : CategoryListComponent
    },
    {
        path: 'category/:categoryId',
        component: IndexListComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
