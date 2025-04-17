import React from 'react'

const ReusableButton = ({ onClick, label, child, className, isDisabled }) => {
  return (
    <>
    <button
      disabled={isDisabled}
      onClick={onClick}
      className={className}
      title={label}
    >
      { child && child}
      <span>{label}</span>
    </button>
    </>
  )
}

export default ReusableButton