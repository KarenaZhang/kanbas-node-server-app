import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./index.css";
import { FaEllipsisV } from "react-icons/fa";
import { AiFillCheckCircle, AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
    setAssignment,
    addAssignment,
    deleteAssignment,
    updateAssignment,
    setAssignments,
} from "./assignmentsReducer";
import DeleteConfirm from "./deleteConfirm.js";
import * as client from "./client";

function Assignments() {
    const { courseId } = useParams();
    useEffect( () => {
        client.findAssignmentsForCourse(courseId)
            .then((assignments) =>
                dispatch(setAssignments(assignments))
            );
    }, [courseId]);
    const handleAddAssignment = () => {
        client.createAssignment(courseId, assignment).then((assignment) => {
            dispatch(addAssignment(assignment));
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
    const [showDeleteConfirm, setShowDeleteConfirm] = useState({open: false});
    const navigate = useNavigate();
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);

    const setShowDeleteConfirmTrue = (assignment) => {
         dispatch(setAssignment(assignment));
         setShowDeleteConfirm({open: true});
    }

    const navigateToEdit = () => { navigate(`/Kanbas/Courses/${courseId}/Assignments/Edit`) };
    return (
        <div>
            <h2>Assignments for course {courseId}</h2>
            <DeleteConfirm state={showDeleteConfirm} setOpen={setShowDeleteConfirm} handleDeleteAssignment={handleDeleteAssignment}/>
            <table className="wd-table-header">
                <tbody>
                    <tr>
                        <td><input className="form-control w-50" placeholder="Search "></input></td>
                        <td>
                            <button className="btn btn-secondary float-end"><FaEllipsisV /></button>
                            <button className="btn btn-danger float-end" onClick={() => {
                                dispatch(setAssignment({ ...assignment, title: "New Assignment", course: courseId }));
                                navigateToEdit();
                            }

                            }><AiOutlinePlus />Assignment</button>
                            <button className="btn btn-secondary float-end"><AiOutlinePlus />Group</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div className="list-group wd-assignment-table">
                <h2>assignment
                    <FaEllipsisV className="float-end wd-assignment-header-ellipsis" />
                    <AiOutlinePlus onClick={() => navigateToEdit()} className="float-end wd-clickable" />
                    <span className="wd-total border border-secondary rounded-pill p-1 float-end">40% of Total</span>
                </h2>
                {courseAssignments.map((assignment) => (
                    <div
                        key={assignment._id}
                        className="list-group-item">
                        <h4>{assignment.title}</h4>Multiple Models
                        <FaEllipsisV className="wd-assignment-ellipsis float-end" />
                        <AiFillCheckCircle className="wd-assignment-check float-end" />
                        <BsFillTrashFill onClick={() => setShowDeleteConfirmTrue(assignment)}
                                        className=" wd-assignment-trash float-end" />
                        <AiFillEdit onClick={() => navigate(`/Kanbas/Courses/${courseId}/Assignments/Edit`)}
                                    className=" wd-assignment-edit float-end" />
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Assignments;