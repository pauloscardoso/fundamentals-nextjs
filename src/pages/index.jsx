import Navigate from '../components/Navigate'

export default function Home(){

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      flexWrap: 'wrap',
    }}>
      <Navigate text="Estiloso" destiny="/stylish"/>
      <Navigate text="Exemple" destiny="/exemple" cor="crimson"/>
      <Navigate text="JSX" destiny="/jsx" cor="blueviolet"/>
    </div>
  )
}
