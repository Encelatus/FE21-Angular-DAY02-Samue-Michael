import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { InputComponent } from './input/input.component';


const routes: Routes = [{
  path:"", component: HomeComponent
} , {
  path:"contact", component: ContactComponent
} , {
  path:"input", component: InputComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
