import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared';
import { UtilisateursComponent } from './utilisateurs.component';

@NgModule({
  declarations: [UtilisateursComponent],
  imports: [CommonModule, SharedModule],
})
export class UtilisateursModule {}
