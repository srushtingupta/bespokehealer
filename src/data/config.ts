export interface SiteConfig {
  brandName: string;
  founderName: string;
  tagline: string;
  subTagline: string;
  experienceYears: string;
  happyClients: string;
  coreServicesCount: string;
  crystalVarietiesCount: string;
  sessionDuration: string;
  sessionPrice: string;
  currency: string;
  whatsappNumber: string; // E.164 without '+' or spaces for wa.me link
  displayPhoneNumber: string;
  instagramUrl: string;
  facebookUrl: string;
  address: string;
  googleMapsUrl: string;
  disclaimer: string;
}

export const siteConfig: SiteConfig = {
  brandName: "Bespoke Healer",
  founderName: "Dr. Srushti Garg",
  tagline: "Heal. Align. Transform.",
  subTagline: "Tarot • Energy Healing • Crystals",
  experienceYears: "18+",
  happyClients: "1,000+",
  coreServicesCount: "3",
  crystalVarietiesCount: "15+",
  sessionDuration: "60 Minutes",
  sessionPrice: "2,000",
  currency: "₹",
  whatsappNumber: "919969730416",
  displayPhoneNumber: "+91 99697 30416",
  instagramUrl: "https://instagram.com/bespokehealer",
  facebookUrl: "https://facebook.com/bespokehealer",
  address: "Shop no.28, Link Rd, next to Sai Car Care, Shimpoli, Borivali West, Mumbai, Maharashtra 400091",
  googleMapsUrl: "https://maps.app.goo.gl/fJZL18iQxEUCFQqe6",
  disclaimer: "Spiritual guidance, tarot consultations, crystal suggestions, and energy sessions are holistic practices intended for personal reflection, emotional calm, and well-being. They do not replace professional medical, legal, or psychological care.",
};

export const getWhatsAppUrl = (customMessage?: string) => {
  const message = customMessage || `Hi ${siteConfig.founderName} 👋\nI'm visiting the Bespoke Healer website and would like to know more about booking a personal session.`;
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

export const getProductWhatsAppUrl = (productName: string, customMessage?: string) => {
  const message = customMessage || `Hi ${siteConfig.founderName} 👋\nI would like to order the ${productName} from the Bespoke Healer website.\nPlease share order & delivery details.`;
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

export const getServiceWhatsAppUrl = (serviceName: string) => {
  const message = `Hi ${siteConfig.founderName} 👋\nI would love to book a ${serviceName} session with you.\nPlease let me know your available slots for a 60-minute personal consultation.`;
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

export const getEventWhatsAppUrl = (eventType: string = 'Corporate / Wedding Event') => {
  const message = `Hi ${siteConfig.founderName} 👋\nWe would love to invite you for a ${eventType}.\nPlease share your availability and event engagement details.`;
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
};
