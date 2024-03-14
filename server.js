// JSON Server module
const jsonServer = require("json-server");
const cors = require("cors");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Add this before server.use(router)
server.use(
    // Add custom route here if needed
    jsonServer.rewriter({
        "/api/*": "/$1",
    })
);

server.use(router);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`JSON Server is running on port ${PORT}`);
});

// Export the Server API
module.exports = server;
