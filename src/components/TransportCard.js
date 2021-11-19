import * as React from 'react';
import { GreenButton, ButtonDisabled, ButtonText } from './Button';
import style from "styled-components";



export function transportCard() {
    return (
        <div className= "card">
            <p className="cardText"> 
                Mikkel Larsen
                <br></br>
                Car color : Blue
            </p>
            <GreenButton><ButtonText> Reserve seat</ButtonText></GreenButton>
            <ButtonDisabled><ButtonText>Cancel seat</ButtonText></ButtonDisabled>
        </div>
    )
}

export default transportCard



