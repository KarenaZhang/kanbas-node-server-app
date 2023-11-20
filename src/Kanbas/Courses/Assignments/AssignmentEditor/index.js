import {React, useEffect} from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../index.css"
import * as client from "../client";
import {
    addAssignment,
    deleteAssignment,
    updateAssignment,
    setAssignment,
    setAssignments,
} from "../assignmentsReducer";

function AssignmentEditor() {
    const { assignmentId } = useParams();
    const { courseId } = useParams();

    useEffect( () => {
        client.findAssignmentsForCourse(courseId)
            .then((assignments) =>
                dispatch(setAssignments(assignments))
            );
    }, [courseId]);
    const handleAddAssignment = () => {
        client.createAssignment(courseId, assignment).then((assignment) => {
            dispatch(addAssignment({...assignment, course: courseId}));
        });
    };
    const handleDeleteAssignment = (assignmentId) => {
        client.deleteAssignment(assignmentId).then((status) => {
            dispatch(deleteAssignment(assignmentId));
        });
    };
    const handleUpdateAssignment = async () => {
        const status = await client.updateAssignment(assignment);
        dispatch(updateAssignment(assignment));
    };
    const assignments = useSelector((state) => state.assignmentsReducer.assignments);
    const assignment = useSelector((state) => state.assignmentsReducer.assignment);
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const handleSave = () => {
        let oldAssignment = assignments.find((assignment) => assignment._id === assignmentId);
        (oldAssignment) ? handleUpdateAssignment() : handleAddAssignment();
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div>
            <h2>Assignment Name</h2>
            <input value={assignment.title}
                   className="form-control mb-2"
                   onChange={(e) => dispatch(setAssignment({ ...assignment, title: e.target.value }))} />
            <textarea className="form-control" onChange={(e) => dispatch(setAssignment({ ...assignment, description: e.target.value }))}>
        This is the Assignment Description</textarea>
            <div className="wd-edit-inputs container">
                <div className="row">
                    <div className="col">
                        <div className="float-end my-2">Points</div>
                    </div>
                    <div className="col">
                        <input type="number" value="100" className="form-control w-50"></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="float-end my-2">Assignment Group</div>
                    </div>
                    <div className="col">
                        <select className="form-control w-50">
                            <option value="Edit">assignment</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="float-end my-2">Display Grade</div>
                </div>
                <div className="col">
                    <select className="form-control w-50">
                        <option value="Edit">Percentage</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="float-end my-2">Choose Submission Type</div>
                </div>
                <div className="col">
                    <select className="form-control w-50">
                        <option value="Edit">Percentage</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="float-end my-2">Options</div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="float-end my-2">Options</div>
                    </div>
                    <div className="col">
                        <input type="checkbox" value="TEXT_ENTRY" name="check-genre" id="checkbox-text-entry" checked />
                        <label form="checkbox-text-entry">Text Entry</label> <br />
                        <input type="checkbox" value="WEBSITE_URL" name="check-genre" id="checkbox-website-url" />
                        <label form="checkbox-website-url">Website URL</label> <br />
                        <input type="checkbox" value="MEDIA_RECORDINGS" name="check-genre" id="checkbox-media-recordings" checked />
                        <label form="checkbox-media-recordings">Media Recordings</label> <br />
                        <input type="checkbox" value="STUDENT_ANNOTATION" name="check-genre" id="checkbox-student-annotation" />
                        <label form="checkbox-student-annotation">Student Annotation</label> <br />
                        <input type="checkbox" value="FILE_UPLOADS" name="check-genre" id="checkbox-file-uploads" />
                        <label form="checkbox-file-uploads">File Uploads</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="float-end my-2">Attempts</div>
                    </div>
                    <div className="col">
                        <select className="form-control w-50">
                            <option value="Edit">Unlimited</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="float-end my-2">Plagiarism Review</div>
                    </div>
                    <div className="col">
                        <select className="form-control w-50">
                            <option value="Edit">None</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="float-end my-2">Group Assignment</div>
                    </div>
                    <div className="col">
                        <input type="checkbox" value="coding" name="group" id="coding" checked />
                        <label form="coding">group assignment</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="float-end my-2">Peer Reviews</div>
                    </div>
                    <div className="col">
                        <input type="checkbox" value="review" name="peer" id="review" checked />
                        <label form="review">Peer Reviews</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="float-end my-2">Assign To</div>
                    </div>
                    <div className="col">
                        <input className="form-control w-50" value="Everyone" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="float-end my-2">Due</div>
                    </div>
                    <div className="col">
                        <input type="date" value="2023-01-01" className="form-control w-50" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="float-end my-2">Available From</div>
                    </div>
                    <div className="col">
                        <input type="date" value="2023-01-01" className="form-control w-50" onChange={(e) => dispatch(setAssignment({ ...assignment, availiableFrom: e.target.value }))}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="float-end my-2">Available To</div>
                    </div>
                    <div className="col">
                        <input type="date" value="2023-01-01" className="form-control w-50" onChange={(e) => dispatch(setAssignment({ ...assignment, avaliableTo: e.target.value }))}/>
                    </div>
                </div>
                <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                      className="btn btn-danger">
                    Cancel
                </Link>
                <button onClick={handleSave} className="btn btn-success me-2">
                    Save
                </button>
            </div>
        </div>
    );
}
export default AssignmentEditor;





