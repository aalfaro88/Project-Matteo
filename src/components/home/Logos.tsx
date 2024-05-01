import Image from 'next/image';
import styles from './Logos.module.css'; 

const Logos = () => {
    return (
        <div className={styles.topcontainer}>
            <div className={styles.logo}>
                <Image
                    src="/images/logo-image-1.png"
                    alt="Logo Image"
                    width={500}
                    height={300}
                    priority
                    className={styles.logoImage}
                />
                <Image
                    src="/images/logo-title-4.png"
                    alt="Logo Title"
                    width={500}
                    height={100}
                    priority
                    className={styles.logoTitle}
                />
            </div>
        </div>
    )
}

export default Logos;
