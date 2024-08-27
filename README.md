# WojtekTeam

# Playwright Test Project

## Requirements

Before running the tests, make sure you have the following tools installed:

- [Node.js](https://nodejs.org/) (recommended version 14 or later)
- [Visual Studio Code](https://code.visualstudio.com/) (VSC)
- [Git](https://git-scm.com/) (optional if you are using a Git repository)

## Installation

If you don't have Playwright installed yet, you can install it using npm. Open a terminal (or Git Bash) and follow these steps:

1. Install Playwright:

    ```bash
    npm init playwright@latest
    ```

    Or, if the project already exists:

    ```bash
    npm install @playwright/test --save-dev
    ```

2. Set up the Playwright environment:

    If you don’t have the Playwright configuration yet, you can generate it:

    ```bash
    npx playwright install
    ```

## Running Tests

### 1. Open the project in Visual Studio Code

Open Visual Studio Code and load your project that contains the `example.spec.js` file.

### 2. Running tests using the terminal in VSC

1. Open the terminal in Visual Studio Code (`Ctrl + ~` or `View` > `Terminal`).
2. Make sure you are in the root directory of your project.
3. Run the following command to execute the tests:

    ```bash
    npx playwright test example.spec.js
    ```

### 3. Running tests in browser mode

If you want to run the tests in browser mode with a graphical interface:

```bash
npx playwright test example.spec.js --headed
