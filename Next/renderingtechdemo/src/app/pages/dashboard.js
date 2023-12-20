
export async function getServerSideProps() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)
    const todo = await res.json()
    return { props: { todo } }
  }

const SSRPage = ( {todo} ) => {
    console.log('render check');
    return (
        <div>
            {!todo ? (<h3>Loading...</h3>):(
                todo.map((item)=> (
                    <p key={item.id}>{item.title}</p>
                ))
            )}
        </div>
    )
}

export default SSRPage
