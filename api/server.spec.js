/*
- when making a GET request to the `/` endpoint 
  the API should respond with status code 200 
  and the following JSON object: `{ api: 'running' }`.
*/
const request = require('supertest'); 

const server = require('./server.js'); 

describe('server.js', () => {
  // http calls made with supertest return promises, we can use async/await if desired
  describe('index route', () => {
    it('should return an OK status code from the index route', async () => {
      const expectedStatusCode = 200;

      const response = await request(server).get('/');

      expect(response.status).toEqual(expectedStatusCode);
    });

    // it('should return a JSON', async () => {
    //   const expectedBody = { api: 'running' };

    //   const response = await request(server).get('/');

    //   expect(response.body).toEqual(expectedBody);
    // });

    // it('should return a JSON', async () => {
    //   const response = await request(server).get('/');

    //   expect(response.type).toEqual('application/json');
    // });
  });
});