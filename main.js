
const form = document.getElementById('form-agenda');
const imgCelular = '<img src=./images/celular.png alt="telefone celular"/>';
const imgFixo = '<img src=./images/fixo.png alt="telefone fixo"/>';
const nomes = [];
const telefones = [];




let linhas = '';

form.addEventListener('submit',function(e) {
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()
    atualizaResumo()
    
})



function adicionaLinha (){
    const inputNome = document.getElementById('nome-cadastro');
    const inputTelefone = document.getElementById('telefone-cadastro');
    const eCelular = inputTelefone.value.length > 10;
    console.log(eCelular);
    
    if(nomes.includes(inputNome.value) && telefones.includes(inputTelefone.value)){
        alert(`Nome ${inputNome.value} e Telefone ${inputTelefone.value} já cadastrados`);
    }else{

    nomes.push(inputNome.value);
    telefones.push(inputTelefone.value);
    let numeroFormatado = ''
    if (eCelular){
        numeroFormatado = `(${inputTelefone.value.slice(0,2)})${inputTelefone.value.slice(2,7)}-${inputTelefone.value.slice(7,11)}`
        }else{numeroFormatado =`(${inputTelefone.value.slice(0,2)})${inputTelefone.value.slice(2,6)}-${inputTelefone.value.slice(6,11)}`
    }
    let linha ='<tr>';    
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${numeroFormatado}</td>`;
    linha += `<td> ${eCelular ? imgCelular : imgFixo}</td>`;
    linha += '<tr>';

    linhas += linha
    }


    inputNome.value = '';
    inputTelefone.value = '';
}

function validaCel(){
    return inputTelefone.value.length == 11
}


function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaResumo(){
    let telefonesPlural =''
    if (telefones.length  == 1){
        telefonesPlural =''
    }else{
        telefonesPlural ='s'
    }
    document.getElementById('resumo').innerHTML = `A Agenda possui ${telefones.length} telefone${telefonesPlural} cadastrado${telefonesPlural}`;
}

