import staticContent from "./Constants";

function Header() {
    return (
        <header aria-label={staticContent.headerAriaLabel} style= {{backgroundColor: '#02647e', width: '100%', height: '20vh'}}></header>
    );

}
export default Header;