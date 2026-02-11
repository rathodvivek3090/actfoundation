import React, { useState } from 'react';

const ProjectCard = ({ title, content, hiddenContent }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="content-block">
            <h2>{title}</h2>
            {content}
            {isExpanded && (
                <div className="more-content" style={{ display: 'block' }}>
                    {hiddenContent}
                </div>
            )}
            <button
                className="read-more-btn"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                {isExpanded ? 'Read Less' : 'Read More'}
            </button>
        </div>
    );
};

export default ProjectCard;
