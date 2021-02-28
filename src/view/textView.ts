import View from './view'
import FontInfo from '../utils/fontInfo'
import Size from '../utils/size'
import Bounds from '../utils/bounds'
import Position, { isSamePosition } from '../utils/position'
import TitleLayoutWorker from './layoutEngine/titleLayoutWorker'

const ALIGN_MAP = {
  'left': 'start',
  'center': 'middle',
  'right': 'end',
}

export default abstract class TextView extends View {

  private _text: string

  textFnDirty = false

  private _textSize: Size

  private _textPosition: Position
  textPositionDirty = false

  fontInfo: FontInfo

  private _bounds: Bounds = { x: 0, y: 0, width: 0, height: 0 }

  constructor(contentName: string) {
    super()
  }

  set text(text: string) {
    if (this._text !== text) {
      this._text = text
    }
  }

  get text(): string {
    return this._text
  }

  set textSize(textSize: Size) {
    this._textSize = { ...textSize }
    Object.assign(this._bounds, this.textPosition, this._textSize)
  }

  get textSize() {
    return this._textSize
  }

  get bounds() {
    return this._bounds
  }

  set textPosition(textPosition: Position) {
    const newPositionDirty = !this._textPosition || !isSamePosition(this._textPosition, textPosition)
    if (newPositionDirty) {
      this.textPositionDirty = newPositionDirty
    }
    this._textPosition = { ...textPosition }
  }

  get textPosition() {
    return this._textPosition
  }

  get layoutWorker() {
    return new TitleLayoutWorker(this)
  }
}