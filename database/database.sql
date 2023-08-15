CREATE DATABASE SaludParaTi;

USE SaludParaTi;

CREATE TABLE Trabajador (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(100) NOT NULL,
    Correo VARCHAR(100) UNIQUE NOT NULL,
    Telefono VARCHAR(15) NOT NULL,
    Contrasena VARCHAR(100) NOT NULL,
    ReContrasena VARCHAR(100) NOT NULL
);



CREATE TABLE Paciente(
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(180),
    Telefono VARCHAR(15),
    fecha_nacimiento DATE NOT NULL,
    Genero VARCHAR(30)
);

CREATE TABLE Medico (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(100) NOT NULL,
    Especialidad VARCHAR(100),
    Telefono VARCHAR(15),
    Correo VARCHAR(100)
);

CREATE TABLE Cita(
    IdCita INT PRIMARY KEY AUTO_INCREMENT,
    idPaciente INT,
    idMedico INT,
    Especialidad VARCHAR(180),
    NomMedico VARCHAR(100),
    NomPaciente VARCHAR(100),
    NumTelefono VARCHAR(15),
    Motivo VARCHAR(100),
    Horario TIME,
	FOREIGN KEY (idPaciente) REFERENCES Paciente(Id), 
    FOREIGN KEY (idMedico) REFERENCES Medico(Id)
);	

CREATE TABLE Expediente(
    idExpediente INT PRIMARY KEY AUTO_INCREMENT,
    idPaciente INT,
    idMedico INT,
    Nombre VARCHAR(100),
    Edad INT,
    Direecion VARCHAR(100),
    Telefono VARCHAR(15),
    Genero VARCHAR(100),
	Sintomas VARCHAR(180),
	Diagnostico VARCHAR(100),
    Tratamiento VARCHAR(180),
    MedRecetado VARCHAR(200),
    Fecha DATE,
    MedicoTratante VARCHAR(100),
    Nota VARCHAR(200),
	FOREIGN KEY (idPaciente) REFERENCES Paciente(Id),
    FOREIGN KEY (idMedico) REFERENCES Medico(Id)
);

DESCRIBE Paciente;
DESCRIBE Medico;
DESCRIBE Cita;
DESCRIBE Paciente;
DESCRIBE Expediente;