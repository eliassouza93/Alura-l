var titulo = document.querySelector('.titulo');
titulo.textContent='Aparecida Nutricionista!'

var pacientes = document.querySelectorAll('.paciente');

for (var i =0; i < pacientes.length; i++){

    var paciente = pacientes [i];

    var tdPeso = paciente.querySelector('.info-peso');
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector('.info-altura');
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector('.info-imc');

    var pesoValido = true;
    var alturaValida = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido!");
        pesoValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add('paciente-invalido')
        
      
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura inválida!");
        alturaValida = false;
        
        
    }

  if (alturaValida && pesoValido) {
        var imc =   calculaImc(peso,altura)
        tdImc.textContent = imc.toFixed(2);
    }
}

titulo.addEventListener('click', mostraMensagem);

function mostraMensagem(){
    console.log('Ola eu fui clicado!')

}


var botaoAdicionar = document.querySelector('#adicionar-paciente')
botaoAdicionar.addEventListener('click',function(event){
    event.preventDefault();

    var form = document.querySelector('#form-adiciona');
    //extraindo informaçoes do paciente form
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value
    //cria tr e td paciente
    var pacienteTr = document.createElement('tr');

    var nomeTd = document.createElement('td')
    var pesoTd = document.createElement('td')
    var alturaTd = document.createElement('td')
    var gorduraTd = document.createElement('td')
    var imcTd = document.createElement('td')

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd)
    // adicionando o paciente na tabela
    var tabela = document.querySelector('#tabela-pacientes');

    tabela.appendChild(pacienteTr);
    
});

function calculaImc( peso, altura){
    var imc = 0;
    imc = peso / (altura * altura)
    return imc;
}

