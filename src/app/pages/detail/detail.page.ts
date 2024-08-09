import {Component, inject} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {map, Observable, switchMap} from "rxjs";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrl: './detail.page.scss'
})
export class DetailPage {
  route = inject(ActivatedRoute);
  puppyName$: Observable<string> = this.route.params.pipe(
    map((params) => params['name']),
  );

  constructor() {
    this.route.params.subscribe(params => console.log(params));
  }

}
