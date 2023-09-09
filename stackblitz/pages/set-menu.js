import Link from 'next/link';
import { MenuItem } from '../components/Menuitem';

export default function SetmenuPage() {
  return (
    <div>
      <ul>
        <li>
          <MenuItem name="햄버거세트" price={3900} />
        </li>
        <li>
          <MenuItem name="치즈버거세트" price={4400} />
        </li>
        <li>
          <MenuItem name="베이컨버거세트" price={4700} />
        </li>
        <li>
          <MenuItem name="베이컨치즈버거세트" price={5900} />
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
