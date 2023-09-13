

export default function Footer() {
    return (
        <footer className='container pt-9'>
            <div className='footer flex flex-row py-28'>
                <div className='pr-56'>
                    <h6>ABOUT</h6>
                    <p>News & stories</p>
                    <p>History</p>
                    <p>Our studio</p>
                    <p>Showcase</p>
                </div>
                <div className='pr-56'>
                    <h6>CUSTOMER SERVICE</h6>
                    <p>Contact us</p>
                    <p>Trade service</p>
                    <p>Login/Register</p>
                    <p>Delivery/Return</p>
                    <p>FAQS</p>
                </div>
                <div className='pr-56'>
                    <h6>FURNITURE</h6>
                    <p>Tables</p>
                    <p>Chairs</p>
                    <p>Storage</p>
                </div>
                <div className=''>
                    <h6>ACCESSORIES</h6>
                    <p>Fragrance</p>
                    <p>Sunglasses</p>
                    <p>Kitchen & Diving</p>
                    <p>Bedroom</p>
                </div>
            </div>
            <div className='footer-below flex flex-row py-7 justify-between items-center'>
                <div className='flex flex-row'>
                    <p>ABOUT US</p>
                    <p>BLOG</p>
                    <p>FAQS</p>
                    <p>ORDER TRACKER</p>
                    <p>CONTACT</p>
                </div>
                <div className='flex flex-row'>
                    <p>CONNECT WITH US</p>
                    <img src='/images/footer/icons8-twitter-24%201.svg'></img>
                    <img src='/images/footer/icons8-instagram%201.svg'></img>
                    <img src='/images/footer/icons8-threads%201.svg'></img>
                    <img src='/images/footer/icons8-facebook.svg'></img>
                </div>
            </div>
        </footer>
    )
}