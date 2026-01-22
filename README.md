

# Site web "FMS Boutique"

## Architecture:

Il ya trois pages:

    - index.html
    - user.html
    - admin.html

- L'application est divisée en composants (components) qui sont insérés dynamiquement dans les pages html via les scripts correpondants (user.js, admin.js).

- Les données sont stockées dans un fichier json situé dans "data".

- Les classes sont dans le dossier du même nom.

- Les fonctions utilitaires sont dans le dossier "utils".

- Enfin, les images sont stockées dans le dossier "assets".

## Fonctionnement

- La page index.html ne sert qu'à entrer dans l'application.

### user.js

- La majeur partie de la logique se trouve dans le script user.js.
Celle-ci sert à afficher les items présents dans item.json sur des "cartes" affichées en grille.
On peut ajouter un item au panier en cliquant sur le bouton correspondant.
Une fois les items ajoutés, on peut ouvrir le panier via l'icone panier sur le header.
Cele ouvre une modale.
Dans cette modale on peut gérer les quantités de chaque item.
Enfin le total du prix s'affiche dynamiquement.

- Il y a des filtres sur la gauche de l'écran (composant UserFilters)
Ceux-ci permettent de filtrer par sexe.

- Enfin, on peut filtrer par catégorie via les boutons sur le header.

- A la validation du panier celui-ci se vide (localStorage) et enregistre à la place (toujours dans le localStorage) une commande.

### admin.js

- Pour pouvoir y accéder il faut cliquer sur l'icone user du header et faire "switch to admin"

- Ici l'admin peut accéder aux commandes enregistrées et les filtrer par date (composant AdminFilters)