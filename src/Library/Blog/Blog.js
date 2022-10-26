import React from 'react';
import { Card } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            <Card className='p-3 mb-3'>
                <h3>1. What is cors?</h3>
                <p>Ans: Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.</p>
            </Card>
            <Card className='p-3 mb-3'>
                <h3>2. Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p>Ans: Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
            </Card>
            <Card className='p-3 mb-3'>
                <h3>3. How does the private route work?</h3>
                <p>Ans: The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
            </Card>
            <Card className='p-3 mb-3'>
                <h3>4. What is Node? How does Node work?</h3>
                <p>Ans: Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.</p>
            </Card>
        </div>
    );
};

export default Blog;