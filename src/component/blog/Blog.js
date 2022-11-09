import React from 'react';

const Blog = () => {
    return (
        <div>
            <section className="bg-sky-500 dark:text-gray-100">
<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
	<h2 className="text-2xl mb-5 font-semibold sm:text-4xl">All Questions Answer.</h2>
	<div className="space-y-4">
		<details className="w-full border rounded-lg">
			<summary className="px-4 py-6 focus:outline-none
                focus-visible:ring-violet-400">Difference between SQL and NoSQL?</summary>
			<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-200">
           <span className='text-2xl underline'>SQL:</span>SQL is the programming language used to interface with relational databases.
             <br></br>(Relational databases model data as records in rows and tables with logical links between them)
                 </p>
			<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-200">
           <span className='text-2xl underline'>NOSQL:</span>NoSQL is a class of DBMs that are non-relational and generally do not use SQL.
                 </p>
		</details>
		<details className="w-full border rounded-lg">
			<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
            What is JWT, and how does it work??</summary>
			<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-200">
            <span className='text-2xl underline'>Answer-1:</span> JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server.
             Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
       <br></br>
             <span className='text-2xl underline'>Answer-2:</span>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token,
              how long it is valid for, or what permissions the client has been granted.
             </p>
		</details>
		<details className="w-full border rounded-lg">
			<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
            What is the difference between javascript and NodeJS?</summary>
			<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-200">
            <span className='text-2xl underline'>Javascript:</span> javascript is a programming language.
            <br></br>
            <span className='text-2xl underline'>NodeJS:</span> NodeJS is a JavaScript Runtime.
                 </p>
			</details>
		<details className="w-full border rounded-lg">
			<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
            How does NodeJS handle multiple requests at the same time?</summary>
			<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-200">
            <span className='text-2xl underline'>Answer:</span>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
              EventLoop is the listener for the EventQueue
                 </p>
			</details>
		</div>
	</div>
</section>
        </div>
    );
};

export default Blog;