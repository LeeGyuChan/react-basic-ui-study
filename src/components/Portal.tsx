import React, { Children } from 'react'
import { createPortal } from 'react-dom'


interface Props {
    selector? :string;
    children? : React.ReactNode;
}

export default function Portal({selector, children}:Props) {

    const rootElement = selector && document.querySelector(selector);

  return (
    <>
        {
            rootElement ? createPortal(children, rootElement) : children
        }
    </>
  )
}
