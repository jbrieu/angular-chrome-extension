import { ChangeDetectorRef, Component, Inject, ChangeDetectionStrategy, ComponentFactoryResolver } from '@angular/core';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { TAB_ID } from './tab-id.injector';
import { TAB_URL } from './tab-url.injector';
import { STATIC_DATA } from './static-data';
import { Newspaper } from './newspaper';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // private readonly _domain = new Subject<String>();
  currentNewspaper: Newspaper;

  // readonly tabId = this._tabId;
  readonly tabUrl = this._tabUrl;
  // readonly domain$ = this._domain
  //   .asObservable()
  //   .pipe(tap(() => setTimeout(() => this._changeDetector.detectChanges())));

  constructor(
    @Inject(TAB_URL) private readonly _tabUrl: string,
    // @Inject(TAB_ID) private readonly _tabId: number,
    private readonly _changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(){
      // chrome.tabs.sendMessage(this.tabId, 'request', domain => {
      //   this._domain.next(
      //     chrome.runtime.lastError
      //       ? 'Domain not available yet'
      //       : domain
      //   );
      // });
 }

 getNewspaper(): Newspaper{
  // console.error(this.tabUrl);
  var matches = this.tabUrl.match(/^https?\:\/\/([^\/?#]+)/);
  let domain = matches && matches[1];  // domain will be null if no match is found
  return STATIC_DATA["newspapersByDomain"][domain];
 }

}
