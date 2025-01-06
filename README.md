# Simple Node.js HTTP Server

This project is a basic HTTP server created using Node.js. The server is designed to handle HTTP GET requests and serves HTML files based on the requested URL pathname. It includes error handling for 404 and 500 responses, making it a minimal but functional example of a server that dynamically serves static files.

## Features

- Serves `.html` files based on the requested URL.
- Automatically serves `index.html` when the root URL (`/`) is accessed.
- Displays a custom `404.html` page when the requested file is not found.
- Handles errors gracefully, responding with a `500 Internal Server Error` if the `404.html` file itself is missing.

## File Structure

The server expects the following file structure in the project directory:

- `server.js` - The main server script.
- `index.html` - The homepage served at `/`.
- `404.html` - The error page served for 404 Not Found.
- Additional `.html` files (e.g., `about.html`, `contact.html`) corresponding to other URLs.

Example directory layout:
```
index.js
index.html
404.html
about.html
contact-me.html
```

## Usage

1. Ensure you have [Node.js](https://nodejs.org/) installed.
2. Place your `.html` files in the same directory as the `server.js` file.
3. Start the server by running:
   ```
   node server.js
   ```
4. Access the server in your browser at:
   ```
   http://localhost:8080
   ```

## How It Works

- The server reads the pathname from the URL and appends `.html` to determine the file to serve.
- If the pathname is `/`, it defaults to serving `index.html`.
- If the requested file does not exist, the server attempts to serve `404.html`.
- If `404.html` is also missing, the server responds with a `500 Internal Server Error` and a generic error message.

## Example URLs

- `/` → Serves `index.html`
- `/about` → Serves `about.html`
- `/nonexistent` → Serves `404.html` (if available)

## License

This project is open source and available under the MIT License.
