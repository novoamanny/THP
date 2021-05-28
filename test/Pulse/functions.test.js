jest.setTimeout(30000);

const functions = require('./functions');


// O N E
test('Request With Completed Status: Test One - SSN One', async () => {
    expect.assertions(1);
    const data = await functions.COMPLETED_STATUS.ONE();
    expect(data.status).toBe(200);
}) 

test('Request With Completed Status: Test One - SSN Two', async () => {
    expect.assertions(1);
    const data = await functions.COMPLETED_STATUS.TWO();
    expect(data.status).toBe(200);
}) 

test('Request With Completed Status: Test One - SSN Three', async () => {
    expect.assertions(1);
    const data = await functions.COMPLETED_STATUS.THREE();
    expect(data.status).toBe(200);
}) 






// T W O
test('Request With Pending Status: Test Two - SSN One', async () => {
    expect.assertions(1);
    const data = await functions.PENDING_STATUS.ONE();
    expect(data.status).toBe(200);
}) 
test('Request With Pending Status: Test Two - SSN Two', async () => {
    expect.assertions(1);
    const data = await functions.PENDING_STATUS.TWO();
    expect(data.status).toBe(200);
}) 
test('Request With Pemding Status: Test Two - SSN Three', async () => {
    expect.assertions(1);
    const data = await functions.PENDING_STATUS.THREE();
    expect(data.status).toBe(200);
}) 






// T H R E E
test('Request With Processing Status: Test Three - SSN One', async () => {
    expect.assertions(1);
    const data = await functions.PROCESSING_STATUS.ONE();
    expect(data.status).toBe(200);
}) 
test('Request With Processing Status: Test Three - SSN Two', async () => {
    expect.assertions(1);
    const data = await functions.PROCESSING_STATUS.TWO();
    expect(data.status).toBe(200);
}) 
test('Request With Processing Status: Test Three - SSN Three', async () => {
    expect.assertions(1);
    const data = await functions.PROCESSING_STATUS.THREE();
    expect(data.status).toBe(200);
}) 




// F O U R
test('Test Four', async () => {
    expect.assertions(1);
    const data = await functions.FOUR();
    expect(data.status).toBe(200);
}) 




// F I V E
test('Test Five', async () => {
    expect.assertions(1);
    const data = await functions.FIVE();
    expect(data.status).toBe(200);
}) 





// S I X
test('Test Six', async () => {
    expect.assertions(1);
    const data = await functions.SIX();
    expect(data.status).not.toBe(200);
}) 