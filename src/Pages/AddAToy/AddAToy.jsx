

const AddAToy = () => {
    return (
        <div>
            <form>
                <div className=" hero-content grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">TOY URL</span>
                        </label>
                        <input type="text"  placeholder="Toy URL" name="url" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <input type="text"  placeholder=" Toy Name" name="name" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"> Seller Name</span>
                        </label>
                        <input type="text"  placeholder="Name" name="seller" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type="text" placeholder="email"  name="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sub-Category</span>
                        </label>
                        <input type="text" name="category" placeholder="Category"  className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Ratting</span>
                        </label>
                        <input type="text" name="ratting" placeholder="Out Of 10*" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="text" name="quantity" className="input input-bordered" />
                    </div>
                    <textarea placeholder="Detail description" className="textarea textarea-bordered textarea-lg w-full max-w" ></textarea>
                </div>
                <div className="form-control mt-6">
                    <input type="submit" className="btn bg-orange-600 btn-block" value="Order Now !!" />
                </div>

            </form>
        </div>
    );
};

export default AddAToy;