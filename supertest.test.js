// const request = require('supertest');
// const app = require('./server')

// describe('Test the root path', () => {
//     test('It should response the GET method', (done) => {
//         request(app).get('/').then((response) => {
//             expect(response.statusCode).toBe(200);
//             done();
//         });
//     });
// });
// const request = require('supertest');
// const app = require('./server')

// describe('Test the root path', () => {
//     test('It should response the GET method', async () => {
//         const response = await request(app).get('/');
//         expect(response.statusCode).toBe(200);
//     });
// })

const app = require('./server');
const supertest = require('supertest');
const request = supertest(app);

it('gets the test endpoint', async done => {
    const response = await request.get('/test');

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('pass!');
    done();
}); 
