import BaseMap from './baseMap'
import BranchViewController from '../viewController/branchViewController'
import Bounds from '../utils/bounds'
import { TopicType, Direction } from '../common/constants/models'
import StructureClass from '../common/constants/structures'

export default class MapClockWise extends BaseMap {

  calcAttachedChildrenPos(branch: BranchViewController, bounds: Bounds) {
    console.log('centralBranch initial bounds', JSON.stringify(bounds))
    // centralBranch 坐标即子 branch 坐标的范围矩形
    if (branch.isCentralBranch()) {
      const children = branch.getChildrenByType(TopicType.ATTACHED)
      if (children.length) {
        const spacingMajor = this.calcSpacingMajor(branch)
        const spacingMinor = branch.view.spacingMinor || 0
        const rightSideCount = this.calcRightSideCount(branch)

        // 布局右子 branch
        const rightSideChildren = children.slice(0, rightSideCount)
        this.calcSidePos(rightSideChildren, Direction.RIGHT, bounds, spacingMajor, spacingMinor, true)
        
        // 布局左子 branch
        const leftSideChildren = children.slice(rightSideCount).reverse()
        this.calcSidePos(leftSideChildren, Direction.LEFT, bounds, spacingMajor, spacingMinor, false)

        // 计算 centralBranch 范围矩形
        this.calcBounds(branch, bounds)
      }
    }
  }

  getChildStructure(parent: BranchViewController, child: BranchViewController) {
    const index = parent.getChildrenByType(child.model.type).indexOf(child)
    if (index < this.calcRightSideCount(parent)) {
      return StructureClass.LOGIC_RIGHT
    }
    return StructureClass.LOGIC_LEFT
  }

}