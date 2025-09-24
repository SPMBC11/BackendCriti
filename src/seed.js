
import { sequelize, User, Artist, Album, Review } from './models/Indexs.js';
import { faker } from '@faker-js/faker';

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Database synchronized');

    // Crear usuarios
    const users = [];
    for (let i = 0; i < 5; i++) {
      const user = await User.create({
        name: faker.person.fullName(),
        email: faker.internet.email(),
      });
      users.push(user);
    }
    console.log('Users created');

    // Crear artistas
    const artistNames = [
      "Sabrina Carpenter", "Mac Miller", "David Lynch", "Aminé", "Drake", "Feid", "Tyler, The Creator",
      "Billie Eilish", "Bad Bunny", "Andrés Cepeda", "AKRIILA", "Danny Ocean", "Gipsy Kings", "Abraham Mateo",
      "Kendrick Lamar", "Shakira", "Binomio de Oro", "Mr. Black", "LMFAO", "Justin Bieber"
    ];
    const artists = [];
    for (const name of artistNames) {
      const artist = await Artist.create({ name });
      artists.push(artist);
    }
    console.log('Artists created');

    // Crear albumes
    const albumsData = [
      { id: 102, name: "SHORT N`SWEET", year: "2024", imageUrl: "https://i.scdn.co/image/ab67616d00001e02fd8d7a8d96871e791cb1f626", artistName: "Sabrina Carpenter" },
      { id: 103, name: "emails i can't send", year: "2023", imageUrl: "https://i.scdn.co/image/ab67616d0000b273700f7bf79c9f063ad0362bdf", artistName: "Sabrina Carpenter" },
      { id: 201, name: "CIRCLES", year: "2020", imageUrl: "https://i.scdn.co/image/ab67616d0000b27326b7dd89810cc1a40ada642c", artistName: "Mac Miller" },
      { id: 202, name: "Mulholland Drive OST", year: "2001", imageUrl: "https://i.ytimg.com/vi/mNYF1wWZ_H4/maxresdefault.jpg", artistName: "David Lynch" },
      { id: 301, name: "Good for you", year: "2022", imageUrl: "https://www.thebackpackerz.com/wp-content/uploads/2017/07/amine-good-for-you-album-800x800.jpg", artistName: "Aminé" },
      { id: 401, name: "Views", year: "2016", imageUrl: "https://i.scdn.co/image/ab67616d0000b2739416ed64daf84936d89e671c", artistName: "Drake" },
      { id: 501, name: "FERXXO VOL 10: SAGRADO", year: "2024", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBDgvr24NjEjrlJ-Rsq3lf6NQuYuLRbXE-mg&s", artistName: "Feid" },
      { id: 601, name: "DON'T TAP THE GLASS", year: "2024", imageUrl: "https://i.scdn.co/image/ab67616d0000b273979047951fa8b15df9f9e984", artistName: "Tyler, The Creator" },
      { id: 701, name: "HIT ME HARD AND SOFT", year: "2024", imageUrl: "https://i.scdn.co/image/ab67616d0000b27371d62ea7ea8a5be92d3c1f62", artistName: "Billie Eilish" },
      { id: 801, name: "DbTmF", year: "2024", imageUrl: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8408dbfe73b692078d710e54f4", artistName: "Bad Bunny" },
      { id: 901, name: "BOGOTÁ (DELUXE)", year: "2023", imageUrl: "https://i.scdn.co/image/ab67616d0000b2735ea3b9dd61366bf82bd1ab96", artistName: "Andrés Cepeda" },
      { id: 1001, name: "EPISTOLARES+", year: "2024", imageUrl: "https://i.scdn.co/image/ab67616d0000b273f3b8bac4ec47a6fb1fa626da", artistName: "AKRIILA" },
      { id: 1101, name: "BABYLON CLUB", year: "2024", imageUrl: "https://tse4.mm.bing.net/th/id/OIP.4_x5fqCiSA_wClq9RA0zagHaHa?rs=1&pid=ImgDetMain&o=7&rm=3", artistName: "Danny Ocean" },
      { id: 1201, name: "GIPSY KINGS", year: "1988", imageUrl: "https://i.scdn.co/image/ab67616d0000b273d93675d4a5c0f92e63121415", artistName: "Gipsy Kings" },
      { id: 1301, name: "ABRAHAM MATEO", year: "2014", imageUrl: "https://i.scdn.co/image/ab67616d0000b2739644c304c02e2cc20ab63192", artistName: "Abraham Mateo" },
      { id: 1302, name: "LÁNZALO", year: "2015", imageUrl: "https://i.scdn.co/image/ab67616d0000b273f641ff7ce301a038b42c873e", artistName: "Abraham Mateo" },
      { id: 1401, name: "GNX", year: "2024", imageUrl: "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58", artistName: "Kendrick Lamar" },
      { id: 1501, name: "FIJACIÓN ORAL VOL. 1", year: "2005", imageUrl: "https://i.scdn.co/image/ab67616d0000b273f342e70aacda9d78cfb6ce7a", artistName: "Shakira" },
      { id: 1601, name: "2000", year: "2000", imageUrl: "https://i.scdn.co/image/ab67616d0000b273d0b8c555dc3c3fe62f8828da", artistName: "Binomio de Oro" },
      { id: 1701, name: "Presidente de la Champeta", year: "2010", imageUrl: "https://i.scdn.co/image/ab67616d0000b273759c8fefb6bcdc69a711c9e1", artistName: "Mr. Black" },
      { id: 1801, name: "Party Rock", year: "2011", imageUrl: "https://i.scdn.co/image/ab67616d0000b2736a0f2bf4749bddc11f4ba8dc", artistName: "LMFAO" },
      { id: 1901, name: "Swag", year: "2012", imageUrl: "", artistName: "Justin Bieber" },
    ];

    const albums = [];
    for (const albumData of albumsData) {
      const artist = artists.find(a => a.name === albumData.artistName);
      if (artist) {
        const album = await Album.create({ ...albumData, artistId: artist.id });
        albums.push(album);
      }
    }
    console.log('Albums created');

    // Crear reseñas
    for (let i = 0; i < 20; i++) {
      const randomUser = users[Math.floor(Math.random() * users.length)];
      const randomAlbum = albums[Math.floor(Math.random() * albums.length)];
      await Review.create({
        rating: faker.number.int({ min: 1, max: 5 }),
        comment: faker.lorem.paragraph(),
        userId: randomUser.id,
        albumId: randomAlbum.id,
      });
    }
    console.log('Reviews created');

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await sequelize.close();
  }
};

seedDatabase();
