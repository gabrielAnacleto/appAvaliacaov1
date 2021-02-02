function contar1(){
    let dobraSub7 = document.getElementById('txt7D1')
    let dobraTri7 = document.getElementById('txt7D2')
    let dobraP7 = document.getElementById('txt7D3')
    let dobraAmed7 = document.getElementById('txt7D4')
    let dobraSIi7 = document.getElementById('txt7D5')
    let dobraAbd7 = document.getElementById('txt7D6')
    let dobraFem7 = document.getElementById('txt7D7')
    let res1 = document.getElementById('res1')
    let Idade7 = document.getElementById('txt7I')
    if (dobraSub7.value.length == 0 || dobraTri7.value.length == 0 || dobraP7.value.length == 0 ||
        dobraAmed7.value.length == 0 ||dobraSIi7.value.length == 0 ||dobraAbd7.value.length == 0 ||dobraFem7.value.length == 0 
        || Idade7.value.length == 0
        
          )
        {window.alert('[ERRO] Faltam Dobras')
    } else {
        res1.innerHTML = 'Contando:'
        
    let Tr= Number(dobraTri7.value) 
    let P= Number(dobraP7.value) 
    let Am= Number(dobraAmed7.value) 
    let SI= Number(dobraSIi7.value) 
    let AB= Number(dobraAbd7.value) 
    let Fe= Number(dobraFem7.value) 
    let I= Number(Idade7.value)
    
    let DencidadeCorporal  =1.112-0.00043499 * (Tr+P+Am+SI+AB+Fe) + 0.00000055 * (Tr+P+Am+SI+AB+Fe) * 2 - 0.00028826 * (I)

    let percentualDeGordura = [(4.95 / DencidadeCorporal) - 4.50] * 100 

 res1.innerHTML +=percentualDeGordura.toFixed([2])
    } 
}




function contar2(){
    let dobraSub4 = document.getElementById('txt3D1')
    let dobraTri4 = document.getElementById('txt3D2')
    let dobraSI4 = document.getElementById('txt3D3')
    let dobraAbd4 = document.getElementById('txt3D4')
    let res2 = document.getElementById('res2')
    

    if (dobraSub4.value.length == 0 || dobraTri4.value.length == 0 || dobraSI4.value.length == 0 ||dobraAbd4.value.length == 0  )
    { window.alert('[ERRO] Faltam Dobras')
    }  else {
        res2.innerHTML = 'Contando:'
        let tr = Number(dobraTri4.value)
        let si = Number (dobraSI4.value)
        let sb = Number(dobraSub4.value)
        let ab = Number(dobraAbd4.value)
        let percentualDeGordura =  (tr +si +sb + ab) * 0.153 + 5.783
        
        res2.innerHTML += percentualDeGordura.toFixed([2])
    }
        
    


}

function contar3(){
    let altura = document.getElementById('txtIMC1')
    let peso = document.getElementById('txtIMC2')
    let res3 = document.getElementById('res3')
    
    if (altura.value.length == 0 || peso.value.length == 0  ){window.alert('[ERRO] Faltam Dados')

} else { 
    res3.innerHTML = 'Contando:'
    let a = Number(altura.value)
    let p = Number(peso.value)

    let resultadoIMC = p /(a * a)

    res3.innerHTML += `${resultadoIMC.toFixed([2])} `


}
   

}