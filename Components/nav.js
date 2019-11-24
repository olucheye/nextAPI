import Link from 'next/link';

const Nav = () => (

    <div>
        <nav className="navbar navbar-light bg-light">
            <Link href="/"><a className="navbar-brand">DEALSHOP</a></Link>
           

            <div>
                <form className="form-inline my-2 my-lg-0">
                    <input 
                        className="form-control mr-sm-2"
                        type="search" placeholder="Search"
                        aria-label="Search"
                    />
                    <button 
                        className="btn btn-outline-success my-2 my-sm-0" 
                        type="submit">
                            Search
                    </button>
                </form>
                
            </div>
        </nav>
    </div>

);

export default Nav