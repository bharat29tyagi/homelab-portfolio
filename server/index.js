import express from 'express'
import os from 'os'

const app = express()

const PORT = 3000
const HOST = '127.0.0.1'

app.disable('x-powered-by')

app.get('/api/status', (req, res) => {
    const totalMemory = os.totalmem()
    const freeMemory = os.freemem()
    const usedMemory = totalMemory - freeMemory

    res.json({
        status: 'online',
        server: 'Nokia 7 Plus',
        service: 'Portfolio API',

        uptime: {
            systemSeconds: Math.floor(os.uptime()),
            apiSeconds: Math.floor(process.uptime()),
        },

        memory: {
            totalMB: Math.round(totalMemory / 1024 / 1024),
            usedMB: Math.round(usedMemory / 1024 / 1024),
            freeMB: Math.round(freeMemory / 1024 / 1024),
            usedPercent: Number(
                ((usedMemory / totalMemory) * 100).toFixed(1)
            ),
        },

        timestamp: new Date().toISOString(),
    })
})

app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok'
    })
})

app.listen(PORT, HOST, () => {
    console.log(`Portfolio API listening on http://${HOST}:${PORT}`)
})