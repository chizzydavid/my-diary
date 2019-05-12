import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

chai.use(chaiHttp);
chai.should();

describe('Fake test suite two', () => {
    it('return message on the route route', (done) => {
        chai.request(app)
        .put('/route')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.have.property('message').which.is.a('string').equal('route for getting entries');
            done();
        })
    })
})