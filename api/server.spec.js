const request = require('supertest'); 
const server = require('./server.js'); 


  // http calls made with supertest return promises, we can use async/await if desired
describe('index route', () => {
    it('should return an OK status code from the index route', async () => {
      const expectedStatusCode = 200;
      const response = await request(server).get('/');
      expect(response.status).toEqual(expectedStatusCode);
    });

    describe("get /", function() {
        it("Should return a 200 ok", function () {
            return request(server)
                .get("/api/jokes")
                .then(res => {
                    expect(res.status).toBe(200)
                })
            });
        })

    

    it('returns 200', () => {
        return request(server).get('/')
        .expect(200)
  });
});