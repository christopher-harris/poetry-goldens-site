import {Component, inject} from '@angular/core';
import {ContentfulService} from "../services/contentful.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(private contentfulService: ContentfulService) {
    // this.contentfulService.getImages();
  }
}
