import React, {ChangeEvent, FunctionComponent} from "react";
import {AutoTextSize} from "auto-text-size";
import '../assets/css/screen.css'

type Props = {
    value: string | number,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    onEnterKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const Screen: FunctionComponent<Props> = ({value, onChange, onEnterKeyDown}) => {

    return (
        <AutoTextSize mode={'oneline'}>
            <input className={'screen'}
                   value={value}
                   onChange={onChange}
                   onKeyDown={(e) => {
                       if (e.key === 'Enter') {
                           onEnterKeyDown
                       }
                   }}
            />
        </AutoTextSize>
    )
}