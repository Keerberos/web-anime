import { APP_INITIALIZER, NgModule } from '@angular/core';
import { defineCustomElements } from '../../../../../../stencil.js-component/web-anime/loader';
import { DIRECTIVES } from '../web-components/index';

@NgModule({
  declarations: [...DIRECTIVES],
  exports: [...DIRECTIVES],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => {
        return defineCustomElements();
      },
    },
  ],
})
export class WebAnimeModule {


}