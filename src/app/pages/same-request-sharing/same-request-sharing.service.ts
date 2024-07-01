import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  share,
  switchMap, catchError, of, Subscription, Subject, Observable
} from 'rxjs';

const apiUrl = 'http://localhost:3333'

@Injectable()
export class SameRequestSharingService {
  subscriptions = new Subscription();
  searchParams$ = new Subject<number>();
  paramsSource$ = new Subject<number>();

  data$ = this.searchParams$.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    switchMap(t => {
      return this.http.get(`${apiUrl}/data/${t}`);
    }),
    catchError(err => {
      return of([{ name: 'Error catched not to cancel Observable' }]);
    }),
    map((res: any) => {
      return res.message;
    }),
    share(),
  )
  dataThroughParams$ = this.paramsSource$.pipe(
    switchMap(t => {
      return this.http.get(`${apiUrl}/data/${t}`);
    }),
    catchError(err => {
      return of([{ name: 'Error catched not to cancel Observable' }]);
    }),
    map((res: any) => {
      return res.message;
    }),
    share(),
  )

  constructor(private http: HttpClient) {}

  loadData(t): Observable<{ message: string }> {
    this.subscriptions.unsubscribe();

    const request = this.http.get<{ message: string }>(`${apiUrl}/data/${t}`);
    const subscription = request.subscribe();

    this.subscriptions = subscription;

    return request;
  }
}
