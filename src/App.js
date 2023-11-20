import express from "express";
import HelloRoutes from "hello.js";
import Lab5 from "lab5.js";
import CourseRoutes from "kanbas/courses/routes.js";
import ModuleRoutes from "kanbas/courses/modules/routes.js";
import AssignmentRoutes from "kanbas/courses/Assignments/routes.js";
import cors from "cors";
import "dotenv/config";
//import session from "express-session";

const app = express();
app.use(express.json());
app.use(
    cors({
        credentials: true,
        origin: '*'
    })
);
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    next();
});

Lab5(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
HelloRoutes(app);


app.listen(process.env.PORT || 4000);