```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js
import {useEffect, useState} from 'react';

export default function About(){
    const [data, setData] = useState(null);
    useEffect(()=>{        
        fetch('/api/hello').then(r=>r.json()).then(setData);
    },[]);
    return(
        <div>        
            {JSON.stringify(data)}    
        </div>
    );
}
```
```javascript
//pages/api/hello.js

export default function handler(req, res) {
  res.status(200).json({ text: 'Hello' });
}
```