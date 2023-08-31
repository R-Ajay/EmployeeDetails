

const NavBar = () => {

    return (
        <nav class="navbar " role="navigation" aria-label="main navigation">
            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-brand">
                    <a class="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png"  alt="Company Logo"width="112" height="28" />
                    </a>
                </div>
                </div>
                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <a class="button is-primary" href="/">
                                <strong> H O M E</strong>
                            </a>
                            <a class="button is-light" href="/AddUser">
                                A D D    U S E R
                            </a>
                        </div>
                    </div>
                </div>
        </nav>
    );

}

export default NavBar;