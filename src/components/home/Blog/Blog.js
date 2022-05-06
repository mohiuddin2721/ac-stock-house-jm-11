import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Blog.css';

const Blog = () => {
    return (
        <div className='container mt-5'>
            <div>
                <CardGroup className='container mt-5'>
                    <Card className='m-4' border="primary">
                        <Card.Footer className='border question'>
                            <Card.Title className='fs-6'>Difference between javascript and nodejs?</Card.Title>
                        </Card.Footer>
                        <Card.Body className='border'>
                            <Card.Text>
                                Both of these are used for programming. But there is a significant difference between Node.JS and Javascript.
                                <br />
                                <span className='p-2 fw-bold text-info'>NODE JS</span>
                                <br />
                                The Node.JS, on the other hand, isn't capable enough to add various HTML tags. It lets us use JS on the server-side as well since it works on the server-side. Inside Node.JS, we have the JS engine known as V8. It helps in parsing and running the JS code.
                                <br />
                                <span className='p-2 fw-bold text-info'>JAVASCRIPT</span>
                                <br />
                                It is utilised on the web page's client-side. The JS can easily add HTML and even play with the DOM. We can only run JS on browsers. It runs mainly on the client-side. Thus, it is used in the development of the front end.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='m-4' border="primary">
                        <Card.Footer className='border question'>
                            <Card.Title className='fs-6'>When should you use nodejs and when should you use mongodb?</Card.Title>
                        </Card.Footer>
                        <Card.Body className='border'>
                            <Card.Text>
                            Real time web application node js is the best choice. Some prominent things for which <span className='fw-bold text-info'>Node.js</span> can be used are as follows:
                            <br />
                            1. Developing Data Streaming Applications.
                            2. Developing Microservice.
                            3. Suitable For IoT Applications.
                            4. Scalable Application Development.
                            5. Communicate With API.
                            6. Node.js can create a single-page application (SPA)
                            <br />
                            <span className='fw-bold text-info'>Mongo DB</span> is a No SQL database which I've found quite easy to use. Recently I had to develop a simple application which needed to collect some data using HTTP requests and store some results after processing the data, and I tried using MongoDB. From this experience I found it much nicer to use than traditional relational databases and since I'm a developer, and not a DBA, my work was greatly simplified. Still, sometimes I feel unsure when should I use MongoDB instead of a traditional relational database, like SQL Server or MySQL. 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
            <div>
                <CardGroup className='container mt-5'>
                    <Card className='m-4' border="primary">
                        <Card.Footer className='border question'>
                            <Card.Title className='fs-6'>Differences between sql and no-sql databases?</Card.Title>
                        </Card.Footer>
                        <Card.Body className='border'>
                            <Card.Text>
                                SQL or the Structured Query Language is the most common and popular programming language for the relational database management system.NoSQL database provides a mechanism for storage and retrieval of data that is modelled other than tabular form.
                                <br />
                                <span className='p-2 fw-bold text-info'>SQL</span>
                                <br />
                                SQL was developed in the year 1970 for flat file storage problems. SQL databases support Structured Query Languages. Supports table based data type. Vertically Scalable. SQL supports predefined schemas, making the storage of data restrictive to structured type only. SQL is relational.
                                <br />
                                <span className='p-2 fw-bold text-info'>NoSQL</span>
                                <br />
                                NoSQL was developed in 2000 as an enhanced version for SQL databases for unstructured and semi-structured data. NonSQL does not have any declarative query language. Supports document oriented, graph databases, key value pair-based. Horizontally Scalable. Nosql supports dynamic schemas to store different forms of data.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='m-4' border="primary">
                        <Card.Footer className='border question'>
                            <Card.Title className='fs-6'>What is the purpose of jwt and how does it work?</Card.Title>
                        </Card.Footer>
                        <Card.Body className='border'>
                            <Card.Text>
                            JSON is less verbose than XML, so when it is encoded, a JWT is smaller than a SAML token. This makes JWT a good choice to be passed in HTML and HTTP environments. WTs can use a public/private key pair in the form of an X.509 certificate for signing. A JWT can also be symmetrically signed by a shared secret using the HMAC algorithm. JWT is used at internet scale. This means that it is easier to process on user's devices, especially mobile.
                            <br />
                            A user logs in to an application with a username and password, or otherwise proves her identity. The server confirms her identity and sends back an access token containing a reference to her identity. The client then includes this access token with every request to the server. For protected routes, REST API authentication middleware asserts the presence of a valid access token. The server can further use the identity asserted by the validated token to implement more granular permissions, such as acting on resources belonging to that particular user.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
        </div>
    );
};

export default Blog;