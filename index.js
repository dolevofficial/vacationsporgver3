//imports
const express = require("express")
const cors = require("cors")
const path = require("path")

const app = express()


// const whitelist = ['http://localhost:3000', 'http://localhost:8080', 'https://vacations-dolev.herokuapp.com/']
// const corsOptions = {
//     origin:function (origin, callback){
//         console.log("** Origin of request " + origin)
//         if (whitelist.indexOf(origin) !== -1 || !origin){
//             console.log("Origin acceptable")
//             callback(null , true)
//         }else {
//             console.log("Origin rejected")
//             callback(new Error('Not allowed bt CORS'))
//         }
//     }
// }



// mw
app.use(cors())
app.use(express.json())
app.use("/users", require("./routes/users"))
app.use("/vacations", require("./routes/vacations"))
app.use("/orders", require("./routes/orders"))
app.use("/search", require("./routes/search"))
app.use("/images", express.static("images"))

// Serve static assets if in porduction
if (process.env.NODE_ENV === "production") {
    // Set static folder
    app.use(express.static(path.join(__dirname, "client/build")))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build'
            , 'index.html'))
    })

}

// listiner
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`up and running on ${port}`))


