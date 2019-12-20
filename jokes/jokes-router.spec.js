const server = require('../api/server');
const request = require('supertest');
const db = require('../database/dbConfig');

beforeEach(() => db('users').truncate());

describe('jokes', () => {
    beforeEach(async () => {
        await request("Jokes").truncate();
    });

    it('post /', async () => {
        const res = await request(server)
            .post('/jokes')
        expect(200);
    });

    it('post /', async () => {
        const res = await request(server)
            .post('/jokes')
        expect(200);
    });

    it('get /', async () => {
        const res = await request(server).get('/jokes')
        expect(200);
    });

    it('get /', async () => {
        const res = await request(server).get('/jokes')
        expect(200);
    });
});