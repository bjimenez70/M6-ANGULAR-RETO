import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AlertaComponent } from './alerta/alerta.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BoardsComponent } from './boards/boards.component';
import { PaginappalRoutingModule } from './pagina-ppal-routing.module';




@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    AlertaComponent,
    NavbarComponent,
    BoardsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    PaginappalRoutingModule
  ],

  exports: [
    HeaderComponent,
    AlertaComponent,
    NavbarComponent,
    BoardsComponent,
    HomeComponent,
    LoginComponent
  ]
})
export class PaginaPpalModule { }

