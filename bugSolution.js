```javascript
// pages/about.js
import {useEffect, useState} from 'react';

export default function About(){
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{        
        fetch('/api/hello').then(r=>r.json()).then(data=>{setData(data);setIsLoading(false);});
    },[]);
    return(
        <div>        
            {isLoading ? 'Loading...' : JSON.stringify(data)}    
        </div>
    );
}
```