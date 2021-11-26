import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SingleTodoComponent } from './single-todo/single-todo.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'todos', component:TodoComponent},
  {path:'single-todo/:id', component:SingleTodoComponent},
  {path:'contact', component: ContactComponent},
  {path:'not-found', component:NotFoundComponent},
  {path:'', component:HomeComponent},
  {path: '**', pathMatch:'full', redirectTo:'not-found'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
