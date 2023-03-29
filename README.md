# Modèle d'API avec Express

Ceci est un modèle d'API pour le projet web en IG3 à Polytech Montpellier (2022 - 2023). Le serveur utilise Node JS avec le framework Express.

## Table des matières

- [Les technologies utilisées](#les-technologies-utilisées)

- [La structure des fichiers](#la-structure-des-fichiers)

- [Installation et exécution de l'application](#installation-et-exécution-de-lapplication)

## Les technologies utilisées

**Node.js :** environnement d'exécution JavaScript qui permet d'exécuter du JavaScript en dehors d'un navigateur web.
Pour exécuter un fichier JavaScript, tapez `node mon_fichier.js`
comme vous le feriez en Python avec la commande `python mon_fichier.py`.

**NPM (Node Package Manager) :** gestionnaire de paquets (librairies) pour Node.js. Il est utilisé pour les intaller avec leurs dépendances (comme pip en Python). Lorsque vous initialisez un projet Node.js avec `npm init`, un fichier package.json est créé. Il garde la trace des métadonnées de votre projet, des paquets et de leurs dépendances. Utilisez `npm install` pour installer les paquets et leurs dépendances.

Les outils suivants sont des librairies installées à l'aide de NPM : 

**express :** framework qui simplifie le processus de gestion des requêtes et réponses HTTP.

**nodemon :** module qui redémarre automatiquement le serveur lorsque le code est modifié. Il n'est utilisé qu'en local, dans un environnement de développement.

**dotenv :** outil qui charge les variables d'environnement depuis le fichier .env. Les variables d'environnement sont des variables accessibles depuis n'importe où dans votre projet, qui stockent des informations sensibles telles que les informations d'identification de la base de données. 
⚠️ Le fichier .env ne doit jamais être envoyé sur un repository Git distant pour des raisons de sécurité.

**helmet :** middleware qui aide à sécuriser vos applications Express en définissant divers en-têtes HTTP.

## La structure des fichiers

**controllers/ :** Contient le code responsable de la gestion des entrées utilisateur, de l'interaction avec les modèles et du renvoi des réponses appropriées.

**middleware/ :** Contient des fonctions exécutées entre la requête et la réponse pour des tâches telles que l'authentification, la gestion des erreurs et la validation des requêtes.

**models/ :** Contient la logique pour interagir avec la base de données.

**routes/ :** Contient les définitions des routes et leurs contrôleurs associés. Séparer les routes permet de gérer, mettre à jour et tester plus facilement les points de terminaison individuels.

**app.js :** Initialise l'application, configure les middlewares et les routes. Ce fichier sert de point central pour configurer votre application.

**index.js :** Le point d'entrée de l'application, responsable du démarrage du serveur et de l'écoute des requêtes entrantes.

## Installation et exécution de l'application

1. Installez Node.js : https://nodejs.org/

2. Clonez le dépôt du projet :

        git clone https://github.com/louis-marceron/web-project-api-template

3. Accédez à la racine du projet et installez les paquets et leurs dépendances :

        npm install

4. Démarrez l'application :

        npm run dev

5. Ouvrez votre navigateur et accédez à http://localhost:3000 (ou le port spécifié) pour accéder à l'application.