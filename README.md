This is a simple messaging app written in React, Javascript, Node.js and Express, tested in Jest and Supertest. Messages are fetched with a simple GET request and displayed in React. Users can post new messages with their name and see their message appear on top of previous messages. If a field is left empty, the message goes unsent. Messages persist when closing tabs and windows and when changing browsers.

Requirements - 

- this requires React, Node.js and Express to run, Jest and Supertest to run the test file. Postman can be used in lieu of running the test file.


To run - 

- open the server folder in the Terminal or Command Line
- type npm run dev

- open the client folder in the Terminal or Command Line
- type npm run start

Tests - 

- "DCThomson.postman_collection.json" is a list of API tests in Postman
- Test were also written in Jest and are accessible by following these instructions - 
            - open the tests folder in the Terminal or Command Line
            - type npm run test