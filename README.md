The Wine Store project is a comprehensive example of a microservices-based architecture, featuring both a micro front-end (FE) and a micro back-end (BE). The project is divided into several subdirectories, each responsible for a specific aspect of the application.

Project Structure

Backend:

server-users: Handles user-related functionality and connects to its MongoDB database.
server-products: Manages product-related operations, including wine details, and connects to its MongoDB database.
server-gateway: Acts as a gateway, directing requests to the appropriate microservice and unifying the responses.

Frontend:

footer: A micro front-end project responsible for the site's footer. Utilizes Module Federation for seamless integration into the main application.

winery: The main front-end project serving as the host. It imports and integrates the footer micro front-end.

Public:

The public directory is dedicated to storing images, particularly wine images, used in the application.

Getting Started
Clone the Repository:

Copy code

git clone https://github.com/your-username/wine-store.git

Install Dependencies:

Navigate to each subdirectory (server-users, server-products, server-gateway, footer, winery, and public) and run:
npm install

Run the Applications:

In each subdirectory, start the applications using:
npm start

Start by registering a new user account by visiting /register.

After registering, log in using the credentials at /login.

Once logged in, you can perform CRUD operations on the Wine List at /wine-list.
