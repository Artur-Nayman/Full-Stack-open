```mermaid
sequenceDiagram
    participant Selain
    participant Palvelin
    participant Tietokanta

    Note over Selain: Käyttäjä luo uuden muistiinpanon SPA:ssa
    Selain->>Palvelin: POST /new_note_spa
    Palvelin->>Tietokanta: Tallenna muistiinpano
    Tietokanta-->>Palvelin: OK
    Palvelin-->>Selain: JSON-data (uusi muistiinpano)
    Selain->>Selain: Päivitä näkymä ilman sivun latausta
