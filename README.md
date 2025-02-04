# @frontend-monorepo

This is a monorepo workspace for the frontend of the application.

## Prerequisites

- Node.js (v22+)
- pnpm

## Workspace

- `apps/` - Executable applications

  - `portal-app` - The main application
  - `storybook` - The Storybook application

- `packages/` - Shared packages

  - `backend-client` - A client for the backend
  - `i18n` - Internationalization utilities
  - `tailwind` - Tailwind CSS configuration
  - `ui` - UI components
  - `utility` - Utility functions

## Workspace Level Commands

**pnpm install**

Installs all dependencies for the workspace.

**pnpm format**

Format check for the workspace.

**pnpm format:fix**

Format fix for the workspace.

**pnpm lint**

Lint check for the workspace.

**pnpm lint:fix**

Lint fix for the workspace.

**pnpm locales:compile**

Compile locales packages for typescript support.

**pnpm portal-app:dev**

Run the portal application in development mode.

**pnpm prepare**

Prepare husky for the workspace.

**pnpm sort-package-json**

Sort the package.json files in the workspace.

**pnpm storybook:dev**

Run the storybook application in development mode.

**pnpm test**

Run the tests for the workspace.

**pnpm test:coverage**

Run the tests for the workspace and generate a coverage report.

**pnpm test:watch**

Run the tests for the workspace in watch mode.

## Npm Dependencies Management

It's common for a multi-package repository to have the same dependency to be used by different packages.

Therefore, We maintain a list of dependencies in the [Catalogs](https://pnpm.io/catalogs) and reference later in `package.json` to ensure unique version of the dependencies across the workspace.

## Component Driven Development (CDD)

We follow the Component-Driven Development (CDD) approach to build our components. We encourage team members to use `Storybook` as an isolated development and testing environment for creating UI components first, ensuring reusability across frontend applications.

Learn more about practicing CDD: https://www.componentdriven.org/
