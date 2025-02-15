# Data Extraction with Regular Expression

## Overview
This project consists of a set of JavaScript functions designed to extract different types of sensitive data from a given text. It is specifically built to identify and extract:

1. **Email addresses**
2. **URLs**
3. **Phone numbers**
4. **Credit card numbers**
5. **Hashtags**

The functions use regular expressions to scan a provided input string and return an array of matched values for each type of data. If no match is found, the functions will return an empty array.

The project is useful for applications involving text analysis or when sensitive data needs to be extracted from raw input for further processing.

## Features
- **Email extraction**: Identifies and extracts valid email addresses.
- **URL extraction**: Scans for HTTP or HTTPS URLs, including those with subdomains.
- **Phone number extraction**: Detects US phone numbers with various formats.
- **Credit card number extraction**: Extracts possible credit card numbers with common formats.
- **Hashtag extraction**: Identifies hashtags in the input text for social media or content analysis.

## Setup Instructions

### Prerequisites
To use this project, you need:
- A modern web browser (Chrome, Firefox, Safari, etc.)
- A basic understanding of JavaScript

### Instructions

1. **Clone the repository (optional)**:  
   If you wish to use or modify the code, clone the repository to your local machine.

   ```bash
   git clone https://github.com/mbonikevin/alu_regex-data-extraction-mbonikevin.git
   ```

2. **Install dependencies** (if any, depending on the implementation):  
   If you wish to build a more complex version of this tool, you can set up the project using Node.js. In case you want to use this code in a browser, no installation is required.

   ```bash
   npm init -y
   npm install
   ```

3. **Run the code**:
   You can run this script directly in any modern browser's Developer Tools Console (press F12, go to the "Console" tab).

   Alternatively, for a more advanced setup, you can use Node.js:
   
   ```bash
   node your-file.js
   ```

### Example Usage

Copy and paste the following script into the browser console or a Node.js environment to test the extractor functions:

```javascript
// Define the data extractor functions

function get_emails(text) {
    const email_regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    return text.match(email_regex) || [];
}

function get_urls(text) {
    const url_regex = /https?:\/\/(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}([\/\w .-]*)*/g;
    return text.match(url_regex) || [];
}

function get_phone_number(text) {
    const phone_regex = /\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g;
    return text.match(phone_regex) || [];
}

function get_credit_cards(text) {
    const cc_regex = /\b(?:\d{4}[-\s]?){3}\d{4}\b/g;
    return text.match(cc_regex) || [];
}

function get_hashtags(text) {
    const hashtag_regex = /#\w+/g;
    return text.match(hashtag_regex) || [];
}

// Sample data string to extract information from
const data_string = `
    Hello. Im a fullstack web developer, you contact me at k.mbonimpay@alustudent.com or visit https://kevinmk.onrender.com
    My phone number is (123) 456-7890 or 123-456-7890 for business talks, and my credit card is 1234-5678-9012-3456
    I love #coding #JavaScript and #food
`;

console.log("extracted emails:", get_emails(data_string));
console.log("extracted urls:", get_urls(data_string));
console.log("extracted phone numbers:", get_phone_number(data_string));
console.log("extracted credit cards:", get_credit_cards(data_string));
console.log("extracted hashtags:", get_hashtags(data_string));
```

### Sample Output:

```text
extracted emails: [ 'k.mbonimpay@alustudent.com' ]
extracted urls: [ 'https://kevinmk.onrender.com' ]
extracted phone numbers: [ '(123) 456-7890', '123-456-7890' ]
extracted credit cards: [ '1234-5678-9012-3456' ]
extracted hashtags: [ '#coding', '#JavaScript', '#food' ]
```

## Team Details

### Developers
- **Kevin Kaneza Mbonimpaye** – Full-stack Developer  
  - Expertise: Web Development, JavaScript, Frontend & Backend Technologies  
  - Role: Lead Developer of the Data Extractor functionality

## Contributing

1. Fork this repository and create your feature branch:
   ```bash
   git checkout -b feature/new-feature
   ```

2. Commit your changes:
   ```bash
   git commit -m 'Added a new feature'
   ```

3. Push to your branch:
   ```bash
   git push origin feature/new-feature
   ```

4. Open a pull request.

