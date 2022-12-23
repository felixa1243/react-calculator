import {
    Wrapper
} from './components/Wrapper'
import {Screen} from "./components/Screen";
import {ButtonBox} from "./components/ButtonBox";
import {Button} from "./components/Button";
import {
    buttonValues
} from "./data/buttonValues";
import {useState} from "react";

function App() {
    let [num, setNum] = useState<string>('')

    return (
        <Wrapper>
            <Screen value={num}
                    onChange={(e) => {
                        if (e.target.value.match(/[+-\/*]|\d/)) {
                            setNum(e.target.value)
                        }
                    }
                    }
                    onEnterKeyDown={(e) => {
                        //
                    }}
            />
            <ButtonBox>
                {
                    buttonValues.flat().map((btn, i) => {
                        return (
                            <Button
                                key={i}
                                className={btn === '=' ? 'equals' : ''} onClick={(e) => {
                                e.preventDefault()
                                const value = e.currentTarget.innerHTML
                                if (String(btn).match(/[+-\/*]|\d/)) {
                                    setNum(num + value)
                                    // if (num[num.length - 1]) {
                                    //     if (String(btn).match(/[+-\/*]/)) {
                                    //         setNum(num.substring(0, num.length - 2) + btn)
                                    //     }
                                    // }
                                }
                                if (String(btn).match(/=/)) {
                                    const res = eval(num)
                                    setNum(res)
                                }
                                if (String(btn).match(/del/)) {
                                    if (num.length >= 1) {
                                        setNum(num.substring(0, num.length - 1))
                                    } else {
                                        setNum('')
                                    }
                                }
                            }}
                                value={btn}
                            />
                        )
                    })
                }
            </ButtonBox>
        </Wrapper>
    )
}

export default App
