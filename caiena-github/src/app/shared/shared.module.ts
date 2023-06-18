import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { HttpClientModule } from '@angular/common/http';
import { CardPerfilComponent } from './components/card-perfil/card-perfil.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';

@NgModule({
  declarations: [CabecalhoComponent, RodapeComponent, CardPerfilComponent, SnackBarComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
  ],
  exports: [CabecalhoComponent, RodapeComponent, CardPerfilComponent],
})
export class SharedModule {}
