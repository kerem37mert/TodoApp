// Styles
import styles from "./Header.module.css";

export default function Header() {
    return(
        <header className={ styles.header }>
            <a className={ styles.title } href="#">TodoApp</a>
        </header>
    );
}