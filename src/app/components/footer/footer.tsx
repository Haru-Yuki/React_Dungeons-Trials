import FooterTitle from "./footer-title/footer-title";
import styles from "../../../styles/components/footer/footer.module.scss";
import {useSelector} from "react-redux";

const Footer = () => {
    const storeFilters = useSelector((state: any) => state.filters);
    const isFiltersSelected = storeFilters.dutyFilter !== '' && storeFilters.expansionFilter;

   return (
       <footer className={styles.footer}>
           {isFiltersSelected ? (
               <FooterTitle />
           ) : (
               <></>
           )}
       </footer>
   )
};

export default Footer;