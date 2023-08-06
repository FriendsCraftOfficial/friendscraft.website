import Image from "next/image";
import styles from "../styles/pages/main.module.scss";

import fsclogo from "../public/img/fsclogo.png";
import Link from "next/link";
import Btn from "@/components/props/btn";

export default function Home() {
  return (
    <header className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>FriendsCraft Official</div>
        <hr className="hr_mid" />
        <div className={styles.image}>
          <Link
            href="https://www.facebook.com/friendscraft.official"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={fsclogo} className={styles.img} />
          </Link>
        </div>
        <br />
        <Link
            href="/Discord"
            target="_blank"
            rel="noreferrer"
          >
          <Btn icon="👉" text="กดเพื่อ.."/>
        </Link>
      </div>
    </header>
  );
}
