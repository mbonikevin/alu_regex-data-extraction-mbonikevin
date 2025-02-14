    // function that will extract emails
    function get_emails(text) {
        const email_regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
        return text.match(email_regex) || [];
    }

    // function will extract urls
    function get_urls(text) {
        const url_regex = /https?:\/\/(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}([\/\w .-]*)*/g;
        return text.match(url_regex) || [];
    }

    // function that will extract phone numbers
    function get_phone_number(text) {
        const phone_regex = /\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g;
        return text.match(phone_regex) || [];
    }

    // function that will extract credit card numbers
    function get_credit_cards(text) {
        const cc_regex = /\b(?:\d{4}[-\s]?){3}\d{4}\b/g;
        return text.match(cc_regex) || [];
    }

    // function that will extract hashtags
    function get_hashtags(text) {
        const hashtag_regex = /#\w+/g;
        return text.match(hashtag_regex) || [];
    }

    // string to use for extration
    const data_string = `
        Hello. Im a fulstack web developer, you contact me at k.mbonimpay@alustudent.com or visit https://kevinmk.onrender.com
        my phone number is (123) 456-7890 or 123-456-7890 for business talks, and my credit card is 1234-5678-9012-3456
        I love #coding #JavaScript and #food
    `;

    console.log("extracted emails:", get_emails(data_string));
    console.log("extracted urls:", get_urls(data_string));
    console.log("extracted phone numbers:", get_phone_number(data_string));
    console.log("extracted credit cards:", get_credit_cards(data_string));
    console.log("extracted hashtags:", get_hashtags(data_string));

