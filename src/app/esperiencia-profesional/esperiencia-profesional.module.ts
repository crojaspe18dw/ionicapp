import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EsperienciaProfesionalPage } from './esperiencia-profesional.page';

const routes: Routes = [
  {
    path: '',
    component: EsperienciaProfesionalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EsperienciaProfesionalPage]
})
export class EsperienciaProfesionalPageModule {}
