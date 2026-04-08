# Advanced Task Manager App

A feature-rich task management application built with React, showcasing advanced React patterns, modern CSS practices, and a responsive design.

## 🎯 Features

### Basic Features
- ✅ **Add Tasks** - Create new tasks with input validation
- ✅ **Mark as Completed** - Toggle task completion status
- ✅ **Delete Tasks** - Remove tasks from the list
- ✅ **Filter Tasks** - View All, Completed, or Pending tasks
- ✅ **Local Storage Persistence** - Tasks are automatically saved and restored

### React Advanced Features
- 🎣 **Custom Hooks** - `useLocalStorage` hook for state persistence
- 🔗 **Context API** - Global state management without prop drilling
- ⚡ **Performance Optimization** - `React.memo`, `useCallback`, and `useMemo` implementations
- ✔️ **Form Validation** - Prevents adding empty tasks
- ✏️ **Task Editing** - Edit existing task text with inline editing

### CSS & Design Features
- 🌓 **Dark Mode / Light Mode** - Theme toggle with persistent preference
- 🎨 **Modern Animations** - Smooth CSS transitions and keyframe animations
- 📱 **Responsive Design** - Mobile-first approach with breakpoints for all devices
- 🎯 **Drag & Drop** - Reorder tasks using `react-beautiful-dnd`
- 🎭 **Glassmorphism** - Modern UI design with backdrop filters

## 📋 Project Structure

```
Task Manager App/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── TaskForm.js          # Task input form with validation
│   │   ├── TaskList.js          # Drag-drop enabled task list
│   │   ├── TaskItem.js          # Individual task with edit capability
│   │   ├── FilterButtons.js     # Filter controls with counters
│   │   └── ThemeToggle.js       # Dark/Light mode toggle
│   ├── context/
│   │   └── TaskContext.js       # Global state management
│   ├── hooks/
│   │   └── useLocalStorage.js   # Custom localStorage hook
│   ├── styles/
│   │   └── index.css            # Comprehensive styling
│   ├── App.js                   # Main app component
│   └── index.js                 # React entry point
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd "Task Manager App"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🛠️ Technology Stack

- **React 18** - UI library
- **React Beautiful DnD** - Drag and drop functionality
- **Context API** - State management
- **CSS3** - Styling with custom properties and animations
- **Local Storage API** - Data persistence

## 📚 Core Components

### TaskContext
Manages global app state with the following:
- `tasks` - Array of filtered tasks
- `allTasks` - Array of all tasks
- `filter` - Current filter state (all/pending/completed)
- `addTask(taskText)` - Add a new task with validation
- `toggleTask(id)` - Mark task as completed/pending
- `deleteTask(id)` - Remove a task
- `updateTask(id, text)` - Edit task text
- `reorderTasks(source, destination)` - Reorder tasks
- `stats` - Task statistics (total, pending, completed)
- `isDarkMode` - Theme state
- `toggleTheme()` - Switch theme

### useLocalStorage Hook
Custom hook that provides:
- Automatic persistence to localStorage
- Error handling for quota exceeded
- JSON serialization/deserialization
- Functional state updates

### Performance Optimizations

1. **React.memo** - Memoized components:
   - TaskForm
   - TaskList
   - TaskItem
   - FilterButtons
   - ThemeToggle

2. **useCallback** - Memoized functions for:
   - Task operations (add, delete, toggle)
   - Filter changes
   - Theme toggle

3. **useMemo** - Memoized values for:
   - Filtered tasks array
   - Task statistics

## 🎨 Theming

The app supports automatic dark/light mode switching with:
- CSS custom properties for theme variables
- Smooth transitions between themes
- Persistent user preference via localStorage
- Respects system color scheme preference

**Light Mode Colors:**
- Primary: `#4f46e5`
- Background: `#ffffff`
- Text: `#1f2937`

**Dark Mode Colors:**
- Primary: `#4f46e5`
- Background: `#111827`
- Text: `#f3f4f6`

## 📱 Responsive Breakpoints

- **Mobile** (320px - 480px): Single column, stacked controls
- **Tablet** (481px - 768px): Optimized spacing and layout
- **Desktop** (769px+): Full-featured responsive layout

## 🎯 Usage Examples

### Adding a Task
1. Type a task in the input field
2. Click "Add Task" or press Enter
3. Task appears in the list with fade-in animation

### Filtering Tasks
- Click "All" to view all tasks
- Click "Pending" to see incomplete tasks
- Click "Completed" to see finished tasks
- Counters update in real-time

### Managing Tasks
- **Check** the checkbox to mark a task as completed
- **Click ✎** to edit a task
- **Click ✕** to delete a task
- **Drag** tasks to reorder them

### Theme Toggle
- Click the moon/sun icon in the header
- Theme preference is saved automatically
- Smooth transition between themes

## 💾 Local Storage

All data is automatically saved to browser's localStorage:
- `tasks` - Array of task objects
- `filter` - Current filter setting
- `isDarkMode` - Theme preference

Data persists across browser sessions.

## 🔍 Form Validation

- Empty tasks are prevented with error messages
- Task text is trimmed of whitespace
- Edit form validates before saving
- User feedback through error states

## ✨ Animation Details

- **slideDown** - Header entrance animation
- **fadeIn** - General fade-in effect
- **slideInUp** - Task item entrance
- **slideInLeft** - Error message entrance
- **Hover effects** - Smooth interactive feedback
- **Drag animations** - Visual feedback during drag-and-drop

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels for buttons and inputs
- Focus visible styles for keyboard navigation
- Color contrast compliance
- Reduced motion support for users who prefer it

## 🐛 Error Handling

- Try-catch blocks in async operations
- User-friendly error messages
- localStorage quota error handling
- Validation error feedback

## 🚢 Building for Production

```bash
npm run build
```

Creates an optimized production build in the `build` folder.

## 📝 Future Enhancements

- Task categories/tags
- Due dates and reminders
- Task priority levels
- Search functionality
- Data export/import
- Cloud synchronization
- Task subtasks
- Recurring tasks

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork, modify, and improve this project!

---

**Built with ❤️ using React and CSS**
