const EventEmitter = require('events');

class Blog extends EventEmitter {
  constructor() {
    super();
    this.articoli = [];
  }

  pubblicaArticolo(titolo, autore) {
    const articolo = {
      id: this.articoli.length + 1,
      titolo,
      autore,
      data: new Date()
    };

    this.articoli.push(articolo);

    // Emette l'evento 'nuovo-articolo' con i dati dell'articolo
    this.emit('nuovo-articolo', articolo);
  }
}

// Istanza di Blog
const blog = new Blog();

// Dati di supporto
const iscritti = ['mario@example.com', 'anna@example.com', 'luca@example.com'];
let contatoreArticoli = 0;
const log = [];

// Listener 1: invia email agli iscritti
blog.on('nuovo-articolo', (articolo) => {
  iscritti.forEach((email) => {
    console.log(`[EMAIL] Inviata a ${email}: nuovo articolo "${articolo.titolo}" di ${articolo.autore}`);
  });
});

// Listener 2: aggiorna il contatore
blog.on('nuovo-articolo', (articolo) => {
  contatoreArticoli++;
  console.log(`[CONTATORE] Articoli pubblicati: ${contatoreArticoli}`);
});

// Listener 3: registra nel log
blog.on('nuovo-articolo', (articolo) => {
  const voce = `${articolo.data.toISOString()} - Articolo #${articolo.id} "${articolo.titolo}" pubblicato da ${articolo.autore}`;
  log.push(voce);
  console.log(`[LOG] ${voce}`);
});

// Pubblica alcuni articoli
blog.pubblicaArticolo('Introduzione a Node.js', 'Giulia');
console.log('---');
blog.pubblicaArticolo('Gli eventi in Node.js', 'Marco');
console.log('---');
blog.pubblicaArticolo('Programmazione asincrona', 'Giulia');

// Verifica finale

console.log('Articoli nel blog:', blog.articoli.length);
console.log('Contatore:', contatoreArticoli);
console.log('Voci nel log:', log.length);
console.log('Listener registrati:', blog.listenerCount('nuovo-articolo'));
