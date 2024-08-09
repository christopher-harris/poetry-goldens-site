import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import {devTools} from "@ngneat/elf-devtools";
import {ApplicationRef} from "@angular/core";

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
}).then((moduleRef) => {
  devTools({
    postTimelineUpdate: () => moduleRef.injector.get(ApplicationRef).tick()
  })
})
  .catch(err => console.error(err));
