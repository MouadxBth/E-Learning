# Cahier des Charges

### 1. Introduction :
   - **Objectif du Document :**
     - Ce document vise à fournir un guide complet pour le développement rapide d'une Application Web Progressive (PWA) d'apprentissage en ligne à page unique (SPA) utilisant Angular pour le frontend et NestJS pour le backend dans un délai d'un mois.

   - **Contexte du Projet :**
     - Le projet est initié par **Mouad Bouthaich** pour lancer rapidement une plateforme d'éducation en ligne avec des fonctionnalités essentielles et une interface utilisateur intuitive, en mettant l'accent sur la création d'une PWA pour une expérience utilisateur améliorée.

   - **Parties prenantes et leurs rôles :**
     - Équipe du Projet :
       - Chef de Projet : **Mouad Bouthaich**
       - Développeurs Frontend : [**Mouad Bouthaich**]
       - Développeurs Backend : [**Mouad Bouthaich**]
       - Designers UI/UX : [**Mouad Bouthaich**]
       - Testeurs : [**Mouad Bouthaich**]
     - Client : **Mouad Bouthaich**
     - Utilisateurs Finaux : Étudiants, Instructeurs, Administrateur

### 2. Présentation du Projet :
   - **Description générale du projet :**
     - La PWA E-Learning SPA servira de plateforme de déploiement rapide pour les étudiants et les instructeurs, offrant une interface rationalisée pour accéder et gérer le contenu éducatif, avec l'avantage supplémentaire des fonctionnalités Progressive Web App.

   - **Buts et objectifs :**
     - Développer un produit minimal viable (MVP) avec des fonctionnalités essentielles.
     - Mettre en place une authentification et une autorisation utilisateur sécurisées, y compris une authentification à deux facteurs (2FA).
     - Fournir des fonctionnalités de création et de gestion de cours de base pour les instructeurs.
     - Activer la diffusion de contenu vidéo et des quiz de base (*sous réserve de discussion*).
     - Mettre en œuvre un suivi de progression pour les utilisateurs.
     - Améliorer l'expérience utilisateur grâce aux capacités PWA telles que l'accès hors ligne et l'installation sur l'écran d'accueil (*sous réserve de discussion*).

### 3. Contexte :
   - **Environnement :**
     - L'application sera conteneurisée à l'aide de Docker et Docker Compose.
     - Utilisation de l'API YouTube pour le contenu vidéo initial (*sous réserve de discussion*).

   - **Contraintes et Dépendances :**
     - Limiter la dépendance aux API externes pour le MVP.
     - Conformité aux directives de protection des données de base.
     - L'intégration du contenu vidéo et les fonctionnalités d'accès hors ligne sont encore en cours de discussion.

### 4. Besoins du Client :
   - **Exigences Fonctionnelles :**
     - Enregistrement et Authentification de l'Utilisateur :
       - Enregistrement et authentification de base par e-mail, y compris la 2FA.
     - Liste et Inscription aux Cours :
       - Fonctionnalités simples de liste et d'inscription aux cours.
     - Diffusion de Contenu Vidéo :
       - Fonctionnalité de lecture vidéo de base (*sous réserve de discussion*).
     - Quiz et Évaluations :
       - Création de quiz simple avec des questions à choix multiples.
     - Suivi de la Progression et Rapports :
       - Suivi de progression de base pour les cours terminés.

   - **Exigences Non-fonctionnelles :**
     - Performance :
       - Temps de chargement dans des limites acceptables.
       - Extensibilité pour des améliorations futures.
     - Sécurité :
       - Cryptage de base des données sensibles.
     - Convivialité :
       - Conception intuitive pour les fonctionnalités essentielles.
       - Mise en page réactive (*sous réserve de discussion*).
     - Fonctionnalités PWA :
       - Accès hors ligne et installation sur l'écran d'accueil (*sous réserve de discussion*).

