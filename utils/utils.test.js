const utils = require('./utils');
const chai = require('chai');
const expect = chai.expect;

xit('should add two numbers', ()=>{
    const res = utils.add(2,3);
    expect(res).to.equal(5);
});

xit('should add two numbers asynchronously', (done)=>{
    utils.asyncAdd(4,5,(sum)=>{
        expect(sum).to.eql(9);
        done();
    });
    
})

xit('should square two numbers asynchronously', async()=>{
    const res = await utils.asyncSquare(3);
    expect(res).to.eql(9);
})