import React from 'react'
import { useEffect,useState } from 'react'
import { getNews } from '../service/api';
import Article from './Article';
import InfiniteScroll from "react-infinite-scroll-component"
function Articles() {
    const [news,setNews]=useState();
    const [page,setPage]=useState(0);
    useEffect(()=>{
        const dailyNews=async()=>{
            let response=await getNews(page);
            console.log(new Set([...news,...response.data]));
            setNews([...new Set([...news,...response.data])])
        }
        dailyNews();
    },[page])
    
   
  return (
   <InfiniteScroll
   dataLength={news.length}
   next={()=>setPage(page=>page+1)}
   hasMore={true}>{
    news.map(article=>(
        <Article article={article}/>
    ))
   }</InfiniteScroll>
  )
}

export default Articles
