import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/ui/Navigation';

// This would typically come from a database or CMS
const projectDetails = {
  'spa-bathroom-retreat': {
    title: 'Spa-Like Bathroom Retreat',
    category: 'Bathroom',
    location: 'Pacific Heights, San Francisco',
    duration: '6 weeks',
    budget: '$75,000',
    description: 'A complete transformation of a dated master bathroom into a luxurious spa-like retreat. This project focused on creating a serene and relaxing environment while maximizing the use of natural light and incorporating high-end materials.',
    challenge: 'The main challenge was working within the existing plumbing layout while creating a more spacious feel in the relatively compact bathroom.',
    solution: 'We optimized the layout by removing a bulky built-in tub and replacing it with a freestanding soaking tub. The shower area was expanded and fitted with frameless glass doors to create an open feel. Strategic placement of mirrors and lighting enhanced the sense of space.',
    features: [
      'Custom marble vanity with double sinks',
      'Freestanding soaking tub with floor-mounted faucet',
      'Large format porcelain tiles with marble veining',
      'Rainfall shower head with body jets',
      'Heated flooring system',
      'Custom LED lighting with dimmer controls',
      'Built-in storage niches',
      'Frameless glass shower enclosure'
    ],
    images: [
      '/portfolio/spa-bathroom/main.jpg',
      '/portfolio/spa-bathroom/vanity.jpg',
      '/portfolio/spa-bathroom/shower.jpg',
      '/portfolio/spa-bathroom/tub.jpg'
    ]
  },
  'coastal-dining-room': {
    title: 'Coastal-Inspired Dining Room',
    category: 'Dining Room',
    location: 'Marina District, San Francisco',
    duration: '4 weeks',
    budget: '$45,000',
    description: 'A bright and airy dining room transformation that brings the coastal atmosphere indoors. The design combines natural textures, ocean-inspired colors, and elegant furnishings to create a sophisticated yet relaxed dining space.',
    challenge: 'The room lacked natural light and felt disconnected from the rest of the home&apos;s coastal aesthetic.',
    solution: 'We installed larger windows and a set of French doors leading to the patio, flooding the space with natural light. The color palette was carefully selected to reflect the coastal theme while maintaining elegance.',
    features: [
      'Custom wainscoting with sea-inspired blue paint',
      'Handcrafted driftwood chandelier',
      'Solid oak dining table with whitewash finish',
      'Natural fiber area rug',
      'Linen upholstered dining chairs',
      'Built-in wine storage',
      'Shell and coral decorative accents',
      'Sheer linen window treatments'
    ],
    images: [
      '/portfolio/coastal-dining/main.jpg',
      '/portfolio/coastal-dining/details.jpg',
      '/portfolio/coastal-dining/storage.jpg',
      '/portfolio/coastal-dining/window.jpg'
    ]
  },
  'scandinavian-apartment': {
    title: 'Scandinavian-Inspired Apartment',
    category: 'Full Home',
    location: 'Hayes Valley, San Francisco',
    duration: '12 weeks',
    budget: '$120,000',
    description: 'A complete apartment renovation embracing Scandinavian design principles of minimalism, functionality, and natural elements. The project transformed a dark and cramped space into an open, light-filled home.',
    challenge: 'The apartment had a compartmentalized layout that made it feel small and dark, with outdated finishes throughout.',
    solution: 'We removed several non-load-bearing walls to create an open-concept living space. Light wood flooring, white walls, and strategic lighting were used to brighten the space. Custom storage solutions were integrated throughout.',
    features: [
      'Open-concept living and dining area',
      'Custom white oak cabinetry',
      'Minimalist kitchen with integrated appliances',
      'Built-in window seating with storage',
      'Multi-functional furniture pieces',
      'Natural fiber textiles',
      'Black metal accent fixtures',
      'Indoor plants and greenery'
    ],
    images: [
      '/portfolio/scandinavian/main.jpg',
      '/portfolio/scandinavian/kitchen.jpg',
      '/portfolio/scandinavian/living.jpg',
      '/portfolio/scandinavian/bedroom.jpg'
    ]
  }
};

export default function ProjectDetails({ params }: { params: { slug: string } }) {
  const project = projectDetails[params.slug as keyof typeof projectDetails];

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-slate-900">Project Not Found</h1>
            <p className="mt-2 text-slate-600">The project you're looking for doesn't exist.</p>
            <Link 
              href="/portfolio"
              className="mt-4 inline-block text-slate-900 font-medium hover:text-slate-700"
            >
              ← Back to Portfolio
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px]">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto max-w-6xl">
            <Link 
              href="/portfolio"
              className="inline-block text-white/80 hover:text-white mb-4"
            >
              ← Back to Portfolio
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{project.title}</h1>
            <div className="flex flex-wrap gap-4">
              <span className="px-3 py-1 bg-white/20 rounded-full text-white backdrop-blur-sm">
                {project.category}
              </span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-white backdrop-blur-sm">
                {project.location}
              </span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-white backdrop-blur-sm">
                {project.duration}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Overview</h2>
              <p className="text-slate-800 mb-8">{project.description}</p>

              <h3 className="text-xl font-bold text-slate-900 mb-4">The Challenge</h3>
              <p className="text-slate-800 mb-8">{project.challenge}</p>

              <h3 className="text-xl font-bold text-slate-900 mb-4">Our Solution</h3>
              <p className="text-slate-800 mb-8">{project.solution}</p>

              <h3 className="text-xl font-bold text-slate-900 mb-4">Key Features</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-800 mb-8">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-slate-700">Location</h4>
                    <p className="text-slate-900">{project.location}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-slate-700">Duration</h4>
                    <p className="text-slate-900">{project.duration}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-slate-700">Budget</h4>
                    <p className="text-slate-900">{project.budget}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-slate-700">Category</h4>
                    <p className="text-slate-900">{project.category}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16 bg-slate-50">
        <div className="container px-4 mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.images.slice(1).map((image, index) => (
              <div key={index} className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt={`${project.title} - Image ${index + 2}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container px-4 mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-slate-300 mb-8">
            Let&apos;s discuss how we can bring your vision to life with our expert design and renovation services.
          </p>
          <Link 
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-lg font-medium text-slate-900 shadow transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container px-4 mx-auto">
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