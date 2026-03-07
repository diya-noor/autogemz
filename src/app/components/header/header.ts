import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

declare var $: any;

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit, OnDestroy {
  private routerSub!: Subscription;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.routerSub = this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        // Close mobile menu after navigation — trigger theme's own close logic
        if (typeof $ !== 'undefined') {
          const $header = $('header');
          if ($header.hasClass('menu-open')) {
            $('#menu-btn').trigger('click');
          }
        }
      });
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
  }
}
