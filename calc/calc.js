// Dependencies
var express = require("express");

// Create express app instance.
var app = express();

// Routes
// What routes do you need to have? Which ones are optional?
// TODO Add your routes here
app.get("/:operation/:val1/:val2", function (req, res) {
    // TODO parse out the variables from the request
    // Parameters are received from the URL
    // TODO make sure they're converted to integers (and not strings)
    // Parameters are converted to integers
    const operation = req.params.operation;
    const val1 = parseInt(req.params.val1);
    const val2 = parseInt(req.params.val2);
    // Initialize the result variable to send later
    let result;
    // Switch statement chooses operation based on the operation parameter.
    switch (operation) {
        // BONUS - How could you use * + etc. inside the app.get()?
        case "add":
            result = val1 + val2
            break;
        case "subtract":
            result = val1 - val2
            break;
        case "multiply":
            result = val1 * val2
            break;
        case "divide":
            result = val1 / val2
            break;
        default:
            // Handle anything that isn't specified
            result =
                "Sorry! The only valid operations are add, subtract, multiply, and divide.";
    }

    // We return the result back to the user in the form of a string
    res.send(result.toString());

});

// Initiate the listener.
app.listen(3002);

