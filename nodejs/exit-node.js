/* const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1> my name is Shahram <h1>');
})
app.listen(3000, () => console.log('Server ready')); */
import axios from 'axios';
import express from 'express';
import os from 'os';
const app = express();

app.get('/', (req, res) => {
    res.send('Hi');
})

const server = app.listen(3000, () => console.log('Server running'));

process.on('SIGTERM', () => {
    server.close(() => {
        console.log('Process terminated');
    })
})

/* setTimeout(() => {
    process.kill(process.id, 'SIGTERM');
}, 5000); */