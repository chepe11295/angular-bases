import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/component/list.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    ListComponent,
    HeroComponent,
  ],
  declarations: [
    HeroComponent,
    ListComponent,
  ],
})
export class HeroesModule { }
