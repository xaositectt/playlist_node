import server from '../src/app'
import assert from 'assert'
import chai from 'chai'
import chaiHttp from 'chai-http'

chai.use(chaiHttp)
describe('test endpoint', function(){
  it('should return hello world', done=>{
    chai.request(server)
      .get('/hello_worl')
      .end((err,res)=>{
        assert(res.status, 200)
        assert(res.body.msg, 'hello world')
        done()
      })
  })
})
