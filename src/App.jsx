

import Card from './component/Card.jsx'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Card name="Iphone" price={100} />
      <Card name="Samsung" price={200} />
    </>
  )
}

export default App


//ecommerce card using tailwind css , 5,6 dynamically cards in one page through props, button for dark and white theme
//tailwind atleast 20 tags for padding justify , use it on mobile keyframes 