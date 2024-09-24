USE master;
GO

DROP DATABASE IF EXISTS rezervacijateniskihterena;
GO

CREATE DATABASE rezervacijateniskihterena;
GO

USE rezervacijateniskihterena;

CREATE TABLE igraci (
    sifra INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    ime VARCHAR(50) NOT NULL,
    prezime VARCHAR(50) NOT NULL,
    email VARCHAR(70) NOT NULL,
    brojmobitela VARCHAR(15) NOT NULL
);

CREATE TABLE tereni (
    sifra INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    naziv VARCHAR(50) NOT NULL,
    vrstapodloge VARCHAR(20) NOT NULL,
    maxigraca INT DEFAULT 2
);

CREATE TABLE termini (
    sifra INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    vrijeme DATETIME NOT NULL,
    trajanjetermina INT NOT NULL,
    cijena DECIMAL(6,2) NOT NULL,
    terensifra INT NOT NULL,
    igracisifra INT NOT NULL,
    FOREIGN KEY (terensifra) REFERENCES tereni(sifra),
    FOREIGN KEY (igracisifra) REFERENCES igraci(sifra)
);
