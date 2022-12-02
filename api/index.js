const breeds = require('./breeds.json')

const app = require('express')()

app.get('/api', (req, res)=> {
    const {query} = req
    
    try {
        const breed = query.search

        if (breed) {
          console.log()
          res.send(breeds.find((b) => b.name === breed))
        }
        res.send(breeds.map((b) => ({ name: b })))
    }catch(error) {
        console.log('error', error)
    }
    
})

module.exports = app