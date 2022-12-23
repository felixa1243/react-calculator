import React, {FunctionComponent} from "react";
import '../assets/css/wrapper.css'
type Props = {
    children:React.ReactNode
}

export const Wrapper:FunctionComponent<Props> = ({children}) => {
  return(
      <div className={'wrapper'}>
          {children}
      </div>
  )
}