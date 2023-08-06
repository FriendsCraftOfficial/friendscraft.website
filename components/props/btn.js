import styles from "../../styles/components/props/btn.module.scss";

function Btn(props) {
  const { text, icon } = props;
  return (
    <>
      <div className={styles.Btn}>
          <button className={styles.text}>{icon}{text}</button>
      </div>
    </>
  );
}
export default Btn;
