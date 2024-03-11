import app from './server.js';
const PORT = 4050


app.listen(PORT, () => {
    console.log('server is running on port', PORT);
})