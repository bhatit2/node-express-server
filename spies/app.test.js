const chai = require('chai'),
spies = require('chai-spies');
const expect = chai.expect;
chai.use(spies);

describe('App', ()=>{

    it('should call the spy correctly', ()=>{
        const spy = chai.spy();
        spy(2);
        console.log(JSON.stringify(expect(spy).to.have.been.called().__flags));
        expect(spy).to.have.been.called.with(2);
    })
});
