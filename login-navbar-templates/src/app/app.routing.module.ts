import { LoginComponent } from './rotas-livres/login/login.component';
import { PaginaAutenticadaComponent } from './rotas-autenticadas/pagina-autenticada/pagina-autenticada.component';
import { HomeComponent } from './rotas-livres/home/home.component';
import { RotasLivresComponent } from './rotas-livres/rotas-livres.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RotasAutenticadasComponent } from './rotas-autenticadas/rotas-autenticadas.component';

const routes: Routes = [
  {
    path: '',
    component: RotasLivresComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: '',
        component: LoginComponent
      }
    ]
  },
  {
    path: '',
    component: RotasAutenticadasComponent,
    children: [
      {
        path: 'autenticada',
        component: PaginaAutenticadaComponent
      }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
