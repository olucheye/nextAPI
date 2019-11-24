import Layout from '../components/layout';
import Link from 'next/link';

const Index = () => (
    <Layout>
        <div className="overlay">
            <div className="col-12 col-md-8 col-lg-6 col-xl-7 mt-4 mt-lg-5 px-5 text-white">
                <h1>The</h1>
                <h1> History of <span className="text-primary">Ice</span> & <span className="text-danger">Fire</span></h1>

                <p className="Lead my-5"> Learn about the Rich, Complicated  and Controversial Characters and Houses featured in the popular Tv series, Game of Thrones, an adaptation of Geroge R.R Martin's book. 
                </p>
            </div>

            <div className="col-8 col-md-12 col-lg-12 col-xl-12 pl-4 button d-md-flex">
                <div className="col-12 col-md-4">
                <Link href="/houses">
                <a className="btn btn-block btn-outline-warning text-warning mb-4 mb-md-0 mb-lg-0 shadow-lg rounded-pill py-2 font-weight-bold">Houses</a>
                </Link>
                </div>

                <div className="col-12 col-md-4">
                <Link href="/characters">
                <a className="btn btn-block btn-outline-success text-success shadow-lg rounded-pill py-2 font-weight-bold">Characters</a>
                </Link>
                </div>
            </div>
        </div>
        

    </Layout>
)

export default Index;