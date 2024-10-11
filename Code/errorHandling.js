
try {
    // Some code
    throw new Error('Error: Connection failed');
} catch (err) {
    // If and only if the try block
    // throws an error, the err variable
    // stores it and this code block runs
    console.log(err.message); // Prints 'Error: Connection failed'
} finally {
    // this code always runs
}




