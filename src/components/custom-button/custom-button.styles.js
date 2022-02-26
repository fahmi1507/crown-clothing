import styled, { css } from "styled-components";

export const InvertedButton = css`
    background-color: white;
    color: black;
    border: 1px solid black;
    &:hover {
        background-color: black;
        color: white;
        border: none;
    }
`

export const GoogleSignInStyles = css`
    background-color: #4285f4;
    color: white;
    border: none;

    &:hover {
        background-color: #357ae8;
    }
`

export const ButtonStyles = css`
    background-color: black;
    color: white;
    border: none;

    &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    }
`

const getButtonStyles = props => {
    if (props.isGoogleSignIn) return GoogleSignInStyles;

    return props.inverted ? InvertedButton : ButtonStyles;
}

export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    cursor: pointer;
    ${getButtonStyles}
`

