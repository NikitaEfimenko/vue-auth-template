const app = require('./app')
const port = process.env.PORT || 5012

app.listen(port, err => {
    if(err) throw err
    console.log(`server listen on ${port}`)
})