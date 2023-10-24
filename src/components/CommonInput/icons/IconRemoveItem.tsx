import React, { memo } from 'react';

const IconRemoveItem = memo(props => {
    return (
        <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 15A7 7 0 108 1a7 7 0 000 14zm2.854-9.854a.5.5 0 010 .708L8.707 8l2.147 2.146a.5.5 0 11-.707.707L8 8.707l-2.146 2.146a.5.5 0 11-.708-.707L7.293 8 5.146 5.854a.5.5 0 01.708-.708L8 7.293l2.146-2.147a.5.5 0 01.708 0z"
                fill="currentColor"
            />
        </svg>
    );
});
IconRemoveItem.displayName = 'IconRemoveItem';

export default IconRemoveItem;
