import FooterTitle from "./footer-title/footer-title";
import styles from "../../../styles/components/footer/footer.module.scss";

const Footer = () => {
   return (
       <footer className={styles.footer}>
          <FooterTitle />
       </footer>
   )
};

export default Footer;