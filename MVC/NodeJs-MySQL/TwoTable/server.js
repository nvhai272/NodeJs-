const app = require('./app');

const PORT = process.env.PORT || 3000;

if (app) {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
} else {
    console.error('Failed to load the app module.');
}
