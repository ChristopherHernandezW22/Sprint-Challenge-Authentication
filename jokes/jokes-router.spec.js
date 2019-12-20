const server = require('../api/server');
const request = require('supertest');

describe('jokes', () => {
    it('get /', async () => {
        const res = await request(server).get('/jokes')
        expect(res.status).toBe(200);


    });
});