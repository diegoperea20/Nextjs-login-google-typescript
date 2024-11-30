"use client";

import Link from "next/link";
import { signIn, useSession, signOut } from "next-auth/react";
import { useState, useEffect } from "react";

type Theme = "light" | "dark";

function Navbar() {
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  /* dark mode */
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <nav className="bg-slate-900 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <h1 className="text-white text-xl font-bold">NextGoogle</h1>
          </Link>

          {/* Desktop Menu */}
          {session?.user ? (
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/dashboard" className="text-white hover:text-gray-300">
                Dashboard
              </Link>
              <Link href="/notifications" className="text-white hover:text-gray-300">
                Notifications
              </Link>
              <Link href="/secondDashboard" className="text-white hover:text-gray-300">
                SecondDashboard
              </Link>
              
              <div className="flex items-center space-x-4">
                <p className="text-white">
                  {session.user.name} {session.user.email}
                </p>
                <img
                  src={session.user.image ?? ""}
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="text-white hover:text-gray-300"
                >
                  Logout
                </button>
                
                {/* Dark Mode Toggle */}
                <div className="flex items-center space-x-2">
                  <span className="text-white text-sm">Dark Mode</span>
                  <label className="relative inline-block w-12 h-6 rounded-full">
                    <input
                      onChange={toggleTheme}
                      className="sr-only peer"
                      type="checkbox"
                      checked={theme === "dark"}
                    />
                    <div className="absolute inset-0 bg-gray-300 peer-checked:bg-gradient-to-r peer-checked:from-blue-400 peer-checked:to-purple-400 rounded-full transition-colors"></div>
                    <div className="absolute left-1 top-1 w-4 h-4 bg-white dark:bg-gray-800 rounded-full transition-transform peer-checked:translate-x-6"></div>
                  </label>
                </div>
              </div>
            </div>
          ) : (
            <div className="hidden md:block">
              <button
                onClick={() => signIn("google", { callbackUrl: "/" })}
                className="flex items-center gap-2 bg-white px-6 py-2 rounded-lg hover:bg-gray-50 transition text-black"
              >
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span>Continue with Google</span>
              </button>
            </div>
          )}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={handleNav}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              {!menuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && session?.user && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800 ">
            <Link
              href="/dashboard"
              className="block px-3 py-2 text-white hover:bg-slate-700  rounded-md"
            >
              Dashboard
            </Link>
            <Link
              href="/notifications"
              className="block px-3 py-2 text-white hover:bg-slate-700 rounded-md"
            >
              Notifications
            </Link>
            <Link
              href="/secondDashboard"
              className="block px-3 py-2 text-white hover:bg-slate-700  rounded-md"
            >
              SecondDashboard
            </Link>
            
            <div className="px-3 py-2">
              <div className="flex items-center space-x-3">
                <img
                  src={session.user.image ?? ""}
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
                <p className="text-white text-sm">
                  {session.user.name}
                </p>
              </div>
              
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-white text-sm">Dark Mode</span>
                  <label className="relative inline-block w-12 h-6 rounded-full">
                    <input
                      onChange={toggleTheme}
                      className="sr-only peer"
                      type="checkbox"
                      checked={theme === "dark"}
                    />
                    <div className="absolute inset-0 bg-gray-300 peer-checked:bg-gradient-to-r peer-checked:from-blue-400 peer-checked:to-purple-400 rounded-full transition-colors"></div>
                    <div className="absolute left-1 top-1 w-4 h-4 bg-white dark:bg-gray-800 rounded-full transition-transform peer-checked:translate-x-6"></div>
                  </label>
                </div>
                
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="text-white hover:text-gray-300"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile sign in */}
      {menuOpen && !session?.user && (
        <div className="md:hidden px-2 pt-2 pb-3 bg-slate-900 dark:bg-slate-900">
          {/* togle dark mode */}
          <div className="flex items-center space-x-2">
                  <span className="text-white text-sm">Dark Mode</span>
                  <label className="relative inline-block w-12 h-6 rounded-full">
                    <input
                      onChange={toggleTheme}
                      className="sr-only peer"
                      type="checkbox"
                      checked={theme === "dark"}
                    />
                    <div className="absolute inset-0 bg-gray-300 peer-checked:bg-gradient-to-r peer-checked:from-blue-400 peer-checked:to-purple-400 rounded-full transition-colors"></div>
                    <div className="absolute left-1 top-1 w-4 h-4 bg-white dark:bg-gray-800 rounded-full transition-transform peer-checked:translate-x-6"></div>
                  </label>
                </div>
                <br></br>

          <button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="w-full flex items-center justify-center gap-2 bg-white px-6 py-2 rounded-lg hover:bg-gray-50 transition text-black"
          >
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span>Continue with Google</span>
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;