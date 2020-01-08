let expect= require('chai').expect;
let parkingLot = require ('../parkingLot');
describe('create_parking-lot 6', async function (){
it('should create 6 parking slots', async function (){
var preResult = 'created a parking lot with 6 slots';
var result = await parkingLot.createparkingLot(6);
console.log(result);
expect(result).to.be.equal(preResult);
});
});
