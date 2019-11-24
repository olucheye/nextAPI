import Link from 'next/link';

const Nav = () => (

    <div>
        <nav className="navbar">
            <Link href="/"><img src="https://res.cloudinary.com/dulniapvg/image/upload/v1574570196/icons%20-hng/matthew_wpqfbx.png" className="navbar-brand brandImg rounded-circle m-md-5"/></Link>

            <form class="form-inline col-8">
                <input className="form-control mr-sm-2 " type="search" placeholder="Quick Search" aria-label="Search" />
            </form>
        </nav>
    </div>

);

export default Nav