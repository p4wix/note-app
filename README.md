Backend::
index.js - odpala nam server który słucha domyślnie lokalnie na porcie 3000

config.js - w przypadku gdyby był na hostingu to process.env.PORT czyli tam sobie wybiera domyślny port, jak i baze danych process.env.DATABASE lu domyślnie mongodb na localhoscie

folder routes - przechowuje akcje które maja sie wykonac przy odpowideniej scierzce, dodawanie/usuwanie itp.

folder actions/api - tam znajdują się akcje które kożystają z modelu z pliku z folderu db/models/note. Czyli na podstawie tego szablonu tworzone są akcje które mają się wykonwyać

folder db/models/note tam jest stworzony szablon tego jak wygląda notatka i exportowany.

mongoose.js - połączenie z bazą danych.

Node.js module, express

### `npm i express`

mongodb, object modeling mongoose.

### `npm i mongoose`

w noteActions.js aby móc sczytac wartosc req.body.xxx
w index.js app.use(bodyParser.json()); mówi nodowi ze dane ktore wysłamy będą typu json
npm i body-parser

### `npm i body-parser`

naprawa przesyłu danych z backend do frontend

### `npm i cors`

Frontend:: =========================================================================================================
React

react modal - modelowanie inputow przy edycji

### `npm install --save react-modal`

axios

### `npm install axios`
