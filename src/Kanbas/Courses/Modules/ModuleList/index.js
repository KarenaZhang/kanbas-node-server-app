import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./index.css";
import { FaEllipsisV } from "react-icons/fa";
import { AiFillCheckCircle, AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import React, { useEffect } from "react";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
    setModules,
} from "../modulesReducer";
import * as client from "../client";

function ModuleList() {
    const dispatch = useDispatch();
    const { courseId } = useParams();
    useEffect( () => {
        client.findModulesForCourse(courseId)
            .then((modules) =>
                dispatch(setModules(modules))
            );
    }, [courseId]);
    const handleAddModule = () => {
        client.createModule(courseId, module).then((module) => {
            dispatch(addModule(module));
        });
    };
    const handleDeleteModule = (moduleId) => {
        client.deleteModule(moduleId).then((status) => {
            dispatch(deleteModule(moduleId));
        });
    };
    const handleUpdateModule = async () => {
        const status = await client.updateModule(module);
        dispatch(updateModule(module));
    };
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);

    return (
        <ul className="list-group wd-assignment-table">
            <button onClick={() => handleAddModule()}>Add</button>
            <button onClick={() => handleUpdateModule()}>Update</button>

            <input value={module.name}
                   onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
            />
            <textarea value={module.description}
                      onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
            />

            {
                modules
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li key={index} className="list-group-item">
                            <h4>{module.name}</h4>
                            <FaEllipsisV className="wd-module-icon wd-assignment-ellipsis float-end"/>
                            <AiFillCheckCircle className="wd-module-icon wd-assignment-check float-end"/>
                            <BsFillTrashFill  onClick={() => handleDeleteModule(module._id)}
                                              className="wd-module-icon wd-assignment-trash float-end" />
                            <AiFillEdit onClick={() => dispatch(setModule(module))}
                                        className="wd-module-icon wd-assignment-edit float-end" />

                        </li>
                    ))
            }
        </ul>
    );
}
export default ModuleList;