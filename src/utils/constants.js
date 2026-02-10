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
    image: '/assets/services/sublimation-sport.jpg',
    icon: Flame,
    span: '',
  },
  {
    title: 'Bordado Industrial',
    description: 'Bordado computarizado de alta definición para logos, escudos y detalles sobre cualquier textil.',
    image: '/assets/services/embroidery-macro.jpg',
    icon: PenTool,
    span: '',
  },
  {
    title: 'Estampado DTF',
    description: 'Tecnología Direct-to-Film para estampados vibrantes y duraderos sobre algodón, poliéster y mezclas.',
    image: '/assets/services/dtf-print.jpg',
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
  { src: '/assets/gallery/catalogo-5.png', alt: 'Remera estampada DTF EME Indumentaria' },
]

export const CONTACT_INFO = {
  address: 'Bahía Blanca, Buenos Aires, Argentina',
  phone: '+54 291 XXX-XXXX',
  email: 'info@emeindumentaria.com',
  instagram: 'https://www.instagram.com/emeindumentaria',
  whatsapp: 'https://wa.me/5492910000000',
  hours: 'Lunes a Viernes 8:00 - 17:00',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48889.97898387848!2d-62.27243!3d-38.71959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95edbce35e313c71%3A0x7e77bc4960f1506b!2sBah%C3%ADa%20Blanca%2C%20Buenos%20Aires!5e0!3m2!1ses-419!2sar',
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
