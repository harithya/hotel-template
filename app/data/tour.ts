export interface TourLink {
  nodeId: string
  yaw: string
  pitch?: string
  name: string
}

export interface TourScene {
  id: string
  name: string
  desc: string
  thumb: string
  panorama: string
  links: TourLink[]
}

export const tourScenes: TourScene[] = [
  {
    id: 'lobby',
    name: 'Lobby Hotel',
    desc: 'Area lobby utama dengan resepsionis 24 jam, ruang tunggu yang nyaman, dan akses mudah ke seluruh fasilitas hotel.',
    thumb: '/images/resource/feature2-1.jpg',
    panorama: 'https://images.unsplash.com/photo-1625220851686-2986d12ff954?auto=format&q=80&w=4096',
    links: [
      { nodeId: 'kamar', yaw: '45deg', pitch: '15deg', name: 'Ke Kamar Deluxe' },
      { nodeId: 'kolam', yaw: '200deg', pitch: '18deg', name: 'Ke Kolam Renang' },
    ],
  },
  {
    id: 'kamar',
    name: 'Kamar Deluxe',
    desc: 'Kamar tidur deluxe dengan tempat tidur king-size, dekorasi elegan, dan fasilitas modern untuk istirahat maksimal.',
    thumb: '/images/resource/room-2.jpg',
    panorama: 'https://images.unsplash.com/photo-1689729739430-fd744a5b6ea2?auto=format&q=80&w=4096',
    links: [
      { nodeId: 'lobby', yaw: '120deg', pitch: '15deg', name: 'Kembali ke Lobby' },
      { nodeId: 'restoran', yaw: '300deg', pitch: '20deg', name: 'Ke Restoran' },
    ],
  },
  {
    id: 'kolam',
    name: 'Kolam Renang',
    desc: 'Kolam renang rooftop dengan pemandangan spektakuler, area berjemur, dan layanan poolside untuk relaksasi Anda.',
    thumb: '/images/resource/feature3-2.jpg',
    panorama: 'https://images.unsplash.com/photo-1596263576925-d90d63691097?auto=format&q=80&w=4096',
    links: [
      { nodeId: 'lobby', yaw: '20deg', pitch: '15deg', name: 'Kembali ke Lobby' },
      { nodeId: 'restoran', yaw: '180deg', pitch: '15deg', name: 'Ke Restoran' },
    ],
  },
  {
    id: 'restoran',
    name: 'Restoran',
    desc: 'Restoran dengan masakan internasional, buffet dinner setiap malam, dan suasana yang cocok untuk keluarga maupun bisnis.',
    thumb: '/images/resource/feature3-3.jpg',
    panorama: 'https://images.unsplash.com/photo-1661243038841-a8d87ffe151b?auto=format&q=80&w=3500',
    links: [
      { nodeId: 'lobby', yaw: '90deg', pitch: '15deg', name: 'Kembali ke Lobby' },
      { nodeId: 'kamar', yaw: '250deg', pitch: '18deg', name: 'Ke Kamar Deluxe' },
    ],
  },
]

export function getTourScene(id: string): TourScene | undefined {
  return tourScenes.find((s) => s.id === id)
}
