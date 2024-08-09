import {createStore, select, withProps} from "@ngneat/elf";
import {withEntities} from "@ngneat/elf-entities";
import {Entry} from "contentful";
import {inject, Injectable} from "@angular/core";
import {ContentfulService} from "../../services/contentful.service";

interface AppProps {
  test: string | null;
  data: Entry<any>[];
}

const applicationStore = createStore(
  {name: 'puppies'},
  withProps<AppProps>({test: 'hello', data: []})
);

@Injectable({ providedIn: 'root' })
export class AppRepository {
  private contentfulService = inject(ContentfulService);

  puppies$ = applicationStore.pipe(select((state) => state.data));

  fetchPuppies() {
    return this.contentfulService.getPuppyList().then((response => {
      applicationStore.update((state) => ({
        ...state,
        data: response
      }))
    }));
  }
}
