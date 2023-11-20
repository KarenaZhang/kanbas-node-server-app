import React from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import { IoIosCloudUpload, IoIosPlay } from 'react-icons/io';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import { AiFillHome, AiOutlineLineChart, AiOutlineBell, AiOutlinePlus } from 'react-icons/ai';
import { BsFillMegaphoneFill } from 'react-icons/bs';
import ModuleList from "../Modules/ModuleList";

const statusButtons = [
    "Import Existing Content",
    "Import From Commons",
    "Choose Home Page",
    "View Course Stream",
    "New Announcement",
    "New Analytics",
    "View Course Notifications"
];

const statusIcons = [
    <IoIosCloudUpload />,
    <FaCloudDownloadAlt />,
    <AiFillHome />,
    <IoIosPlay />,
    <BsFillMegaphoneFill />,
    <AiOutlineLineChart />,
    <AiOutlineBell />,
];

function Home() {
    return (
        <div className='wd-home-grid'>
            <div className="wd-home-modules">
                <div className="wd-action-buttons">
                    <button className="btn btn-secondary mx-1"><FaEllipsisV /></button>
                    <div className="dropdown mx-1">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <AiOutlinePlus /> Publish All
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                    <button className="btn btn-secondary mx-1">View Progress</button>
                    <button className="btn btn-secondary mx-1">Collapse All</button>
                </div>
                <br />
                <br />
                <ModuleList />
            </div>

            <div className="d-none d-lg-block wd-course-status">
                <h1>Course Status</h1>
                <ul className="wd-no-bullets">
                    {statusButtons.map((buttonText, index) => (
                        <li className="wd-course-status-list" key={index}>
                            <a href="#" className='btn btn-secondary'>
                                {statusIcons[index]} {buttonText}
                            </a>
                        </li>
                    ))}
                </ul>
                <h2>Coming Up</h2>
                <hr />
                <a href="#">View Calendar</a>
                <ul>
                    <li><a href="#">Lecture CS5210.12631.202410 Dec 12 at 11:45am</a></li>
                    <li><a href="#">Lecture CS5210.12631.202410 Dec 23 at 11:45am</a></li>
                    <li><a href="#">CS5610 06 SP23 Lecture Sep 11 at 6pm</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Home;
