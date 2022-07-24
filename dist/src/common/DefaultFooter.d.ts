import React from 'react';
export declare type DefaultFooterProps = {
    onDone?: () => any;
    onCancel?: () => any;
    doneText: string;
    cancelText: string;
};
declare const DefaultFooter: React.FC<DefaultFooterProps>;
export { DefaultFooter };
