import {ChangeDetectorRef, Component, inject, OnDestroy} from '@angular/core';
import {MediaMatcher} from "@angular/cdk/layout";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'Velaio Test';

  mobileQuery: MediaQueryList;

  fillerNav =[
    {
      title: 'Home',
      link: '',
    },
    {
      title: 'Tarea',
      link: 'tarea'
    },
    {
      title: 'Lista de Tareas',
      link: 'tareas-list'
    }
  ];

  private readonly _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
