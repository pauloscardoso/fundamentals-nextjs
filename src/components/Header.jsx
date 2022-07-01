export default function Header(props){
  console.log(props.titulo)
  return (
    <header>
      <h1>{props.titulo}</h1>
    </header>
  )
}
