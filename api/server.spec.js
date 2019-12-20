const request = require('supertest'); 
const server = require('./server.js'); 

  // http calls made with supertest return promises, we can use async/await if desired
describe('Testing server route', () => {

    describe("Test Register", () => {

        it('Return ok status code 200', async() => {
            const res = await request(server)
                .post("/api/auth/register")
                .send({
                    username: Date.now(),
                    password: "1337"
                });
            expect(res.status).toBe(201);
        });

        it("Register information missing error", async() => {
            const res = await request(server).post("/api/auth/register");
            expect(res.status).toBe(500);
        });
    });

    
});