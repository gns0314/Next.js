import qs from 'query-string';
import {DateTime} from 'luxon';
import { useEffect, useState } from 'react';
import { API_KEY } from '../../config/config';
import Link from 'next/link';

export async function getServerSideProps(){
  const baseurl = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json`;
  const params = qs.parse('');
  params.key = '9414a80d051a80bb127cb85cf1728fa4';
  params.targetDt = DateTime.now().minus({day: 1}).toFormat('yyyyLLdd');
  qs.stringify( params );
  const response = await fetch (`${baseurl}?${qs.stringify( params )}`)
  const data = await response.json();
  return {
    props: {
      data,
    }
  }
}

export default async function Home({searchParams:{date}}:any) {
  // 날짜
  let targetDate = DateTime.now();
  if(date){
    targetDate = DateTime.fromFormat( date, 'yyyyLLdd')
  }
  const prevDate = targetDate.minus({day:1});
  const nextDate = targetDate.plus({day:1});
  // 데이터
  console.log(date);
  const baseurl = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json`;
  const params = qs.parse('');
  params.key = API_KEY;
  params.targetDt = targetDate.toFormat('yyyyLLdd');
  const response = await fetch (`${baseurl}?${qs.stringify( params )}`)
  const data = await response.json();
  const list = data.boxOfficeResult.dailyBoxOfficeList;
  // const [list, setList] = useState(data);
  // useEffect(()=>{
  //   fetch('').then(()=>{
  //     setList();
  //   })
  // }, [])
  // useSWR('', fetcher, {fallback: data});
  return (
    <main>
      <h1>오늘의 박스오피스</h1>
      <h2>날짜 : {targetDate.toFormat('yyyy년 LL월 dd일')}</h2>
      {list && (
      <ol>
        {list.map((item:any)=>
          <li key= {item.movieCd}>
            {item.rank}위 {item.movieNm}
          </li>
        )}
      </ol>
      )}
      <Link href={`?date=${prevDate.toFormat('yyyyLLdd')}`}>이전 날짜</Link>
      <Link href={`?date=${nextDate.toFormat('yyyyLLdd')}`}>다음 날짜</Link>
    </main>
  )
}