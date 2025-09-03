import { TodoContextProvider, UseTodoContext } from './context/TodoContext'
import './App.css'
import { TodoForm, TodoItem } from './components/Index'

// Inner component that uses context
function TodoApp() {
  const { todos } = UseTodoContext();

  return (
    <div className="min-h-screen bg-[#0D1117] p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#E0E0E0]">
          📝 My Todo App
        </h1>
        
        <div className="bg-[#161B22] rounded-lg shadow-lg p-6 space-y-6">
          {/* TodoForm Component */}
          <TodoForm />
          
          {/* Direct rendering of TodoItems */}
          <div className="space-y-3">
            {todos.length > 0 ? (
              todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
              ))
            ) : (
              <div className="text-center py-8 text-[#BB86FC]">
                <p className="text-lg">No todos yet! 📝</p>
                <p className="text-sm">Add your first todo above</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Main App component (wraps with provider)
function App() {
  return (
    <TodoContextProvider>
      <TodoApp />
    </TodoContextProvider>
  )
}

export default App
