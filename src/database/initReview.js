import { Review } from "../models/index.js";

const initialReviews = [
  {
    content: "Este álbum es una obra maestra, Sabrina Carpenter nunca decepciona.",
    score: 9.2,
    is_low_score: false,
    album_id: 1, // SHORT N`SWEET
    user_id: 1   // Juan
  },
  {
    content: "Gran producción, aunque algunas canciones son repetitivas.",
    score: 7.5,
    is_low_score: false,
    album_id: 2, // emails i can't send
    user_id: 2   // Laura
  },
  {
    content: "La vibra de este álbum es increíble, lo escucho todos los días.",
    score: 8.8,
    is_low_score: false,
    album_id: 3, // CIRCLES
    user_id: 3   // Carlos
  },
  {
    content: "Demasiado experimental para mi gusto, esperaba algo distinto.",
    score: 4.3,
    is_low_score: true,
    album_id: 5, // FERXXO VOL 10: SAGRADO (corrige según tu orden real)
    user_id: 4   // Sofía
  },
  {
    content: "El mejor disco de Drake hasta la fecha. Clásico moderno.",
    score: 9.5,
    is_low_score: false,
    album_id: 6, // Views
    user_id: 5   // Mateo
  },
  {
    content: "LMFAO siempre me pone a bailar, fiesta asegurada.",
    score: 8.0,
    is_low_score: false,
    album_id: 18, // Party Rock
    user_id: 6    // el.xokas
  },
  {
    content: "Muy flojo este trabajo, esperaba más de Justin Bieber.",
    score: 3.5,
    is_low_score: true,
    album_id: 19, // Swag
    user_id: 2    // Laura
  }
];

export async function loadInitialReviews() {
  try {
    const count = await Review.count();
    if (count === 0) {
      await Review.bulkCreate(initialReviews);
      console.log("✅ Reviews iniciales cargados");
    } else {
      console.log(`ℹ️ Ya existen ${count} reviews en la base`);
    }
  } catch (err) {
    console.error("❌ Error cargando reviews iniciales:", err);
  }
}

export default initialReviews;
