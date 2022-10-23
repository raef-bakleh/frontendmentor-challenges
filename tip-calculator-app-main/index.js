const bill = document.getElementById('billAmount')
const tip = document.querySelectorAll('#grid-item')
const people = document.getElementById('people')
const proPerson = document.getElementById('personAmount')
const total = document.getElementById('totalAmount')
const gridItem = document.querySelectorAll('#grid-item')
const reset = document.querySelector('#reset')
const customInput= document.getElementById('grid-Custom')
var proPerosonBox = document.getElementById('personAmount')
var totalBox= document.getElementById('totalAmount')

customInput.addEventListener('click',()=>{
    gridItem.forEach(element =>{
        element.style.backgroundColor= "hsl(183, 100%, 15%)"
    })
})
customInput.addEventListener('change',()=>{
    
    inputValue= customInput.value.replace(/\%/g," ")
    prozent=inputValue
    calculate()
})

reset.addEventListener('click',()=>{
    proPerson.innerHTML = "$" + "0.00"
    bill.value = ""
    people.value=""
    total.innerHTML = "$" + "0.00"
    tip.value=""
    customInput.value=""
    gridItem.forEach(element=>{
        element.style.backgroundColor="hsl(183, 100%, 15%)"
    })
})

gridItem.forEach(element => {
    element.addEventListener('click',(e)=>{
        gridItem.forEach((grid)=>{
            grid.style.backgroundColor="hsl(183, 100%, 15%)"
            customInput.value=""
            e.target.style.backgroundColor="hsl(172, 67%, 45%)"
        }
        
        )
        

        })
        

    
});

var amount;
var billamount;
var prozent=0;

function calculate(){
    if(people.value=="" || bill.value=="" || prozent==0){
        return;
    }
    proPerson.innerHTML = "$"+ parseFloat(prozent*billamount/100).toFixed(2);
    total.innerHTML = "$" + parseFloat(prozent*billamount/100*amount).toFixed(2)
    var p = proPerson.innerHTML.split('.')
    var t = total.innerHTML.split('.')
    if(p[0].length>4 && p[0].length<6 ){
        proPerosonBox.style.fontSize="40px"
        totalBox.style.fontSize="40px"
    }
    else if(p[0].length>6){
        proPerosonBox.style.fontSize="30px"
        totalBox.style.fontSize="20px"
    }
 
    

}
var peopleAmount= people.addEventListener('change',()=>{
    amount=people.value
    calculate()
    
})
var billAmount = bill.addEventListener('change',()=>{
    billamount= bill.value
    calculate()
})

var perecentage = window.addEventListener("DOMContentLoaded",(event)=>{
      tip.forEach(element =>{
        element.addEventListener('click',()=>{
            prozent = element.innerHTML.replace(/\%/g," ")
            calculate()
        })
      }
        )
})
