🏥 SenseCare

Plataforma de monitoramento de sinais vitais, gestão de alertas e acompanhamento de cuidados para enfermagem.

🎯 Visão do Produto

PARA enfermeiros que precisam acompanhar múltiplos pacientes simultaneamente, sem precisar estar fisicamente no quarto, o SenseCare É UMA plataforma integrada de monitoramento (Wearable + Web) QUE envia alertas imediatos sobre anomalias vitais, horários de medicamentos e pendências de cuidados.
DIFERENTEMENTE DE métodos tradicionais como campainhas sonoras de quarto ou checagens manuais, O NOSSO SISTEMA oferece respostas rápidas, silenciosas, personalizadas e diretamente no pulso do profissional, garantindo maior segurança ao paciente e eficiência ao enfermeiro.

👥 Persona e Contexto

Perfil: Enfermeiro responsável por diversos pacientes simultaneamente, utilizando smartwatch + web.

🔴 A Dor (O Problema)

“Estou atendendo um paciente e não sei se o alerta que tocou em outro quarto é algo crítico ou apenas um pedido simples. Não consigo priorizar, e isso coloca o paciente em risco.”

🟢 Solução SenseCare

A plataforma identifica a gravidade automaticamente e envia notificações classificadas por prioridade (verde, amarelo, vermelho), como:

“Leito 8 – Pressão acima do limite – Prioridade Alta”

“Leito 2 – Horário do medicamento – Prioridade Média”

O enfermeiro entende imediatamente o que precisa ser atendido agora e o que pode esperar.

🛠 Funcionalidades do Sistema
🔥 Prioridade ALTA (Essencial para o MVP)
1. Cadastro de Paciente

Nome, leito e dados básicos.

Associado ao wearable/pulseira do paciente.

2. Login do Enfermeiro

Acesso via CIP + Senha.

Após login, visualiza somente seus pacientes.

3. Alerta de Medicação

Sistema notifica automaticamente quando chega o horário do remédio.

Envio ao painel e ao smartwatch.

4. Lista de Pacientes sob Cuidados

Cards mostrando somente os pacientes do enfermeiro logado.

Exibe status atual e alertas ativos.

5. Configurações (Pareamento das Pulseiras)

Interface simples para sincronizar pulseiras IoT ao paciente.

Base de identificação única por ID.

6. Alertas de Anomalias do Paciente

Classificação automática por prioridade:

🟢 Baixa — situação estável

🟡 Média — situação de atenção

🔴 Alta — estado crítico

Os alertas aparecem destacados visualmente na plataforma e no smartwatch.

7. Alertas Pendentes

Lista de todos os alertas ainda não atendidos.

Evita que algum risco passe despercebido.

8. Agenda de Cuidados

Lista de horários e rotinas essenciais do paciente.

Facilita a organização das atividades do plantão.

9. Cuidados Necessários do Paciente

Lista de procedimentos personalizados:

Troca de curativo

Medicação específica

Ajuste de hidratação

Exercícios fisioterápicos

Etc.

10. Cadastro do Enfermeiro

Feito externamente (fora da plataforma web).

O sistema apenas aceita login via contas já registradas.

⚠️ Prioridade MÉDIA
1. Encaminhar Paciente Crítico para Outro Enfermeiro

Transferência rápida caso o enfermeiro esteja atendendo outro caso de alta gravidade.

O sistema identifica automaticamente profissionais livres.

2. Edição de Dados do Paciente

Alteração de informações básicas.

Ajuste dos limites de anomalia vitais.

3. Histórico de Alertas do Paciente

Registro completo de alertas anteriores.

Ajuda o enfermeiro a antecipar situações de risco.

4. Botão de Logout

Necessário para troca de pulseira, troca de turno ou segurança da sessão.

🧊 Prioridade BAIXA
1. Edição de Dados do Enfermeiro

Nome, telefone ou informações não críticas.

Não altera o funcionamento geral.

2. Botões de Acesso Rápido

Atalhos opcionais para telas frequentes.

O sistema já é pensado para ser simples.

3. Excluir Paciente

Realizado por administradores externos.

Não disponível diretamente no sistema.

💻 Como Rodar o Projeto
# 1. Clone o repositório
git clone <seu-repositorio>

# 2. Entre no diretório
cd sensecare

# 3. Instale as dependências
npm install

# 4. Configure o banco de dados (.env)
# Ajuste as credenciais e tabelas necessárias

# 5. Rode o servidor
npm start