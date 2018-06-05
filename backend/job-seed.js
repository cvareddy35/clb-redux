const faker = require('faker');
const axios = require('axios');

for (let i=0; i<5; i++) {
  const job = {
    title: faker.name.jobTitle(),
    location: faker.address.city(),
    experience: faker.random.number({ min: 1, max: 20 }),
    description: faker.name.jobDescriptor(),
    company: faker.company.companyName()
  };

  axios.post('http://localhost:8080/api/jobs', job)
      .then(res => console.log('Row Inserted', res.data))
      .catch(err => {
        console.log('Error occured', err);
        process.exit(-1)
      })

}