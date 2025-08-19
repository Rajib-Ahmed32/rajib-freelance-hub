import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    alert("Thanks for subscribing! You'll receive the latest task updates.");
    setEmail("");
  };

  return (
    <section className="w-full bg-white dark:bg-gray-900 px-6 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Stay in the loop</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300">Subscribe to get updates about new featured tasks and platform news.</p>
        <form onSubmit={onSubmit} className="mt-6 flex flex-col sm:flex-row items-center gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full flex-1 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-3"
            required
          />
          <button type="submit" className="w-full sm:w-auto rounded-md bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;