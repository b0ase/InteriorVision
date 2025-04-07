# Interior Vision - 3D Interior Design Visualization

A web application for an interior renovation business that allows clients to upload property images and floor plans, and generates 3D visualizations of potential renovations using Three.js.

## Features

- **Image Upload**: Clients can upload multiple property images and floor plans
- **3D Visualization**: Interactive 3D rendering of interior spaces using Three.js
- **Modern UI**: Clean, responsive design built with Next.js and Tailwind CSS
- **Client Dashboard**: Manage projects and view 3D visualizations

## Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **3D Rendering**: Three.js, React Three Fiber, React Three Drei
- **File Handling**: React Dropzone, FormData API
- **Backend**: Next.js API Routes

## Getting Started

### Prerequisites

- Node.js 16.8.0 or later
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
cd interior-vision
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
interior-vision/
├── public/             # Static assets
├── src/
│   ├── app/            # Next.js app router pages
│   │   ├── api/        # API routes
│   │   ├── dashboard/  # Dashboard pages
│   ├── components/     # React components
│   │   ├── ui/         # UI components
│   │   ├── 3d/         # Three.js components
│   ├── lib/            # Utility functions
├── uploads/            # Uploaded files (created at runtime)
```

## Development

### Adding New 3D Models

To add new 3D models for visualization:

1. Create model components in `src/components/3d/`
2. Import and use them in the ThreeJsViewer component

### Customizing the UI

The UI is built with Tailwind CSS. You can customize the design by:

1. Modifying the Tailwind configuration in `tailwind.config.js`
2. Updating component styles in their respective files

## Deployment

This Next.js application can be deployed to platforms like Vercel, Netlify, or any other hosting service that supports Node.js applications.

For production deployment, make sure to:

1. Configure proper storage solutions for uploaded files (e.g., AWS S3)
2. Set up environment variables for API keys and other sensitive information
3. Configure CORS and security headers

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/) for the React framework
- [Three.js](https://threejs.org/) for 3D rendering
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) for Three.js React integration
- [Tailwind CSS](https://tailwindcss.com/) for styling
