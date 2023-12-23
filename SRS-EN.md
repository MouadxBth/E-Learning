# Software Requirements Specification

### 1. Introduction:
   - **Document Objective:**
     - This document aims to provide a comprehensive guide for the rapid development of a Progressive Web Application (PWA) E-Learning Single Page Application (SPA) using Angular for the frontend and NestJS for the backend within a one-month timeline.

   - **Project Context:**
     - The project is initiated by **Mouad Bouthaich** to quickly launch an online education platform with essential features and an intuitive user interface, with a focus on making it a PWA for enhanced user experience.

   - **Stakeholders and their roles:**
     - Project Team:
       - Project Manager: **Mouad Bouthaich**
       - Frontend Developers: [**Mouad Bouthaich**]
       - Backend Developers: [**Mouad Bouthaich**]
       - UI/UX Designers: [**Mouad Bouthaich**]
       - Testers: [**Mouad Bouthaich**]
     - Client: **Mouad Bouthaich**
     - End Users: Students, Instructors, Admin

### 2. Project Presentation:
   - **Description:**
     - The PWA E-Learning SPA will serve as a rapid deployment platform for students and instructors, offering a streamlined interface for accessing and managing educational content, with the added benefit of Progressive Web App features.

   - **Goals and Objectives:**
     - Develop a minimal viable product (MVP) with essential features.
     - Implement secure user authentication and authorization, including Two-Factor Authentication (2FA).
     - Provide basic course creation and management features for instructors.
     - Enable video content streaming and basic quizzes (*under discussion*).
     - Implement progress tracking for users.
     - Enhance user experience through PWA capabilities like offline access and home screen installation (*under discussion*).

### 3. Context:
   - **Environment:**
     - The application will be containerized using Docker and Docker Compose.
     - Utilization of YouTube API for initial video content (*under discussion*).

   - **Constraints and Dependencies:**
     - Limit reliance on external APIs for the MVP.
     - Compliance with basic data protection guidelines.
     - Video content integration and offline access features are still under discussion.

### 4. Client's Needs:
   - **Functional Requirements:**
     - User Registration and Authentication:
       - Basic email registration and authentication, including 2FA.
     - Course Listing and Enrollment:
       - Simple course listing and enrollment features.
     - Video Content Streaming:
       - Basic video playback functionality (*under discussion*).
     - Quizzes and Assessments:
       - Simple quiz creation with multiple-choice questions.
     - Progress Tracking and Reporting:
       - Basic progress tracking for completed courses.

   - **Non-functional Requirements:**
     - Performance:
       - Load time within acceptable limits.
       - Scalability for future enhancements.
     - Security:
       - Basic encryption of sensitive data.
     - User-Friendly:
       - Intuitive design for essential functionalities.
       - Responsive layout (*under discussion*).
     - PWA Features:
       - Offline access and home screen installation (*under discussion*).

### 5. Project Scope:
   - **Included:**
     - User authentication, basic course management, basic quizzes, progress tracking, PWA features.
   
   - **Excluded:**
     - Advanced features, offline functionality, social media integration.

### 6. Constraints:
   - **Time:**
     - Project completion within 4 weeks.
   
   - **Budget:**
     - Total budget: 0 DH.

   - **Resources:**
     - Development Team:
       - 6 Developers.
     - Equipment:
       - Personal computers.

### 7. Acceptance Criteria:
   - **Success Conditions:**
     - User can register using email and complete 2FA.
     - Users can browse, enroll in courses, and access video content (*if implemented*).
     - Basic quizzes provide interactive assessments.
     - Basic progress tracking is implemented.
     - PWA features enable offline access and home screen installation (*if implemented*).

### 8. Deliverables:
   - **Expected Outputs:**
     - Functional PWA E-Learning SPA.
     - Basic developer documentation.
     - Minimal user guides for students and instructors.

### 9. Schedule:
   - **Project Timeline:**
     - Week 1: Planning and Setup
     - Week 2: Frontend Development (*Responsive layouts under discussion*)
     - Week 3: Backend Development and Integration
     - Week 4: Testing, and Optimization

### 10. Resources:
   - **Personnel:**
     - Project Manager: [**Mouad Bouthaich**]
     - Frontend Developer: [**Mouad Bouthaich**]
     - Backend Developer: [**Mouad Bouthaich**]
     - UI/UX Designer: [**Mouad Bouthaich**]
     - Tester: [**Mouad Bouthaich**]

   - **Equipment:**
     - Personal computers.

   - **Software:**
     - Angular, NestJS, PostgreSQL, Docker, Docker Compose.

### 11. Communication:
   - **Methods:**
     - Semi-daily stand-ups.
     - Meetings using Google Meet.
     - Project management through GitHub issues.
     - Communication through Discord/WhatsApp.

   - **Frequency:**
     - Stand-ups on alternate days.
     - Meetings as needed.
     - Immediate communication for critical issues.

### 12. Risk Management:
   - **Identified Risks:**
     - **Resource Constraints:**
       - *Mitigation: Efficient task allocation and clear communication.*
       - *Contingency: Adjustments to the project timeline if needed.*
     - **Technical Challenges:**
       - *Mitigation: Prototyping and early identification of challenges.*
       - *Contingency: Rapid problem-solving and agile adjustments.*

   - **Mitigation Strategies:**
     - Clearly defined roles and responsibilities for each team member.
     - Continuous communication to identify and address resource constraints early.
     - Regular prototyping and testing to identify technical challenges in advance.
     - Agile development approach to make quick adjustments if challenges arise.

### 13. Contractual Terms:
   - **Specific Terms:**
     - Bi-weekly progress reports submitted to the client via Discord.
     - Adherence to agreed-upon milestones and deadlines.
     - Any additional features or changes requested by the client will be considered as part of future enhancements post-MVP.

### 14. Validation:
   - **Validation Process:**
     - Stakeholder review and testing of the MVP.
     - User acceptance testing (UAT) by the client.
     - Successful validation is marked by the client's formal acceptance of the delivered MVP.
