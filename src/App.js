import "dotenv/config";
// import Labs from "./Labs";
// import HelloWorld from "./Labs/a3/HelloWorld";
// import Kanbas from "./Kanbas";
// import {HashRouter} from "react-router-dom";
// import {Routes, Route, Navigate} from "react-router";
import express from 'express';
import Hello from "./Kanbas/hello.js";
import Lab5 from "./Labs/lab5.js";
import cors from "cors";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/Courses/Modules/routes.js";
import session from "express-session";
import UserRoutes from "../users/routes.js";

import mongoose from "mongoose";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/kanbas'

mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(
    cors({
        credentials: true,
        origin: process.env.FRONTEND_URL
    })
);
const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: true,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
    };
}
app.use(session(sessionOptions));


app.use((req, res, next) => {
    const allowedOrigins = ["http://localhost:3000", "https://dancing-cannoli-8404bf.netlify.app"];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.header("Access-Control-Allow-Origin", origin);
    }
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

app.use(express.json())
CourseRoutes(app);
// app.use(express.json());
ModuleRoutes(app);
UserRoutes(app);
Lab5(app);
Hello(app);
app.listen(4000);


// function App() {
//     return (
//         <HashRouter>
//             <Routes>
//                 <Route path="/"         element={<Navigate to="/Kanbas" />} />
//                 <Route path="/hello"    element={<HelloWorld />} />
//                 <Route path="/labs/*"   element={<Labs />} />
//                 <Route path="/Kanbas/*" element={<Kanbas />} />
//             </Routes>
//         </HashRouter>
//     );
// }
// export default App;