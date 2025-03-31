# Moove - Sistema di Micromobilità Condivisa

Questo progetto implementa un sistema in **TypeScript** per modellare la struttura organizzativa di *Moove*, un servizio di micromobilità condivisa. Si concentra sulle interazioni tra utenti, mezzi di trasporto (bici, scooter, monopattini elettrici) e le città servite.

## Vision
🚲 Rendere la mobilità urbana più sostenibile, accessibile e condivisa, migliorando la vita quotidiana delle persone.

## Mission
Offrire soluzioni di micromobilità flessibili, convenienti ed ecologiche per ridurre il traffico e l'impatto ambientale degli spostamenti in città.

## Struttura del Progetto
- **Interfacce**: `IMezzo`, `IUtente`, `ICitta` definiscono i componenti principali del sistema.
- **Classi**: `Mezzo`, `Utente`, `Citta` implementano la logica operativa.
- **File principale**: `src/app.ts` contiene il codice TypeScript con test di esempio.

### Componenti Principali
- **IMezzo**: Rappresenta i mezzi di trasporto con proprietà come `tipo`, `id`, `stato` e il metodo `assegnaUtente`.
- **IUtente**: Modella gli utenti con informazioni personali e il metodo `prenotaMezzo`.
- **ICitta**: Gestisce le città servite, con un elenco di mezzi disponibili e il metodo `aggiungiMezzo`.

## :e-mail: Contact Me
Any questions? Send me an e-mail here: diegomaggioni95@gmail.com


## :black_nib: Authors

* **Diego Maggioni** - *start2Impact student* - [Diego Maggioni](https://github.com/Diegom-95)