import React from "react";
import '../assets/css/buttonbox.css'
type Props = {
    children:React.ReactNode
}
export const ButtonBox:React.FunctionComponent<Props> = ({children}) => {
  return (
      <div className={'buttonBox'}>
          {children}
      </div>
  )
}