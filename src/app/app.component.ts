import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-root">
      <h1>{{ name }}</h1>
      <app-event-tracker></app-event-tracker>
    </div>
  `
})
export class AppComponent {
  name = `Angular ${VERSION.major}`;
}