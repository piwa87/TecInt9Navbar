import * as React from 'react';
import { Button, ButtonDisabled, ButtonText } from './Button';
import styles from "styled-components";



export function transportCard() {
    return (
        <div className= "card">
            <p className="cardText"> 
                Mikkel Larsen
                Car color : Blue
            </p>
            <Button><ButtonText> Reserve seat</ButtonText></Button>
            <ButtonDisabled><ButtonText>Cancel seat</ButtonText></ButtonDisabled>
        </div>
    )
}

export default transportCard



