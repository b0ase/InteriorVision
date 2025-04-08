import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/ui/Navigation';
import { projectDetails } from '@/data/projects';
import { Metadata } from 'next';

type PageProps = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = projectDetails[params.slug as keyof typeof projectDetails];
  
  if (!project) {
    return {
      title: 'Project Not Found | Interior Vision',
      description: 'The requested project could not be found.',
    };
  }

  return {
    title: `${project.title} | Interior Vision`,
    description: project.description,
  };
}

export default function ProjectDetails({ params }: PageProps) {
  const project = projectDetails[params.slug as keyof typeof projectDetails];

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-slate-900">Project Not Found</h1>
            <p className="mt-2 text-slate-600">The project you&apos;re looking for doesn&apos;t exist.</p>
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