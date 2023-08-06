import styles from "../../styles/components/layouts/Header.module.scss";
export default function Header() {
  return (
    <div className={styles.beta_version}>
      ⚠️{" "}
      {/* <a
        href="https://portfolio.ppekkungz.online"
        target="_blank"
        rel="noreferrer"
      > */}
        เว็ปอยู่ในช่วงพัฒนา
      {/* </a>{" "} */}
    </div>
  );
}