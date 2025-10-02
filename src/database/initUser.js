import { User } from "../models/index.js";

const initialUsers = [
  {
    username: "Juan",
    profile_pic: "avatar_demo.png",
    bio: "Amante del hip hop y coleccionista de vinilos 🎶",
    followers: 200,
    following: 150
  },
  {
    username: "Laura",
    profile_pic: "avatar_demo.png",
    bio: "Fan del pop internacional 🌍",
    followers: 340,
    following: 210
  },
  {
    username: "Carlos",
    profile_pic: "avatar_demo.png",
    bio: "Explorador de géneros musicales 🎧",
    followers: 120,
    following: 98
  },
  {
    username: "Sofía",
    profile_pic: "avatar_demo.png",
    bio: "La reina de las fiestas 🔥 EDM y reggaetón",
    followers: 500,
    following: 300
  },
  {
    username: "Mateo",
    profile_pic: "avatar_demo.png",
    bio: "Cinéfilo y amante de la música experimental 🎬",
    followers: 220,
    following: 180
  },
  {
    username: "el.xokas",
    profile_pic: "xocas.png",
    bio: "Streamer y crítico musical 🎶",
    followers: 17,
    following: 78
  }
];

export async function loadInitialUsers() {
  try {
    const count = await User.count();
    if (count === 0) {
      await User.bulkCreate(initialUsers);
      console.log("✅ Usuarios iniciales cargados");
    } else {
      console.log(`ℹ️ Ya existen ${count} usuarios en la base`);
    }
  } catch (err) {
    console.error("❌ Error cargando usuarios iniciales:", err);
  }
}

export default initialUsers;
