# Diagramme de Sequence#extension_Markdown Preview Mermaid Support
## Introduction
Le diagramme de séquence ci-dessous illustre les interactions dynamiques entre les acteurs clés de notre système d'e-learning. Chaque séquence représente une étape significative du processus éducatif, de l'ajout de professeurs à la participation des étudiants aux cours et aux évaluations. Explorez les différentes séquences pour comprendre le flux d'activités au sein de notre plateforme.

```mermaid
sequenceDiagram
    participant Admin
    participant Professeur
    participant Etudiant
    participant ElearningSystem
    participant Course
    participant Chapter
    participant Quiz
    participant StudentProgress
    participant Review

    Etudiant->>ElearningSystem: Register
    activate Etudiant
    ElearningSystem-->>Etudiant: Registration successful
    deactivate Etudiant

    Etudiant->>ElearningSystem: Login
    activate Etudiant
    ElearningSystem-->>Etudiant: Login successful
    deactivate Etudiant

    Admin->>ElearningSystem: Add Professor
    activate Admin
    activate ElearningSystem
    ElearningSystem-->>Admin: Professor added successfully
    deactivate ElearningSystem
    deactivate Admin

    Admin->>ElearningSystem: Modify Professor
    activate Admin
    activate ElearningSystem
    ElearningSystem-->>Admin: Professor modified successfully
    deactivate ElearningSystem
    deactivate Admin

    Admin->>ElearningSystem: Delete Professor
    activate Admin
    activate ElearningSystem
    ElearningSystem-->>Admin: Professor deleted successfully
    deactivate ElearningSystem
    deactivate Admin

    Professeur->>ElearningSystem: Login
    activate Professeur
    ElearningSystem-->>Professeur: Login successful
    deactivate Professeur

    Professeur->>ElearningSystem: Add Course
    activate Professeur
    ElearningSystem-->>Professeur: Course added successfully
    deactivate Professeur

    Professeur->>Course: Edit Course
    activate Professeur
    activate Course
    Course-->>Professeur: Course edited successfully
    deactivate Course
    deactivate Professeur

    Professeur->>Course: Delete Course
    activate Professeur
    activate Course
    Course-->>Professeur: Course deleted successfully
    deactivate Course
    deactivate Professeur

    Professeur->>Course: Add Chapter
    activate Professeur
    activate Chapter
    Chapter-->>Professeur: Chapter added successfully
    deactivate Chapter
    deactivate Professeur

    Professeur->>Chapter: Edit Chapter
    activate Professeur
    activate Chapter
    Chapter-->>Professeur: Chapter edited successfully
    deactivate Chapter
    deactivate Professeur

    Professeur->>Chapter: Delete Chapter
    activate Professeur
    activate Chapter
    Chapter-->>Professeur: Chapter deleted successfully
    deactivate Chapter
    deactivate Professeur

    Professeur->>Chapter: Add Quiz
    activate Professeur
    activate Quiz
    Quiz-->>Chapter: Quiz added successfully
    deactivate Quiz
    deactivate Professeur

    Professeur->>Quiz: Edit Quiz
    activate Professeur
    activate Quiz
    Quiz-->>Professeur: Quiz edited successfully
    deactivate Quiz
    deactivate Professeur

    Professeur->>Quiz: Delete Quiz
    activate Professeur
    activate Quiz
    Quiz-->>Professeur: Quiz deleted successfully
    deactivate Quiz
    deactivate Professeur

    Professeur->>Course: Add Final Quiz
    activate Professeur
    activate Quiz
    Quiz-->>Course: Final Quiz added successfully
    deactivate Quiz
    deactivate Professeur

    Professeur->>ElearningSystem: Logout
    activate Professeur
    ElearningSystem-->>Professeur: Logout successful
    deactivate Professeur

    Etudiant->>ElearningSystem: Search Courses
    activate Etudiant
    ElearningSystem-->>Etudiant: Display course list
    deactivate Etudiant

    Etudiant->>ElearningSystem: Enroll in Course
    activate Etudiant
    ElearningSystem-->>Etudiant: Enrollment successful
    deactivate Etudiant

    Etudiant->>Course: View Course
    activate Etudiant
    Course-->>Etudiant: Course content displayed
    deactivate Etudiant

    Etudiant->>Course: Add Review
    activate Etudiant
    activate Review
    Review-->>Etudiant: Review form displayed
    Etudiant->>Review: Submit Review
    activate Review
    Review-->>Review: Review submitted successfully
    deactivate Review
    deactivate Etudiant

    Etudiant->>Course: Unsubscribe
    activate Etudiant
    Course-->>Etudiant: Unsubscribed successfully
    deactivate Etudiant

    Etudiant->>Course: Add to Favorites
    activate Etudiant
    Course-->>Etudiant: Added to favorites
    deactivate Etudiant

    Etudiant->>Course: View Quiz
    activate Etudiant
    Course-->>Etudiant: Quiz questions displayed
    Etudiant->>Quiz: Answer Quiz
    activate Quiz
    Quiz-->>Etudiant: Quiz completed
    deactivate Quiz
    deactivate Etudiant

    Etudiant->>ElearningSystem: View Progress
    activate Etudiant
    ElearningSystem-->>Etudiant: Display progress information
    deactivate Etudiant

    Etudiant->>ElearningSystem: Logout
    activate Etudiant
    ElearningSystem-->>Etudiant: Logout successful
    deactivate Etudiant
