const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

// Halaman utama dengan tombol ke form
app.get("/", (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Home</title>
                <style>
                    body { font-family: Arial, sans-serif; text-align: center; background-color: #f0f2f5; margin: 0; padding: 0; }
                    .container { width: 90%; max-width: 400px; margin: 100px auto; background: white; padding: 30px; border-radius: 10px; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); }
                    h1 { color: #333; }
                    .btn { display: inline-block; padding: 12px 20px; font-size: 16px; background-color: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer; text-decoration: none; transition: 0.3s; }
                    .btn:hover { background-color: #0056b3; }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>👋 Hello, World!</h1>
                    <a href="/form" class="btn">Buka Form</a>
                </div>
            </body>
        </html>
    `);
});

// Halaman form
app.get("/form", (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Form Input</title>
                <style>
                    body { font-family: Arial, sans-serif; text-align: center; background-color: #f0f2f5; margin: 0; padding: 0; }
                    .container { width: 90%; max-width: 400px; margin: 50px auto; background: white; padding: 30px; border-radius: 10px; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); }
                    h1 { color: #333; }
                    form { display: flex; flex-direction: column; align-items: center; gap: 15px; }
                    label { font-size: 16px; font-weight: bold; color: #555; }
                    input { padding: 10px; width: 100%; max-width: 300px; border: 1px solid #ccc; border-radius: 5px; font-size: 16px; }
                    .btn { display: inline-block; padding: 12px 20px; font-size: 16px; background-color: #28a745; color: white; border: none; border-radius: 5px; cursor: pointer; transition: 0.3s; }
                    .btn:hover { background-color: #218838; }
                    .btn-secondary { background-color: #dc3545; }
                    .btn-secondary:hover { background-color: #c82333; }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>📋 Form Input Data</h1>
                    <form action="/submit" method="post">
                        <label>Nama:</label>
                        <input type="text" name="nama" required>
                        <label>Email:</label>
                        <input type="email" name="email" required>
                        <button type="submit" class="btn">Kirim</button>
                    </form>
                    <br>
                    <a href="/" class="btn btn-secondary">Kembali</a>
                </div>
            </body>
        </html>
    `);
});

// Handle form submission
app.post("/submit", (req, res) => {
    const { nama, email } = req.body;
    res.send(`
        <html>
            <head>
                <title>Data Diterima</title>
                <style>
                    body { font-family: Arial, sans-serif; text-align: center; background-color: #f0f2f5; margin: 0; padding: 0; }
                    .container { width: 90%; max-width: 400px; margin: 50px auto; background: white; padding: 30px; border-radius: 10px; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); }
                    h1 { color: #333; }
                    p { font-size: 18px; color: #555; }
                    .btn { display: inline-block; padding: 12px 20px; font-size: 16px; background-color: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer; transition: 0.3s; text-decoration: none; }
                    .btn:hover { background-color: #0056b3; }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>✅ Data Diterima</h1>
                    <p><strong>Nama:</strong> ${nama}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <br>
                    <a href="/" class="btn">Kembali ke Home</a>
                </div>
            </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
