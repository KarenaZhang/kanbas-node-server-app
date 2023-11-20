import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
const MODULES_URL = `${API_BASE}/api/modules`;
const COURSES_URL = `${API_BASE}/api/courses`;
export const findModulesForCourse = async (courseId) => {
    const response = await axios
        .get(`${COURSES_URL}/${courseId}/modules`);
    return response.data;
};
export const createModule = async (courseId, newModule) => {
    const response = await axios.post(
        `${COURSES_URL}/${courseId}/modules`,
        newModule
    );
    return response.data;
};
export const deleteModule = async (moduleId) => {
    const response = await axios
        .delete(`${MODULES_URL}/${moduleId}`);
    return response.data;
};
export const updateModule = async (newModule) => {
    const response = await axios.
    put(`${MODULES_URL}/${newModule._id}`, newModule);
    return response.data;
};
