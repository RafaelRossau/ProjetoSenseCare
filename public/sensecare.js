let confirmacao = false
let envio_cadastro = false

function enviarFormularioPaciente(){
    let nome_adicao = document.getElementById("Nome").value.trim();
    let data_adicao = document.getElementById("Data_De_Nascimento").value.trim();
    let CPF_adicao = document.getElementById("PK_CPF").value.trim();
    let endereco_adicao = document.getElementById("Endereco").value.trim();
    let telefone_adicao = document.getElementById("Telefone").value.trim();
    let nome_da_mae_adicao = document.getElementById("Nome_Mae").value.trim();
    // O campo "procedimento_adicao" não está na sua lista SQL, foi removido.
    let enfermeiro_adicao = document.getElementById("FK_Enfermeiro").value.trim();
    let historico_adicao = document.getElementById("Historico").value.trim();
    let medicacoes_adicao = document.getElementById("Medicacoes").value.trim();
    let telefone_responsavel_adicao = document.getElementById("Telefone_Responsavel").value.trim();
    let leito_adicao = document.getElementById("FK_Leito").value.trim();
    let genero_adicao = document.getElementById("Genero").value;
    let prioridade_adicao = document.getElementById("Prioridade").value;
   

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
   if(CPF_adicao.length !== 11){
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
   if(telefone_responsavel_adicao.length !== 13){
    telefone_responsavel_adicao = false
   }
   else{
    telefone_responsavel_adicao = true
   }
   if(leito_adicao === ""){
    leito_adicao = false
   }
   else{
    leito_adicao = true
   }
   if(genero_adicao === ""){
    genero_adicao = false
   }
   else{
    genero_adicao = true
   }
   if(prioridade_adicao === ""){
    prioridade_adicao = false
   }
   else{
    prioridade_adicao = true
   }

   if((nome_adicao === true) && (data_adicao === true) && (CPF_adicao === true) && (telefone_adicao === true) && (enfermeiro_adicao === true) && (leito_adicao === true) && (genero_adicao === true)){
    confirmacao = true
   
   if((confirmacao === true) && (nome_da_mae_adicao === false) || (procedimento_adicao === false) || (historico_adicao === false) || (medicacoes_adicao === false)){
    if (confirm("Há opção(ões) opcional(is) em branco ainda, deseja enviar o formulario mesmo assim?")){
        alert("Cadastro enviado com sucesso!")
        envio_cadastro = true
    }
    else{
        return;
    }
   }
}
   else if((nome_adicao === true) && (data_adicao === true) && (CPF_adicao === true) && (telefone_adicao === true) && (enfermeiro_adicao === true) && (nome_da_mae_adicao === true) && (procedimento_adicao === true) && (historico_adicao === true) && (medicacoes_adicao === true)){
    alert("Cadastro enviado com sucesso!")
    envio_cadastro = true
   }
   else{
    return;
   }
   if(envio_cadastro === true){
    fetch("/Pacientes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({nome_adicao, data_adicao, CPF_adicao, endereco_adicao, telefone_adicao, nome_da_mae_adicao, enfermeiro_adicao, historico_adicao, medicacoes_adicao, telefone_responsavel_adicao,leito_adicao, genero_adicao, prioridade_adicao }), // manda o objeto js para o banco como json
  });
   }

}
