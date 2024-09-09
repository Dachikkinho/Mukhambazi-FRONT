import useLockOrientation from '@/app/hooks/useLockOrientation';
import React from 'react';

const LandscapeComponent: React.FC = () => {
    useLockOrientation();

    return (
        <div>
            <h1>Chakrulos is locked to landscape mode!</h1>
        </div>
    );
};

export default LandscapeComponent;
