import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstscreenAquaticsComponent } from './firstscreen-aquatics/firstscreen-aquatics.component';
import { RouterModule } from '@angular/router';
import { firstscreenRoutes } from './firstscreen-aquatics.routes';

@NgModule({
  imports: [CommonModule,RouterModule.forChild(firstscreenRoutes)],
  declarations: [
    FirstscreenAquaticsComponent
  ],
  exports: [
    FirstscreenAquaticsComponent
  ],
})
export class FirstscreenAquaticsScreenModule {}
