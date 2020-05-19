let messages = []
let id = 0

module.exports = {


createMsg:  (req, res) => {
    const {text, time} = req.body
    messages.push({id, text, time})
    id++
    res.status(200).send(messages)
},

readMsg:    (req, res) => {
    res.status(200).send(messages)
},    
updateMsg:  (req, res) => {
    const {text, time} = req.body
    const updateID = req.params.id

    const index = messages.findIndex(elem => elem.id === +updateID)
    let message = messages[index]

    messages[index] = {
        id: message.id,
        text: text || message.id,
        time: time || message.time
    }

    res.status(200).send(messages)
},
deleteMsg:  (req, res) => {
    const updateID = req.params.id

    const index = messages.findIndex(elem => elem.id === +updateID)

    messages.splice(index, 1)

    res.status(200).send(messages)
 },
}