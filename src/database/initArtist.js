import { Artist } from "../models/index.js";

const initialArtists = [
  {
    name: "Sabrina Carpenter",
    image_url: "https://i.scdn.co/image/ab6761610000e5eb78e45cfa4697ce3c437cb455",
    genre: "Pop"
  },
  {
    name: "Mac Miller",
    image_url: "https://i.scdn.co/image/ab6761610000e5ebed3b89aa602145fde71a163a",
    genre: "Hip Hop"
  },
  {
    name: "Aminé",
    image_url: "https://i.scdn.co/image/ab6761610000e5eb31ad986e8e1328db4b3d83cd",
    genre: "Hip Hop"
  },
  {
    name: "Drake",
    image_url: "https://i.scdn.co/image/ab6761610000e5eb4293385d324db8558179afd9",
    genre: "Hip Hop"
  },
  {
    name: "Feid",
    image_url: "https://i.scdn.co/image/ab6761610000e5eb600ee3d2a14da8d038fa7bbf",
    genre: "Reggaeton"
  },
  {
    name: "Tyler, The Creator",
    image_url: "https://i.scdn.co/image/ab67616d0000b273124e9249fada4ff3c3a0739c",
    genre: "Pop"
  },
  {
    name: "Billie Eilish",
    image_url: "https://i.scdn.co/image/ab67616d00001e022a038d3bf875d23e4aeaa84e",
    genre: "Pop"
  },
  {
    name: "Bad Bunny",
    image_url: "https://i.scdn.co/image/ab6761610000e5eb81f47f44084e0a09b5f0fa13",
    genre: "Reggaeton"
  },
  {
    name: "Andrés Cepeda",
    image_url: "https://i.scdn.co/image/ab67616d0000b273b020287dabb730a9f8b239bf",
    genre: "Balada"
  },
  {
    name: "AKRIILA",
    image_url: "https://i.scdn.co/image/ab67616d0000b273f3b8bac4ec47a6fb1fa626da",
    genre: "Hip Hop"
  },
  {
    name: "Danny Ocean",
    image_url: "https://i.scdn.co/image/ab6761610000e5ebb485cde5cba6de6e5685278a",
    genre: "Pop"
  },
  {
    name: "Gipsy Kings",
    image_url: "https://i.scdn.co/image/ab67616d00001e02fcc39dfc2293924d2f0f7e51",
    genre: "Pop Flamenco"
  },
  {
    name: "Abraham Mateo",
    image_url: "https://i.scdn.co/image/ab6761610000e5ebc37b5aff82743fd506ae3f47",
    genre: "Pop"
  },
  {
    name: "Kendrick Lamar",
    image_url: "https://i.scdn.co/image/ab6761610000e5eb39ba6dcd4355c03de0b50918",
    genre: "Hip Hop"
  },
  {
    name: "Shakira",
    image_url: "https://i.scdn.co/image/ab6761610000e5eb2528c726e5ddb90a7197e527",
    genre: "Pop"
  },
  {
    name: "Binomio de Oro",
    image_url: "https://i.scdn.co/image/ab67616d00001e02ae20aa6c6aa8fc9f86ac2b58",
    genre: "Vallenato"
  },
  {
    name: "Mr. Black",
    image_url: "https://i.scdn.co/image/ab67616d0000b27358e9506c16c420f4ac187f21",
    genre: "Champeta"
  },
  {
    name: "LMFAO",
    image_url: "https://i.scdn.co/image/2d75f5222d8a92d5e12419ae3e5238261f943df6",
    genre: "EDM"
  },
  {
    name: "Justin Bieber",
    image_url: "https://i.scdn.co/image/ab67616d0000b273f46b9d202509a8f7384b90de",
    genre: "Pop"
  },
  {
    name: "David Lynch",
    image_url: "https://i.scdn.co/image/95aab2d79f7db9b6da2ea2e04a552ad84a9f88a1",
    genre: "Hell"
  }
];

export async function loadInitialArtists() {
  try {
    const count = await Artist.count();
    if (count === 0) {
      await Artist.bulkCreate(initialArtists);
      console.log("✅ Artistas iniciales cargados");
    } else {
      console.log(`ℹ️ Ya existen ${count} artistas en la base`);
    }
  } catch (err) {
    console.error("❌ Error cargando artistas iniciales:", err);
  }
}

export default initialArtists;
