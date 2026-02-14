var mammoth = require("mammoth");
var fs = require("fs");

mammoth.convertToHtml({path: "docfile.docx"})
    .then(function(result){
        var html = result.value; // The generated HTML content
        var messages = result.messages; // Any messages, such as warnings

        // Optionally, save the HTML to a file
        fs.writeFileSync("output.html", html);

        console.log("Conversion complete. HTML saved to output.html");
        console.log("Messages:", messages);
    })
    .catch(function(error) {
        console.error("Conversion failed:", error);
    });
