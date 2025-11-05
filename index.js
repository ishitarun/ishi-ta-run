// server.js
const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const app = express();

// Constants
const PORT = process.env.PORT || 3000;
const FILE_PATH = path.join(__dirname, 'public', 'userDetails.txt');
const IMAGES_PATH = path.join(__dirname, 'public', 'images');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'html', 'login.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'public', 'html', 'login.html')));
app.get('/signup', (req, res) => res.sendFile(path.join(__dirname, 'public', 'html', 'singup.html')));
app.get('/dashboard', (req, res) => res.sendFile(path.join(__dirname, 'public', 'html', 'dashboard.html')));

// Signup
app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) return res.status(400).send("All fields are required!");

    fs.readFile(FILE_PATH, 'utf8', (err, data) => {
        let users = [];

        if (!err && data) {
            try {
                users = JSON.parse(data);
            } catch {
                return res.status(500).send("Failed to parse user data.");
            }
        }

        const exists = users.some(u => u.username === Buffer.from(username).toString('base64') || u.email === Buffer.from(email).toString('base64'));
        if (exists) return res.status(400).send("Username or email already exists.");

        const newUser = {
            userId: users.length + 1,
            username: Buffer.from(username).toString('base64'),
            email: Buffer.from(email).toString('base64'),
            password: Buffer.from(password).toString('base64')
        };

        users.push(newUser);

        fs.writeFile(FILE_PATH, JSON.stringify(users, null, 2), (writeErr) => {
            if (writeErr) return res.status(500).send("Failed to save user details.");
            res.status(200).json({ id: newUser.userId, msg: "Signup successful!" });
        });
    });
});

// Login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).send("Please fill in all fields.");

    fs.readFile(FILE_PATH, 'utf8', (err, data) => {
        if (err) return res.status(500).send("Failed to read user data.");

        let users;
        try {
            users = JSON.parse(data);
        } catch {
            return res.status(500).send("Invalid user data.");
        }

        const encodedUsername = Buffer.from(username).toString('base64');
        const encodedPassword = Buffer.from(password).toString('base64');
        const user = users.find(u => u.username === encodedUsername && u.password === encodedPassword);

        if (!user) return res.status(400).send("Invalid username or password.");

        res.status(200).json({ message: "Login successful", id: user.userId, user });
    });
});

// Dashboard Data
app.post('/dashboardData', (req, res) => {
    const { userId } = req.body;
    if (!userId) return res.status(400).send("User ID is required.");

    fs.readFile(FILE_PATH, 'utf8', (err, data) => {
        if (err) return res.status(500).send("Failed to read user data.");

        let users;
        try {
            users = JSON.parse(data);
        } catch {
            return res.status(500).send("Invalid user data.");
        }

        const user = users.find(u => u.userId == userId);
        if (!user) return res.status(400).send("User not found.");

        res.status(200).json({ currentUser: user, users });
    });
});

// Upload Config
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (!fs.existsSync(IMAGES_PATH)) fs.mkdirSync(IMAGES_PATH, { recursive: true });
        cb(null, IMAGES_PATH);
    },
    filename: (req, file, cb) => cb(null, file.originalname)
});

const upload = multer({ storage });

// File Upload
app.post('/upload', upload.array('files[]'), (req, res) => {
    if (!req.files || req.files.length === 0) return res.status(400).send("No file uploaded.");
    const fileNames = req.files.map(file => file.originalname);
    res.status(200).send(`Files uploaded: ${fileNames.join(', ')}`);
});

// Show Images
app.post('/showImages', (req, res) => {
    try {
        const files = fs.readdirSync(IMAGES_PATH);
        res.status(200).json({ images: files });
    } catch (err) {
        res.status(500).send("Unable to read image directory.");
    }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
