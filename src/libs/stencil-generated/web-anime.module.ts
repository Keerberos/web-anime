import { NgModule } from '@angular/core';
import { AnimeNav } from './proxies';
import { defineCustomElements } from '@web-anime/loader';

defineCustomElements(window);

@NgModule({
    imports: [],
    exports: [AnimeNav],
    declarations: [AnimeNav],
})

export class WebAnimeModule {}