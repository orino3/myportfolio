import * as React from 'react';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-xl font-bold text-gray-900 hover:text-blue-600">
            Portfolio
          </Link>
          
          <div className="hidden sm:flex sm:space-x-8">
            <Link 
              href="/about"
              className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              About
            </Link>
            <Link 
              href="/projects"
              className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Projects
            </Link>
            <Link 
              href="/skills"
              className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Skills
            </Link>
            <Link 
              href="/contact"
              className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Contact
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            href="/about"
            className="text-gray-600 hover:text-blue-600 block px-3 py-2 text-base font-medium"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="text-gray-600 hover:text-blue-600 block px-3 py-2 text-base font-medium"
          >
            Projects
          </Link>
          <Link
            href="/skills"
            className="text-gray-600 hover:text-blue-600 block px-3 py-2 text-base font-medium"
          >
            Skills
          </Link>
          <Link
            href="/contact"
            className="text-gray-600 hover:text-blue-600 block px-3 py-2 text-base font-medium"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
} 