import { useEffect, useState } from 'react';

import getAllContent from '../content/contentful';

export default function useContentFromContentful (){
    const[content, setContent] = useState([]);
    const[isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchContent () {
            const result = await getAllContent();
            setContent(result);
            setIsLoading(false);
            }
        fetchContent();
    }, []);
    // console.log(content);

    return [content, isLoading];
}