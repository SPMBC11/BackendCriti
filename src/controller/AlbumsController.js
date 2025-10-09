import db from "../models/index.js";

const { Album, Artist, Review, User } = db;

/**
 * GET /api/albums
 * Lista todos los álbumes junto con su artista y, opcionalmente, las reviews.
 */
export const listAlbums = async (req, res) => {
  try {
    const albums = await Album.findAll({
      include: [
        {
          model: Artist,
          as: "artist",
          attributes: ["id", "name", "image_url", "genre"]
        },
        {
          model: Review,
          as: "reviews",
          attributes: ["id", "score"]
        }
      ],
      order: [["id", "ASC"]]
    });

    res.json(albums);
  } catch (err) {
    console.error("❌ Error en listAlbums:", err);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

/**
 * GET /api/albums/:id
 * Obtiene un álbum con su artista y sus reseñas (con usuarios).
 */
export const getAlbumById = async (req, res) => {
  try {
    const album = await Album.findByPk(req.params.id, {
      include: [
        {
          model: Artist,
          as: "artist",
          attributes: ["id", "name", "image_url", "genre"]
        },
        {
          model: Review,
          as: "reviews",
          include: [
            {
              model: User,
              as: "user",
              attributes: ["id", "username", "profile_pic"]
            }
          ],
          attributes: ["id", "content", "score", "is_low_score"]
        }
      ]
    });

    if (!album) {
      return res.status(404).json({ error: "Album not found" });
    }

    res.json(album);
  } catch (err) {
    console.error("❌ Error en getAlbumById:", err);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
