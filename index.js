import express from "express"
import * as dotenv from 'dotenv' 
import AuhtRoutes from "./routes/auth.js"

const app = express()
dotenv.config()

app.use(express.json())
app.use(AuhtRoutes)

const PORT = process.env.PORT || 4000
app.listen(PORT, ()=> console.log(`server is connect port ${PORT}`))