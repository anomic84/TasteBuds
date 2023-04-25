import React from 'react';

import "./styStoryReel.css";

function StoryReel({ image, profileSrc, title }) {
    return (
        <div style={{ backgroundImage: `url(${image})` }} className="storyReel">
            <Story image={image}
                profileSrc={profileSrc}
                title={title} />
            <Story image={image}
                profileSrc={profileSrc}
                title={title} />
            <Story image={image}
                profileSrc={profileSrc}
                title={title} />
            <Story image={image}
                profileSrc={profileSrc}
                title={title} />

            <Story image={image}
                profileSrc={profileSrc}
                title={title} />
            <Story image={image}
                profileSrc={profileSrc}
                title={title} />


        </div>
    );
};
export default StoryReel;