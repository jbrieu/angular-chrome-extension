import { ChangeDetectorRef, Component, Inject} from '@angular/core';
import { TAB_URL } from './tab-url.injector';
import { STATIC_DATA } from './static-data';
import { Newspaper } from './newspaper';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentNewspaper: Newspaper;

  readonly tabUrl = this._tabUrl;

  constructor(
    @Inject(TAB_URL) private readonly _tabUrl: string,
    private readonly _changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(){

 }

 getNewspaper(): Newspaper{
  var matches = this.tabUrl.match(/^https?\:\/\/([^\/?#]+)/);
  let domain = matches && matches[1];  // domain will be null if no match is found
  return STATIC_DATA["newspapersByDomain"][domain];
 }

}
