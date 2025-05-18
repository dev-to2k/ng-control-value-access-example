import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public translate = inject(TranslateService);
  private title = inject(Title);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private destroy$ = new Subject<void>();

  constructor() {
    this.setupLanguage();
    this.setupTitle();
  }

  setupLanguage() {
    this.translate.use('vi');
  }

  setupTitle() {
    this.router.events
      .pipe(
        map((event) => {
          if (event instanceof NavigationEnd) {
            let route = this.activatedRoute.firstChild;
            while (route?.firstChild) {
              route = route.firstChild;
            }
            return route?.snapshot.data['titleKey'] || null;
          }
          return null;
        }),
        takeUntil(this.destroy$)
      )
      .subscribe((titleKey) => {
        if (titleKey) {
          this.translate.get(titleKey).subscribe((translated: string) => {
            this.title.setTitle(translated);
          });
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
