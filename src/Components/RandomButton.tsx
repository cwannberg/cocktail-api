import '../assets/Button.css'

interface RandomButtonProps {
    onClick: () => void;
}
export const RandomButton = ({onClick}: RandomButtonProps) => {
    return (
        <button onClick={onClick}>Nah.. another one</button>
    )
}