import '../assets/Header.css'

interface IHeaderProps {
  cocktailName?: string;
}

export const Header = (props: IHeaderProps) => {
    return (
        <>
        <header>
            <h1>Hey Bartender!</h1>
            <p>Gimme a</p>
        </header>
        </>
    )}