### 5. Portée du Projet :
   - **Inclus :**
     - Authentification utilisateur, gestion basique des cours, quiz basique, suivi de progression, fonctionnalités PWA.
   
   - **Exclus :**
     - Fonctionnalités avancées, fonctionnalités hors ligne, intégration des médias sociaux.

### 6. Contraintes :
   - **Temps :**
     - Achèvement du projet dans les 4 semaines.
   
   - **Budget :**
     - Budget total : 0 DH.

   - **Ressources :**
     - Équipe de Développement :
       - 6 Développeurs.
     - Équipement :
       - Ordinateurs personnels.

### 7. Critères d'Acceptation :
   - **Conditions de Réussite :**
     - L'utilisateur peut s'inscrire par e-mail et effectuer la 2FA.
     - Les utilisateurs peuvent naviguer, s'inscrire aux cours et accéder au contenu vidéo (*si implémenté*).
     - Les quiz de base fournissent des évaluations interactives.
     - Le suivi de progression de base est mis en œuvre.
     - Les fonctionnalités PWA permettent l'accès hors ligne et l'installation sur l'écran d'accueil (*si implémentées*).

### 8. Livrables :
   - **Produits Attendus :**
     - PWA E-Learning SPA fonctionnelle.
     - Documentation de base pour les développeurs.
     - Guides d'utilisation minimaux pour les étudiants et les instructeurs.

### 9. Planning :
   - **Chronologie du Projet :**
     - Semaine 1 : Planification et Configuration
     - Semaine 2 : Développement Frontend (*Mises en page réactives sous réserve de discussion*)
     - Semaine 3 : Développement Backend et Intégration
     - Semaine 4 : Tests et Optimisation

### 10. Ressources :
   - **Personnel :**
     - Chef de Projet : [**Mouad Bouthaich**]
     - Développeur Frontend : [**Mouad Bouthaich**]
     - Développeur Backend : [**Mouad Bouthaich**]
     - Designer UI/UX : [**Mouad Bouthaich**]
     - Testeur : [**Mouad Bouthaich**]

   - **Équipement :**
     - Ordinateurs personnels.

   - **Logiciels :**
     - Angular, NestJS, PostgreSQL, Docker, Docker Compose.

### 11. Communication :
   - **Méthodes :**
     - Stand-ups semi-quotidiens.
     - Réunions via Google Meet.
     - Gestion de projet via les problèmes GitHub.
     - Communication via Discord/WhatsApp.

   - **Fréquence :**
     - Stand-ups un jour sur deux.
     - Réunions selon les besoins.
     - Communication immédiate pour les problèmes critiques.

### 12. Gestion des Risques :
   - **Risques Identifiés :**
     - **Contraintes de Ressources :**
       - *Atténuation : Allocation efficace des tâches et communication claire.*
       - *Contingence : Ajustements au calendrier du projet si nécessaire.*
     - **Défis Techniques :**
       - *Atténuation : Prototypage et identification précoce des défis.*
       - *Contingence : Résolution rapide des problèmes et ajustements agiles.*

   - **Stratégies d'Atténuation :**
     - Rôles et responsabilités clairement définis pour chaque membre de l'équipe.
     - Communication continue pour identifier et résoudre rapidement les contraintes de ressources.
     - Prototypage et tests réguliers pour identifier les défis techniques à l'avance.
     - Approche de développement agile pour apporter des ajustements rapides en cas de problèmes.

### 13. Conditions Contractuelles :
   - **Termes Spécifiques :**
     - Rapports de progrès bihebdomadaires soumis au client via Discord.
     - Respect des jalons et délais convenus.
     - Toute fonctionnalité supplémentaire ou modification demandée par le client sera considérée comme faisant partie des améliorations futures post-MVP.

### 14. Validation :
   - **Processus de Validation :**
     - Revue et tests par les intervenants du MVP.
     - Tests d'acceptation par l'utilisateur (UAT) par le client.
     - La validation réussie est marquée par l'acceptation formelle du MVP par le client.
