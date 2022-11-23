import React from 'react'
import ButtonView from './new-button-view'

export type ButtonProps = {
  callback: () => void
  title: string
  icon?: React.ReactNode
  bgColor?: 'blue' | 'white' | 'aqua' | 'green'
}

const NewButton: React.FC<ButtonProps> = ({ title, callback, bgColor, icon }) => {
  return (
    <ButtonView
      callback={callback}
      title={title}
      bgColor={bgColor}
      icon={icon}
    />
  )
}

export default NewButton
