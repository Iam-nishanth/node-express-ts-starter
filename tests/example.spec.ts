import request from 'supertest';
import { app } from '../src/index';

describe('GET /', () => {
    it('should return "Hello World!"', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello World!');
    });
});

describe('GET /users', () => {
    it('should return an array of users', async () => {
        const response = await request(app).get('/users');
        expect(response.status).toBe(200);
        expect(response.body.users).toBeInstanceOf(Array);
        expect(response.body.users.length).toBeGreaterThan(0);
    });
});
