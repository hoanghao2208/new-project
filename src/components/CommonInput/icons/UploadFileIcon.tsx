import * as React from 'react';
import { memo } from 'react';

function UploadFileIcon() {
    return (
        <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M8 12V2M12.5 6L8 1.5 3.5 6M15 14.5H1"
                stroke="currentColor"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default memo(UploadFileIcon);
