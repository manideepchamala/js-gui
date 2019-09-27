const updateWithAdd = async (event) => {
    
    const depth = parseInt(document.querySelector('#guest').value)
    const height = parseInt(document.querySelector('#firstNumber').value)
    const width = parseInt(document.querySelector('#secondNumber').value)
    const result=(height)*(width)*(depth)
    document.querySelector('#result').innerHTML = result
  
}
document.addEventListener('click', event => {
  if (event.target && event.target.id === 'addButton') { updateWithAdd(event) }
})
