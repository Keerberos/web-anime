import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.scss']
})
export class ChaptersComponent {

  constructor(private routerUrl: Router) {}

  redirectTo(url: string) {
      switch (url) {
          case '1':
              this.routerUrl.navigate(['../../../../assets/videos/ippo/hajime-no-ippo-01.mp4']);
              break;
          case '2':
              this.routerUrl.navigate(['../../../../assets/videos/ippo/hajime-no-ippo-02.mp4']);
              break;
          case '3':
              this.routerUrl.navigate(['../../../../assets/videos/ippo/hajime-no-ippo-03.mp4']);
              break;
          case '4':
              this.routerUrl.navigate(['../../../../assets/videos/ippo/hajime-no-ippo-04.mp4']);
              break;
          case '5':
              this.routerUrl.navigate(['../../../../assets/videos/ippo/hajime-no-ippo-05.mp4']);
              break;
          case '6':
              this.routerUrl.navigate(['../../../../assets/videos/ippo/hajime-no-ippo-06.mp4']);
              break;
          case '7':
              this.routerUrl.navigate(['../../../../assets/videos/ippo/hajime-no-ippo-07.mp4']);
              break;
          case '8':
              this.routerUrl.navigate(['../../../../assets/videos/ippo/hajime-no-ippo-08.mp4']);
              break;
          case '9':
              this.routerUrl.navigate(['../../../../assets/videos/ippo/hajime-no-ippo-09.mp4']);
              break;
          case '10':
              this.routerUrl.navigate(['../../../../assets/videos/ippo/hajime-no-ippo-10.mp4']);
              break;
      }
  }
}
