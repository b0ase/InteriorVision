import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
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
                <Link href="/" className="text-slate-900 font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-600 hover:text-slate-900 transition-colors">
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

      {/* Hero Section with Background Image */}
      <section className="relative h-[70vh] bg-gradient-to-r from-slate-900 to-slate-700 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero-background.jpg" 
            alt="Modern interior design" 
            fill 
            priority
            style={{objectFit: 'cover', objectPosition: 'center'}}
            className="opacity-40"
          />
        </div>
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-start max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Transform Your Space</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Upload photos of your property and get professional 3D visualizations of what your renovation could look like.
          </p>
          <Link 
            href="/dashboard" 
            className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-3 rounded-md font-medium text-lg transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-16 text-slate-900">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center">
              <div className="bg-slate-100 p-6 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-slate-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900">Upload</h3>
              <p className="text-slate-700">Upload photos of your current space and floor plans.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-slate-100 p-6 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-slate-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900">Visualize</h3>
              <p className="text-slate-700">Explore 3D models of your space with our visualization tools.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-slate-100 p-6 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-slate-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900">Renovate</h3>
              <p className="text-slate-700">Work with our professionals to bring your vision to life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section - NEW */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-10 text-slate-900">Our Work</h2>
          <p className="text-center text-slate-700 mb-12 max-w-3xl mx-auto">
            Browse some of our recent interior renovation projects and see how we've transformed spaces for our clients.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Portfolio Item 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image 
                  src="/images/interior-1.jpg" 
                  alt="Modern living room renovation" 
                  fill
                  style={{objectFit: 'cover'}}
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-slate-900">Contemporary Living Room</h3>
                <p className="text-slate-700">A complete transformation of a dated living space into a modern, open concept design.</p>
              </div>
            </div>
            
            {/* Portfolio Item 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image 
                  src="/images/interior-2.jpg" 
                  alt="Kitchen renovation" 
                  fill
                  style={{objectFit: 'cover'}}
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-slate-900">Luxury Kitchen Remodel</h3>
                <p className="text-slate-700">An elegant kitchen renovation featuring custom cabinetry and premium finishes.</p>
              </div>
            </div>
            
            {/* Portfolio Item 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image 
                  src="/images/interior-3.jpg" 
                  alt="Bathroom renovation" 
                  fill
                  style={{objectFit: 'cover'}}
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-slate-900">Spa-Like Bathroom</h3>
                <p className="text-slate-700">A complete bathroom renovation creating a relaxing retreat with modern amenities.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <Link 
              href="/portfolio" 
              className="inline-flex items-center text-slate-900 font-medium hover:text-slate-700 transition-colors"
            >
              View all projects
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Ready to Transform Your Space?</h2>
          <p className="text-slate-700 mb-8">
            Start your renovation journey today with our innovative 3D visualization tools.
          </p>
          <Link 
            href="/dashboard" 
            className="bg-slate-900 text-white hover:bg-slate-800 px-8 py-3 rounded-md font-medium text-lg transition-colors inline-block"
          >
            Get Started
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
