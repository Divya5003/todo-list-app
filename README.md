# Next.js Todo List App

This project is a simple Todo List application built with Next.js. It allows users to manage tasks with functionalities to create, update, mark as done, search, and display tasks.

## Features

- **Create Task**: Allow users to add new tasks.
- **Update Task**: Allow users to edit existing tasks.
- **Mark as Done**: Allow users to mark tasks as completed.
- **Search Tasks**: Implement a search functionality to filter tasks.
- **Expandable List**: Display tasks in an expandable list format, showing a description and a timestamp of the last update when expanded.

## System Design

- **Frontend**: Built with Next.js to provide a responsive and interactive user interface.
- **Backend**: Uses Next.js API routes to handle CRUD operations.
- **Data Storage**: Uses a dummy JSON file to store tasks. The JSON file simulates a simple database for demonstration purposes.

## Implementation Overview

- **API Routes**:
  - **Read Data**: Fetch all tasks from the JSON file.
  - **Add Task**: Add a new task to the JSON file.
  - **Update Task**: Update an existing task in the JSON file.
- **State Management**: Uses React's `useState` and `useEffect` hooks to manage and update the state based on user interactions.
- **Task Filtering**: Implements search and status filters to dynamically display tasks based on user input.

## Project Structure

```plaintext
src/
├── pages/          # Main folder of the application.
    ├── index.js    # Main page of the application.
    ├── api/        # Contains API routes for CRUD operations. 
├── components/     # Reusable components.
└── data.json       # Dummy JSON file acting as the data repository.

```

## Setup and Running the Application

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Divya5003/todo-list-app.git
   cd todo-list-app

2. **Install depedencies**:

   ```bash
   npm install

3. **Run the development server**:

   ```bash
   npm run dev

4. **Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.**

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.