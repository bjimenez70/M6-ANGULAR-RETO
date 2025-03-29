import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pagina-ppal/home/home.component';
import { LoginComponent } from './pagina-ppal/login/login.component';


const routes: Routes = [ 
  {
    path: '',
    loadChildren: () => import('./pagina-ppal/pagina-ppal.module').then(m => m.PaginaPpalModule)
  }, 

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
