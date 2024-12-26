import { UseContextBox } from "./UseContextBox"
import React, { createContext } from "react"
import { BoxStylePrimary} from './BoxStyle'
import { BoxStyleSecondary} from './BoxStyle'

type ValueProps = {
    BoxStylePrimary: React.CSSProperties;
    BoxStyleSecondary?: React.CSSProperties;
  };
  
  
  const defaultValue: ValueProps = {
    BoxStylePrimary
    
  };

export const StyleContext = createContext<ValueProps>(defaultValue);
export const UseContext = () =>{

    

    return(
        <StyleContext.Provider value={{BoxStylePrimary,BoxStyleSecondary}}>
            <UseContextBox />
        </StyleContext.Provider>
    )
}