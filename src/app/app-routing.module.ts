import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPage} from "./pages/landing/landing.page";
import {DetailPage} from "./pages/detail/detail.page";

const routes: Routes = [
  {
    path: '',
    component: LandingPage
  },
  {
    path: 'puppy/:name',
    component: DetailPage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
