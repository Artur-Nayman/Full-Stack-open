```mermaid
sequenceDiagram
    participant Selain
    participant Palvelin
    participant Tietokanta

    Selain->>Palvelin: GET /spa
    Palvelin-->>Selain: HTML (sisältää main.js)
    Selain->>Palvelin: GET /main.js
    Palvelin-->>Selain: JavaScript
    Selain->>Palvelin: GET /data.json
    Palvelin-->>Selain: JSON-data (lista muistiinpanoista)

    Note over Selain: Käyttäjä lisää uuden muistiinpanon
    Selain->>Palvelin: POST /new_note_spa
    Palvelin->>Tietokanta: Tallenna muistiinpano
    Tietokanta-->>Palvelin: OK
    Palvelin-->>Selain: JSON-data (uusi muistiinpano)

    Selain->>Selain: Päivitä näkymä ilman sivun latausta
