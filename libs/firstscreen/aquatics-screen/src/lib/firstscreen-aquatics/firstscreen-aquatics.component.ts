import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'assessment-tech-firstscreen-aquatics',
  templateUrl: './firstscreen-aquatics.component.html',
  styleUrls: ['./firstscreen-aquatics.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FirstscreenAquaticsComponent implements OnInit {

  applicationName = '';

  ngOnInit(){
    this.checkApplicationType();
    }

    checkApplicationType(){
      const path = window.location.pathname;
      if(path == '/aquatics'){
        this.applicationName = 'Aquatics';
      }else if(path == '/pets'){
        this.applicationName = 'Pets';
      }else if(path == '/plants'){
        this.applicationName = 'Plants';
      }
    }

}
