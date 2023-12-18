/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery, type UseQueryOptions, useInfiniteQuery, type UseInfiniteQueryOptions } from "@tanstack/vue-query";
import { useClient } from '../useClient';

export default function useDastchainDex() {
  const client = useClient();
  const QueryParams = ( options: any) => {
    const key = { type: 'QueryParams',  };    
    return useQuery([key], () => {
      return  client.DastchainDex.query.queryParams().then( res => res.data );
    }, options);
  }
  
  const QuerySellOrderBook = (index: string,  options: any) => {
    const key = { type: 'QuerySellOrderBook',  index };    
    return useQuery([key], () => {
      const { index } = key
      return  client.DastchainDex.query.querySellOrderBook(index).then( res => res.data );
    }, options);
  }
  
  const QuerySellOrderBookAll = (query: any, options: any, perPage: number) => {
    const key = { type: 'QuerySellOrderBookAll', query };    
    return useInfiniteQuery([key], ({pageParam = 1}: { pageParam?: number}) => {
      const {query } = key

      query['pagination.limit']=perPage;
      query['pagination.offset']= (pageParam-1)*perPage;
      query['pagination.count_total']= true;
      return  client.DastchainDex.query.querySellOrderBookAll(query ?? undefined).then( res => ({...res.data,pageParam}) );
    }, {...options,
      getNextPageParam: (lastPage, allPages) => { if ((lastPage.pagination?.total ?? 0) >((lastPage.pageParam ?? 0) * perPage)) {return lastPage.pageParam+1 } else {return undefined}},
      getPreviousPageParam: (firstPage, allPages) => { if (firstPage.pageParam==1) { return undefined } else { return firstPage.pageParam-1}}
    }
    );
  }
  
  const QueryBuyOrderBook = (index: string,  options: any) => {
    const key = { type: 'QueryBuyOrderBook',  index };    
    return useQuery([key], () => {
      const { index } = key
      return  client.DastchainDex.query.queryBuyOrderBook(index).then( res => res.data );
    }, options);
  }
  
  const QueryBuyOrderBookAll = (query: any, options: any, perPage: number) => {
    const key = { type: 'QueryBuyOrderBookAll', query };    
    return useInfiniteQuery([key], ({pageParam = 1}: { pageParam?: number}) => {
      const {query } = key

      query['pagination.limit']=perPage;
      query['pagination.offset']= (pageParam-1)*perPage;
      query['pagination.count_total']= true;
      return  client.DastchainDex.query.queryBuyOrderBookAll(query ?? undefined).then( res => ({...res.data,pageParam}) );
    }, {...options,
      getNextPageParam: (lastPage, allPages) => { if ((lastPage.pagination?.total ?? 0) >((lastPage.pageParam ?? 0) * perPage)) {return lastPage.pageParam+1 } else {return undefined}},
      getPreviousPageParam: (firstPage, allPages) => { if (firstPage.pageParam==1) { return undefined } else { return firstPage.pageParam-1}}
    }
    );
  }
  
  const QueryDenomTrace = (index: string,  options: any) => {
    const key = { type: 'QueryDenomTrace',  index };    
    return useQuery([key], () => {
      const { index } = key
      return  client.DastchainDex.query.queryDenomTrace(index).then( res => res.data );
    }, options);
  }
  
  const QueryDenomTraceAll = (query: any, options: any, perPage: number) => {
    const key = { type: 'QueryDenomTraceAll', query };    
    return useInfiniteQuery([key], ({pageParam = 1}: { pageParam?: number}) => {
      const {query } = key

      query['pagination.limit']=perPage;
      query['pagination.offset']= (pageParam-1)*perPage;
      query['pagination.count_total']= true;
      return  client.DastchainDex.query.queryDenomTraceAll(query ?? undefined).then( res => ({...res.data,pageParam}) );
    }, {...options,
      getNextPageParam: (lastPage, allPages) => { if ((lastPage.pagination?.total ?? 0) >((lastPage.pageParam ?? 0) * perPage)) {return lastPage.pageParam+1 } else {return undefined}},
      getPreviousPageParam: (firstPage, allPages) => { if (firstPage.pageParam==1) { return undefined } else { return firstPage.pageParam-1}}
    }
    );
  }
  
  return {QueryParams,QuerySellOrderBook,QuerySellOrderBookAll,QueryBuyOrderBook,QueryBuyOrderBookAll,QueryDenomTrace,QueryDenomTraceAll,
  }
}
