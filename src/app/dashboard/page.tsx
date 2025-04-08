'use client';

import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// Remove unused router import but keep it commented in case needed later
// import { useRouter } from 'next/navigation';
import FileUpload from '@/components/ui/FileUpload';
import ThreeJsViewer from '@/components/3d/ThreeJsViewer';
import { processFloorPlan, FloorPlanData } from '@/lib/floorPlanProcessor';

export default function Dashboard() {
  const [stage, setStage] = useState<'upload' | 'processing' | 'visualization'>('upload');
  const [uploads, setUploads] = useState<{
    propertyImages: File[];
    floorPlan: File | null;
  }>({
    propertyImages: [],
    floorPlan: null,
  });
  const [floorPlanData, setFloorPlanData] = useState<FloorPlanData | undefined>();
  const [projectName, setProjectName] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  // Remove unused router but keep it commented in case needed later
  // const router = useRouter();

  const handlePropertyImagesUpload = (files: File[]) => {
    setUploads(prev => ({
      ...prev,
      propertyImages: [...prev.propertyImages, ...files],
    }));
  };

  const handleFloorPlanUpload = async (files: File[]) => {
    if (files.length === 0) return;

    setUploads(prev => ({
      ...prev,
      floorPlan: files[0]
    }));
  };

  const handleRemovePropertyImage = (index: number) => {
    setUploads(prev => ({
      ...prev,
      propertyImages: prev.propertyImages.filter((_, i) => i !== index),
    }));
  };

  const handleRemoveFloorPlan = () => {
    setUploads(prev => ({
      ...prev,
      floorPlan: null,
    }));
  };

  const handleSubmit = async () => {
    if (uploads.propertyImages.length === 0 || !uploads.floorPlan) {
      alert('Please upload at least one property image and a floor plan.');
      return;
    }

    setStage('processing');

    try {
      // Process the floor plan
      const result = await processFloorPlan(uploads.floorPlan);
      
      if (!result.success || !result.data) {
        throw new Error(result.message || 'Failed to process floor plan');
      }

      setFloorPlanData(result.data);
      setStage('visualization');
    } catch {
      alert('Failed to process floor plan. Please try again.');
      setStage('upload');
    }
  };

  const handleSaveProject = async () => {
    if (!projectName.trim()) {
      alert('Please enter a project name');
      return;
    }

    setIsSaving(true);
    try {
      // In a real application, you would:
      // 1. Upload files to a storage service (e.g., AWS S3)
      // 2. Save project metadata and floor plan data to a database
      // 3. Handle the response appropriately

      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch {
      alert('Failed to save project. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
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

      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <h1 className="text-3xl font-bold mb-8 text-slate-900">Design Your Space</h1>

        {stage === 'upload' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-6 text-slate-900">Upload Your Files</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Property Images Upload */}
              <div>
                <h3 className="text-lg font-medium mb-2 text-slate-900">Property Images</h3>
                <p className="text-slate-800 mb-4">
                  Upload photos of your current space from different angles.
                </p>
                
                <FileUpload 
                  onFilesSelected={handlePropertyImagesUpload}
                  acceptedFileTypes="image/*"
                  multiple={true}
                  label="Upload Property Images"
                />

                {uploads.propertyImages.length > 0 && (
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Uploaded Images ({uploads.propertyImages.length})</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {uploads.propertyImages.map((file, index) => (
                        <div key={index} className="relative group">
                          <div className="aspect-square bg-slate-100 rounded-md overflow-hidden">
                            <Image
                              src={URL.createObjectURL(file)}
                              alt={`Property image ${index + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <button
                            onClick={() => handleRemovePropertyImage(index)}
                            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column - Floor Plan Upload */}
              <div>
                <h3 className="text-lg font-medium mb-2 text-slate-900">Floor Plan</h3>
                <p className="text-slate-800 mb-4">
                  Upload a floor plan of your space. This will help us create accurate 3D visualizations.
                </p>
                
                {/* Example Floor Plan */}
                <div className="mb-6 bg-slate-50 p-4 rounded-md border border-slate-200">
                  <h4 className="font-medium text-sm text-slate-900 mb-2">Example Floor Plan:</h4>
                  <div className="relative h-48 bg-white">
                    <Image
                      src="/images/floorplan.jpg"
                      alt="Example floor plan"
                      fill
                      style={{objectFit: 'contain'}}
                    />
                  </div>
                  <p className="text-xs text-slate-700 mt-2 text-center">
                    Your floor plan can be a simple sketch or a professional drawing
                  </p>
                </div>
                
                <FileUpload 
                  onFilesSelected={handleFloorPlanUpload} 
                  acceptedFileTypes="image/*, application/pdf"
                  multiple={false}
                  label="Upload Floor Plan"
                />

                {uploads.floorPlan && (
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Uploaded Floor Plan</h4>
                    <div className="relative group w-full max-w-md">
                      <div className="aspect-[4/3] bg-slate-100 rounded-md overflow-hidden">
                        {uploads.floorPlan.type.includes('image') ? (
                          <Image
                            src={URL.createObjectURL(uploads.floorPlan)}
                            alt="Floor plan"
                            fill
                            className="object-contain"
                          />
                        ) : (
                          <div className="flex items-center justify-center h-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-slate-400">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                            </svg>
                            <span className="ml-2 text-slate-600">{uploads.floorPlan.name}</span>
                          </div>
                        )}
                      </div>
                      <button
                        onClick={handleRemoveFloorPlan}
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t">
              <button
                onClick={handleSubmit}
                disabled={uploads.propertyImages.length === 0 || !uploads.floorPlan}
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  uploads.propertyImages.length === 0 || !uploads.floorPlan
                    ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                Create 3D Visualization
              </button>
            </div>
          </div>
        )}

        {stage === 'processing' && (
          <div className="bg-white rounded-lg shadow-md p-10 text-center">
            <div className="flex flex-col items-center justify-center">
              <div className="w-16 h-16 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin mb-6"></div>
              <h2 className="text-xl font-semibold mb-2">Processing Your Files</h2>
              <p className="text-slate-600">
                We&apos;re creating your 3D visualization. This may take a few minutes.
              </p>
            </div>
          </div>
        )}

        {stage === 'visualization' && (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold">Your 3D Visualization</h2>
              <p className="text-slate-600 mt-1">
                Explore your space in 3D. Use your mouse to rotate and zoom.
              </p>
            </div>
            
            <div className="h-[60vh]">
              <ThreeJsViewer floorPlanData={floorPlanData} />
            </div>
            
            <div className="p-6 bg-slate-50">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-4">
                  <input
                    type="text"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    placeholder="Enter project name"
                    className="flex-1 px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400"
                  />
                  <button
                    onClick={handleSaveProject}
                    disabled={isSaving || !projectName.trim()}
                    className={`px-4 py-2 bg-slate-900 text-white rounded-md hover:bg-slate-800 transition-colors ${
                      isSaving || !projectName.trim() ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSaving ? 'Saving...' : 'Save Project'}
                  </button>
                </div>
                {saveSuccess && (
                  <div className="text-green-600 text-sm">
                    Project saved successfully!
                  </div>
                )}
                <button
                  onClick={() => setStage('upload')}
                  className="px-4 py-2 border border-slate-300 rounded-md text-slate-700 hover:bg-slate-100 transition-colors"
                >
                  Upload New Files
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
} 