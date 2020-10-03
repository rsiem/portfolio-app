import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import { withRouter } from 'next/Router';
// import { useGetData } from '@/actions';
import { useGetPostsById } from '@/actions'
import { useRouter } from 'next/router';
import { useGetUser } from '@/actions/user';

const Portfolio = () => {
  const router = useRouter();
  // const { data: portfolio, error, loading } = useGetData(router.query.id ? `/api/v1/posts/${router.query.id}` : null);
  const { data: portfolio, error, loading } = useGetPostsById(router.query.id);
  const { data: dataU, loading: loadingU } = useGetUser();

  return (
    <BaseLayout user={dataU} loading={loadingU}>
      <BasePage>
        { portfolio &&
          <>
            <h1>I am Portfolio page</h1>
            <h1>{portfolio.title}</h1>
            <p>BODY: {portfolio.body}</p>
            <p>ID: {portfolio.id}</p>
          </>
        }
        { loading &&
          <p>Loading Data...</p>
        }
        { error && 
          <div className="alert alert-danger">{error.message}</div>
        }
      </BasePage>
    </BaseLayout>
  );
}

export default withRouter(Portfolio);
