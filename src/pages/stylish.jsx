import styles from '../styles/stylish.module.css';
import Layout from '../components/Layout';

export default function Stylish(){

  return (
    <Layout title="Exemplo de CSS modularizado">
      <div className={styles.roxo}>
        <h1>Estilo usando CSS módulos</h1>
      </div>
    </Layout>
  )
}
