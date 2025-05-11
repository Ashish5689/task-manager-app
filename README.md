# Task Manager

A modern, responsive task management application built with Next.js, Redux Toolkit, TypeScript, and Tailwind CSS.

![Task Manager App](https://github.com/user-attachments/assets/9ad5a252-b6cd-45e8-b096-70850390111c)

🔗 **Live Project**: [https://task-manager-app-virid-three.vercel.app/](https://task-manager-app-virid-three.vercel.app/)

---

## Features

### 📝 Task Management
- **Add Tasks** with title, description, and priority level (High, Medium, Low)
- **Edit Tasks** through an intuitive modal interface
- **Delete Tasks** with a single click
- **Priority-Based Sorting** - tasks are automatically sorted by priority (High → Medium → Low)

### 🎨 User Interface
- **Responsive Design** - fully optimized for mobile, tablet, and desktop screens
- **Dark/Light Mode Support** - adapts to your system preferences
- **Color-Coded Priorities**:
  - 🔴 Red for High priority tasks
  - 🟡 Yellow for Medium priority tasks
  - 🟢 Green for Low priority tasks
- **Modern UI Elements** styled with Tailwind CSS
- **Smooth Animations & Transitions** for a polished user experience

### ⚙️ Technical Features
- **State Management** with Redux Toolkit for predictable state updates
- **Type Safety** with TypeScript
- **Component-Based Architecture** for maintainability
- **Real-Time Updates** - task list updates instantly after changes

---

## Getting Started

### ✅ Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Ashish5689/task-manager-app.git
cd task-manager-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## Project Structure

```
task-manager-app/
├── app/                     # Next.js App Router
│   ├── components/          # React components
│   │   ├── TaskCard.tsx     # Individual task card 
│   │   ├── TaskForm.tsx     # Form for adding tasks
│   │   ├── TaskList.tsx     # List of all tasks
│   │   └── EditTaskModal.tsx # Modal for editing tasks
│   ├── store/               # Redux store
│   │   ├── features/        # Redux slices
│   │   │   └── taskSlice.ts # Task reducer and actions
│   │   ├── Provider.tsx     # Redux provider
│   │   └── store.ts         # Store configuration
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page
├── public/                  # Static assets
├── .gitignore
├── next.config.ts
├── package.json
├── README.md
└── tsconfig.json
```

## Usage

### Adding a Task
1. Fill in the task title (required)
2. Add an optional description
3. Select priority level (High, Medium, Low)
4. Click "Add Task"

### Editing a Task
1. Click the "Edit" button on any task card
2. Modify the details in the popup modal
3. Click "Save Changes" to update

### Deleting a Task
1. Click the "Delete" button on any task card
2. The task will be immediately removed

## Built With

- [Next.js](https://nextjs.org/) - React framework
- [Redux Toolkit](https://redux-toolkit.js.org/) - State management
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling

## Development

### Running Tests
```bash
npm run test
# or
yarn test
```

### Building for Production
```bash
npm run build
# or
yarn build
```

### Deploying
This application can be easily deployed to platforms like Vercel or Netlify:

```bash
npm run build
npm run start
```
