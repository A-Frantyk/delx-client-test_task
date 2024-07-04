interface ButtonProp {
    type: "submit" | "button"
    text: string
    addStyle: string
}

export const Button = ({type, text, addStyle}: ButtonProp) => {
    return(
        <button className={addStyle} type={type}>{text}</button>
    )
}