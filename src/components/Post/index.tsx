import {useParams, useSearchParams} from 'react-router-dom';

export const Post = () => {
  const {id} = useParams();
  const [qs] = useSearchParams();
  console.log(qs);

  return (
    <div>
      Post {id} {qs}
    </div>
  );
};
