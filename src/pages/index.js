import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import BookIllustration from '../../static/img/home_page_reading_book.svg';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
        <div className={styles.wikiContainer}>
            <BookIllustration className={styles.bookIllustration} />

            <div className={styles.titleContainer}>
              <p className={styles.textKnowledge}>Knowledge</p>
              <p className={styles.textIs}>is</p>
              <p className={styles.textCool}>cool!</p>
            </div>
        </div>
    </Layout>
  );
}