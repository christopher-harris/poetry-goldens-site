import {Component, inject, OnInit} from '@angular/core';
import {ContentfulService} from "../../services/contentful.service";
import {Entry} from "contentful";

@Component({
  selector: 'app-puppy-list',
  templateUrl: './puppy-list.component.html',
  styleUrl: './puppy-list.component.scss'
})
export class PuppyListComponent implements OnInit {
  contentfulService = inject(ContentfulService);
  puppyList: Entry<any>[] = [];

  ngOnInit() {
    this.contentfulService.getPuppyList().then(puppies => this.puppyList = puppies);
  }


}
