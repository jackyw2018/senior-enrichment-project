const faker = require('faker');

const db = require('./db');
const Campus = require('./Campuses');
const Student = require('./Students');

const campuses = [
  {
    name: 'Luna',
    address: 'somewhere awesome 1',
    description: 'this is an awesome place 1',
    imageUrl:
      'https://images.unsplash.com/photo-1504776230347-f7bbe91846a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  },
  {
    name: 'Terra',
    address: 'somewhere awesome 2',
    description: 'this is an awesome place 2',
    imageUrl:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80',
  },
  {
    name: 'Mars',
    address: 'somewhere awesome 3',
    description: 'this is an awesome place 3',
    imageUrl:
      'https://images.unsplash.com/photo-1465158753229-aa725fff85a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Titan',
    address: 'somewhere awesome 4',
    description: 'this is an awesome place 4',
    imageUrl:
      'https://images.unsplash.com/photo-1443456066412-3e3ea69ee37c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

const randomCampusId = campusLength => {
  return Math.ceil(Math.random() * campusLength);
};

const createStudents = numberOfStudents => {
  return Array.from({ length: numberOfStudents }, () => ({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    gpa: (Math.random() * 2 + 2).toFixed(1),
    imageUrl: faker.image.avatar(),
    campusId: randomCampusId(campuses.length),
  }));
};

const students = createStudents(20);

const syncAndSeed = () => {
  return db.sync({ force: true }).then(() => {
    return Promise.all(
      campuses.map(({ name, address, description, imageUrl }) =>
        Campus.create({ name, address, description, imageUrl })
      )
    ).then(() => {
      Promise.all(
        students.map(
          ({ firstName, lastName, email, gpa, imageUrl, campusId }) =>
            Student.create({
              firstName,
              lastName,
              email,
              gpa,
              imageUrl,
              campusId,
            })
        )
      );
    });
  });
};

Campus.hasMany(Student);
Student.belongsTo(Campus);

module.exports = {
  syncAndSeed,
  Student,
  Campus,
};
