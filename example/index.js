import contentData from './content.json'
import { SnowbrushRenderer } from '../src/index'

load(contentData)

document.getElementById('input-dialog').addEventListener('input', function() {
  const inputEle = this
  if (inputEle.files.length === 0) { 
    return 
  }

  const file = inputEle.files[0]
  const fileName = inputEle.value
  const reader = new FileReader()

  reader.readAsArrayBuffer(file)
})

document.getElementById('open-file').addEventListener('click', function(){
  const input = document.getElementById('input-dialog')
  input.click()
})

function load(data) {
  console.log('data :>> ', data);
  const container = document.getElementById('page-content')
  if (container.children.length > 0) {
    container.innerHTML = ''
  }

  const renderer = new SnowbrushRenderer(data)
  renderer.render()
  
  console.log('render :>> ', (renderer._sheetViewController._centralBranchViewController));
  const rendererBounds = renderer.bounds

  const clientWidth = container.clientWidth
  const clientHeight = container.clientHeight
  const width = Math.max(clientWidth, rendererBounds.width)
  const height = Math.max(clientHeight, rendererBounds.height)

  const rendererContainer = document.createElement('div')
  rendererContainer.setAttribute('style', `width: ${width * 2}; height: ${height * 2}; position: relative;`)
  rendererContainer.className = 'sheet-container'
  container.append(rendererContainer)
  
  container.scrollTo(width - clientWidth / 2, height - clientHeight / 2)
}

const Keys = ['bounds', 'position', 'model']

function stringify(obj) {
  return JSON.stringify(obj, function (key, val) {
    if (key && Keys.includes(key)) return JSON.stringify(val);
    return undefined;
  })
}