import {useParams, useSearchParams, Outlet} from 'react-router-dom';

export const Post = () => {
  const {id} = useParams();
  const [qs] = useSearchParams();

  return (
    <div>
      Post {id} {qs}
      <Outlet />
    </div>
  );
};
