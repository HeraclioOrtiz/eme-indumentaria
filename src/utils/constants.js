import { Scissors, Flame, PenTool, Printer, Factory, Medal, Headphones } from 'lucide-react'

export const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Trabajos', href: '#trabajos' },
  { label: 'Contacto', href: '#contacto' },
]

export const SERVICES = [
  {
    title: 'Corte y Confección',
    description: 'Patronaje industrial, moldería digital y confección en serie con terminaciones de primera calidad.',
    image: '/assets/services/cutting-hands.jpg',
    icon: Scissors,
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    title: 'Sublimación',
    description: 'Impresión full-color sobre poliéster con tintas de alta resistencia al lavado y la fricción.',
    image: '/assets/services/sublimation-clean.jpg',
    icon: Flame,
    span: '',
  },
  {
    title: 'Bordado Industrial',
    description: 'Bordado computarizado de alta definición para logos, escudos y detalles sobre cualquier textil.',
    image: '/assets/services/embroidery-detail.jpg',
    icon: PenTool,
    span: '',
  },
  {
    title: 'Estampado DTF',
    description: 'Tecnología Direct-to-Film para estampados vibrantes y duraderos sobre algodón, poliéster y mezclas.',
    image: '/assets/services/dtf-delivery.jpg',
    icon: Printer,
    span: 'lg:col-span-2',
  },
]

export const FEATURES = [
  {
    icon: Factory,
    title: 'Fábrica Propia',
    description: 'Producción 100% in-house. Control total desde el diseño hasta el producto terminado.',
  },
  {
    icon: Medal,
    title: '+18 Años de Trayectoria',
    description: 'Experiencia comprobada con clubes, empresas y marcas de toda la región.',
    counter: 18,
  },
  {
    icon: PenTool,
    title: 'Diseño a Medida',
    description: 'Tu idea, nuestro equipo. Diseñamos desde cero o trabajamos con tu archivo.',
  },
  {
    icon: Headphones,
    title: 'Atención Personalizada',
    description: 'Seguimiento uno a uno. Un referente asignado a cada proyecto de principio a fin.',
  },
]

export const CLIENTS = [
  { name: '555', logo: '/assets/clients/555.png' },
  { name: 'A Gusto Tuyo', logo: '/assets/clients/a-gusto-tuyo.png' },
  { name: 'Alaux Neumáticos', logo: '/assets/clients/alaux-neumaticos.png' },
  { name: 'BMW', logo: '/assets/clients/bmw.png' },
  { name: 'Can-Mar', logo: '/assets/clients/can-mar.png' },
  { name: 'Club Monte Hermoso', logo: '/assets/clients/club-monte-hermoso.png' },
  { name: 'Cubanitos de la Bahía', logo: '/assets/clients/cubanitos-de-la-bahia.png' },
  { name: 'Distriven', logo: '/assets/clients/distriven.png' },
  { name: 'Pozzo Ardizzi', logo: '/assets/clients/pozzo-ardizzi.png' },
]

export const GALLERY_IMAGES = [
  { src: '/assets/gallery/catalogo-1.png', alt: 'Conjunto deportivo sublimado EME Indumentaria' },
  { src: '/assets/gallery/catalogo-2.png', alt: 'Campera deportiva personalizada EME' },
  { src: '/assets/gallery/catalogo-3.png', alt: 'Indumentaria corporativa con bordado EME' },
  { src: '/assets/gallery/catalogo-4.png', alt: 'Uniforme deportivo completo EME Indumentaria' },
]

export const CONTACT_INFO = {
  address: 'Teniente Farias 49, Bahía Blanca, Buenos Aires',
  phone: '0291 576-3316',
  email: 'emeindumentariaventas@gmail.com',
  instagram: 'https://www.instagram.com/emeindumentaria.ar',
  whatsapp: 'https://wa.me/542915763316',
  hours: 'Lunes a Viernes 8:00 - 16:00',
  mapEmbedUrl: 'https://maps.google.com/maps?q=Teniente+Farias+49,+Bahia+Blanca,+Buenos+Aires,+Argentina&t=&z=16&ie=UTF8&iwloc=&output=embed',
}

export const TESTIMONIALS = [
  {
    quote: 'Excelente calidad y cumplimiento en los plazos. Los uniformes del club quedaron impecables.',
    author: 'Club Monte Hermoso',
    role: 'Indumentaria deportiva',
  },
  {
    quote: 'Trabajamos hace años con EME y siempre responden con profesionalismo. Los recomendamos 100%.',
    author: 'Alaux Neumáticos',
    role: 'Indumentaria corporativa',
  },
]
