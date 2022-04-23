import React from 'react'

const NextArrow = ({ className, style, onClick }) => {

  return (
    <div
      className={className}
      style={{
        ...style,
        background: "black",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "4px"
      }}
      onClick={onClick}
    />
  )
}

export default NextArrow