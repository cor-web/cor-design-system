// member-list.config.js
'use strict';

const faker = require('faker'); // require the faker module
const memberCount = 1; // how many members we should generate data for
const memberData = [];

for (var i = 0; i < memberCount; i++) {
  memberData.push({
    name: faker.name.findName(),
    jobTitle: faker.name.jobTitle(),
    phone: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    picture: 'https://thispersondoesnotexist.com/image'
  });
}

module.exports = {
  context: {
    members: memberData // use our generated list of members as context data for our template.
  }
};