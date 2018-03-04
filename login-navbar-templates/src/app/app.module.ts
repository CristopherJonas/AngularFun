import { RotasAutenticadasModule } from './rotas-autenticadas/rotas-autenticadas.module';
import { RotasLivresModule } from './rotas-livres/rotas-livres.module';
import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RotasLivresModule,
    RotasAutenticadasModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
