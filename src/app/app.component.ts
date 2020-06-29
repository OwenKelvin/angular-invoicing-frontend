import { Component } from '@angular/core';

export const SECTION_HOME = 'home';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor() {
  }
  currentSection = 'home';

  onSectionChange(newSection: string) {
    this.currentSection = newSection;
  }

  scrollTo(section: string) {
    document.querySelector('#' + section)?.scrollIntoView();
  }
}
