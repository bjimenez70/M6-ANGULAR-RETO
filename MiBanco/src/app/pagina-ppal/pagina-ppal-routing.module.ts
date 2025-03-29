import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { HeaderComponent } from "./header/header.component";
import { BoardsComponent } from "./boards/boards.component";
import { rutaGuard } from "../loginguard.guard";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'boards',
    component: BoardsComponent,
    canActivate: [rutaGuard]
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginappalRoutingModule { }
