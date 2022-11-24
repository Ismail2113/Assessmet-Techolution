import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'assessment-tech-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavMenuComponent {

  constructor(private router: Router){
  }

  callFirstApp(){
    window.open('http://localhost:4200/aquatics', "_self");
  }

  callSecondApp(){
    window.open('http://localhost:4201/pets', "_self");
  }

  callThirdApp(){
    window.open('http://localhost:4202/plants', "_self");
  }

}
