const fs = require("fs");
const path = require("path");

// Read the content of the text file
const filePath = path.join(__dirname, "emaillist.txt");
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  // Split the content by new lines and wrap each email with quotes
  const emails = data
    .split("\n")
    .map((email) => `${email.trim()},`)
    .filter((email) => email !== '",');

  // Join the emails back into a single string with new lines
  const formattedEmails = emails.join("\n");

  // Write the formatted emails to a new file
  const outputFilePath = path.join(__dirname, "formatted_emailsss.txt");
  fs.writeFile(outputFilePath, formattedEmails, "utf8", (err) => {
    if (err) {
      console.error("Error writing the file:", err);
      return;
    }
    console.log("File has been saved with formatted emails.");
  });
});
