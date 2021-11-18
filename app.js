var i = 0 , x , auto = setInterval(function(){
    x = document.querySelectorAll('section > main > section article > div section > span:nth-child(1) > button')
    x.forEach(function(cadaBoton){
        var meGusta = cadaBoton.querySelector('span[aria-label="Ya no me gusta"')
        if( meGusta == undefined ){
            cadaBoton.click()
        }
    })
    window.scrollTo( 0, window.innerHeight * i )
    i++
},500)