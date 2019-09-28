import * as React from 'react';
import Link from 'next/Link';

const Index = () => {
    return(<div>
        Main page<br/>
        <Link href="/markView">markView</Link>
    </div>);
}

export default Index;
