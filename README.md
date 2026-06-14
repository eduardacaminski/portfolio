# Personal Portfolio Application

A static web application focused on project consolidation, deployment pipeline automation, and responsive component rendering.

## Project Overview

Developed in TypeScript, this portfolio centralizes academic and professional repositories, utilizing a modular component architecture and a custom themed design (Sakura) to display structural data and badges cleanly.


## Technologies and Concepts Used

* **Language:** TypeScript, CSS
* **Tools:** Vite, VS Code, GitHub Actions
* **Concepts:** Relative path routing, static asset management, continuous integration (CI/CD), and declarative styling.


## Implementation

* **Automation Pipeline:** Configured GitHub Actions workflows to automatically compile production assets through Vite and publish them directly to GitHub Pages.
* **Path Resolution:** Implemented relative path strategies within the `public` directory to guarantee the structural integrity of static file downloads (such as the resume PDF) regardless of repository domain subfolders.
* **Modular Design:** Structured reusable components for project sections, skills, and contact forms, optimized for runtime efficiency and layout responsiveness.


## How It Works

The application manages resource loading and the visual layout through base paths and optimized bundling:

* **Asset Encapsulation:** The Vite ecosystem maps files from the `public` folder directly into the build root, allowing direct access via clean relative paths:
  ```tsx
  <a href="resumeport.pdf" download="Resume_Eduarda_Caminski.pdf" className="download">
    Download Resume
  </a>
