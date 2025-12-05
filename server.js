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
  const {nome_adicao, data_adicao, CPF_adicao, endereco_adicao, telefone_adicao, nome_da_mae_adicao, procedimento_adicao, enfermeiro_adicao, historico_adicao, medicacoes_adicao} = req.body; // Extrai os dados enviados pelo front
  db.query(
    "INSERT INTO Pacientes (PK_CPF, Nome, Data_De_Nascimento, Endereço, Telefone, Telefone_Responsavel, FK_Enfermeiro, Historico, FK_Leito, Nome_Mae, Genero, Prioridade, Medicacoes) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)", // Query SQL com placeholders
    [ nome_adicao, data_adicao, CPF_adicao, endereco_adicao, telefone_adicao, nome_da_mae_adicao, procedimento_adicao, enfermeiro_adicao, historico_adicao, medicacoes_adicao], // Valores que substituem os "?"
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
  console.log("Servidor rodando em http://localhost:3000/")
)