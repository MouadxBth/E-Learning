# Diagramme de Classe

## Introduction
Le diagramme de classe ci-dessous modélise les principales entités de notre système d'e-learning et leurs relations. Il offre une représentation visuelle des classes, de leurs attributs, et des interactions entre elles.

Le système comporte trois acteurs principaux : les administrateurs, les professeurs et les étudiants. Chacun de ces acteurs joue un rôle essentiel dans l'écosystème éducatif, depuis la gestion globale jusqu'à l'expérience d'apprentissage individuelle.

## le diagramme de classe
```mermaid
classDiagram 
   class Admin {
      +manageprof()
   }

   class Professeur {
      -prof_id:int
      -username:String
      -email:String
      -first_name:String
      -last_name:String
      -phone_number:String
      +getprof()
      +addprof()
      +editprof()
   }

   class Cours {
      -cours_id:int
      -cours_title:String
      -cours_description:String
      -date_creation:Date
      +getcours()
      +addcours()
      +editcours()
      +deletecours()
      +searchcours()
   }

   class Chapitre {
      -chapitre_id:int
      -chapitre_title:String
      -content:String
      +getchapitre()
      +editchapitre()
      +addchapitre()
      +deletechapitre()
   }

   class Commentaire {
      -commentaire_id:int
      -commentaire:String
      +addReview()
      +editReview()
      +deletReview()
   }

   class Quiz {
      -quiz_id:int
      -quiz_title
      -quiz_content
      +getquiz()
      +addquiz()
      +editquiz()
      +deletquiz()
   }
   
   class Question{
      -question_id:int
      -question:String
      +getquestion()
      +addquestion()
      +editquestion()
      +deletquestion()
   }
   
   class Reponse{
      -reponse_id:int
      -reponse: String
      +getReponse()
      +addReponse()
      +editReponse()
      +deleteReponse()
   }
   
   class Etudiant{
      -etudiant_id:int
      -username:String
      -email:String
      -first_name:String
      -last_name:String
      -picture:Image
      -date_naissance:Date
      +connecter()
      +registercourse()
   }

   Etudiant -- Cours : Consulter
   Etudiant--Commentaire: Ajouter
   Professeur -- Cours : Créer
   Etudiant -- Question : Répond à
   Cours *--Chapitre : contient
   Cours o-- Commentaire : possède
   Quiz *--Question : contient
   Question *--Reponse : possède
   Admin -- Professeur : Ajouter
   Chapitre o--Quiz: possède
   Cours *--Quiz: possède
