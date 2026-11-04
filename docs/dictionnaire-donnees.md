# Dictionnaire des données

> Un champ par ligne, d'après `SUJET.md` et le fichier de `donnees/`. La première ligne sert de modèle.

| Champ | Signification | Type | Règle de validation | Unité | Exemple |
| --- | --- | --- | --- | --- | --- |
| `id` | Identifiant unique | texte | non vide, absent des données | — |  |
| date |date du relevé |nombre | AAA-MM-JJ |-| 2026-10-17|
| TemperatureC |Temperature de l'air au moment du relevé  | nombre| negatif ou decimal possible| °C|26°C |
| pluieMm | pluie en mm | nombre| positif ou nul|mm |12mm |
| HumiditAirPct| humidité  relative de l'air | nombre | nombre entre 0 et 100| %| 82%|

**Listes de valeurs autorisées** : texte , nombre 

**Sources** : SUJET.md
