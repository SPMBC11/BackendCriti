// src/routes/Playlists.js
import express from "express";
import {
  listPlaylists,
  getPlaylistById,
  createPlaylist,
  updatePlaylist,
  deletePlaylist
} from "../controller/PlaylistsController.js";

const router = express.Router();

router.get("/", listPlaylists);
router.get("/:id", getPlaylistById);
router.post("/", createPlaylist);
router.put("/:id", updatePlaylist);
router.delete("/:id", deletePlaylist);

export default router;
