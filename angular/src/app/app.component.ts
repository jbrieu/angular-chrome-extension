import { ChangeDetectorRef, Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { TAB_ID } from './tab-id.injector';
import { Newspaper } from './newspaper';
import { NEWSPAPERSINDEX } from './mock-newspaper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// tslint:disable:variable-name
export class AppComponent {
  private readonly _domain = new Subject<String>();

  newspapers = NEWSPAPERSINDEX;

  readonly tabId = this._tabId;
  readonly domain$ = this._domain
    .asObservable()
    .pipe(tap(() => setTimeout(() => this._changeDetector.detectChanges())));

  constructor(
    @Inject(TAB_ID) private readonly _tabId: number,
    private readonly _changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(){
      chrome.tabs.sendMessage(this.tabId, 'request', domain => {
        this._domain.next(
          chrome.runtime.lastError
            ? 'Domain not available yet'
            : domain
        );
      });
 }
}
