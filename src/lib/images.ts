export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ProjectImages = {
  main: ProjectImage;
  gallery: ProjectImage[];
};

export const portfolioImages: Record<string, ProjectImages> = {
  'spa-bathroom-retreat': {
    main: {
      src: '/portfolio/spa-bathroom/main.jpg',
      alt: 'Luxurious spa-like bathroom with freestanding tub',
      width: 1920,
      height: 1080
    },
    gallery: [
      {
        src: '/portfolio/spa-bathroom/vanity.jpg',
        alt: 'Custom marble double vanity with modern fixtures',
        width: 1200,
        height: 800
      },
      {
        src: '/portfolio/spa-bathroom/shower.jpg',
        alt: 'Frameless glass shower enclosure with rainfall showerhead',
        width: 1200,
        height: 800
      },
      {
        src: '/portfolio/spa-bathroom/tub.jpg',
        alt: 'Freestanding soaking tub with floor-mounted faucet',
        width: 1200,
        height: 800
      }
    ]
  },
  'coastal-dining-room': {
    main: {
      src: '/portfolio/coastal-dining/main.jpg',
      alt: 'Bright coastal-inspired dining room with ocean views',
      width: 1920,
      height: 1080
    },
    gallery: [
      {
        src: '/portfolio/coastal-dining/details.jpg',
        alt: 'Coastal decor details and shell accents',
        width: 1200,
        height: 800
      },
      {
        src: '/portfolio/coastal-dining/storage.jpg',
        alt: 'Built-in wine storage and display cabinets',
        width: 1200,
        height: 800
      },
      {
        src: '/portfolio/coastal-dining/window.jpg',
        alt: 'Large windows with sheer linen curtains',
        width: 1200,
        height: 800
      }
    ]
  },
  'scandinavian-apartment': {
    main: {
      src: '/portfolio/scandinavian/main.jpg',
      alt: 'Minimalist Scandinavian living space with natural light',
      width: 1920,
      height: 1080
    },
    gallery: [
      {
        src: '/portfolio/scandinavian/kitchen.jpg',
        alt: 'Modern white kitchen with integrated appliances',
        width: 1200,
        height: 800
      },
      {
        src: '/portfolio/scandinavian/living.jpg',
        alt: 'Open concept living area with light wood accents',
        width: 1200,
        height: 800
      },
      {
        src: '/portfolio/scandinavian/bedroom.jpg',
        alt: 'Serene bedroom with natural textiles',
        width: 1200,
        height: 800
      }
    ]
  }
}; 