import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';

const CONFIG = {
  space: 'sycgmvkfsap1',
  accessToken:
    '8ozakd-L4U8DVCPUvB_YCDAHhGTzq7EX_lmuX3aJmn4',
  environment: 'master',
  contentTypeIds: {
    puppies: 'puppy'
  }
};

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private client = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });

  constructor() { }

  async getPuppyList() {
    const res = await this.client.getEntries(Object.assign({content_type: CONFIG.contentTypeIds.puppies}));
    console.log(res);
    return res.items;
  }

  async getAsset(assetId: string) {
    return await this.client.getAsset(assetId);
  }

  async getAssetImage(assetId: string) {
    return await this.getAsset(assetId).then((asset) => {
      return asset.fields.file?.url;
    })
  }

  // getImages() {
  //   return this.client.getAssets().then((assets) => {
  //     console.log(assets);
  //   });
  // }

}
