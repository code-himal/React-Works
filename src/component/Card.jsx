const Card = (props) => {
    console.log(props)
  return (
    <>
    <div>
        <h1>
            <div class="bg-blue-500 p-2 m-2 text-red-500">
                <h1> Product Name: {props.name}</h1>
                <h1> Product Price: {props.price}$</h1>
            </div>
        </h1>
    </div>
    </>
  )
}

export default Card


