# Hospital UI – Bed Availability System

This project is a frontend prototype for a hospital bed availability system. The idea is to make it easier for users to find hospitals and check their bed availability, while hospitals can manage bed information through a separate dashboard.

I worked on the UI and frontend functionality to understand how a hospital bed management system could work in practice.

## What I Used

- **React.js** – To build the user interface and reusable components.
- **JavaScript** – To handle interactions and frontend logic.
- **React Router** – To navigate between different pages.
- **Tailwind CSS and CSS** – For styling the interface.
- **Vite** – To run the development server and build the project.
- **Git and GitHub** – To manage and maintain the project code.

## Features

### User Side
- Browse and search for hospitals.
- View hospital details.
- Check bed availability through status indicators.
- Navigate between different sections of the application.

### Hospital Side
- Hospital login interface.
- Dashboard for viewing bed information.
- Update bed details and availability status.
- View an activity log.

## Problems I Worked On

While working on this project, I had to think about how the different parts of the interface would work together.

**1. Managing bed status**

Bed availability is one of the main parts of this project. I worked on the frontend interactions needed to display bed information and change its status.

**2. Handling navigation**

The application has separate sections for users and hospitals. I used React Router to manage navigation between pages without having to reload the entire application.

**3. Managing frontend interactions**

Since there is no backend connected yet, I had to handle the current interactions on the frontend. This helped me understand how the interface behaves when users navigate between pages and make changes.

**4. Keeping the interface organized**

I worked on separating the different pages and UI components so that the application would be easier to understand and maintain.

## What I Learned

- How to organize a React project into different components and pages.
- How React Router helps manage navigation.
- How to handle user interactions and shared frontend state.
- How to structure a dashboard with different sections.
- Why a backend and database are needed when an application has to store and share real data.

## Current Limitations

This is currently a frontend-only project.

- Login is simulated and is not connected to real authentication.
- Bed updates are not saved to a backend database.
- Hospital and bed information uses frontend data rather than a live data source.
- The activity log is part of the UI prototype, not a persistent audit system.


## Run Locally

Make sure Node.js and npm are installed.

1. Clone the repository.
2. Open the project folder in your terminal.
3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL shown in your terminal.

To create a production build, run:

```bash
npm run build
```

## Project Status

The frontend prototype is available in this repository. Backend integration, database storage, and real authentication are not implemented yet.

---

**Project:** Hospital UI – Bed Availability System  
**Focus:** React.js, frontend development, and UI state management
