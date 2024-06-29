import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
  map,
  mergeMap,
  concatMap,
  share,
  switchMap
} from 'rxjs';

@Injectable()
export class SameRequestSharingService {
  searchParams$ = new BehaviorSubject('rantiev');
  data$ = this.searchParams$.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    switchMap(s => {
    //mergeMap(s => {
    //concatMap(s => {
      return this.http.get(`https://api.github.com/users/${s}/repos`);
    }),
    map((res: any[]) => {
      return res.map(r => r.name).join(', ');
    }),
    share(),
  )

  constructor(private http: HttpClient) {}
}
