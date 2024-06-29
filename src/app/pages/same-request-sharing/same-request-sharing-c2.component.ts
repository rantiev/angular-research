import { Component, OnInit } from '@angular/core';
import { SameRequestSharingC1Component } from './same-request-sharing-c1.component';
import { SameRequestSharingService } from './same-request-sharing.service';

@Component({
  selector: 'same-request-sharing-c2',
  template: '<h2>Component 2 result:</h2><p>{{ res }}</p>',
})
export class SameRequestSharingC2Component extends SameRequestSharingC1Component {}

