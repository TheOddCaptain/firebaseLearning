import React from 'react'

const ProjectSummary = ({project}) => {
    return (
        <div className="project-list section">
            <div className="card z-depth-0 project summary">
            <div className="card-content black-text text-darke-3">
            <span className="card-title">{project.title}</span>
                
                <p>Posted by some ninja</p>
                <p className="grey-text">3rd Sep, 2am</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectSummary;