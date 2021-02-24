import BranchViewControler from '../viewController/branchViewController'

export default function branchLayout(branch: BranchViewControler) {
  if (!branch) return

  const structObj = branch.getStructureObject()

  // 直接将 topic bounds 赋值 branch bounds
  const bounds = Object.assign({}, branch.topicViewController.bounds)
  structObj.calcAttachedChildrenPos(branch, bounds)
  structObj.specialDeal(branch, bounds) // for fishbone structure.

  branch.bounds = bounds
}