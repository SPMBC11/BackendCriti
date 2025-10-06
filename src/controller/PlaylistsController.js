// src/controllers/PlaylistsController.js
import { Playlist, User, Album } from "../models/index.js";

export const listPlaylists = async (req, res, next) => {
  try {
    const playlists = await Playlist.findAll({
      include: [
        { model: Album, as: "albums", include: ["artist"] },
        { model: User, as: "user", attributes: ["id", "username", "profile_pic"] }
      ]
    });
    res.json(playlists);
  } catch (err) {
    next(err);
  }
};

export const getPlaylistById = async (req, res, next) => {
  try {
    const playlist = await Playlist.findByPk(req.params.id, {
      include: [
        { model: Album, as: "albums", include: ["artist"] },
        { model: User, as: "user", attributes: ["id", "username"] }
      ]
    });
    if (!playlist) return res.status(404).json({ error: "Playlist not found" });
    res.json(playlist);
  } catch (err) {
    next(err);
  }
};

export const createPlaylist = async (req, res, next) => {
  try {
    const { title, description, user_id, albumIds } = req.body;
    const playlist = await Playlist.create({ title, description, user_id });

    if (albumIds && albumIds.length > 0) {
      await playlist.setAlbums(albumIds);
    }

    const fullPlaylist = await Playlist.findByPk(playlist.id, {
      include: ["albums", "user"]
    });

    res.status(201).json(fullPlaylist);
  } catch (err) {
    next(err);
  }
};

export const updatePlaylist = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description, albumIds } = req.body;

    const playlist = await Playlist.findByPk(id);
    if (!playlist) return res.status(404).json({ error: "Playlist not found" });

    await playlist.update({ title, description });

    if (albumIds) await playlist.setAlbums(albumIds);

    const updated = await Playlist.findByPk(id, { include: ["albums", "user"] });
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

export const deletePlaylist = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await Playlist.destroy({ where: { id } });
    if (!deleted) return res.status(404).json({ error: "Playlist not found" });
    res.json({ message: "Playlist deleted" });
  } catch (err) {
    next(err);
  }
};
