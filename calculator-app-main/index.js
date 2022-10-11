const toggleButton= document.querySelectorAll('[data-num]')
const resetButton=document.querySelector('[reset]')
const operatorsButton= document.querySelectorAll("[data-operator]")
const equalButton = document.querySelector('[equal]')
const display = document.querySelector('.middle')
const deleteButton = document.querySelector("[delete]")
const currentHTML = document.querySelector(".current")
const afterHTML = document.querySelector(".after")
const resultButton= document.querySelector('[equal]')
const operator=document.querySelector(".operator")
const theme=document.querySelectorAll("input")
const links = document.querySelectorAll("link");



theme.forEach(element => {
    element.addEventListener('click',()=>{
        i =element.value
        links[1].setAttribute('href',`styles${i}.css`)

})
})
function results() {
    let result;
    cur=parseFloat(currentHTML.innerText)
    aft=parseFloat(afterHTML.innerText)
    if(afterHTML.innerText=== "" && currentHTML.innerText !==""){
        result=cur
        currentHTML.innerText=result
        operator.innerText=""
        afterHTML.innerText=""
    }
    else if(currentHTML.innerText !== "" && afterHTML.innerText !==""){
        switch(operator.innerText){
        case "+":
            result=cur + aft
            break;
        case "-":
            result=aft - cur
            break;
        case "x":
            result=cur * aft
            break;
        case "/":
            result=aft / cur
            break;
        }
        currentHTML.innerText=result
        operator.innerText=""
        afterHTML.innerText=""
    }
    else if(currentHTML.innerText == "" && afterHTML.innerText ==""){
        currentHTML.style.fontSize="20px"
        currentHTML.style.textAlign="center" 
        currentHTML.style.paddingBottom="20px"     
        currentHTML.style.color="red" 
        currentHTML.innerHTML="Not possible please enter a Value"
        operator.innerText=""
        afterHTML.innerText=""
        setTimeout(function(){
        window.location.reload();},1800)
}





}

resultButton.addEventListener('click',()=>{
    results();
})



operatorsButton.forEach(elem =>{
    elem.addEventListener('click',()=>{
        if(afterHTML.innerText !== ""&& currentHTML.innerText!==""){
            results();
        }else if(afterHTML.innerText !== "" &&operator.innerHTML===""){
            afterHTML.innerText=afterHTML.innerText
            operator.innerText=elem.innerText
        }else if(currentHTML.innerText===""){
            switch(elem.innerText){
                case "/":
                    return;
                    break;
                case "x":
                    return;
                    break;
                case "+":
                    currentHTML.innerText=elem.innerText
                    break;
                case "-":
                    currentHTML.innerText=elem.innerText
                    break;        
                    
            }
        }else if(operator.innerText!=="" && currentHTML.innerText===""){
            operator.innerText=elem.innerText
        }
        else{
        afterHTML.innerText = currentHTML.innerText
        operator.innerText=elem.innerText
        currentHTML.innerText=""}
        
    })
})

resetButton.addEventListener('click',()=>{
    setTimeout(function(){
        afterHTML.innerText =""
        currentHTML.innerText=""
        operator.innerText=""
    },100);  
    return true;  
})

toggleButton.forEach(element => {
    element.addEventListener('click',()=>{
    innerValue =element.innerText
    currentHTML.innerText += innerValue
})
});


deleteButton.addEventListener('click',()=>{
    if(currentHTML.innerText!==""){
        currentHTML.innerText = currentHTML.innerText.slice(0,-1)
    }
    else if(operator.innerText!==""){
        operator.innerText = ""
        currentHTML.innerText=afterHTML.innerText
        afterHTML.innerText=""
        
    }
    else{
        afterHTML.innerText = afterHTML.innerText.slice(0,-1)
    }
})










