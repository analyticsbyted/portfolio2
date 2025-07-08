import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo1.svg";
import Button from "../components/Button";

const NotFound = () => (
  <section className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 py-12">
    <img src={logo} alt="Site logo" width={64} height={64} className="mb-6" />
    <h1 className="text-4xl font-bold mb-2 text-blue-900 dark:text-blue-200">Page Not Found</h1>
    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">Sorry, the page you are looking for does not exist or has been moved.</p>
    <Button href="/" ariaLabel="Go to home page">Go Home</Button>
  </section>
);

export default NotFound;