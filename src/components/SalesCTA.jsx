import React from "react";
import { Link } from "react-router-dom";

const SalesCTA = () => {
  return (
    <section className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white">Got a task in mind?</h3>
          <p className="mt-2 text-emerald-100">Post your task and get bids from trusted freelancers in minutes.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/add-task" className="rounded-md bg-white text-emerald-700 hover:bg-emerald-50 font-semibold px-5 py-3">Post a Task</Link>
          <Link to="/browse-tasks" className="rounded-md border border-white/70 text-white hover:bg-white/10 font-semibold px-5 py-3">Browse Tasks</Link>
        </div>
      </div>
    </section>
  );
};

export default SalesCTA;