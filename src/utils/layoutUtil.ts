import BranchViewControler from '../viewController/branchViewController'

export default function branchLayout(branch: BranchViewControler) {
  if (!branch) return

  const structObj = branch.getStructureObject()

  // 计算 branch bounds 和 children 的 position
  const bounds = Object.assign({}, branch.topicViewController.bounds)
  structObj.calcAttachedChildrenPos(branch, bounds)
  structObj.specialDeal(branch, bounds) // for fishbone structure.

  branch.bounds = bounds
}