import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrabalhoComponent } from './trabalho/trabalho.component';
import { LinhaDoTempoComponent } from './linha-do-tempo/linha-do-tempo.component';
import { PostDaLinhaComponent } from './post-da-linha/post-da-linha.component';
import { LoginComponent } from './login/login.component';
import { PerfilContratanteComponent } from './perfil-contratante/perfil-contratante.component';
import { PerfilAnuncianteComponent } from './perfil-anunciante/perfil-anunciante.component';

@NgModule({
  declarations: [
    AppComponent,
    TrabalhoComponent,
    LinhaDoTempoComponent,
    PostDaLinhaComponent,
    LoginComponent,
    PerfilContratanteComponent,
    PerfilAnuncianteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
