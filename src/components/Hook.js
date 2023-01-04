import React,{useState} from 'react';

const Hook = () => {
    const [subscribed, setSubscribed] = useState(false);

  return (
    <div>
       <button onClick={() => setSubscribed(!subscribed)}>
  {subscribed ? 'Unsubscribe' : 'Subscribe'}
        </button>

    </div>
  )
}

export default Hook



