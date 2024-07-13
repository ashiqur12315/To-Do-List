# To-Do List App

This is a simple To-Do List application built with React, Redux, TypeScript, and Tailwind CSS. It allows users to add, toggle, edit, and delete tasks/todo list.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)

## Overview

The To-Do List app is a simple yet powerful task management tool designed to help you keep track of your daily tasks.It is Built using modern web technologies like React, Redux, TypeScript, and Tailwind CSS. This application provides a responsive and intuitive user interface. Users can add a todo task and also have the functionality to update and delete the task. Users can make a task status completed and it will show a completed icon in the UI.
![image](https://github.com/ashiqur12315/my-first-repo/blob/main/td.PNG)

## Technologies Used
- React: A JavaScript library for building user interfaces. React allows us to create reusable UI components.
- Redux: A state management library for JavaScript applications. In this app, Redux is used to manage the state of the to-do task list items.
- TypeScript: A statically typed superset of JavaScript that enhances code quality and maintainability.
- Tailwind CSS: A utility-first CSS framework that provides low-level utility classes to build custom designs quickly.

## Features

- Add new tasks
- Toggle task completion status
- Edit existing tasks
- Delete tasks
- Responsive design with Tailwind CSS

## Setup and Installation

To set up and run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ashiqur12315/To-Do-List.git
   cd todo-list-app

2. **Install dependencies:**
   ```bash
   npm install
This will read the package.json file and install all the dependencies listed under dependencies and devDependencies.

3. **Run the application:**
   ```bash
   npm start

This will start the development server and open the app in your default web browser. The app will be available at http://localhost:3000.

## Usage
- Add a task: Enter the task text in the input field and click the "Add" button.
- Toggle a task: Click on the task text to toggle its completion status.
- Edit a task: Click the "Edit" button next to a task, modify the text, and click "Save" to update the task.
- Delete a task: Click the "Delete" button next to a task to remove it from the list.

## Folder Structure
The project structure is as follows:
```bash
todo-list-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── app/
│   │   ├── store.ts
│   ├── features/
│   │   ├── todos/
│   │   │   ├── Todo.tsx
│   │   │   ├── todoSlice.ts
│   ├── index.css
│   ├── index.tsx
│   ├── App.tsx
│   ├── App.css
│   └── ...
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── package.json
└── README.md



