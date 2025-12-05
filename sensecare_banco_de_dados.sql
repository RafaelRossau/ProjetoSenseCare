CREATE DATABASE SenseCare;
USE SenseCare;

CREATE TABLE Pacientes(
PK_CPF CHAR(11) PRIMARY KEY NOT NULL,
Nome VARCHAR(50) NOT NULL,
Data_De_Nascimento DATE NOT NULL,
Endereço VARCHAR(50) NOT NULL,
Telefone CHAR(13),
Telefone_Responsavel CHAR(13),
FK_Enfermeiro CHAR(4) NOT NULL,
FOREIGN KEY (FK_Enfermeiro) REFERENCES Enfermeiros(PK_ID),
Historico VARCHAR(9999),
FK_Leito CHAR(3) NOT NULL,
FOREIGN KEY (FK_Leito) REFERENCES Leito(PK_Leito),
Nome_Mae varchar(50) NOT NULL,
Genero VARCHAR(50) NOT NULL CHECK (Genero IN ("Feminino", "Masculino", "Outro")),
Prioridade VARCHAR(50) NOT NULL CHECK (Prioridade IN ("Nenhuma", "Gestante", "Neurodivergência")),
Medicacoes VARCHAR(100) NOT NULL
);

CREATE TABLE Enfermeiros(
PK_ID CHAR(4) NOT NULL PRIMARY KEY,
UNIQUE_SmartWatch_ID CHAR(3) NOT NULL UNIQUE,
Senha VARCHAR(10) NOT NULL,
FK_ID_Hospital CHAR(5) NOT NULL,
FOREIGN KEY (FK_ID_Hospital) REFERENCES Hospital(PK_Hospital)
);

CREATE TABLE SmartWatch(
FK_SmartWatch_ID CHAR(3) NOT NULL,
FOREIGN KEY(FK_SmartWatch_ID) REFERENCES Enfermeiros(UNIQUE_SmartWatch_ID),
FK_CPF CHAR(11) NOT NULL,
FOREIGN KEY (FK_CPF) REFERENCES Pacientes(PK_CPF),
Procedimentos VARCHAR(9999),
Alertas DATE
);

CREATE TABLE Hospital(
Localização VARCHAR(50) NOT NULL,
Nome VARCHAR(50) NOT NULL,
FK_Leito CHAR(3) NOT NULL,
FOREIGN KEY (FK_Leito) REFERENCES Leito(PK_Leito),
Quantidade_Leitos CHAR(3) NOT NULL,
Leitos_Ocupados CHAR(3),
PK_Hospital CHAR(5) NOT NULL PRIMARY KEY
);

CREATE TABLE Leito(
PK_Leito CHAR(3) PRIMARY KEY NOT NULL,
Disponibilidade CHAR(3) CHECK (Disponibilidade IN ("Não", "Sim")),
Ala CHAR(3) NOT NULL
);