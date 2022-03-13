import { Card, Tabs } from 'antd';
import logo from '../../assets/kb_top_logo1.png';
import styles from './index.css';
const Heard = ({

}) => (

    <div className={styles.header}>
        <img alt={'logo'} src={logo}  className={styles.logoImg}/>
        <p className={styles.logoTitle}> SSAM 生产数字平台 | Manufacturing Digital Platform</p>
        <p className={styles.line} ></p>
    </div>

);

export default Heard;
