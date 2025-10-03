import { Album } from "../models/index.js";

const initialAlbums = [
  {
    name: "SHORT N`SWEET",
    year: "2024",
    image_url: "https://i.scdn.co/image/ab67616d00001e02fd8d7a8d96871e791cb1f626",
    artist_id: 1
  },
  {
    name: "emails i can't send",
    year: "2023",
    image_url: "https://i.scdn.co/image/ab67616d0000b273700f7bf79c9f063ad0362bdf",
    artist_id: 1
  },
  {
    name: "CIRCLES",
    year: "2020",
    image_url: "https://i.scdn.co/image/ab67616d0000b27326b7dd89810cc1a40ada642c",
    artist_id: 2
  },
  {
    name: "Mulholland Drive OST",
    year: "2001",
    image_url: "https://i.ytimg.com/vi/mNYF1wWZ_H4/maxresdefault.jpg",
    artist_id: 20
  },
  {
    name: "Good for you",
    year: "2022",
    image_url: "https://www.thebackpackerz.com/wp-content/uploads/2017/07/amine-good-for-you-album-800x800.jpg",
    artist_id: 3
  },
  {
    name: "Views",
    year: "2016",
    image_url: "https://i.scdn.co/image/ab67616d0000b2739416ed64daf84936d89e671c",
    artist_id: 4
  },
  {
    name: "FERXXO VOL 10: SAGRADO",
    year: "2024",
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBDgvr24NjEjrlJ-Rsq3lf6NQuYuLRbXE-mg&s",
    artist_id: 5
  },
  {
    name: "DON'T TAP THE GLASS",
    year: "2024",
    image_url: "https://i.scdn.co/image/ab67616d0000b273979047951fa8b15df9f9e984",
    artist_id: 6
  },
  {
    name: "HIT ME HARD AND SOFT",
    year: "2024",
    image_url: "https://i.scdn.co/image/ab67616d0000b27371d62ea7ea8a5be92d3c1f62",
    artist_id: 7
  },
  {
    name: "DbTmF",
    year: "2024",
    image_url: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8408dbfe73b692078d710e54f4",
    artist_id: 8
  },
  {
    name: "BOGOTÁ (DELUXE)",
    year: "2023",
    image_url: "https://i.scdn.co/image/ab67616d0000b2735ea3b9dd61366bf82bd1ab96",
    artist_id: 9
  },
  {
    name: "EPISTOLARES+",
    year: "2024",
    image_url: "https://i.scdn.co/image/ab67616d0000b273f3b8bac4ec47a6fb1fa626da",
    artist_id: 10
  },
  {
    name: "BABYLON CLUB",
    year: "2024",
    image_url: "https://tse4.mm.bing.net/th/id/OIP.4_x5fqCiSA_wClq9RA0zagHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    artist_id: 11
  },
  {
    name: "GIPSY KINGS",
    year: "1988",
    image_url: "https://i.scdn.co/image/ab67616d0000b273d93675d4a5c0f92e63121415",
    artist_id: 12
  },
  {
    name: "ABRAHAM MATEO",
    year: "2014",
    image_url: "https://i.scdn.co/image/ab67616d0000b2739644c304c02e2cc20ab63192",
    artist_id: 13
  },
  {
    name: "LÁNZALO",
    year: "2015",
    image_url: "https://i.scdn.co/image/ab67616d0000b273f641ff7ce301a038b42c873e",
    artist_id: 13
  },
  {
    name: "GNX",
    year: "2024",
    image_url: "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
    artist_id: 14
  },
  {
    name: "FIJACIÓN ORAL VOL. 1",
    year: "2005",
    image_url: "https://i.scdn.co/image/ab67616d0000b273f342e70aacda9d78cfb6ce7a",
    artist_id: 15
  },
  {
    name: "2000",
    year: "2000",
    image_url: "https://i.scdn.co/image/ab67616d0000b273d0b8c555dc3c3fe62f8828da",
    artist_id: 16
  },
  {
    name: "Presidente de la Champeta",
    year: "2010",
    image_url: "https://i.scdn.co/image/ab67616d0000b273759c8fefb6bcdc69a711c9e1",
    artist_id: 17
  },
  {
    name: "Party Rock",
    year: "2011",
    image_url: "https://i.scdn.co/image/ab67616d0000b2736a0f2bf4749bddc11f4ba8dc",
    artist_id: 18
  },
  {
    name: "Swag",
    year: "2012",
    image_url: "https://cdn.massa.com.br/uploads/2025/07/20250711131212-justin-bieber-1024x691.jpg",
    artist_id: 19
  }
];

export async function loadInitialAlbums() {
  try {
    const count = await Album.count();
    if (count === 0) {
      await Album.bulkCreate(initialAlbums);
      console.log("✅ Álbumes iniciales cargados");
    } else {
      console.log(`ℹ️ Ya existen ${count} álbumes en la base`);
    }
  } catch (err) {
    console.error("❌ Error cargando álbumes iniciales:", err);
  }
}

export default initialAlbums;
