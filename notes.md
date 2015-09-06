# React

# Qu'est-ce que React ?

  - Une librairie
  - Trois inovations:
    - Un moteur de rendu
    - Une remire en question de nos habitudes
    - Une direction unique
  - Mais pas que...

# Une librairie

  - Ne s'occupe que du rendu de la vue
  - Ne remplace pas (forcément) vos frameworks

## Un moteur de rendu

### Virtual DOM

  - S'occupe des intéractions avec le DOM
  - Isole le métier de la UI (votre code) du support qui l’affiche (le navigateur via le DOM)
    - On ne s’occupe pas de la mutation du DOM. Que de ça structure finale.
  - Optimise et harmonise la manipulation du DOM
    - On ne met à jours le DOM que si le vDOM change
  - Une technique éprouvée pour rendu 3D lourd

## Des composants

### JSX : mélange de JavaScript et de HTML (et même de CSS)

(exemple de composant: hello world sans JSX, puis avec)

### Props, states and context sont sur un bateau...

(exemple intératif avec enrichissement: introduction des props, propTypes, states, initial state, évoquer l'existance du context)

  - Comunications unidirectionnelles
  - Isolation
  - Dépendences explicites
  - Aucune mutation du DOM

# Un paradigme

  - De UI mais pas que...

## Flux

  - Une communication uni-directionnelle poussé à l'extrême

(Schema du flux de base)

  - Renforce **encore** la séparation des responsabilitées

## Et si...

## Isomorphisme

### Flux et Isomorphisme

💔💔💔

  - L'implémentation originale de Facebook ne fonctionne pas coté serveur
  - Besoin d'utiliser une implémentation
