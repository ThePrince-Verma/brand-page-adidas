const Content = () => {
    return(
       <main className="content container">
        <div className="d-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p1>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p1>
        <div className="logo-btn">
            <button>Shop Now</button>
            <button className="category-btn">Category</button>
        </div>
        <div className="bottom">
            <p>Also Available On</p>
        </div>
        <div className="brand-icon">
            <img src="/images/amazon.png" />
            <img src="/images/flipkart.png" />
        </div>
        </div>
        <div className="shoe">
            <img src="/images/shoe.png" />
        </div>
       </main>
    );
}

export default Content;