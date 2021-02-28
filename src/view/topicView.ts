import View from './view'
import ViewType from '../common/constants/views'
import Position, { isSamePosition } from '../utils/position'
import { getTopicShape } from './renderEngine/topicShape'

export default class TopicView extends View {

  type = ViewType.TOPIC

  topicShapeClass: string = 'org.xmind.topicShape.roundedRect'

  lineWidth: number
  lineCorner: number
  borderColor: string
  borderWidth: number

  marginTop: number
  marginLeft: number
  marginRight: number
  marginBottom: number

  minimumWidth: number

  private _lineColor: string
  lineColorDirty = false

  private _fillColor: string
  fillColorDirty = false

  private _topicShapePath: string
  topicShapePathDirty = false

  private _topicShapeGroupPosition: Position
  topicShapeGroupPositionDirty = false

  private _topicContentPosition: Position
  topicContentPositionDirty = false

  private _topicInnerElementPosition: Position
  topicInnerElementPositionDirty = false

  constructor() {
    super()
  }

  set lineColor(lineColor: string) {
    if (this._lineColor !== lineColor) {
      this._lineColor = lineColor
      this.lineColorDirty = true
    }
  }

  get lineColor() {
    return this._lineColor
  }

  set fillColor(fillColor: string) {
    if (this._fillColor !== fillColor) {
      this._fillColor = fillColor
      this.fillColorDirty = true
    }
  }

  get fillColor() {
    return this._fillColor
  }

  set topicShapeGroupPosition(topicShapeGroupPosition: Position) {
    const newPositionDirty = !this._topicShapeGroupPosition || !isSamePosition(this._topicShapeGroupPosition, topicShapeGroupPosition)
    if (newPositionDirty) {
      this.topicShapeGroupPositionDirty = newPositionDirty
    }
    this._topicShapeGroupPosition = { ...topicShapeGroupPosition }
  }

  set topicContentPosition(topicContentPosition: Position) {
    const newPositionDirty = !this._topicContentPosition || !isSamePosition(this._topicContentPosition, topicContentPosition)
    if (newPositionDirty) {
      this.topicContentPositionDirty = newPositionDirty
    }
    this._topicContentPosition = { ...topicContentPosition }
  }

  get topicContentPosition(): Position {
    return this._topicContentPosition
  }

  set topicInnerElementPosition(topicInnerElementPosition: Position) {
    const newPositionDirty = !this._topicInnerElementPosition || !isSamePosition(this._topicInnerElementPosition, topicInnerElementPosition)
    if (newPositionDirty) {
      this.topicInnerElementPositionDirty = newPositionDirty
    }
    this._topicInnerElementPosition = { ...topicInnerElementPosition }
  }

  set topicShapePath(path: string) {
    if (this._topicShapePath !== path) {
      this._topicShapePath = path
      this.topicShapePathDirty = true
    }
  }

  get topicShapePath(): string {
    return this._topicShapePath
  }

  get topicShape() {
    return getTopicShape(this.topicShapeClass)
  }
}