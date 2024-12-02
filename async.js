
// async & await
async function iterateWithAsyncAwait(valeur) {
    for (const value of valeur) {
        await new Promise(resolve => setTimeout(resolve, 1111));
        console.log(value);
    }
}

// errors with async & await
async function awaitCallWithError(shouldFail = false) {
    try {
        // Simulate API call that might fail
        const data = await new Promise((resolve, reject) => {
            setTimeout(() => {
                if (shouldFail) {
                    reject(new Error("API request failed"));
                } else {
                    resolve({ message: "Data successfully fetched!", timestamp: new Date() });
                }
            }, 2000);
        });
        console.log("API Response:", data);
        return data;
    } catch (error) {
        console.error("An error occurred while fetching data. Please try again later.");
        console.error("Technical details:", error.message);
        throw error;
    }
}

// awaiting a call
async function awaitCall() {
    try {
        // API & promise that resolves after 2 second
        const data = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ message: "Data successfully fetched!", timestamp: new Date() });
            }, 2000);
        });
        console.log("API Response:", data);
        return data;
    } catch (error) {
        console.error("Error :", error);
        throw error;
    }
}



// Example 
async function runDemo() {
    console.log("Iterating with Async/Await");
    await iterateWithAsyncAwait([1, 2, 3, 4, 5]);
    console.log("\nHandling Errors with Async/Await");
    try {
        await awaitCallWithError(false); // Success case
        await awaitCallWithError(true);  // Error case
    } catch (error) {
        console.log("Main error handler:", error.message);
    }
        console.log("\nAwaiting a Call");
    await awaitCall();
}

// Run 
runDemo().then(() => console.log("Demo completed!"));