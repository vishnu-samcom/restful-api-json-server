// JSON Server module
const jsonServer = require("json-server");
const cors = require("cors");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(cors());

server.use(middlewares);

// Add this before server.use(router)
server.use(
    // Add custom route here if needed
    jsonServer.rewriter({
        "/api/*": "/$1",
    })
);

// POST route
server.post("/api/notes", (req, res) => {
    const newPost = req.body;
    // Create a new post
    // Example logic:
    db.posts.create(newPost);
    res.status(201).json(newPost);
});

// Update route
server.put("/api/notes/:id", (req, res) => {
    const { id } = req.params;
    const updatedPost = req.body;
    // Update the post with the given id
    // Example logic:
    db.posts.updateById(id, updatedPost);
    res.status(200).json(updatedPost);
});

// Delete route
server.delete("/api/notes/:id", (req, res) => {
    const { id } = req.params;
    // Delete the post with the given id
    // Example logic:
    db.posts.deleteById(id);
    res.status(204).end();
});

server.use(router);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`JSON Server is running on port ${PORT}`);
});

// Export the Server API
module.exports = server;
