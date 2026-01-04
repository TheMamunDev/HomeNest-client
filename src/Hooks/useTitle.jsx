import { useEffect } from 'react';

function useTitle(title) {
  useEffect(() => {
    document.title = `${title} | HomeNest`;
  }, [title]);
}

export default useTitle;
