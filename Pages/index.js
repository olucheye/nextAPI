import Layout from "../Components/layout";
import Link from "next/link";
import fetch from 'isomorphic-unfetch';


const Index = ({houses}) => (

    <Layout>

        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Welcome to DealShop</h1>
                <p className="lead">Here, you'd get a list of the most amazing deals from xxx shop.</p>
            </div>
        </div>

        <div className="container">
        {houses.map(house => (
            <div className="card mt-4" key={house.id}>
                <img 
                        src="" 
                        className="card-img-top" 
                        alt="..."
                />
                <div className="card-body">
                        <h5 className="card-title"> {house.name} </h5>
                        <p className="card-text">{house.region}</p>
                        
                        <Link><a className="btn btn-primary">Go somewhere</a></Link>
                        
                </div>
            </div>
        ))}
        </div>
            
    </Layout>

)

async function getInitialProps() {
    const response = await fetch("https://anapioficeandfire.com/api/houses");
    const houses = await response.json();
    
    return { houses };
}

Index.getInitialProps = getInitialProps;

export default Index;