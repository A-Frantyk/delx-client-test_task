interface TextProps {
    text: string
    addStyle: string
}

export const Text = ({text, addStyle}: TextProps) => {
    return (
        <p className={addStyle}>{text}</p>
    )
}