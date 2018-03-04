import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaAutenticadaComponent } from './pagina-autenticada/pagina-autenticada.component';
import { RotasAutenticadasComponent } from './rotas-autenticadas.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [PaginaAutenticadaComponent, RotasAutenticadasComponent],
  exports: [RotasAutenticadasComponent]
})
export class RotasAutenticadasModule {}
