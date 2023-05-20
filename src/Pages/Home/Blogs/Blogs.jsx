

const Blogs = () => {
    return (
        <div className=" p-12">
            <h1 className="text-center text-orange-700 font-bold text-3xl mb-5 underline">Important Question:</h1>
            <div className="pb-3">
                <h1 className="text-2xl font-semibold pb-5">
                    <span className=" text-purple-800">Question-1</span>:
                    What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </h1>
                <p className="text-lg">
                    <span className="text-xl font-semibold">Ans:</span> A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times. The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources.
                    <br />
                    Access token and refresh token should not be stored in the local/session storage, because they are not a place for any sensitive data.

                </p>
            </div>
            <div className="pb-3">
                <h1 className="text-2xl font-semibold pb-5">
                    <span className=" text-purple-800">Question-2</span>: Compare SQL and NoSQL databases?
                </h1>
                <p className="text-lg">
                    <span className="text-xl font-semibold">Ans:</span> SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                </p>
            </div>
            <div className="pb-3">
                <h1 className="text-2xl font-semibold pb-5">
                    <span className=" text-purple-800">Question-3</span>: What is express js? What is Nest JS (google it)?
                </h1>
                <p className="text-lg">
                    <span className="text-xl font-semibold">Ans:</span> Express Js- Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. <br />
                    Nest.Js- Nest. js is one of the fastest-growing Node. js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node. js.
                </p>
            </div>
            <div className="pb-3">
                <h1 className="text-2xl font-semibold pb-5">
                    <span className=" text-purple-800">Question-4</span>: What is MongoDB aggregate and how does it work?
                </h1>
                <p className="text-lg">
                    <span className="text-xl font-semibold">Ans:</span> Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.
                </p>
            </div>



        </div>
    );
};

export default Blogs;