import { createServer } from 'node:http'

const PORT = process.env.PORT || 9000;
createServer((req, res) => {
    res.end(`Hello from ${process.env.SERVICE_NAME}`)
})
    .listen(PORT, () => console.log(`Server running on port ${PORT}`))
