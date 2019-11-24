import Layout from "../Components/layout";
import Link from "next/link";
import fetch from 'isomorphic-unfetch';


const About = ({houses}) => (

    <Layout>

        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">About Page</h1>
                <p className="lead">About this Project</p>
            </div>
        </div>
        
    </Layout>


)


export default About;