import qs from 'query-string';
import {DateTime} from 'luxon';
import { API_KEY } from '@/config/config';

export async function getServerSideProps(){
  const baseurl = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json`;
  const params = qs.parse('');
  params.key = API_KEY;
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

export default function Home({data}:any) {
  const list = data.boxOfficeResult.dailyBoxOfficeList;
  return (
    <main>
      <h1>오늘의 박스 오피스</h1>
      <ol>
        {list.map((item:any)=>
          <li key= {item.movieCd}>
            {item.rank}위 {item.movieNm}
          </li>
        )}
      </ol>
      {/* <code><pre>{JSON.stringify(list, null, 2)}</pre></code> */}
    </main>
  )
}
