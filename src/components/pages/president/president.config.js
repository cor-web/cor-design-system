// member-list.config.js
"use strict";

const faker = require("faker"); // require the faker module
const memberCount = 10; // how many members we should generate data for
const memberData = [];

for (var i = 0; i < memberCount; i++) {
  memberData.push({
    name: faker.name.findName(),
    jobTitle: faker.name.jobTitle(),
    phone: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    picture: faker.image.avatar(),
  });
}

module.exports = {
  preview: "@previewincor_new",
  context: {
    title: "​Apostolos Tzitzikostas",
    subtitle: "President of the European Committee of the Regions",
    poster: {
      src: "https://thispersondoesnotexist.com/image",
    },
    members: memberData,
  },
};
