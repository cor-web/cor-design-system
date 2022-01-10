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
    picture: 'https://thispersondoesnotexist.com/image',
  });
}


module.exports = {
  preview: "@previewincor_new",
  context: {
    title: "​Apostolos Tzitzikostas",
    subtitle: "President of the European Committee of the Regions",
    poster: {
      src: "https://cor.europa.eu/en/about/president/PublishingImages/tzitzikostas.png",
    },
    members: memberData,
    documents: [
      {
        title: "Preventing corruption at local and regional level in South Mediterranean countries",
        src: "google.be",
        date: "12/11/2021",
        language: "English",
        size: "3 MB",
        type: "PDF",
        translations: [
          {
            language: "français",
            title: "FR Eu dolor magna elit reprehenderit sunt laborum consequat do ipsum sunt eu ad cillum eiusmod.",
            size: "3.2 MB",
            src: "test.be",
            type: "PDF",
          },
          {
            language: "English",
            title: "EN Eu dolor magna elit reprehenderit sunt laborum consequat do ipsum sunt eu ad cillum eiusmod.",
            src: "test.be",
            size: "3.2 MB",
            type: "PDF",
          }, {
            language: "español",
            title: "ES Eu dolor magna elit reprehenderit sunt laborum consequat do ipsum sunt eu ad cillum eiusmod.",
            src: "test.be",
            size: "3.2 MB",
            type: "PDF",
          }
        ]
      },
      {
        title: "Preventing corruption at local and regional level in South Mediterranean countries",
        src: "google.be",
        date: "12/11/2021",
        language: "English",
        size: "3 MB",
        type: "PDF",
        translations: [
          {
            language: "français",
            title: "FR Eu dolor magna elit reprehenderit sunt laborum consequat do ipsum sunt eu ad cillum eiusmod.",
            size: "3.2 MB",
            src: "test.be",
            type: "PDF",
          },
          {
            language: "English",
            title: "EN Eu dolor magna elit reprehenderit sunt laborum consequat do ipsum sunt eu ad cillum eiusmod.",
            src: "test.be",
            size: "3.2 MB",
            type: "PDF",
          }, {
            language: "español",
            title: "ES Eu dolor magna elit reprehenderit sunt laborum consequat do ipsum sunt eu ad cillum eiusmod.",
            src: "test.be",
            size: "3.2 MB",
            type: "PDF",
          }
        ]
      },
      {
        title: "Preventing corruption at local and regional level in South Mediterranean countries",
        src: "google.be",
        date: "12/11/2021",
        language: "English",
        size: "3 MB",
        type: "PDF",
        translations: [
          {
            language: "français",
            title: "FR Eu dolor magna elit reprehenderit sunt laborum consequat do ipsum sunt eu ad cillum eiusmod.",
            size: "3.2 MB",
            src: "test.be",
            type: "PDF",
          },
          {
            language: "English",
            title: "EN Eu dolor magna elit reprehenderit sunt laborum consequat do ipsum sunt eu ad cillum eiusmod.",
            src: "test.be",
            size: "3.2 MB",
            type: "PDF",
          }, {
            language: "español",
            title: "ES Eu dolor magna elit reprehenderit sunt laborum consequat do ipsum sunt eu ad cillum eiusmod.",
            src: "test.be",
            size: "3.2 MB",
            type: "PDF",
          }
        ]
      }
    ]
  },
};
