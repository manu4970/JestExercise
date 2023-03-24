// import the function sum from the app.js file
const { sum } = require('./app.js');
const { fromDollarToYen } = require('./app.js')
const { fromYenToPound } = require('./app.js')

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});


test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One dolar shoud be 130 yens", function(){
    const Yen = fromDollarToYen(1)
    const expected = 1*130.7
    expect(fromDollarToYen(1)).toBe(130.7)
})

test("One yen shoud be 0,63 pounds", function(){
    const pounds = fromYenToPound(1)
    const expected = 1*0.63
    expect(fromYenToPound(1)).toBe(0.63)
})