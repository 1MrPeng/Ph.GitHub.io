// src/PhButton/index.tsx

import React from "react";
import { Button, ButtonProps } from "antd";

type IPhButtonProps = Omit<ButtonProps, 'type'>

const PhButton: React.FC<IPhButtonProps> = (props) => {

    const { children, ...rest } = props

    return (
        <Button {...rest} type='primary'>
            {children}
        </Button>
    );
};

export default PhButton;
