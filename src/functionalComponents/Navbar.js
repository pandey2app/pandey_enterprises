import '../style.css';

function Navbar() {
    return (
        <nav>
            <ul>
                <li><a href="index.html" class="active">Home</a></li>
                <li><a href="routes.html">Routes</a></li>
                <li><a href="work.html">Work</a></li>
                <li><a href="partners.html">Partners</a></li>
                <li><a href="contactUs.html">Contact Us</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;