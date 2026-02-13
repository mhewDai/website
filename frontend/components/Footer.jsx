import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <p className="mb-4">© {currentYear} Your Name. All rights reserved.</p>
          <p className="text-gray-400 text-sm">
            Built with React, Tailwind CSS, and ❤️
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
