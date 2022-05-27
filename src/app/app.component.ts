import { Component } from '@angular/core';
import { IconsService } from './core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sdtm-fo';

  constructor(private iconsService: IconsService) {
    this.iconsService.registerIcons();
  }
}
