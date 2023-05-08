import { NgModule } from '@angular/core';
import { AnimeNav, CapButton } from './proxies';
import { defineCustomElements } from '@web-anime/loader';

defineCustomElements(window);

@NgModule({
    imports: [],
    exports: [
        AnimeNav,
        CapButton,
    ],
    declarations: [
        AnimeNav,
        CapButton,
    ],
})

export class WebAnimeModule {}