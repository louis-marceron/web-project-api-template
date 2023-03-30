# Modèle d'API avec Express

Ceci est un modèle d'API pour le projet web en IG3 à Polytech Montpellier (2022 - 2023). Le serveur utilise Node JS avec le framework Express.

## Table des matières

- [Modèle d'API avec Express](#modèle-dapi-avec-express)
  - [Table des matières](#table-des-matières)
  - [Les technologies utilisées](#les-technologies-utilisées)
  - [La structure des fichiers](#la-structure-des-fichiers)
  - [Installation et exécution de l'application](#installation-et-exécution-de-lapplication)
  - [Travail à apporter](#travail-à-apporter)
  - [Test de l'API](#test-de-lapi)

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

## Travail à apporter

1. Pour des raisons de sécurité, il faut faire passer le serveur http en serveur https afin de sécuriser l'échange de requêtes. (WIP)

2. Afin de gérer des utilisateurs dans notre api, nous vous proposons les articles suivants: 
        - [Authentification utilisateurs (OpenClassrooms)](https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb/6466459-optimisez-la-structure-du-back-end)
        - [Forgot password functionality (Medium)](https://cinquewebdev.medium.com/how-to-implement-forgot-password-functionality-with-jwt-authentication-e1381263026c)
Attention: ces ressources peuvent comporter des erreurs ou ne pas utiliser les mêmes librairies que vous

## Test de l'API

Une fois les routes de notre API configurées dans notre backend, il nous faut les tester. Pour cela vous pouvez utilier soit [Insomnia](https://insomnia.rest/), soit [Postman](https://www.postman.com/).

1. L'adresse du serveur est: http://localhost:3000/

2. La route permettant d'effectuer des requètes REST sur les livres de la base de données est : "/books"

3. Nous utiliserons donc l'URL "http://localhost:3000/books" afin de travailler avec les livres de notre base de données

4. Tester l'API avec les méthodes (CRUD entre parenthèses) GET (Read), POST (Create), PUT (Update), DELETE (Delete). Le serveur accepte les requètes sous format FORM URL ENCODED et JSON)
        - GET prend ou pas un argument dans l'URL
        - POST ne prend pas d'arguments dans l'URL mais nécessite des données envoyées dans le body de la requête
        - PUT prend un argument dans l'URL et nécessite des données dans le body de la requête
        - DELETE prend un argument dans l'URL

|Method|Argument|Header|Body|
|:----:|:------:|:----:|:--:|
|GET|:white_check_mark: OR :x:|:white_check_mark:|:x:|
|POST|:x:|:white_check_mark:|:white_check_mark:|
|PUT|:white_check_mark:|:white_check_mark:|:white_check_mark:|
|DELETE|:white_check_mark:|:white_check_mark:|:x:|