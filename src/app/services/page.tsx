import Link from 'next/link';

export default function Services() {
  // Services data
  const services = [
    {
      id: 1,
      title: '3D Visualization',
      description: 'Upload photos and floor plans to receive detailed 3D visualizations of your space with renovation options.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-slate-700">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Interior Design Consultation',
      description: 'Work with our professional designers to create a customized plan for your space that fits your style and budget.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-slate-700">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Full Renovation Management',
      description: 'From design to completion, we handle the entire renovation process, including contractor coordination and materials selection.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-slate-700">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Custom Furniture Design',
      description: 'Create custom furniture pieces tailored to your space and style preferences.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-slate-700">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'Material and Finish Selection',
      description: 'Expert guidance on selecting the right materials, colors, and finishes for your renovation project.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-slate-700">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'Space Planning & Optimization',
      description: 'Maximize the functionality of your space with professional layout planning and organization solutions.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-slate-700">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-slate-900">
            Interior Vision
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-900 font-medium">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  href="/dashboard" 
                  className="bg-slate-900 text-white px-4 py-2 rounded-md hover:bg-slate-800 transition-colors"
                >
                  Client Portal
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Our Services</h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-slate-300">
            We offer comprehensive interior design and renovation services to transform your space into something extraordinary.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-slate-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-white p-4 rounded-lg inline-block mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">{service.title}</h3>
                <p className="text-slate-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Our Design Process</h2>
          
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="bg-white p-6 rounded-full h-20 w-20 flex items-center justify-center shadow-md">
                <span className="text-3xl font-bold text-slate-900">1</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-slate-900">Consultation & Discovery</h3>
                <p className="text-slate-700">
                  We start by understanding your needs, preferences, and budget. During this phase, we&apos;ll discuss your vision and collect photos and measurements of your space.
                </p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="bg-white p-6 rounded-full h-20 w-20 flex items-center justify-center shadow-md">
                <span className="text-3xl font-bold text-slate-900">2</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-slate-900">3D Visualization</h3>
                <p className="text-slate-700">
                  Using our cutting-edge technology, we create detailed 3D visualizations of your space with proposed design changes. This allows you to see and adjust the design before any physical work begins.
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="bg-white p-6 rounded-full h-20 w-20 flex items-center justify-center shadow-md">
                <span className="text-3xl font-bold text-slate-900">3</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-slate-900">Detailed Design Planning</h3>
                <p className="text-slate-700">
                  After refining the visualizations, we create detailed design plans, including materials, color schemes, furniture selections, and custom elements.
                </p>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="bg-white p-6 rounded-full h-20 w-20 flex items-center justify-center shadow-md">
                <span className="text-3xl font-bold text-slate-900">4</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-slate-900">Execution & Installation</h3>
                <p className="text-slate-700">
                  Our experienced team handles the implementation of the design, coordinating with contractors and suppliers to ensure your vision comes to life exactly as planned.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Simple Version */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-4 text-slate-900">Pricing Plans</h2>
          <p className="text-center text-slate-700 mb-12 max-w-3xl mx-auto">
            We offer flexible pricing options to accommodate different project needs and budgets.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-slate-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-slate-100 p-6 text-center">
                <h3 className="text-xl font-semibold text-slate-900">Basic Visualization</h3>
                <p className="text-slate-700 mt-2">Perfect for single-room renovations</p>
                <p className="text-3xl font-bold text-slate-900 mt-4">$499</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-500 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    3D visualization of one room
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-500 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    2 design revision rounds
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-500 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Digital design files
                  </li>
                </ul>
              </div>
              <div className="p-6 pt-0">
                <Link 
                  href="/contact" 
                  className="block w-full bg-slate-900 text-white text-center py-3 rounded-md hover:bg-slate-800 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
            
            {/* Standard Plan */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg border-2 border-slate-900 relative transform hover:scale-105 transition-transform">
              <div className="absolute top-0 right-0 bg-slate-900 text-white px-4 py-1 text-sm font-medium">
                Popular
              </div>
              <div className="bg-slate-900 text-white p-6 text-center">
                <h3 className="text-xl font-semibold">Complete Home</h3>
                <p className="text-slate-300 mt-2">Ideal for whole-home renovations</p>
                <p className="text-3xl font-bold mt-4">$1,299</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-500 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    3D visualization of up to 5 rooms
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-500 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Unlimited revisions
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-500 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Material and finish recommendations
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-500 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Furniture layout planning
                  </li>
                </ul>
              </div>
              <div className="p-6 pt-0">
                <Link 
                  href="/contact" 
                  className="block w-full bg-slate-900 text-white text-center py-3 rounded-md hover:bg-slate-800 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
            
            {/* Premium Plan */}
            <div className="bg-slate-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-slate-100 p-6 text-center">
                <h3 className="text-xl font-semibold text-slate-900">Premium Design</h3>
                <p className="text-slate-700 mt-2">Full-service luxury experience</p>
                <p className="text-3xl font-bold text-slate-900 mt-4">$2,999</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-500 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Complete home visualization
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-500 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Custom furniture design
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-500 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Full project management
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-500 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Contractor coordination
                  </li>
                </ul>
              </div>
              <div className="p-6 pt-0">
                <Link 
                  href="/contact" 
                  className="block w-full bg-slate-900 text-white text-center py-3 rounded-md hover:bg-slate-800 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
          
          <p className="text-center text-slate-500 mt-8">
            Custom pricing available for commercial projects. <Link href="/contact" className="text-slate-900 font-medium hover:underline">Contact us</Link> for more information.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-slate-300 mb-8">
            Book a free consultation to discuss your project and see how our design services can help bring your vision to life.
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-3 rounded-md font-medium text-lg transition-colors inline-block"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">Interior Vision</h2>
              <p className="text-slate-300 mt-2">Professional interior renovation services</p>
            </div>
            <div className="flex gap-8">
              <Link href="/about" className="text-white hover:text-slate-300 transition-colors">About</Link>
              <Link href="/services" className="text-white hover:text-slate-300 transition-colors">Services</Link>
              <Link href="/contact" className="text-white hover:text-slate-300 transition-colors">Contact</Link>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-300">
            <p>© {new Date().getFullYear()} Interior Vision. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 