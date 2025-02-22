import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";


const LandingSections = () => {
  return (
    <div>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Smart E-Commerce Ideas with AI ChatBot.
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                The smart e-commerce app with an AI chatbot to help you organize your store, boost profits, and enhance manageability.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="#signup">Get Started</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#features">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Key Features
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="rounded-full bg-primary p-3">
                  <svg
                    className=" h-6 w-6 text-white"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" x2="8" y1="13" y2="13" />
                    <line x1="16" x2="8" y1="17" y2="17" />
                    <line x1="10" x2="8" y1="9" y2="9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Effortless ideas</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Quickly jot down your thoughts with our intuitive interface.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="rounded-full bg-primary p-3">
                  <svg
                    className=" h-6 w-6 text-white"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Secure Storage</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Your chats are encrypted and safely stored in the cloud.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="rounded-full bg-primary p-3">
                  <svg
                    className=" h-6 w-6 text-white"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Smart Search</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Find any idea instantly with our powerful search feature.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
           <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Choose Your Plan</h1>
      <p className="text-lg text-center mb-12 text-gray-600">
        Select the best plan that fits your needs and start your journey today.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Basic Plan */}
        <div className="border rounded-lg p-6 shadow-md text-center">
          <h2 className="text-2xl font-semibold">Basic</h2>
          <p className="text-gray-600 my-4">Perfect for individuals</p>
          <p className="text-4xl font-bold">$9.99<span className="text-lg">/mo</span></p>
          <ul className="text-left  mt-4 space-y-2">
            <li>✔️ Access to standard features</li>
            <li>✔️ Limited product uploads</li>
            <li>✔️ Email support</li>
            <li>✔️ Basic analytics and reporting </li>
          </ul>
          <Button className="mt-6  w-full">Get Started</Button>
        </div>

        {/* Pro Plan */}
        <div className="border rounded-lg p-6 shadow-md text-center ">
          <h2 className="text-2xl font-semibold">Pro</h2>
          <p className="text-gray-600 my-4">Ideal for small businesses</p>
          <p className="text-4xl font-bold">$29.99<span className="text-lg">/mo</span></p>
          <ul className="text-left mt-4 space-y-2">
            <li>✔️ Everything in Basic</li>
            <li>✔️ Unlimited product uploads</li>
            <li>✔️ Advanced analytics</li>
            <li>✔️ Priority support</li>
          </ul>
          <Button className="mt-6 w-full">Upgrade Now</Button>
        </div>

        {/* Enterprise Plan */}
        <div className="border rounded-lg p-6 shadow-md text-center">
          <h2 className="text-2xl font-semibold">Enterprise</h2>
          <p className="text-gray-600 my-4">Best for large-scale businesses</p>
          <p className="text-4xl font-bold">$99.99<span className="text-lg">/mo</span></p>
          <ul className="text-left mt-4 space-y-2">
            <li>✔️ Everything in Pro</li>
            <li>✔️ Custom integrations</li>
            <li>✔️ Dedicated account manager</li>
            <li>✔️ 24/7 premium support</li>
          </ul>
          <Button className="mt-6 w-full">Contact Us</Button>
        </div>
      </div>
    </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Start Taking Better Strategies Today
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Join thousands of satisfied users who have transformed their
                  consulting experience with SEUN_DEV&apos;s.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full" asChild>
                  <Link href="#signup">Get Started for Free</Link>
                </Button>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  No credit card required. Start with our free plan and upgrade
                  anytime.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 SEUN_DEV&apos;s. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
};

export default LandingSections;
