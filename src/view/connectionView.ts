import View from './view'
import ViewType from '../common/constants/views'
import SheetView from './sheetView'

const MASK_BOUNDS = { x: -10000, y: -10000, width: 20000, height: 20000 }
export const MASK_OUTERD = `
  M ${MASK_BOUNDS.x} ${MASK_BOUNDS.y}
  L ${MASK_BOUNDS.x + MASK_BOUNDS.width} ${MASK_BOUNDS.y}
  L ${MASK_BOUNDS.x + MASK_BOUNDS.width} ${MASK_BOUNDS.y + MASK_BOUNDS.height}
  L ${MASK_BOUNDS.x} ${MASK_BOUNDS.y + MASK_BOUNDS.height}
`

export interface MaskInfo {
  d: string,
  transform: string
}

export interface ConnectionViewData {
  d: string,
  fill: string,
  stroke: string,
  strokeWidth: number,
  maskInfo?: MaskInfo
}

export default class ConnectionView extends View {

  type = ViewType.CONNECTION

  constructor() {
    super()
  }
}