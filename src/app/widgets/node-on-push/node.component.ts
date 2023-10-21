import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { NodeComponent } from '../node/node.component'

@Component({
  selector: 'node-on-push',
  templateUrl: '../node/node.component.html',
  styleUrls: ['../node/node.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NodeOnPushComponent extends NodeComponent {
}
