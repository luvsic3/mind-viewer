import { h } from 'preact';
import View from './view'
import ViewType from '../common/constants/views'
import { Path, SVG } from '@svgdotjs/svg.js'
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

export default class ConnectionView extends View<ConnectionViewData> {

  type = ViewType.CONNECTION

  private readonly _svg: Path

  constructor(props: ConnectionViewData) {
    super(props)
    this._svg = new Path().data('name', 'connection')
  }

  render() {
    const { d, fill, stroke, strokeWidth, maskInfo } = this.props;

    if (maskInfo) {
      const masking = parent.canvas.clip()
      if (masking) {
        const clipRegion = SVG().path().attr({ 
          d: maskInfo.d,
          fill: 'black', 
          transform: maskInfo.transform,
          'clip-rule': 'evenodd' 
        })

        masking.add(clipRegion)
        this._svg.clipWith(masking)
      }
    }
    return (
      <path name="connection" d={d} fill={fill} stroke={stroke} strokeWidth={strokeWidth}>
        
      </path>
    )
  }
}