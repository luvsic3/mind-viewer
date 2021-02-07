import ViewControllerType from '../common/constants/viewControllers'
import View from '../view/view'
import Model from '../model/model'
import { Component } from 'preact'

export default abstract class ViewController<P = any> extends Component<P> {
  constructor(props?: P) {
    super(props)
  }

  abstract get type(): ViewControllerType
  abstract get model(): Model
}