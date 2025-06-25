import React from 'react'

export default function AiNotFound({handleUi}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-md mx-auto">
        <div className="text-9xl font-bold text-blue-600 mb-4">404</div>
        <h1 className="text-3xl font-bold text-blue-900 mb-2">Page Not Found</h1>
        <p className="text-blue-700 mb-6">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="animate-bounce">
          <svg
            className="w-16 h-16 mx-auto text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <a
          href="/"
          className="mt-8 inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
        >
          Return Home
        </a>
        <button
          onClick={handleUi}
          className="mt-8 mx-5 inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
        >
          go to myket page
        </button>
      </div>
    </div>
  )
}
