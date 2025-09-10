import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const CodePlayground = () => {
  const [activeExample, setActiveExample] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState('');

  const codeExamples = [
    {
      id: 'react-hooks',
      title: 'Custom React Hook',
      language: 'javascript',
      description: 'A custom hook for managing local storage with React state',
      code: `import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initialValue) => {
  // Get value from localStorage or use initial value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error reading localStorage:', error);
      return initialValue;
    }
  });

  // Update localStorage when state changes
  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error setting localStorage:', error);
    }
  };

  return [storedValue, setValue];
};

// Usage example:
const MyComponent = () => {
  const [name, setName] = useLocalStorage('name', '');
  
  return (
    <input 
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Enter your name"
    />
  );
};`,
      output: `✅ Hook created successfully!
📦 Manages localStorage automatically
🔄 Syncs with React state
💾 Handles JSON serialization
⚡ Ready to use in components`
    },
    {
      id: 'async-patterns',
      title: 'Async/Await Patterns',
      language: 'javascript',
      description: 'Modern JavaScript async patterns with error handling',
      code: `// Async data fetching with proper error handling
const fetchUserData = async (userId) => {
  try {
    const response = await fetch(\`/api/users/\${userId}\`);
    
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    const userData = await response.json();
    return { data: userData, error: null };
  } catch (error) {
    console.error('Failed to fetch user:', error);
    return { data: null, error: error.message };
  }
};

// Parallel async operations
const fetchDashboardData = async () => {
  try {
    const [users, posts, analytics] = await Promise.all([
      fetch('/api/users').then(r => r.json()),
      fetch('/api/posts').then(r => r.json()),
      fetch('/api/analytics').then(r => r.json())
    ]);
    
    return { users, posts, analytics };
  } catch (error) {
    throw new Error(\`Dashboard data fetch failed: \${error.message}\`);
  }
};

// Usage with React
const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchDashboardData()
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);
  
  if (loading) return <div>Loading...</div>;
  return <div>{/* Render dashboard */}</div>;
};`,
      output: `🚀 Async patterns implemented!
⚡ Parallel requests optimized
🛡️ Error handling included
📊 Dashboard data loaded
✨ React integration ready`
    },
    {
      id: 'css-animations',
      title: 'CSS Animations & Transitions',
      language: 'css',
      description: 'Smooth CSS animations with Tailwind utilities',
      code: `/* Custom animation keyframes */
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

/* Utility classes */
.animate-slide-in-up {
  animation: slideInUp 0.6s ease-out forwards;
}

.animate-pulse-gentle {
  animation: pulse 2s ease-in-out infinite;
}

/* Hover effects with Tailwind */
.card-hover {
  @apply transition-all duration-300 ease-in-out;
  @apply hover:shadow-lg hover:-translate-y-1;
  @apply hover:scale-105 hover:bg-accent/5;
}

/* Loading spinner */
.spinner {
  @apply w-8 h-8 border-4 border-gray-200 border-t-accent;
  @apply rounded-full animate-spin;
}

/* Gradient text effect */
.gradient-text {
  @apply bg-gradient-to-r from-primary to-accent;
  @apply bg-clip-text text-transparent;
  @apply animate-pulse-gentle;
}`,
      output: `🎨 Animations created!
✨ Smooth transitions added
🎯 Hover effects ready
⚡ Performance optimized
🌈 Gradient effects applied`
    },
    {
      id: 'typescript-utils',
      title: 'TypeScript Utilities',
      language: 'typescript',
      description: 'Type-safe utility functions and interfaces',
      code: `// Generic API response type
interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
  success: boolean;
}

// User interface with optional fields
interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'admin' | 'user' | 'moderator';
  createdAt: Date;
  preferences?: {
    theme: 'light' | 'dark';
    notifications: boolean;
  };
}

// Generic hook for API calls
const useApi = <T>(url: string): ApiResponse<T> => {
  const [state, setState] = useState<ApiResponse<T>>({
    data: null,
    error: null,
    loading: true,
    success: false
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch');
        
        const data: T = await response.json();
        setState({
          data,
          error: null,
          loading: false,
          success: true
        });
      } catch (error) {
        setState({
          data: null,
          error: error instanceof Error ? error.message : 'Unknown error',
          loading: false,
          success: false
        });
      }
    };

    fetchData();
  }, [url]);

  return state;
};

// Usage example
const UserProfile: React.FC<{ userId: string }> = ({ userId }) => {
  const { data: user, loading, error } = useApi<User>(\`/api/users/\${userId}\`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <span>Role: {user.role}</span>
    </div>
  );
};`,
      output: `🔒 Type safety enforced!
🎯 Generic types working
📝 Interfaces defined
⚡ Hook implementation ready
✅ TypeScript compilation successful`
    }
  ];

  const runCode = async () => {
    setIsRunning(true);
    setOutput('Running code...');
    
    // Simulate code execution
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setOutput(codeExamples?.[activeExample]?.output);
    setIsRunning(false);
  };

  const copyCode = () => {
    navigator.clipboard?.writeText(codeExamples?.[activeExample]?.code);
  };

  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-accent p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Code Playground</h3>
            <p className="text-white/80">Interactive code examples and live demonstrations</p>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Code2" size={24} className="text-white" />
            <Icon name="Play" size={24} className="text-white" />
          </div>
        </div>
      </div>
      {/* Example Tabs */}
      <div className="border-b border-border bg-muted/30">
        <div className="flex overflow-x-auto">
          {codeExamples?.map((example, index) => (
            <button
              key={example?.id}
              onClick={() => setActiveExample(index)}
              className={`flex-shrink-0 px-6 py-4 text-sm font-medium transition-all duration-200 border-b-2 ${
                activeExample === index
                  ? 'text-accent border-accent bg-background' :'text-text-secondary border-transparent hover:text-text-primary hover:bg-muted/50'
              }`}
            >
              {example?.title}
            </button>
          ))}
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Code Editor */}
        <div className="relative">
          <div className="flex items-center justify-between p-4 bg-muted/30 border-b border-border">
            <div className="flex items-center space-x-3">
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-sm font-medium text-text-primary">
                {codeExamples?.[activeExample]?.title}
              </span>
              <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">
                {codeExamples?.[activeExample]?.language}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={copyCode}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
                title="Copy code"
              >
                <Icon name="Copy" size={16} className="text-text-secondary" />
              </button>
              <button
                onClick={runCode}
                disabled={isRunning}
                className="flex items-center space-x-2 px-3 py-1.5 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-50"
              >
                {isRunning ? (
                  <Icon name="Loader2" size={16} className="animate-spin" />
                ) : (
                  <Icon name="Play" size={16} />
                )}
                <span className="text-sm">Run</span>
              </button>
            </div>
          </div>

          <div className="p-4 bg-gray-900 text-green-400 font-mono text-sm overflow-auto max-h-96">
            <pre className="whitespace-pre-wrap">{codeExamples?.[activeExample]?.code}</pre>
          </div>
        </div>

        {/* Output Panel */}
        <div className="border-l border-border">
          <div className="p-4 bg-muted/30 border-b border-border">
            <div className="flex items-center space-x-2">
              <Icon name="Terminal" size={16} className="text-text-secondary" />
              <span className="text-sm font-medium text-text-primary">Output</span>
            </div>
          </div>

          <div className="p-4 space-y-4">
            {/* Description */}
            <div className="bg-muted/50 rounded-lg p-4">
              <h4 className="font-semibold text-text-primary mb-2">Description</h4>
              <p className="text-sm text-text-secondary">
                {codeExamples?.[activeExample]?.description}
              </p>
            </div>

            {/* Console Output */}
            <div className="bg-gray-900 rounded-lg p-4 min-h-32">
              <div className="flex items-center space-x-2 mb-3">
                <Icon name="Terminal" size={16} className="text-green-400" />
                <span className="text-sm font-medium text-green-400">Console</span>
              </div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={output}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="font-mono text-sm"
                >
                  {isRunning ? (
                    <div className="flex items-center space-x-2 text-yellow-400">
                      <Icon name="Loader2" size={16} className="animate-spin" />
                      <span>Executing code...</span>
                    </div>
                  ) : output ? (
                    <div className="text-green-400 whitespace-pre-line">{output}</div>
                  ) : (
                    <div className="text-gray-500">Click "Run" to execute the code</div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Code Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted/50 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-accent">
                  {codeExamples?.[activeExample]?.code?.split('\n')?.length}
                </div>
                <div className="text-xs text-text-secondary">Lines</div>
              </div>
              <div className="bg-muted/50 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-accent">
                  {codeExamples?.[activeExample]?.code?.length}
                </div>
                <div className="text-xs text-text-secondary">Characters</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodePlayground;