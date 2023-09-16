import Link from 'next/link';
import xml2js from 'xml2js';
import { DateTime } from 'luxon';

export default async function BlogPage(){
    const response = await fetch( 'https://medium.com/feed/@mattbarros_42186');
    const text = await response.text();
    const parser = new xml2js.Parser();
    const json = await parser.parseStringPromise( text )
    return <main className="p-4">
        Blog

        <p className='text-center my-4'>블로그의 최신 글</p>

            <ul>
                {json.rss.channel[0].item.map((item:any) => (
                    <li key={item.link[0]} className='p-2 border-b flex flex-row justify-between'>
                        <Link href={item.link[0]} target='_blank'>
                            {item.title}
                        </Link>
                        <span>
                            {DateTime.fromISO(item['atom:updated']).toFormat('yyyy-LL-DD')}
                        </span>
                        </li>
                )) }
            </ul>

            <div className='my-4 text-center'>
                <Link href={json.rss.channel[0].link[0]} target='_blank'>더 보기</Link>
            </div>
    </main>
}