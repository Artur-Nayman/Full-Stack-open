```mermaid
sequenceDiagram
    participant Selain
    participant Palvelin
    participant Tietokanta

    Selain->>Palvelin: POST /new_note
    Palvelin->>Tietokanta: Tallenna muistiinpano
    Tietokanta-->>Palvelin: OK
    Palvelin-->>Selain: Redirect /notes
    Selain->>Palvelin: GET /notes
    Palvelin-->>Selain: HTML-sivu
    Selain->>Palvelin: GET /notes.json
    Palvelin-->>Selain: JSON-data (sisältää uusi muistiinpano)
