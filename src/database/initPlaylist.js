import { Playlist, Album, User } from "../models/index.js";

const initialPlaylists = [
  {
    title: "Mis Favoritos del 2025",
    description: "Una mezcla de lo mejor del año.",
    user_id: 1,
    albums: [1, 2, 3]
  },
  {
    title: "Chill & Relax",
    description: "Música suave para trabajar ☕",
    user_id: 2,
    albums: [4, 5]
  },
  {
    title: "Hip Hop Essentials",
    description: "Beats clásicos y rimas de alto nivel 🎤",
    user_id: 3,
    albums: [6, 7, 8]
  },
  {
    title: "Pop Internacional",
    description: "Los hits más sonados del pop global 🌍",
    user_id: 4,
    albums: [9, 10, 11]
  }
];

/**
 * Carga inicial de playlists.
 * Se asegura de no duplicar registros si ya existen datos.
 */
export async function loadInitialPlaylists() {
  try {
    const count = await Playlist.count();

    if (count === 0) {
      console.log("⚙️ Cargando playlists iniciales...");

      for (const p of initialPlaylists) {
        // Verificamos que el usuario exista
        const user = await User.findByPk(p.user_id);
        if (!user) {
          console.warn(`⚠️ Usuario con id ${p.user_id} no encontrado, se omite playlist "${p.title}"`);
          continue;
        }

        // Creamos la playlist
        const playlist = await Playlist.create({
          title: p.title,
          description: p.description,
          user_id: p.user_id
        });

        // Asociamos los álbumes (si existen)
        if (p.albums && p.albums.length > 0) {
          const validAlbums = await Album.findAll({
            where: { id: p.albums }
          });
          await playlist.setAlbums(validAlbums);
        }
      }

      console.log("✅ Playlists iniciales cargadas");
    } else {
      console.log(`ℹ️ Ya existen ${count} playlists en la base`);
    }
  } catch (err) {
    console.error("❌ Error cargando playlists iniciales:", err);
  }
}

export default initialPlaylists;
