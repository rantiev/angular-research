import { Component, OnInit } from '@angular/core';
import { SameRequestSharingService } from './same-request-sharing.service';

@Component({
  selector: 'same-request-sharing-c1',
  template: '<h2>Component 1 result:</h2><p>{{ res }}</p>',
})
export class SameRequestSharingC1Component implements OnInit {
  res: string;

  constructor(private dataService: SameRequestSharingService) {

  }

  ngOnInit() {
    this.dataService.data$.subscribe((res: string) => {
      this.res = res;
    });
  }
}

