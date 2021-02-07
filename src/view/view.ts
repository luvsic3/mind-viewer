import ViewType from '../common/constants/views'
import Size from '../utils/size'
import { isSameSize } from '../utils/bounds'
import { Component } from 'preact'

export default abstract class View<P = any> extends Component<P> {

  abstract readonly type: ViewType

  private _size: Size
  sizeDirty = false

  private _prefSize: Size

  constructor(props?: P) { 
    super(props)
  }

  set size(size: Size) {
    if (this._size && isSameSize(this._size, size)) return

    this._size = size
    this.sizeDirty = true
  }

  get size() {
    return this._prefSize ? this._prefSize : this._size
  }

  set preferredSize(preferredSize: Size) {
    if (this._prefSize && preferredSize && isSameSize(this._prefSize, preferredSize)) {
      return
    }
    this._prefSize = preferredSize
  }

  get preferredSize(): Size {
    return this._prefSize
  }
}