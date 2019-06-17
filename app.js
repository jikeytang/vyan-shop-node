const express = reuqire('express')
const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

module.exports = app