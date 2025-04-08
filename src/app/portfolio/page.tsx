import Link from 'next/link';
import Image from 'next/image';

export default function Portfolio() {
  // Portfolio project data
  const projects = [
    {
      id: 1,
      title: 'Contemporary Living Room',
      description: 'A complete transformation of a dated living space into a modern, open concept design with custom furniture and ambient lighting.',
      imageSrc: '/images/interior-1.jpg',
      category: 'Living Room',
      location: 'San Francisco, CA',
      year: '2023'
    },
    {
      id: 2,
      title: 'Luxury Kitchen Remodel',
      description: 'An elegant kitchen renovation featuring custom cabinetry, premium finishes, and state-of-the-art appliances for the ultimate cooking experience.',
      imageSrc: '/images/interior-2.jpg',
      category: 'Kitchen',
      location: 'New York, NY',
      year: '2023'
    },
    {
      id: 3,
      title: 'Spa-Like Bathroom',
      description: 'A complete bathroom renovation creating a relaxing retreat with modern amenities, a walk-in shower, and custom vanity.',
      imageSrc: '/portfolio/spa-bathroom/main.jpg',
      category: 'Bathroom',
      location: 'Los Angeles, CA',
      year: '2022'
    },
    {
      id: 4,
      title: 'Minimalist Master Bedroom',
      description: 'A serene master bedroom with a clean, minimalist design featuring warm neutrals, custom millwork, and soft textures.',
      imageSrc: '/images/interior-1.jpg',
      category: 'Bedroom',
      location: 'Chicago, IL',
      year: '2022'
    },
    {
      id: 5,
      title: 'Urban Loft Conversion',
      description: 'Transformation of an industrial loft into a modern living space with exposed brick, high ceilings, and custom built-ins.',
      imageSrc: '/images/interior-2.jpg',
      category: 'Whole Home',
      location: 'Seattle, WA',
      year: '2021'
    },
    {
      id: 6,
      title: 'Coastal-Inspired Dining Room',
      description: 'A bright, airy dining space with coastal elements, custom table, and statement lighting for entertaining.',
      imageSrc: '/portfolio/coastal-dining/main.jpg',
      category: 'Dining Room',
      location: 'Miami, FL',
      year: '2021'
    },
    {
      id: 7,
      title: 'Modern Home Office',
      description: 'A productive and stylish work environment with custom desk, integrated storage, and ergonomic features.',
      imageSrc: '/images/interior-1.jpg',
      category: 'Office',
      location: 'Austin, TX',
      year: '2023'
    },
    {
      id: 8,
      title: 'Outdoor Living Space',
      description: 'An extension of indoor living with comfortable seating, outdoor kitchen, and ambient lighting for year-round enjoyment.',
      imageSrc: '/images/interior-2.jpg',
      category: 'Outdoor',
      location: 'Denver, CO',
      year: '2022'
    },
    {
      id: 9,
      title: 'Scandinavian-Inspired Apartment',
      description: 'A complete renovation of a small apartment using Scandinavian design principles for a bright, functional space.',
      imageSrc: '/portfolio/scandinavian/main.jpg',
      category: 'Whole Home',
      location: 'Portland, OR',
      year: '2021'
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
                <Link href="/portfolio" className="text-slate-900 font-medium">
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

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Our Portfolio</h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-slate-300">
            Explore our showcase of completed interior renovation projects, from modern luxury homes to functional commercial spaces.
          </p>
        </div>
      </section>

      {/* Filters - For Future Implementation */}
      <section className="bg-white border-b py-6">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-4 py-2 bg-slate-900 text-white rounded-md">All Projects</button>
            <button className="px-4 py-2 bg-white text-slate-700 border border-slate-300 rounded-md hover:bg-slate-50 transition-colors">Living Room</button>
            <button className="px-4 py-2 bg-white text-slate-700 border border-slate-300 rounded-md hover:bg-slate-50 transition-colors">Kitchen</button>
            <button className="px-4 py-2 bg-white text-slate-700 border border-slate-300 rounded-md hover:bg-slate-50 transition-colors">Bathroom</button>
            <button className="px-4 py-2 bg-white text-slate-700 border border-slate-300 rounded-md hover:bg-slate-50 transition-colors">Whole Home</button>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
                <div className="relative h-72">
                  <Image 
                    src={project.imageSrc} 
                    alt={project.title} 
                    fill
                    style={{objectFit: 'cover'}}
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
                    <span className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded-full">{project.category}</span>
                  </div>
                  <p className="text-slate-700 mb-4">{project.description}</p>
                  <div className="flex justify-between text-sm text-slate-500">
                    <span>{project.location}</span>
                    <span>{project.year}</span>
                  </div>
                </div>
                <div className="px-6 py-4 bg-slate-50 border-t">
                  <Link 
                    href={`/portfolio/${project.id}`} 
                    className="text-slate-900 font-medium hover:text-slate-700 transition-colors flex items-center"
                  >
                    View Project Details
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Ready to Transform Your Space?</h2>
          <p className="text-slate-700 mb-8">
            Our team of expert designers can help bring your vision to life with our professional 3D visualization tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/dashboard" 
              className="bg-slate-900 text-white hover:bg-slate-800 px-8 py-3 rounded-md font-medium transition-colors"
            >
              Start Your Project
            </Link>
            <Link 
              href="/contact" 
              className="bg-white text-slate-900 border border-slate-300 hover:bg-slate-50 px-8 py-3 rounded-md font-medium transition-colors"
            >
              Contact Us
            </Link>
          </div>
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