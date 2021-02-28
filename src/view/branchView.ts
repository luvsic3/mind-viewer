import View from './view'
import ViewType from '../common/constants/views'
import Position from '../utils/position'
import { Direction } from '../common/constants/models'
import Bounds from '../utils/bounds'

export interface BranchViewData {
  position: Position
}

export interface BranchViewBackboneData extends BranchViewData {
  direction: Direction.LEFT | Direction.RIGHT
  topicBounds: Bounds
  lineWidth: number
  borderColor: string
  fillColor: string
}

export default class BranchView extends View {

  type = ViewType.BRANCH

  spacingMajor: number
  spacingMinor: number

  constructor() {
    super()
  }
}