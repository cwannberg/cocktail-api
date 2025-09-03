import '../assets/Header.css'

interface IHeaderProps {
  cocktailName?: string;
}

export const Header = (props: IHeaderProps) => {
    return (
        <>
        <header>
            <p>Hey Bartender! Gimme a</p>
            <h1>{props.cocktailName}</h1>
          </header>
        </>
    )}