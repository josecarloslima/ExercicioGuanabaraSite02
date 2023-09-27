function verificar(){

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        // perceba que o nome redsex é igual para fem e mas isso para que a escolha seja um ou outro
        // para diferenciar vamos usar [0] para mas e [1] para fem, por isso o "s" no .getElements
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
      
      var gênero = '' 
      var img = document.createElement('img')
      img.setAttribute('id', 'foto') 

      if (fsex[0].checked){
        gênero = 'Masculino'
        if(idade >= 0 && idade < 10){
            // Criança
            img.setAttribute('src', 'fotocriancahomem.png')
        } else if (idade < 21){
            // Jovem
            img.setAttribute('src', 'fotojovemhomem.png')
        } else if (idade < 50){
            // Adulto
            img.setAttribute('src', 'fotoadultohomem.png')
        } else {
            //Idoso
            img.setAttribute('src', 'fotoidodohomem.png')
        }

      } else {
        gênero = 'Feminino'
        if(idade >= 0 && idade < 10){
            // Criança
            img.setAttribute('src', 'fotocriancamulher.png')
        } else if (idade < 21){
            // Jovem
            img.setAttribute('src', 'fotojovemmulher.png')
        } else if (idade < 50){
            // Adulta
            img.setAttribute('src', 'fotoadultamulher.png')
        } else {
            //Idosa
            img.setAttribute('src', 'fotoidosamulher.png')
        }
      }

      res.style.textAlign = 'center'
      res.innerHTML = `Gênero: ${gênero}; Idade: ${idade} anos.`
      res.appendChild(img)

    }
}