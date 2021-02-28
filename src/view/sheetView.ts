import View from './view'
import ViewType from '../common/constants/views'
import Bounds from '../utils/bounds'

export default class SheetView extends View {

  type = ViewType.SHEET

  constructor() {
    super()
  }
}