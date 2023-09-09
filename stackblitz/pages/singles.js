import Link from 'next/link';
import { MenuItem } from '../components/Menuitem';

export default function SinglePage() {
  return (
    <div>
      <ul>
        <li>
          <MenuItem name="햄버거" price={2900} />
        </li>
        <li>
          <MenuItem name="치즈버거" price={3400} />
        </li>
        <li>
          <MenuItem name="베이컨버거" price={3700} />
        </li>
        <li>
          <MenuItem name="베이컨치즈버거" price={4900} />
        </li>
      </ul>
      <div>
        <Link href="/start">
          <button>뒤로 가기</button>
        </Link>
      </div>
      <div>
        <Link href="/">
          <button>처음으로</button>
        </Link>
      </div>
    </div>
  );
}
