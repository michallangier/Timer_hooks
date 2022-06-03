import { useState, useEffect } from 'react'

function App() {

  const [seconds, setSeconds] = useState(0)
  useEffect(() => {
    let interval = setInterval(() => {
      setSeconds(seconds + 1)
    }, 1000)
    return () => {
      clearInterval(interval);
    }
  })


  return (
    <>
      Application works {seconds} [s].
    </>
  );
}

export default App;
