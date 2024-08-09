import {Component, inject} from '@angular/core';
import {AppRepository} from "./state/app.repository";
import {Observable} from "rxjs";
import {Entry} from "contentful";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  puppiesData$: Observable<Entry<any>[]> = this.appRepository.puppies$;

  constructor(private appRepository: AppRepository) {
    appRepository.fetchPuppies();
    this.puppiesData$.subscribe(x => console.log(x));
  }

}
