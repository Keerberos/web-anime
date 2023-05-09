import { NgModule } from '@angular/core';
import { AnimeNav, CapButton, NavButton } from './proxies';
import { defineCustomElements } from '@web-anime/loader';

defineCustomElements(window);

@NgModule({
    imports: [],
    exports: [
        AnimeNav,
        CapButton,
        NavButton,
    ],
    declarations: [
        AnimeNav,
        CapButton,
        NavButton,
    ],
})

export class WebAnimeModule {}