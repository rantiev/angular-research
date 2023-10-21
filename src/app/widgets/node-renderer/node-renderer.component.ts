import { Component, Input } from '@angular/core'

@Component({
  selector: 'node-renderer',
  templateUrl: './node-renderer.component.html',
  styleUrls: ['./node-renderer.component.scss']
})
export class NodeRendererComponent {
  @Input() node: any
  @Input() doToggleCDMode: boolean
  @Input() doDetachAttach: boolean

  onClick ($event) {
    $event.stopImmediatePropagation()

    if (this.doToggleCDMode) {
      this.node.cdPushMode = !this.node.cdPushMode
    }
  }
}
