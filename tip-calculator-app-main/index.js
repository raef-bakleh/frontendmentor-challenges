const bill = document.getElementById('billAmount')
const tip = document.querySelectorAll('#grid-item')
const people = document.getElementById('people')
const proPerson = document.getElementById('personAmount')
const total = document.getElementById('totalAmount')
const gridItem = document.querySelectorAll('#grid-item')
const reset = document.querySelector('#reset')

reset.addEventListener('click',()=>{
    proPerson.innerHTML = "$" + "0.00"
    bill.value = ""
    people.value=""
    total.innerHTML = "$" + "0.00"
    tip.value=""
    gridItem.forEach(element=>{
        element.style.backgroundColor="hsl(183, 100%, 15%)"
    })
})

gridItem.forEach(element => {
    element.addEventListener('click',(e)=>{
        gridItem.forEach((grid)=>
        grid.style.backgroundColor="hsl(183, 100%, 15%)")

        e.target.style.backgroundColor="hsl(172, 67%, 45%)"

        })
        

    
});

var amount;
var billamount;
var prozent;

function calculate(){
    proPerson.innerHTML = "$"+ parseFloat(prozent*billamount/100).toFixed(2);
    total.innerHTML = "$" + parseFloat(prozent*billamount/100*amount).toFixed(2)
}
var peopleAmount= people.addEventListener('change',()=>{
    amount=people.value
    calculate()
    
})
var billAmount = bill.addEventListener('change',()=>{
    billamount= bill.value
})

var perecentage = window.addEventListener("DOMContentLoaded",(event)=>{
      tip.forEach(element =>{
        element.addEventListener('click',()=>{
            prozent = element.innerHTML.replace(/\%/g," ")
        })
      }
        )
})
