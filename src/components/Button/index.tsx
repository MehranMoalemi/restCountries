
import { classCombiner } from '@/utils/utils';
import React from 'react'
import { ButtonPropsTypes } from './Button';

const Button:React.FC<ButtonPropsTypes> = (props) => {
  const { title, style, onClick, children } = props;

  const className = classCombiner(['flex justify-between items-center gap-4', style])
  
  return (
    <button className={className} onClick={onClick}>
      {title}
      {children}
    </button>
  )
}

export default Button