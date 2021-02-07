import { h } from 'preact';
import View from './view'
import ViewType from '../common/constants/views'
import { G, Svg } from '@svgdotjs/svg.js'
import Bounds from '../utils/bounds'

const PADDING = 10
const OFFSET = 5

interface SheetViewProps { bgColor: string, bounds: Bounds }

export default class SheetView extends View<SheetViewProps> {

  type = ViewType.SHEET

  readonly canvas: Svg

  constructor(props: SheetViewProps) {
    super(props)
  }

  render() {
    if (!this.props) return null;

    const { bgColor, bounds } = this.props

    return (
      <svg 
      width={bounds.width + PADDING}
      height={bounds.height + PADDING}
      style={{
        backgroundColor: bgColor,
      }}>
        <g name="sheet" transform={`translate(${-bounds.x},${-bounds.y + OFFSET})`}>
          <g name="connection-container"></g>
          <g name="branch-container"></g>
        </g>
      </svg>
    )
  }

  appendChild(view: View) {
    const { type, content } = view
    if (type === ViewType.BRANCH) {
      this._branchContainer.add(content)
    } else if (type === ViewType.CONNECTION) {
      this._connectionContainer.add(content)
    }
  }
}