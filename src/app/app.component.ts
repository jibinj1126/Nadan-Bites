import { CommonModule, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Nadan Bites';

   constructor(private router: Router, private viewportScroller: ViewportScroller) {}

scrollTo(section: string) {
  this.router.navigate(['/']).then(() => {
    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        const yOffset = -80; // adjust for navbar height
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 200);
  });
}

  
}
