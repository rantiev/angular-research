import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  DoCheck, ElementRef,
  Input, NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core'
import { MainService } from '../../shared/services/main.service'

@Component({
  selector: 'vis',
  templateUrl: './vis.component.html',
  styleUrls: ['./vis.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VisComponent implements DoCheck, OnChanges, OnInit,
  OnDestroy, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked {
  @Input() name: string
  @Input() onPushDetection: boolean
  clickTimes: number = 0

  constructor (private cd: ChangeDetectorRef,
    public el: ElementRef, public mainService: MainService) {}

  ngOnChanges () {
    console.log(`${this.name} ngOnChanges`)
    //debugger // eslint-disable-line
  }

  ngOnInit () {
    console.log(`${this.name} ngOnInit`)
    //debugger // eslint-disable-line
  }

  ngDoCheck () {
    console.log(`${this.name} ngDoCheck`)
    //debugger // eslint-disable-line
  }

  ngAfterContentInit () {
    console.log(`${this.name} ngAfterContentInit`)
    //debugger // eslint-disable-line
  }

  ngAfterContentChecked () {
    console.log(`${this.name} ngAfterContentChecked`)
    //debugger // eslint-disable-line
  }

  ngAfterViewInit () {
    console.log(`${this.name} ngAfterViewInit`)
    //debugger // eslint-disable-line
  }

  ngAfterViewChecked () {
    console.log(`${this.name} ngAfterViewChecked`)
    //debugger // eslint-disable-line
    this.mainService.toggleClass(this.el)
  }

  onClick () {
    console.log(`${this.name} onClick`)
    //debugger // eslint-disable-line

    this.clickTimes = this.clickTimes + 1
  }

  ngOnDestroy () {
    console.log(`${this.name} ngOnDestroy`)
    //debugger // eslint-disable-line
  }
}
