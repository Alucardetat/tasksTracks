
# Task Tracker

Task Tracker is a simple task management application that allows users to create, update, delete, and track their tasks. Designed with flexibility in mind, Task Tracker supports both personal task management and team collaboration, with planned features to expand functionality further.

## Features

### Current Features
- **CRUD Operations**: Create, Read, Update, and Delete tasks.


### Planned Features
- **Task Categorization**: Organize tasks based on categories or priorities.
- **User Authentication**: Basic user authentication to manage personal tasks.
- **Team Collaboration**: Share tasks and responsibilities with team members for larger projects.
- **Task History Tracking**: View task history statistics, including:
  - Tasks completed on time.
  - Tasks completed late.
  - Uncompleted tasks.
  - Postponed tasks.
  - Tasks canceled by the organizer (won't affect user metrics).
- **Graphical Insights**:
  - Personal task metrics (individual performance).
  - Team task metrics (collaborative performance without overshadowing personal metrics).

## Tech Stack
- **Frontend**: <!-- React -->
- **Backend**: <!-- Node.js (with future expansion to include additional frameworks and databases as needed) -->
- **Database**: <!-- MongoDB -->
- **Version Control**: <!-- Git and GitHub -->


## Folder Structure

```bash
taskTracks/
│
├── backend/                     # Backend server files
│   ├── models/                  # Mongoose models
│   ├── routes/                  # Express routes
│   ├── controllers/             # Business logic
│   ├── config/                  # Configuration files (e.g., database)
│   ├── middleware/              # Custom middleware (e.g., for CORS)
│   ├── .env                     # Environment variables
│   ├── server.js                # Main entry point for the server
│   └── package.json             # Backend dependencies
│
├── frontend/                    # Frontend app files
│   ├── public/                  # Static files (index.html)
│   ├── src/                     # Source code for the frontend
│   │   ├── components/          # React components
│   │   │   ├── TaskForm.jsx     # Form for adding tasks
│   │   │   ├── TaskItem.jsx     # Individual task item display
│   │   │   └── TaskList.jsx     # List of tasks
│   │   ├── App.jsx              # Main application component
│   │   ├── App.css              # CSS styles for the app
│   │   └── index.js             # Entry point for React app
│   └── package.json             # Frontend dependencies
└── README.md                    # Project documentation

```

## Setup

1. Clone the repository:
   ```bash
   git clone git@github.com:Alucardetat/tasksTracks.git
   cd task-tracker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Access the app in your browser at `http://localhost:3000`.

## Contributing
Feel free to submit issues or pull requests for bug fixes, features, or improvements.


Made with ❤️ by Alucardetat
