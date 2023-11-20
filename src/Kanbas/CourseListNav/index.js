import {Link} from "react-router-dom";
import courses from "../Database/courses.json"

function CourseListNav() {
    const courseList = courses.map(course => [course["_id"], course["name"]]);
    return (
        <div className="list-group" style={{ width: 150 }}>
            {courseList.map((course, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/Courses/${course[0]}/`}
                    className={`list-group-item`}>
                    {course[0]} {course[1]}
                </Link>
            ))}
        </div>
    );
}
export default CourseListNav;