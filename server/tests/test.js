import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

chai.use(chaiHttp);
chai.should();

describe('Fake test suite one', () => {
    it('should return message on the home route', (done) => {
        chai.request(app)
        .get('/')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.have.property('message').which.is.a('string').equal('my diary app');
            done();
        })
    })
})