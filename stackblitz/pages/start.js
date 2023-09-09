import Link from 'next/link';
export default function StartPage() {
  return (
    <div>
      <ul>
        <li>
          <button>추천 메뉴</button>
        </li>
        <li>
          <Link href="/set-menu">
            <button>세트 메뉴</button>
          </Link>
        </li>
        <li>
          <Link href="/singles">
            <button>단품 메뉴</button>
          </Link>
        </li>
        <li>
          <button>디저트</button>
        </li>
      </ul>
      <Link href="/">
        <button>돌아가기</button>
      </Link>
    </div>
  );
}
