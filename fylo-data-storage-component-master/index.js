var value = document.getElementById('myRange'),
used = document.getElementById('used')
left = document.getElementById('left')

value.onchange= ()=>{
    slideValue= value.value
    used.innerHTML = slideValue
    left.innerHTML = 1000-slideValue
}