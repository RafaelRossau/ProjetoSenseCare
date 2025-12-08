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

    let nome_adicao_VERIFICACAO = false
    let data_adicao_VERIFICACAO = false
    let CPF_adicao_VERIFICACAO = false
    let endereco_adicao_VERIFICACAO = false
    let telefone_adicao_VERIFICACAO = false
    let nome_da_mae_adicao_VERIFICACAO = false
    let enfermeiro_adicao_VERIFICACAO = false
    let historico_adicao_VERIFICACAO = false
    let medicacoes_adicao_VERIFICACAO= false
    let telefone_responsavel_adicao_VERIFICACAO = false
    let leito_adicao_VERIFICACAO = false
    let genero_adicao_VERIFICACAO = false
    let prioridade_adicao_VERIFICACAO = false
   

   if(nome_adicao === ""){
    alert("O nome não pode ficar vázio.")
    nome_adicao_VERIFICACAO = false
   }
   else{
    nome_adicao_VERIFICACAO = true
   }
   if(data_adicao === ""){
    alert("A data não pode ficar vázia.")
    data_adicao_VERIFICACAO = false
   }
   else{
    data_adicao_VERIFICACAO = true
   }
   if(CPF_adicao.length !== 11){
    alert("O CPF inserido não possui 11 digitos.")
    CPF_adicao_VERIFICACAO = false
   }
   else{
    CPF_adicao_VERIFICACAO = true
   }
   if(endereco_adicao === ""){
    alert("O endereço não pode ficar vázio")
    endereco_adicao_VERIFICACAO = false
   }
   else{
    endereco_adicao_VERIFICACAO = true
   }
   if(telefone_adicao.length != 13){
    alert("O telefone tem de ter 13 digitos.")
    telefone_adicao_VERIFICACAO = false
   }
   else{
    telefone_adicao_VERIFICACAO = true
   }
   if(nome_da_mae_adicao === ""){
    nome_da_mae_adicao_VERIFICACAO = false
   }
   else{
    nome_da_mae_adicao_VERIFICACAO = true
   }
   if(enfermeiro_adicao === ""){
    alert("Escolha um enfermeiro responsável pelo paciente")
    enfermeiro_adicao_VERIFICACAO = false
   }
   else{
    enfermeiro_adicao_VERIFICACAO = true
   }
   if(historico_adicao === ""){
    historico_adicao_VERIFICACAO = false
   }
   else{
    historico_adicao_VERIFICACAO = true
   }
   if(medicacoes_adicao === ""){
    medicacoes_adicao_VERIFICACAO = false
   }
   else{
    medicacoes_adicao_VERIFICACAO = true
   }
   if(telefone_responsavel_adicao.length !== 13){
    telefone_responsavel_adicao_VERIFICACAO = false
   }
   else{
    telefone_responsavel_adicao_VERIFICACAO = true
   }
   if(leito_adicao === ""){
    leito_adicao_VERIFICACAO = false
   }
   else{
    leito_adicao_VERIFICACAO = true
   }
   if(genero_adicao === ""){
    genero_adicao_VERIFICACAO = false
   }
   else{
    genero_adicao_VERIFICACAO = true
   }
   if(prioridade_adicao === ""){
    prioridade_adicao_VERIFICACAO = false
   }
   else{
    prioridade_adicao_VERIFICACAO = true
   }

   if((nome_adicao_VERIFICACAO === true) && (data_adicao_VERIFICACAO === true) && (CPF_adicao_VERIFICACAO === true) && (endereco_adicao_VERIFICACAO === true) && (telefone_adicao_VERIFICACAO === true) && (enfermeiro_adicao_VERIFICACAO === true) && (leito_adicao_VERIFICACAO === true) && (genero_adicao_VERIFICACAO === true) && (prioridade_adicao_VERIFICACAO === true)){
   
    if (nome_da_mae_adicao_VERIFICACAO === false || historico_adicao_VERIFICACAO === false || medicacoes_adicao_VERIFICACAO === false || telefone_responsavel_adicao_VERIFICACAO === false) {
        if (confirm("Há opção(ões) opcional(is) em branco ainda, deseja enviar o formulário mesmo assim?")) {
            alert("Cadastro enviado com sucesso!");
            envio_cadastro = true;
        } else {
            return; // Usuário cancelou
        }
    } else {
        alert("Cadastro enviado com sucesso!");
        envio_cadastro = true;
    }
   }
   else{
    // Se não passou na validação dos campos OBRIGATÓRIOS
    return;
   }

   if(envio_cadastro === true){
    fetch("/Pacientes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        CPF_adicao, 
      nome_adicao, 
      data_adicao, 
      endereco_adicao, 
      telefone_adicao, 
      telefone_responsavel_adicao,
      enfermeiro_adicao, 
      historico_adicao, 
      leito_adicao,
      nome_da_mae_adicao, 
      genero_adicao, 
      prioridade_adicao, 
      medicacoes_adicao
    }), 
  });
   }
}