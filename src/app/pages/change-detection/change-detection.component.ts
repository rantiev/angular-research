import { ChangeDetectorRef, Component, OnInit } from '@angular/core'

@Component({
  selector: 'change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss']
})
export class ChangeDetection implements OnInit {
  tree: any
  changeOnPush: false
  detachAttach: false

  constructor (private cd: ChangeDetectorRef) {
    this.tree = generateTree.call(this, 3)
  }

  ngOnInit () {
    /*setTimeout(() => {
      this.tree[0].children[0].children[0].children[0].children.push({
        name: 'e'
      })
    }, 3000)*/
  }
}

function generateTree (levels: number = 3) {
  let curIndex = 0

  return (function generateNodes (levels = 3, curLevel = 1): any {
    const item: any = {
      name: curIndex,
      children: [],
      cdPushMode: false,
      detached: false
    }

    curLevel++

    if (curLevel <= levels) {
      curIndex++
      item.children.push(generateNodes.call(this, levels, curLevel))
      curIndex++
      item.children.push(generateNodes.call(this, levels, curLevel))
    }

    return item
  }).call(this, levels)
}
