export interface RoomSpec {
  label: string
  value: string
}

export interface RoomFacility {
  icon: string
  title: string
}

export interface Room {
  slug: string
  name: string
  price: number
  priceLabel: string
  tagline: string
  guests: string
  beds: string
  baths: string
  image: string
  images: string[]
  specs: RoomSpec[]
  description: string[]
  facilities: RoomFacility[]
  col: string
  delay: string | null
  large: boolean
}

const defaultFacilities: RoomFacility[] = [
  { icon: 'far fa-air-conditioner', title: 'Pendingin Ruangan (AC)' },
  { icon: 'fas fa-swimming-pool', title: 'Kolam Renang' },
  { icon: 'fas fa-dumbbell', title: 'Pusat Kebugaran' },
  { icon: 'fas fa-parking-circle', title: 'Area Parkir Gratis' },
  { icon: 'fas fa-shield-check', title: 'Keamanan 24 Jam' },
  { icon: 'fas fa-child', title: 'Taman Bermain Anak' },
]

export const rooms: Room[] = [
  {
    slug: 'junior-suite',
    name: 'Junior Suite',
    price: 850000,
    priceLabel: 'Rp 850.000 / MALAM',
    tagline: 'TV LED 40-inch / Mini bar / Bebas Rokok / USB Charger',
    guests: '2 Tamu',
    beds: '1 Tempat Tidur',
    baths: '1 Kamar Mandi',
    image: '/images/resource/room-1.jpg',
    images: [
      '/images/resource/room-1.jpg',
      '/images/resource/room-2.jpg',
      '/images/resource/room-4.jpg',
      '/images/resource/room-5.jpg',
    ],
    specs: [
      { label: 'Ukuran Kamar', value: '45 m²' },
      { label: 'Tipe Bed', value: '1 King Bed' },
      { label: 'Kapasitas', value: '2 Orang' },
      { label: 'Pemandangan', value: 'City View' },
    ],
    description: [
      'Nikmati kenyamanan menginap di Junior Suite kami yang dirancang khusus untuk memberikan relaksasi maksimal. Dilengkapi tempat tidur King Size mewah, dekorasi elegan, dan fasilitas modern untuk melengkapi liburan maupun perjalanan bisnis Anda.',
      'Kamar ini menyajikan pemandangan kota yang menawan lewat jendela besar, area duduk yang santai, serta meja kerja ergonomis. Kamar mandi pribadi dilengkapi shower air hangat, handuk lembut, dan perlengkapan mandi lengkap.',
    ],
    facilities: defaultFacilities,
    col: 'col-lg-6 col-md-6',
    delay: null,
    large: false,
  },
  {
    slug: 'family-room',
    name: 'Family Room',
    price: 1250000,
    priceLabel: 'Rp 1.250.000 / MALAM',
    tagline: 'TV LED 43-inch / Mini bar / Bebas Rokok / Ruang Luas',
    guests: '4 Tamu',
    beds: '2 Tempat Tidur',
    baths: '2 Kamar Mandi',
    image: '/images/resource/room-2.jpg',
    images: [
      '/images/resource/room-2.jpg',
      '/images/resource/room-1.jpg',
      '/images/resource/room-4.jpg',
      '/images/resource/room-3.jpg',
    ],
    specs: [
      { label: 'Ukuran Kamar', value: '60 m²' },
      { label: 'Tipe Bed', value: '2 Queen Bed' },
      { label: 'Kapasitas', value: '4 Orang' },
      { label: 'Pemandangan', value: 'Sea View' },
    ],
    description: [
      'Kamar keluarga yang luas dan nyaman, sangat ideal untuk momen kebersamaan bersama keluarga tercinta. Menyediakan tempat tidur ganda yang empuk, fasilitas hiburan modern, serta suasana kamar yang hangat.',
      'Dilengkapi dengan area bersantai yang lapang, koneksi Wi-Fi berkecepatan tinggi, dan dua kamar mandi pribadi dengan perlengkapan sanitasi lengkap.',
    ],
    facilities: defaultFacilities,
    col: 'col-lg-6 col-md-6',
    delay: '200ms',
    large: false,
  },
  {
    slug: 'double-room',
    name: 'Double Room',
    price: 1500000,
    priceLabel: 'Rp 1.500.000 / MALAM',
    tagline: 'TV LED 50-inch / Balkon Pribadi / Mini bar / Bebas Rokok',
    guests: '2 Tamu',
    beds: '2 Tempat Tidur',
    baths: '2 Kamar Mandi',
    image: '/images/resource/room-4.jpg',
    images: [
      '/images/resource/room-4.jpg',
      '/images/resource/room-2.jpg',
      '/images/resource/room-1.jpg',
      '/images/resource/room-5.jpg',
    ],
    specs: [
      { label: 'Ukuran Kamar', value: '60 m²' },
      { label: 'Tipe Bed', value: '2 Single Bed' },
      { label: 'Kapasitas', value: '2-3 Orang' },
      { label: 'Pemandangan', value: 'Sea View' },
    ],
    description: [
      'Pilihan sempurna bagi Anda yang menginginkan kenyamanan ekstra. Dilengkapi dengan dua tempat tidur independen, pencahayaan hangat, dan desain interior yang menenangkan.',
      'Sangat cocok untuk rekan kerja maupun pasangan yang membutuhkan ruang ekstra. Dilengkapi balkon pribadi dengan pemandangan laut yang spektakuler.',
    ],
    facilities: defaultFacilities,
    col: 'col-lg-6 col-md-6',
    delay: '400ms',
    large: false,
  },
  {
    slug: 'deluxe-room',
    name: 'Deluxe Room',
    price: 2100000,
    priceLabel: 'Rp 2.100.000 / MALAM',
    tagline: 'TV LED 55-inch / Premium Bathing / Mini bar / Room Service 24j',
    guests: '3 Tamu',
    beds: '1 Tempat Tidur',
    baths: '2 Kamar Mandi',
    image: '/images/resource/room-5.jpg',
    images: [
      '/images/resource/room-5.jpg',
      '/images/resource/room-4.jpg',
      '/images/resource/room-2.jpg',
      '/images/resource/room-1.jpg',
    ],
    specs: [
      { label: 'Ukuran Kamar', value: '75 m²' },
      { label: 'Tipe Bed', value: '1 Super King Bed' },
      { label: 'Kapasitas', value: '3 Orang' },
      { label: 'Pemandangan', value: 'Sea View' },
    ],
    description: [
      'Pengalaman menginap termewah di Deluxe Room kami. Kamar ini menyajikan perpaduan kemewahan bintang lima dengan pemandangan laut indah yang langsung terlihat dari tempat tidur.',
      'Dilengkapi bathtub eksklusif, smart TV 55 inci, kopi espresso maker, dan layanan prioritas resepsionis 24 jam untuk pengalaman menginap tak tertandingi.',
    ],
    facilities: defaultFacilities,
    col: 'col-lg-6 col-md-6',
    delay: '500ms',
    large: false,
  },
]

export function getRoom(slug: string): Room | undefined {
  return rooms.find((r) => r.slug === slug)
}
