let confirmacao = false
let envio_cadastro = false

function enviarFormularioPaciente(){
   const nome_adicao = document.getElementById("nome_adicao").value;
   const data_adicao = document.getElementById("data_adicao").value;
   const CPF_adicao = document.getElementById("CPF_adicao").value;
   const endereco_adicao = document.getElementById("endereco_adicao").value;
   const telefone_adicao = document.getElementById("telefone_adicao").value;
   const nome_da_mae_adicao = document.getElementById("nome_da_mae_adicao").value;
   const procedimento_adicao = document.getElementById("procedimento_adicao").value;
   const enfermeiro_adicao = document.getElementById("enfermeiro_adicao").value;
   const historico_adicao = document.getElementById("historico_adicao").value;
   const medicacoes_adicao = document.getElementById("medicacoes_adicao").value;
   

   if(nome_adicao === ""){
    alert("O nome não pode ficar vázio.")
    nome_adicao = false
   }
   else{
    nome_adicao = true
   }
   if(data_adicao === ""){
    alert("A data não pode ficar vázia.")
    data_adicao = false
   }
   else{
    data_adicao = true
   }
   if(CPF_adicao.length != 11){
    alert("O CPF inserido não possui 11 digitos.")
    CPF_adicao = false
   }
   else{
    CPF_adicao = true
   }
   if(endereco_adicao === ""){
    alert("O endereço não pode ficar vázio")
    endereco_adicao = false
   }
   else{
    endereco_adicao = true
   }
   if(telefone_adicao.length != 13){
    alert("O telefone tem de ter 13 digitos.")
    telefone_adicao = false
   }
   else{
    telefone_adicao = true
   }
   if(nome_da_mae_adicao === ""){
    nome_da_mae_adicao = false
   }
   else{
    nome_da_mae_adicao = true
   }
   if(procedimento_adicao === ""){
    procedimento_adicao = false
   }
   else{
    procedimento_adicao = true
   }
   if(enfermeiro_adicao === ""){
    alert("Escolha um enfermeiro responsável pelo paciente")
    enfermeiro_adicao = false
   }
   else{
    enfermeiro_adicao = true
   }
   if(historico_adicao === ""){
    historico_adicao = false
   }
   else{
    historico_adicao = true
   }
   if(medicacoes_adicao === ""){
    medicacoes_adicao = false
   }
   else{
    medicacoes_adicao = true
   }

   if((nome_adicao = true) && (data_adicao = true) && (CPF_adicao = true) && (telefone_adicao = true) && (enfermeiro_adicao = true)){
    confirmacao = true
   }
   if((confirmacao = true) && (nome_da_mae_adicao = false) || (procedimento_adicao = false) || (historico_adicao = false) || (medicacoes_adicao = false)){
    if (confirm("Há opção(ões) opcional(is) em branco ainda, deseja enviar o formulario mesmo assim?")){
        alert("Cadastro enviado com sucesso!")
        envio_cadastro = true
    }
    else{
        return;
    }
   }
   if((nome_adicao = true) && (data_adicao = true) && (CPF_adicao = true) && (telefone_adicao = true) && (enfermeiro_adicao = true) && (nome_da_mae_adicao = true) && (procedimento_adicao = true) && (historico_adicao = true) && (medicacoes_adicao = true)){
    alert("Cadastro enviado com sucesso!")
    envio_cadastro = true
   }
}