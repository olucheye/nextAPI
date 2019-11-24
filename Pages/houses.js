import Layout from "../Components/layout";
import Link from "next/link";
import fetch from 'isomorphic-unfetch';


const ifHouse = ({houses}) => (

    <Layout>

        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Welcome to Westeros</h1>
                <p className="lead">Providing you with detailed information about the story of Ice & Fire.</p>
            </div>
        </div>

        <div className="container">
        {houses.map(house => (
            <div className="d-lg-flex flex-row col-12 list">
            <div className="card text-white bg-dark mt-4 col-12 col-lg-5" key={house.id}>
               <div className="card-header">{house.region}</div>
               <div className="card-body">
                   <h4 className="card-title">{house.name}</h4>
                   <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                   </p>
                   <Link href="/p/[id]" as={`/p/${house.id}`}>
                           <a className="btn btn-warning">Read More</a>
                   </Link>
               </div>
           </div>
           </div>
        ))}
        </div>
            
        <div>
        <ul className="pagination justify-content-center mt-5">
                <li className="page-item mr-5">
                <a className="page-link">Previous &laquo;</a>
                </li>
                
                <li className="page-item ml-5">
                <a className="page-link"> Next &raquo;</a>
                </li>
        </ul>
        </div>

    </Layout>

)

async function getInitialProps() {
    const response = await fetch("https://anapioficeandfire.com/api/houses?page=1&pageSize=50");
    const houses = await response.json();
    console.log(houses);
    return { houses };
}

ifHouse.getInitialProps = getInitialProps;

export default ifHouse;