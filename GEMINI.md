# Project Overview

This project is a personal portfolio website for Ted Dickey II, a Data Science professional and PhD Candidate. It is built using React, Vite, and Tailwind CSS. The website showcases his work, education, certifications, and publications. It features a clean, modern design with a light/dark theme toggle.

# Building and Running

To get the project up and running, follow these steps:

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```
    This will start the development server and open the website in your default browser.

3.  **Build for production:**
    ```bash
    npm run build
    ```
    This will create a `dist` directory with the optimized production build of the website.

4.  **Preview the production build:**
    ```bash
    npm run preview
    ```

# Development Conventions

*   **Component-based architecture:** The project follows a component-based architecture, with reusable components located in the `src/components` directory.
*   **Routing:** Routing is handled by `react-router-dom`. The main routes are defined in `src/App.jsx`.
*   **Styling:** Styling is done using Tailwind CSS. The configuration is in `tailwind.config.js`.
*   **Linting:** The project uses ESLint for linting. The configuration is in `eslint.config.js`. To run the linter, use the following command:
    ```bash
    npm run lint
    ```
