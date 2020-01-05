import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eius similique et illum repellat provident quasi eos! Voluptatum, dignissimos nostrum!</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>posted by a ninja</div>
                    <div>2nd Sep, 2am</div>
                </div>
            </div>
        </div>

    );
}

export default ProjectDetails;