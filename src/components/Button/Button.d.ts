import React from 'react'

export interface ButtonPropsTypes {
  title: string;
  style?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children:React.Element
}
