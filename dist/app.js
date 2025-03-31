"use strict";
// INTERFACCE
// CLASSI
class Mezzo {
    tipo;
    id;
    stato;
    constructor(tipo, id) {
        this.tipo = tipo;
        this.id = id;
        this.stato = "disponibile";
    }
    assegnaUtente(utente) {
        if (this.stato === "disponibile") {
            this.stato = "in uso";
            console.log(`Mezzo ${this.tipo} ${this.id} assegnato a ${utente.nome} ${utente.cognome}`);
        }
        else {
            console.log(`Mezzo ${this.tipo} ${this.id} non disponibile`);
        }
    }
}
class Utente {
    nome;
    cognome;
    email;
    metodoPagamento;
    constructor(nome, cognome, email, metodoPagamento) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metodoPagamento = metodoPagamento;
    }
    prenotaMezzo(mezzo) {
        if (mezzo.stato === "disponibile") {
            mezzo.assegnaUtente(this);
            console.log(`${this.nome} ${this.cognome} ha prenotato il mezzo ${mezzo.tipo} ${mezzo.id}`);
        }
        else {
            console.log(`il mezzo ${mezzo.tipo} ${mezzo.id} non è disponibile per la prenotazione`);
        }
    }
}
class Citta {
    nome;
    mezziDisponibili;
    constructor(nome) {
        this.nome = nome;
        this.mezziDisponibili = [];
    }
    aggiungiMezzo(mezzo) {
        this.mezziDisponibili.push(mezzo);
        console.log(`Mezzo ${mezzo.tipo} ${mezzo.id} aggiunto alla città di ${this.nome}`);
    }
}
// TEST DEL SISTEMA
// Creazione dei mezzi
let bici1 = new Mezzo("bici", "B001");
let scooter1 = new Mezzo("scooter", "S001"); // Correzione qui
let monopattino1 = new Mezzo("monopattino", "M001");
// Creazione degli utenti
let utente1 = new Utente("Marco", "Rossi", "marco.rossi@email.com", "carta");
let utente2 = new Utente("Francesca", "Bianchi", "francybianchi@email.com", "applepay");
// Creazione della città
let firenze = new Citta("Firenze");
// Aggiunta dei mezzi alla città
firenze.aggiungiMezzo(bici1);
firenze.aggiungiMezzo(scooter1);
firenze.aggiungiMezzo(monopattino1);
// Test delle prenotazioni
utente1.prenotaMezzo(bici1);
utente2.prenotaMezzo(scooter1);
utente2.prenotaMezzo(monopattino1);
// Verifica dello stato finale
console.log(`\nStato finale dei mezzi a Firenze:`);
firenze.mezziDisponibili.forEach(mezzo => {
    console.log(`- ${mezzo.tipo} ${mezzo.id}: ${mezzo.stato}`);
});
