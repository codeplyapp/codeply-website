export interface Product {
  id: string;
  slug: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  techStack: string[];
  category: string;
  thumbnail: string;
  lynkIdUrl: string;
  featured: boolean;
  published: boolean;
  previewImages?: string[];
  features?: string[];
  createdAt?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  category: string;
  thumbnail: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}
