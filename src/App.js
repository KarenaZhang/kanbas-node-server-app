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

const app = express();
app.use(cors());
CourseRoutes(app);
app.use(express.json());
ModuleRoutes(app);
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