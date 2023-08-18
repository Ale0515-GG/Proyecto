CREATE DATABASE SaludParaTi;

USE SaludParaTi;


CREATE TABLE Login (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Correo VARCHAR(100) UNIQUE NOT NULL,
    Contrasena VARCHAR(100) NOT NULL
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
    Especialidad VARCHAR(180),
    NomPaciente VARCHAR(100),
    NumTelefono VARCHAR(15),
    Motivo VARCHAR(100)
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
    Fecha DATETIME,
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