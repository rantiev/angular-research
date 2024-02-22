import { Component, ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'encapsulation-shadow',
  templateUrl: './encapsulation-shadow.component.html',
  styleUrls: ['./encapsulation-shadow.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class EncapsulationShadow {

}

