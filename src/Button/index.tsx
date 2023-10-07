import React, { memo } from 'react';
import './styles/index.less' // 引入样式
export interface ButtonProps {
    /**
     * @description 按钮类型
     * @default "默认值"
     */
    type?: 'primary' | 'default';
    /**
     * @description 按钮文字
     * @default "默认值"
     */
    children?: React.ReactNode;
    /**
     * @description 点击事件
     * @default "默认值"
     */
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

/** 按钮组件 */
const Button: React.FC<ButtonProps> = (props) => {
    const { type = 'default', children, onClick } = props
    return (
        <button
            type='button'
            className={`dumi-btn ${type ? 'dumi-btn-' + type : ''}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default memo(Button);