// import { useEffect, useState } from 'react';

// export const useGetData = (url) => {
//   const [data, setData] = useState();
//   const [error, setError] = useState();
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchData() {
//       const res = await fetch(url);
//       const result = await res.json();

//       if (res.status !== 200) {
//         setError(result);
//       } else {
//         setData(result);
//       }
//       setLoading(false);
//     }

//     // if url present, then fetch data
//     url && fetchData();
//   }, [url])

//   return {data, error, loading};
// }

import useSWR from 'swr';

const fetcher = (url) =>
  fetch(url).then(async res => {
    const result = await res.json();

    if (res.status !== 200) {
      return Promise.reject(result);
    } else {
      return result;
    }
});

export const useGetPosts = () => {
  const { data, error, ...rest } = useSWR('/api/v1/posts', fetcher);

  return { data, error, loading: !data && !error, ...rest }
}

export const useGetPostsById = (id) => {
  const { data, error, ...rest } = useSWR(id ? `/api/v1/posts/${id}` : null, fetcher);

  return { data, error, loading: !data && !error, ...rest }
}
