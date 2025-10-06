import app from './app.js';
import { sequelize } from './models/index.js';
import { loadInitialUsers } from './database/initUser.js';
import { loadInitialArtists } from './database/initArtist.js';
import { loadInitialAlbums } from './database/initAlbum.js';
import { loadInitialReviews } from './database/initReview.js';
import { loadInitialPlaylists } from "./database/initPlaylist.js";

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('DB sincronizada');

    await loadInitialUsers();
    await loadInitialArtists();
    await loadInitialAlbums();
    await loadInitialReviews();
    await loadInitialPlaylists();


    app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT}`));
  } catch (err) {
    console.error('Error al iniciar', err);
  }
})();


app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});