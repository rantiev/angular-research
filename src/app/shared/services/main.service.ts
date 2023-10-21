import { ElementRef, Injectable, NgZone } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private zone: NgZone) {}

  toggleClass(el: ElementRef) {
    const vis = el.nativeElement.querySelector('.node__name')
    vis.classList.add('flickering')

    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        vis.classList.remove('flickering')
      }, 2000)
    })
  }
}
