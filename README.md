# Simple Node.js Server with Express

This project demonstrates how to create a simple web server using Node.js and Express. The server handles HTTP GET requests and serves HTML files based on the requested URL. It includes error handling for 404 pages and is set up to be easily extended with new routes.

## Features

- Serves `.html` files based on the requested URL.
- Routes include `/`, `/about`, and `/contact`, each serving the corresponding `.html` file.
- Automatically serves `404.html` for any route that does not match an existing route.
- Uses `dotenv` to manage the server's port configuration.

## File Structure

The server expects the following file structure in the project directory:

- `index.js` - The main server script.
- `index.html` - The homepage served at `/`.
- `about.html` - The about page served at `/about`.
- `contact-me.html` - The contact page served at `/contact`.
- `404.html` - The error page served for 404 Not Found.

Example directory layout:

```
index.js
index.html
about.html
contact-me.html
404.html
```

## Usage

1. Ensure you have [Node.js](https://nodejs.org/) installed.
2. Install project dependencies by running:
   ```
   npm install
   ```
3. Place your `.html` files in the same directory as the `server.js` file.
4. Create a `.env` file in the root directory and define the port if necessary:
   ```
   PORT=8080
   ```
5. Start the server by running:
   ```
   node index.js
   ```
6. Access the server in your browser at:
   ```
   http://localhost:8080
   ```

## How It Works

- The server uses Express to handle routing for various paths like `/`, `/about`, and `/contact`, serving the corresponding `.html` files.
- If the requested path doesn't match any route, it serves the `404.html` file with a `404 Not Found` status.
- The port number is configurable through the `.env` file with the `PORT` variable. If not set, it defaults to `8080`.

## Example URLs

- `/` → Serves `index.html`
- `/about` → Serves `about.html`
- `/contact` → Serves `contact-me.html`
- `/nonexistent` → Serves `404.html`

## License

This project is open source and available under the MIT License.
