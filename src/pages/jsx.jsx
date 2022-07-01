import Layout from '../components/Layout'

export default function Jsx() {
  const title = <h1>JSX é um conceito central</h1>

  function subtitle(){
    return <h2>{"Muito legal".toUpperCase()}</h2>
  }

  return (
    <Layout title="Entendendo o JSX">
      <div>
        {title}
        {subtitle}
        <p>
          {JSON.stringify({nome: 'Paulo', idade: 30})}
        </p>
      </div>
    </Layout>
  )
}
