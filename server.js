const express = require("express"); // Framework para criar servidor e rotas
const mysql = require("mysql2"); // Biblioteca para conectar no MySQL
const path = require("path"); // Módulo nativo do Node para lidar com caminhos

const app = express(); // Cria a aplicação Express

// Middleware para interpretar JSON no corpo das requisições
app.use(express.json());

// Middleware para servir arquivos estáticos (HTML, CSS, JS da pasta public/)
app.use(express.static(path.join(__dirname, "public")));

// Conexão com o banco MySQL (via XAMPP)
const db = mysql.createConnection({
  host: "localhost", // Servidor do MySQL
  user: "root", // Usuário padrão do XAMPP
  password: "", // Senha (geralmente vazia no XAMPP)
  database: "SenseCare", // Nome do banco que você criou
});

// POST
app.post("/Pacientes", (req, res) => {
  const {CPF_adicao, // 1. PK_CPF
      nome_adicao, // 2. Nome
      data_adicao, // 3. Data_De_Nascimento
      endereco_adicao, // 4. Endereço
      telefone_adicao, // 5. Telefone
      telefone_responsavel_adicao, // 6. Telefone_Responsavel
      enfermeiro_adicao, // 7. FK_Enfermeiro
      historico_adicao, // 8. Historico
      leito_adicao, // 9. FK_Leito
      nome_da_mae_adicao, // 10. Nome_Mae
      genero_adicao, // 11. Genero
      prioridade_adicao, // 12. Prioridade
      medicacoes_adicao} = req.body; // Extrai os dados enviados pelo front
  db.query(
    "INSERT INTO Pacientes (PK_CPF, Nome, Data_De_Nascimento, Endereço, Telefone, Telefone_Responsavel, FK_Enfermeiro, Historico, FK_Leito, Nome_Mae, Genero, Prioridade, Medicacoes) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)", // Query SQL com placeholders
    [ CPF_adicao, // 1. PK_CPF
      nome_adicao, // 2. Nome
      data_adicao, // 3. Data_De_Nascimento
      endereco_adicao, // 4. Endereço
      telefone_adicao, // 5. Telefone
      telefone_responsavel_adicao, // 6. Telefone_Responsavel
      enfermeiro_adicao, // 7. FK_Enfermeiro
      historico_adicao, // 8. Historico
      leito_adicao, // 9. FK_Leito
      nome_da_mae_adicao, // 10. Nome_Mae
      genero_adicao, // 11. Genero
      prioridade_adicao, // 12. Prioridade
      medicacoes_adicao], // 13. Medicacoes, // Valores que substituem os "?"
    (err, result) => {
      if (err) throw err;
      res.json({ message: "Personagem adicionado com sucesso!" }); // Retorno de sucesso
    }
  );
});
// GET
app.get("/Pacientes", (req, res) => {
  db.query("SELECT * FROM Pacientes", (err, results) => {
    if (err) throw err; // Se der erro na query, interrompe
    res.json(results); // Envia o resultado como JSON para o front
  });
});
app.listen(3000, () =>
  console.log("Servidor rodando em http://localhost:3000/sensecare.html")
)