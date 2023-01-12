
//OBS: deixei uns códigos desnecessários aqui para a atividade, mas que vou usar para estudar futuraente

content = document.getElementById('content')
shareButtom = document.getElementById('share') // variável que puxa o que tenho na id share
cor = document.getElementById('cor') // variável que puxa oq tenho na id cor
semCor = document.getElementById('content')

shareButtom.addEventListener('click', ()=>{cor.classList.toggle('color')}) // adicionei um EventListener para observar se acontece
//o evento em questão (click). Se acontecer, realiza a ação que está entre chaves (adicionei a classe color a id cor)
//toggle funciona como interruptor: faz e desfaz
content.addEventListener('click', ()=>{cor.classList.add('share-options')})
