import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookComponent} from './book/book.component';
import {BookAddComponent} from './book-add/book-add.component';
import {BookEditComponent} from './book-edit/book-edit.component';
import {BookDetailComponent} from './book-detail/book-detail.component';


const routes: Routes = [
  {path: '', component: BookComponent},
  {path: 'add', component: BookAddComponent},
  {path: 'edit/:id', component: BookEditComponent},
  {path: 'detail/:id', component: BookDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
