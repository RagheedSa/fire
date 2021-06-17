import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css'],
})
export class AppComponent {   constructor(private translate: TranslateService) {
  translate.setDefaultLang('en');
}
  title = 'ASE';

  panelOpenState = false;

  showTab = 1;
  tabToggle(index) {
    this.showTab = index;
  }
  useLanguage(language: string): void {
    this.translate.use(language);
}
}
