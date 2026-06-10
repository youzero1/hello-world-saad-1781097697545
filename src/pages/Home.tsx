import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import clsx from 'clsx';

export default function Home() {
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center">
      <div className="text-center px-6">
        <div className="flex items-center justify-center mb-6">
          <Sparkles className="w-12 h-12 text-indigo-500 mr-3" />
          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
            Hello, World!
          </h1>
        </div>

        <p className="text-xl text-gray-500 mb-10 max-w-md mx-auto">
          Welcome to your shiny new React + Vite + Tailwind v4 app.
        </p>

        <button
          onClick={() => setClicked((prev) => !prev)}
          className={clsx(
            'px-8 py-3 rounded-full text-white font-semibold text-lg shadow-lg transition-all duration-200 active:scale-95',
            clicked
              ? 'bg-purple-600 hover:bg-purple-700'
              : 'bg-indigo-500 hover:bg-indigo-600'
          )}
        >
          {clicked ? '🎉 You clicked me!' : 'Click me'}
        </button>

        {clicked && (
          <p className="mt-6 text-gray-400 text-sm animate-pulse">
            Great job! The app is working perfectly.
          </p>
        )}
      </div>
    </div>
  );
}
