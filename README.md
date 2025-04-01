<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript Badge"/>
  <img src="https://img.shields.io/badge/Moove-Micromobilità-00C4B4?style=for-the-badge&logo=bicycle&logoColor=white" alt="Moove Badge"/>
</p>

# 🚴‍♂️ Moove - Sistema di Micromobilità Condivisa

**Moove** è un progetto sviluppato in **TypeScript** che modella la struttura organizzativa di un innovativo servizio di micromobilità condivisa. Si focalizza sulle interazioni tra utenti, mezzi di trasporto (bici, scooter, monopattini elettrici) e le città servite, offrendo una soluzione scalabile per la mobilità urbana sostenibile.

---

## 🌍 Vision
> 🚲 *Rendere la mobilità urbana più sostenibile, accessibile e condivisa, migliorando la vita quotidiana delle persone.*

## 🎯 Mission
> Offrire soluzioni di micromobilità flessibili, convenienti ed ecologiche per ridurre il traffico e l'impatto ambientale degli spostamenti in città.

---

## 🛠 Struttura del Progetto

- **Interfacce**:  
  - `IMezzo`  
  - `IUtente`  
  - `ICitta`  
  Definisco i componenti principali del sistema.

- **Classi**:  
  - `Mezzo`  
  - `Utente`  
  - `Citta`  
  Implementano la logica operativa.

- **File principale**:  
  - `src/app.ts` - Contiene il codice TypeScript con test di esempio.

### 🔩 Componenti Principali
| Componente   | Descrizione                                                                 |
|--------------|-----------------------------------------------------------------------------|
| **IMezzo**   | Rappresenta i mezzi (bici, scooter, monopattini) con `tipo`, `id`, `stato` e il metodo `assegnaUtente`. |
| **IUtente**  | Modella gli utenti con nome, cognome, email e il metodo `prenotaMezzo`.     |
| **ICitta**   | Gestisce le città con un elenco di mezzi e il metodo `aggiungiMezzo`.       |

---

## ⚡ Codice
Esplora il codice completo qui:  
👉 [**CodePen**](https://codepen.io/Diego-Maggioni/pen/gbOQGaK)

---

## 📦 Installazione
1. Clona il repository:
   ```bash
   git clone https://github.com/Diegom-95/moove-micromobility.git
   cd moove-micromobility

---

## 📧 Contattami
Hai domande o suggerimenti? Scrivimi!  
📩 **Email**: [diegomaggioni95@gmail.com](mailto:diegomaggioni95@gmail.com)

---

## ✍️ Autore
**Diego Maggioni**  
🎓 *Studente start2impact*  
🌐 [**GitHub**](https://github.com/Diegom-95) | [**CodePen**](https://codepen.io/Diego-Maggioni/pen/gbOQGaK)

---

<p align="center">
  <em>Progetto realizzato per Start2Impact </em>
</p>