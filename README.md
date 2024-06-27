# Playwright Data-Driven Test Project

## Installation Instructions

1. **Install Node.js and npm**
   - Download and install Node.js from [Node.js official website](https://nodejs.org/).

2. **Initialize Git Repository**
   - Open your terminal and navigate to the project folder.
   - Run the following commands to initialize a Git repository:
     ```sh
     git init
     git add .
     git commit -m "Initial commit"
     git branch -M main
     git remote add origin <your-github-repo-url>
     git push -u origin main
     ```

3. **Install Playwright**
   - Run the following command to install Playwright and its dependencies:
     ```sh
     npm init -y
     npm install @playwright/test
     npx playwright install
     ```

4. **Run the Tests**
   - Use the following command to run your Playwright tests:
     ```sh
     npx playwright test
     ```

## Resources
- Playwright Documentation: [Playwright Docs](https://playwright.dev/docs/intro)

## Note
- Ensure you have a `tests` directory with your test files inside.
- Make sure your `playwright.config.js` is correctly configured if needed.
