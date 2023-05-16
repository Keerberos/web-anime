import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./cap.component.scss']
})

export class ChaptersComponent {

    constructor(private location: Location) {

    }

    public upURL(): void {
      const currentUrl = this.location.path();
      const urlSegments = currentUrl.split('/');
  
      // Obtiene el último segmento de la URL y lo convierte en un número
      let lastSegment = parseInt(urlSegments[urlSegments.length - 1]);
  
      // Verifica si el último segmento es un número válido
      if (!isNaN(lastSegment)) {
        // Incrementa el número en 1
        lastSegment += 1;
  
        // Reemplaza el último segmento en la URL actual
        urlSegments[urlSegments.length - 1] = lastSegment.toString();
  
        // Construye la nueva URL con el último segmento incrementado
        const newUrl = urlSegments.join('/');
  
        // Navega a la nueva URL
        this.location.go(newUrl);
        location.reload();
      }
    }
  
    public downURL(): void {
      const currentUrl = this.location.path();
      const urlSegments = currentUrl.split('/');
  
      let lastSegment = parseInt(urlSegments[urlSegments.length - 1]);
  
      if (!isNaN(lastSegment)) {
        lastSegment -= 1;
  
        urlSegments[urlSegments.length - 1] = lastSegment.toString();
  
        const newUrl = urlSegments.join('/');
  
        this.location.go(newUrl);
        location.reload();
      }
    }

}