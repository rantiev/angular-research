import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { SameRequestSharingService } from './same-request-sharing.service';

@Component({
  selector: 'same-request-sharing',
  templateUrl: './same-request-sharing.component.html',
})
export class SameRequestSharingComponent implements OnInit, OnDestroy {
  searchValue = 2;
  subscriptions = new Subscription();

  dataThroughParams$ = this.dataService.dataThroughParams$;
  dataSubscriptionInTemplate$ = new Observable<{message: string}>();

  constructor(private dataService: SameRequestSharingService) {
    this.dataService.searchParams$.next(2);
  }

  ngOnInit() {
    this.subscriptions.add(this.dataService.data$.subscribe());
    this.subscriptions.add(this.dataService.data$.subscribe());
    this.subscriptions.add(this.dataService.dataThroughParams$.subscribe());
    this.subscriptions.add(this.dataService.dataThroughParams$.subscribe());
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  onKeyUp($event) {
    this.dataService.searchParams$.next($event.target.value);
  }

  loadData(x) {
    this.dataSubscriptionInTemplate$ = this.dataService.loadData(x);
  }

  loadDataViaParamsSource(t) {
    this.dataService.paramsSource$.next(t);
  }
}

