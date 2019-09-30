function Calculate_Length() {
    
    let s1 = document.querySelector('#s1').value;
    let s2 = document.querySelector('#s2').value;
    let solution =Math.max(s1.length, s2.length)
    document.getElementById("solution").innerHTML ="the largest length is:" +solution;
  
}
document.addEventListener('click', event => {
  if (event.target && event.target.id === 'addButton') { Calculate_Length(event) }
})

  