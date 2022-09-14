function verificar(){
    var data =new Date()
    var ano= data.getFullYear()
    var fano=document.getElementById("txtano")
var res=document.getElementById('res')
if (fano.value.length==0|| Number(fano.value>ano)){
    window.alert("[ERRO] Verifique os dados e tente novamente!")
}
else{
  var fsex=document.getElementsByName('radsex')
  var idade=ano-Number(fano.value)
  var genero=''
  var img= document.createElement('img')
  img.setAttribute('id','foto')
  if (fsex[0].checked){
    genero='Homem'
    if(idade>=0 && idade <10){
        //criança
        img.setAttribute('src','pexels-8.png')
    }else if(idade < 21){
        //jovem
        img.setAttribute('src','pexels-6.png')
    }else if(idade<50){
        //adulto
        img.setAttribute('src','pexels-7.png')
    }else{
        //idoso
        img.setAttribute('src','pexels-4.png')
    }
  } else if(fsex[1].checked){
    genero='mulher'
    if(idade>=0 && idade <10){
        //criança
        img.setAttribute('src','pexels-5.png')
    }else if(idade<21){
        //jovem
        img.setAttribute('src','pexels-1.png')
    }else if(idade<50){
        //adulto
        img.setAttribute('src','pexels-3.png')
    }else{
        //idoso
        img.setAttribute('src','pexels-2.png')
    }
  }
  res.style.textAlign='center'
  res.innerHTML=`Detectamos ${genero} com idade ${idade} anos`
  res.appendChild(img)
}

}
