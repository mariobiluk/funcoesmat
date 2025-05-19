let res=document.getElementById('res')

function convertGrausRad(angulo){
    return (angulo*Math.PI)/180
}

function calcular(){
    let angulo=Number(document.getElementById('angulo').value)

    let angRad = convertGrausRad(angulo)
    console.log(angRad)

    let valCos = Math.cos(angRad)
    console.log(valCos)

    let valSen=Math.sin(angRad)
    console.log(valSen)

    res.innerHTML=``
    res.innerHTML+=`O Cosseno de ${angulo}º é: ${valCos.toFixed(3)}<br>`
    res.innerHTML+=`O Seno de ${angulo}º é: ${valSen.toFixed(3)}<br>`
}
