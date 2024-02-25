import staticContent from "./Constants";

function Footer() {
    return (
        <footer aria-label={staticContent?.footerAriaLabel} style= {{backgroundColor: '#02647e', width: '100%', height: '20vh'}}></footer>
    );

}
export default Footer;