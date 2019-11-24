import Layout from "../Components/layout";
import Link from "next/link";
import fetch from 'isomorphic-unfetch';


const ifCharacters = ({characters}) => (

    <Layout>

        <div className="container">

        {characters.map(character => (
            <div className="card text-white bg-dark mt-4" key={character.id}>
                <div className="card-header">{character.aliases}</div>
                <div className="card-body">
                    <h4 className="card-title">{character.name}</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    <Link>
                            <a className="btn btn-warning">Read More</a>
                    </Link>
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
    const response = await fetch("https://anapioficeandfire.com/api/characters?page=1&pageSize=11");
    const characters = await response.json();
    console.log(characters);
    return { characters };
}

ifCharacters.getInitialProps = getInitialProps;

export default ifCharacters;