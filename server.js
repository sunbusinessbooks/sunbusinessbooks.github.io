const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000; // Использует порт Render или локальный для тестирования

// Middleware для обработки JSON
app.use(bodyParser.json());

// Пример маршрута для проверки
app.get('/', (req, res) => {
    res.send('Hello from Sun Business Books API!');
});

// Основной маршрут для чата
app.post('/chat', async (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }

    try {
        // Здесь отправляется запрос к OpenAI API
        res.json({ reply: `Your message was: ${message}` });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to process the message' });
    }
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
