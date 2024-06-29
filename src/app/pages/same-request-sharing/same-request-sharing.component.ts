import { Component } from '@angular/core'
import { SameRequestSharingService } from './same-request-sharing.service';

@Component({
  selector: 'same-request-sharing',
  templateUrl: './same-request-sharing.component.html',
})
export class SameRequestSharingComponent {
  searchValue = 'rantiev';
  data$ = this.dataService.data$;

  constructor(private dataService: SameRequestSharingService) {
    this.dataService.searchParams$.next('misha');

    setTimeout(() => {
      this.dataService.searchParams$.next('alex');
    }, 10);

    setTimeout(() => {
      this.dataService.searchParams$.next('rantiev');
    }, 10);
  }

  onKeyUp($event) {
    this.dataService.searchParams$.next($event.target.value);
  }
}

