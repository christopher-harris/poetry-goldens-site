import { Pipe, PipeTransform } from '@angular/core';
import {ContentfulService} from "../services/contentful.service";

@Pipe({
  name: 'imageUrl'
})
export class ImageUrlPipe implements PipeTransform {

  constructor(private contentfulService: ContentfulService) {
  }

  transform(asset: any, ...args: unknown[]): unknown {
    console.log(asset);
    return `https:${asset.fields.file.url}?f=face`;
    // let url: string = '';
    // const assetImage = this.contentfulService.getAssetImage(asset.sys.id);
    // assetImage.then((imageUrl: any) => {url = 'https:' + imageUrl});
    // return url;
  }

}
