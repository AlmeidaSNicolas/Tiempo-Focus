Tiempo Focus | Advanced Pomodoro Timer
Tiempo Focus is a high-performance Pomodoro application designed for time management and maximum productivity. The project was developed to apply and solidify advanced concepts of the React and TypeScript ecosystem, focusing on modularity and code scalability.

Tech Stack
This project utilizes modern tools to ensure a robust development environment:

React JS: Core library used for building a dynamic and efficient user interface.

TypeScript: Implementation of strict static typing to ensure code reliability and maintainability.

Vite: High-performance build tool and development server for a fast developer experience.

CSS Modules: Scoped styling approach to ensure organized, conflict-free components.

Docker: Containerized application to ensure consistent performance across any environment.

Technical Concepts and Practices
During development, the following advanced React patterns and web practices were implemented:

Advanced React Hooks: Comprehensive state and lifecycle management using useState, useEffect, and useCallback.

Precise Time Management: Accurate control of intervals and timers using native Web APIs (setInterval, clearInterval).

Component Architecture: Clean architecture based on highly reusable and independent components, following the index-pattern for exports.

Strong Typing: Strategic use of Interfaces and HTML native type attributes (such as ButtonHTMLAttributes) to build a robust codebase.

Deployment & Environment (Docker)
To run the application without the need for local dependency installation, use the following Docker commands:

Clone the repository and navigate to the project root.

Build the Docker Image:

Bash
docker build -t tiempo-focus .

Run the Container:
Map the Vite port and start the application:

Bash
docker run -d -p 5173:5173 --name pomodoro-app tiempo-focus
The application will be available at http://localhost:5173.

License and Usage
This project was developed for educational and portfolio purposes. Feel free to explore, clone, and inspect the source code for professional evaluation.
