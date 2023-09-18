import Router from "./router/Router";
import MetaTags from './/pages/MetaTags'
import { useState } from "react";

function App() {
  const [meta] = useState({ 
    title: '처음 만나는 건물 재테크, 카사', 
    description: '지금, 바로, 누구나 5천원부터! 건물에 투자하는 새로운 방법 카사',
    ogUrl: "https://i.ibb.co/fSnXz66/og-image.png"
  })
  
  return (
      <>
        <MetaTags meta={meta} />
        <Router/>
      </>
  );
}

export default App;