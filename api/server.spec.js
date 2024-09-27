const request = require('supertest'); 
const server = require('./server.js'); 

  // http calls made with supertest return promises, we can use async/await if desired
describe('Testing server route', () => {

    describe("Test Register", () => {

        it('Return ok status 200', async() => {
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

    describe('Test Login', () => {
        it('Return ok status 200', async() => {
            const res = await request(server)
                .post("/api/auth/login")
                .send({
                    username: "chris",
                    password: "12345"
                });
            expect(res.status).toBe(200);
        });

        it("Login info missing error", async() => {
            const res = await request(server).post("/api/auth/login");
            expect(res.status).toBe(500);
        });

        it("Login info is incorrect", async() => {
            const res = await request(server)
                .post("/api/auth/login")
                .send({
                    username: "chrisp",
                    password: "1234"
                });
            expect(res.status).toBe(401);
        });
    });

    describe("Logging in then grabbing jokes", () => {
        it("Use Token then get jokes", async() => {
            const res = await request(server)
                .post("/api/auth/login")
                .send({
                    username: "chris",
                    password: "12345"
                });
            token = res.body.token;

            const fetchJokes = [{
                id: "0189hNRf2g",
                joke: "I'm tired of following my dreams. I'm just going to ask them where they are going and meet up with them later."
              },
              {
                id: "08EQZ8EQukb",
                joke: "Did you hear about the guy whose whole left side was cut off? He's all right now."
              },
              {
                id: "08xHQCdx5Ed",
                joke: "Why didn’t the skeleton cross the road? Because he had no guts."
              }];
              
              const getJokes = await request(server)
                .get("/api/jokes")
                .set("Authorization", `${token}`);
            expect(getJokes.status).toBe(200);
            expect(getJokes.body).toEqual(expect.arrayContaining(fetchJokes));
        });
    });
});