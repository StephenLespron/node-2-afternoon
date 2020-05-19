const express = require(`express`)
const msgCtrl = require(`./controllers/messages_controller.js`)
const app = express()

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))

const SERVER_PORT = 3001

app.get(`/api/messages`, msgCtrl.readMsg)
app.post(`/api/messages`, msgCtrl.createMsg)
app.put(`/api/messages/:id`, msgCtrl.updateMsg)
app.delete(`/api/messages/:id`, msgCtrl.deleteMsg)

app.listen(SERVER_PORT, () => `Server Port: ${SERVER_PORT}`)