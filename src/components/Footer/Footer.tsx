import { Link } from "react-router-dom";
import { Input, Button } from "antd";
import Container from "../container";

function Footer() {
    return (
        <footer className="bg-white py-4">
            <Container properties={["grid", "grid-cols-2", "md:grid-cols-3", "lg:grid-cols-5", "gap-4", "md:p-3"]}>
                <div>
                    <h3 className="text-title font-semibold mb-4">Affordable Services</h3>
                    <Link to="/" className="text-tx-4 block py-1 text-sm hover:text-primary transition">Grocery Pickup & Delivery</Link>
                    <Link to="/" className="text-tx-4 block py-1 text-sm hover:text-primary transition">Money Center</Link>
                    <Link to="/" className="text-tx-4 block py-1 text-sm hover:text-primary transition">Afforbable Credit Card</Link>
                    <Link to="/" className="text-tx-4 block py-1 text-sm hover:text-primary transition">Afforbable Pay</Link>
                    <Link to="/" className="text-tx-4 block py-1 text-sm hover:text-primary transition">Weekly Ad</Link>
                    <Link to="/" className="text-tx-4 block py-1 text-sm hover:text-primary transition">Other Services</Link>
                </div>
                <div>
                    <h3 className="text-title font-semibold mb-4">Get To Know Us</h3>
                    <Link to="/" className="text-tx-4 block py-1 text-sm hover:text-primary transition">Our Company</Link>
                    <Link to="/" className="text-tx-4 block py-1 text-sm hover:text-primary transition">Digital Museum</Link>
                    <Link to="/" className="text-tx-4 block py-1 text-sm hover:text-primary transition">Our Supplier</Link>
                    <Link to="/" className="text-tx-4 block py-1 text-sm hover:text-primary transition">Sell on Affordable</Link>
                    <Link to="/" className="text-tx-4 block py-1 text-sm hover:text-primary transition">Advertise With Us</Link>
                    <Link to="/" className="text-tx-4 block py-1 text-sm hover:text-primary transition">Careers</Link>
                </div>
                <div>
                    <h3 className="text-title font-semibold mb-4">Affordable</h3>
                    <Link to="/" className="text-tx-4 block py-1 text-sm hover:text-primary transition">Affordable Labs</Link>
                    <Link to="/" className="text-tx-4 block py-1 text-sm hover:text-primary transition">Our Ads</Link>
                    <Link to="/" className="text-tx-4 block py-1 text-sm hover:text-primary transition">Term of Use</Link>
                    <Link to="/" className="text-tx-4 block py-1 text-sm hover:text-primary transition">Privacy & Security</Link>
                    <Link to="/" className="text-tx-4 block py-1 text-sm hover:text-primary transition">Calif. Privacy Rights</Link>
                    <Link to="/" className="text-tx-4 block py-1 text-sm hover:text-primary transition">Tax Exempt Program</Link>
                </div>
                <div>
                    <h3 className="text-title font-semibold mb-4">Custom Service</h3>
                    <Link to="/" className="text-tx-4 block py-1 text-sm hover:text-primary transition">Help Center</Link>
                    <Link to="/" className="text-tx-4 block py-1 text-sm hover:text-primary transition">Returns</Link>
                    <Link to="/" className="text-tx-4 block py-1 text-sm hover:text-primary transition">Product Recalls</Link>
                    <Link to="/" className="text-tx-4 block py-1 text-sm hover:text-primary transition">Accessibility</Link>
                    <Link to="/" className="text-tx-4 block py-1 text-sm hover:text-primary transition">Contact Us</Link>
                    <Link to="/" className="text-tx-4 block py-1 text-sm hover:text-primary transition">Store Pickup</Link>
                </div>
                <div>
                    <h3 className="text-title font-semibold mb-4">Newsletter</h3>
                    <p className="text-tx-4 text-sm">Sign up to our newsletter and get exclusive deals you wont find anywhere else straight to your inbox!</p>
                    <Input 
                        className="my-3" 
                        size="large" 
                        placeholder="E-mail"
                    />
                    <Button size="large" className="border-none bg-primary text-white">SUBSCRIBE</Button>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;