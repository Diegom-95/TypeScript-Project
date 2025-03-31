// INTERFACCE

interface IMezzo {
  tipo: "bici" | "scooter" | "monopattino";
  id: string;
  stato: "disponibile" | "in uso";
  assegnaUtente(utente: IUtente): void;
}

interface IUtente {
  nome: string;
  cognome: string;
  email: string;
  metodoPagamento: "carta"| "paypal"| "googlepay"| "applepay"
  prenotaMezzo(mezzo: IMezzo): void;
}

interface ICitta {
  nome: string;
  mezziDisponibili: IMezzo[];
  aggiungiMezzo(mezzo: IMezzo): void;
}



// CLASSI

class Mezzo implements IMezzo {
  tipo: "bici" | "scooter" | "monopattino";
  id: string;
  stato: "disponibile" | "in uso";

  constructor(tipo: "bici" | "scooter" | "monopattino", id: string) {
    this.tipo = tipo;
    this.id = id;
    this.stato = "disponibile";
  }

  assegnaUtente(utente: IUtente): void {
    if(this.stato === "disponibile") {
      this.stato = "in uso";
      console.log(`Mezzo ${this.tipo} ${this.id} assegnato a ${utente.nome} ${utente.cognome}`);
    } else {
      console.log(`Mezzo ${this.tipo} ${this.id} non disponibile`);
    }
  }
}


class Utente implements IUtente {
  nome: string;
  cognome: string;
  email: string;
  metodoPagamento: "carta" | "paypal" | "googlepay" | "applepay";

  constructor(nome: string, cognome: string, email: string, metodoPagamento:  "carta" | "paypal" | "googlepay" | "applepay" ) {
    this.nome = nome;
    this.cognome = cognome;
    this.email = email;
    this.metodoPagamento = metodoPagamento;
  }

  prenotaMezzo(mezzo: IMezzo): void {
    if(mezzo.stato === "disponibile") {
      mezzo.assegnaUtente(this);
      console.log(`${this.nome} ${this.cognome} ha prenotato il mezzo ${mezzo.tipo} ${mezzo.id}`);
    } else {
      console.log(`il mezzo ${mezzo.tipo} ${mezzo.id} non è disponibile per la prenotazione`);
    }
  }
}


class Citta implements ICitta {
  nome: string;
  mezziDisponibili: IMezzo[];

  constructor(nome: string) {
    this.nome = nome;
    this.mezziDisponibili = [];
  }

  aggiungiMezzo(mezzo: IMezzo): void {
    this.mezziDisponibili.push(mezzo);
    console.log(`Mezzo ${mezzo.tipo} ${mezzo.id} aggiunto alla città di ${this.nome}`)
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