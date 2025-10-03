
import { User } from '../models/index.js';

export const listUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) { next(err); }
};

export const getUserById = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id, { include: ['reviews'] });
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) { next(err); }
};
