var slide = document.getElementById('slide'),
    sliderDiv = document.getElementById("dollar"),
    viewsChange= document.getElementById("views");

slide.onchange = function() {
        sliderDiv.innerHTML= "$"+ this.value;
        var price = sliderDiv.innerHTML.replace(/\$/g, " ")
        console.log(price)
        if(slide.value >= 25)
        {viewsChange.innerHTML = price * 3 +"K" + " PAGEVIEWS"
    }
        else{
            viewsChange.innerHTML = price * 2 +"K" + " PAGEVIEWS"

        }
        
    }
