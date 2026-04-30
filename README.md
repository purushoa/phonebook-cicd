# Pokedex CI/CD - Full Stack Open Part 11

This repository is for the CI/CD module of the Full Stack Open course.

## 🚀 Deployment Links
*   **Deployed Application:** [https://purushoa-pokedex.onrender.com](https://purushoa-pokedex.onrender.com)
*   **Final Test Repository:** [https://github.com/purushoa/pokedex-final-test](https://github.com/purushoa/pokedex-final-test)

---

## 🛠 Commands

| Command | Description |
| :--- | :--- |
| `npm install` | Install all project dependencies |
| `npm start` | Run the Webpack dev server (Development mode) |
| `npm test` | Run unit tests using Jest |
| `npm run eslint` | Run ESLint to check code style |
| `npm run build` | Create a production build in the `/dist` folder |
| `npm run start-prod` | Start the Express server to serve the production build |
| `npm run test:e2e` | Run end-to-end tests |

---

## 🏗 Pipeline Details
The GitHub Actions pipeline is configured to:
1.  **Lint and Test:** Ensure code quality and logic are sound.
2.  **Build:** Generate the production bundle.
3.  **Deploy:** Automatically deploy to Render on every push to `main`.
4.  **Health Check:** Periodically ping the `/health` endpoint.
5.  **Notify:** Send success/failure alerts to Discord.
