import Layout from "../../Components/layout";
import fetch from 'isomorphic-unfetch';

const Post = ({show}) => (
  <Layout>
    <h1>{show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
    <img src={props.show.image.medium} />
  </Layout>
);

async function getInitialProps(context) {
  const { id } = context.query;
  const res = await fetch(`https://anapioficeandfire.com/api/houses/${id}`);
  const show = await res.json();
  return { show };
};

Post.getInitialProps = getInitialProps;
export default Post;