import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-[#e8faf4] dark:bg-gray-900">
      <div className="max-w-3xl mx-auto text-center px-6">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-emerald-100 dark:bg-gray-800 mb-6">
          <span className="text-4xl font-extrabold text-emerald-600">404</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Page not found
        </h1>
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          The page you are looking for doesn’t exist or has been moved.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white">
            <Link to="/">Go Home</Link>
          </Button>
          <Button asChild variant="outline" className="border-emerald-500 text-emerald-600 hover:bg-emerald-50">
            <Link to="/browse-tasks">Browse Tasks</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
