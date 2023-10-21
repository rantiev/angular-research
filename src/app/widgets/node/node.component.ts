import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  DoCheck,
  ElementRef,
  EventEmitter, HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output, SimpleChanges,
  ViewEncapsulation,
} from '@angular/core'
import { MainService } from '../../shared/services/main.service'

@Component({
  selector: 'node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NodeComponent implements  DoCheck, OnChanges, OnInit,
  OnDestroy, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked {
  @Input() node: any
  @Input() doToggleCDMode: boolean
  @Input() doDetachAttach: boolean
  @HostBinding('class.node_detached') get detached() { return this.node.detached; }

  clickTimes = 0

  constructor (private cd: ChangeDetectorRef, public el: ElementRef, public mainService: MainService) {}

  ngOnChanges (changes: SimpleChanges) {
    console.log(`${this.node.name} ngOnChanges`)
    //debugger // eslint-disable-line
  }

  ngOnInit () {
    console.log(`${this.node.name} ngOnInit`)
    //debugger // eslint-disable-line
  }

  ngDoCheck () {
    console.log(`${this.node.name} ngDoCheck`)
    //debugger // eslint-disable-line
  }

  ngAfterContentInit () {
    console.log(`${this.node.name} ngAfterContentInit`)
    //debugger // eslint-disable-line
  }

  ngAfterContentChecked () {
    console.log(`${this.node.name} ngAfterContentChecked`)
    //debugger // eslint-disable-line
  }

  ngAfterViewInit () {
    console.log(`${this.node.name} ngAfterViewInit`)
    //debugger // eslint-disable-line
  }

  ngAfterViewChecked () {
    console.log(`${this.node.name} ngAfterViewChecked`)
    //debugger // eslint-disable-line
    this.mainService.toggleClass(this.el)
  }

  onClick ($event) {
    $event.stopImmediatePropagation()
    if (this.doToggleCDMode)  {
      this.node.cdPushMode = !this.node.cdPushMode
    }

    if (this.doDetachAttach)  {
      this.node.detached = !this.node.detached

      setTimeout(() => {
        if (this.node.detached) {
          this.cd.detach()
        } else {
          this.cd.reattach()
        }
      })
    }

    this.clickTimes = this.clickTimes + 1
  }

  ngOnDestroy () {
    console.log(`${this.node.name} ngOnDestroy`)
    //debugger // eslint-disable-line
  }
}
