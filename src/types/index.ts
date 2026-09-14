export type PlotStatus = 'AVAILABLE' | 'RESERVED' | 'SOLD';
export type PlotFacing = 'East' | 'West' | 'North' | 'South' | 'North-East' | 'South-East';

export interface Plot {
  id: string;
  number: string; // e.g. "A01"
  block: 'A' | 'B' | 'C' | 'D';
  sizeSqYd: number; // e.g. 150, 200, 250, 300
  dimensions: string; // e.g. "30 × 45 ft"
  facing: PlotFacing;
  roadWidthFt: number; // e.g. 30, 40
  priceLakhs: number; // e.g. 24.50
  status: PlotStatus;
  cornerPlot?: boolean;
  parkFacing?: boolean;
}

export interface Project {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  location: string;
  totalAcres: number;
  totalPlots: number;
  plotSizesRange: string;
  roadsWidth: string;
  description: string;
  longDescription: string;
  highlights: string[];
  heroImage: string;
  masterPlanImage: string;
  status: 'Ongoing' | 'Upcoming' | 'Completed';
  completionYear?: string;
  startingPriceLakhs: number;
}

export interface Amenity {
  id: string;
  title: string;
  description: string;
  category: 'Infrastructure' | 'Recreation' | 'Security & Greenery' | 'Wellness';
  iconName: string;
  image: string;
  isFeatured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  avatar: string;
  plotPurchased?: string;
  rating?: number;
}

export interface LocationLandmark {
  id: string;
  name: string;
  category: 'Transport' | 'Education' | 'Healthcare' | 'Commercial' | 'Leisure';
  distanceKm: number;
  travelTimeMinutes: number;
  iconName: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Master Plan' | 'Infrastructure' | 'Amenities' | 'Landscape' | 'Lifestyle';
  imageUrl: string;
  caption: string;
}

export interface PlotFilterState {
  block: string; // 'ALL' | 'A' | 'B' | 'C' | 'D'
  status: string; // 'ALL' | 'AVAILABLE' | 'RESERVED' | 'SOLD'
  sizeSqYd: string; // 'ALL' | '150' | '200' | '250' | '300+'
  facing: string; // 'ALL' | 'East' | 'West' | 'North' | 'South'
  maxPriceLakhs: number;
  searchQuery: string;
}

export interface EnquiryFormData {
  fullName: string;
  mobile: string;
  email: string;
  project: string;
  preferredPlotSize: string;
  preferredFacing: string;
  budgetRange: string;
  message: string;
  selectedPlotNumber?: string;
}

export interface SiteVisitFormData {
  fullName: string;
  mobile: string;
  email: string;
  preferredDate: string;
  preferredTimeSlot: string;
  numberOfVisitors: number;
  pickupRequired: boolean;
  notes: string;
}
