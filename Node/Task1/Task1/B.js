const fs = require("fs");

fs.writeFile("data_async.txt", "Hello World i am Moataz", (err) => {
    if (err) {
        console.log("Error writing file", err);
    } else {
        console.log("File written successfully");
    }
});

fs.readFile("data_async.txt","utf-8", (err, data) => {
    if (err) {
        console.log("Error reading file", err);
    } else {
        console.log("File content:", data);
    }   
});