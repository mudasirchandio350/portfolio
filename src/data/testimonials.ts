export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
  projectId?: string;
  featured?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechVision Inc.",
    content:
      "Working with this developer was an absolute game-changer for our business. The AI-powered task management system they built has increased our team's productivity by 40%. Their attention to detail and ability to understand complex requirements is exceptional.",
    rating: 5,
    image: "/ai.jpg",
    projectId: "1",
    featured: true,
    createdAt: new Date("2024-02-15"),
    updatedAt: new Date("2024-02-15"),
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "CTO",
    company: "Digital Solutions Ltd.",
    content:
      "The e-commerce platform delivered exceeded all our expectations. The clean code, scalable architecture, and seamless user experience have significantly boosted our online sales. Highly recommended for any serious web development project.",
    rating: 5,
    image: "/comp.jpg",
    projectId: "2",
    featured: true,
    createdAt: new Date("2024-01-20"),
    updatedAt: new Date("2024-01-20"),
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "DevOps Manager",
    company: "CloudFirst Systems",
    content:
      "The DevOps automation suite has revolutionized our deployment process. What used to take hours now takes minutes, and the reliability has improved dramatically. The developer's expertise in modern DevOps practices is outstanding.",
    rating: 5,
    image: "/devop.jpg",
    projectId: "3",
    featured: true,
    createdAt: new Date("2024-03-10"),
    updatedAt: new Date("2024-03-10"),
  },
  {
    id: "4",
    name: "David Kumar",
    role: "Product Manager",
    company: "InnovateLab",
    content:
      "The real-time chat application built for our team collaboration has been phenomenal. The end-to-end encryption and seamless video integration work flawlessly. The developer's communication throughout the project was professional and timely.",
    rating: 5,
    featured: false,
    createdAt: new Date("2023-12-05"),
    updatedAt: new Date("2023-12-05"),
  },
  {
    id: "5",
    name: "Lisa Thompson",
    role: "Data Analyst",
    company: "Analytics Pro",
    content:
      "The smart analytics dashboard has transformed how we interpret our data. The AI-driven insights have helped us make better business decisions faster. The interface is intuitive and the performance is excellent even with large datasets.",
    rating: 5,
    featured: false,
    createdAt: new Date("2024-03-01"),
    updatedAt: new Date("2024-03-01"),
  },
  {
    id: "6",
    name: "Robert Wilson",
    role: "Startup Founder",
    company: "NextGen Ventures",
    content:
      "As a startup, we needed someone who could deliver quality work within our budget and timeline. This developer exceeded our expectations on all fronts. The full-stack solution they built is robust, scalable, and user-friendly.",
    rating: 5,
    featured: true,
    createdAt: new Date("2024-01-10"),
    updatedAt: new Date("2024-01-10"),
  },
];

// Helper functions for testimonial management
export const getFeaturedTestimonials = (): Testimonial[] => {
  return testimonials.filter((testimonial) => testimonial.featured);
};

export const getTestimonialsByRating = (minRating: number): Testimonial[] => {
  return testimonials.filter((testimonial) => testimonial.rating >= minRating);
};

export const getTestimonialsByProject = (projectId: string): Testimonial[] => {
  return testimonials.filter(
    (testimonial) => testimonial.projectId === projectId
  );
};

export const addTestimonial = (
  testimonial: Omit<Testimonial, "id" | "createdAt" | "updatedAt">
): Testimonial => {
  const newTestimonial: Testimonial = {
    ...testimonial,
    id: (testimonials.length + 1).toString(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  testimonials.push(newTestimonial);
  return newTestimonial;
};

export const updateTestimonial = (
  id: string,
  updates: Partial<Omit<Testimonial, "id" | "createdAt">>
): Testimonial | null => {
  const testimonialIndex = testimonials.findIndex(
    (testimonial) => testimonial.id === id
  );

  if (testimonialIndex === -1) {
    return null;
  }

  testimonials[testimonialIndex] = {
    ...testimonials[testimonialIndex],
    ...updates,
    updatedAt: new Date(),
  };

  return testimonials[testimonialIndex];
};

export const deleteTestimonial = (id: string): boolean => {
  const testimonialIndex = testimonials.findIndex(
    (testimonial) => testimonial.id === id
  );

  if (testimonialIndex === -1) {
    return false;
  }

  testimonials.splice(testimonialIndex, 1);
  return true;
};
