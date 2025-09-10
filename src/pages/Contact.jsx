import React, { useState, useRef } from 'react';
import { db } from '../firebase/firebaseConfig'; // Import Firebase config
import { collection, addDoc } from 'firebase/firestore';
import emailjs from 'emailjs-com'; // Import EmailJS
import '../styles/Contact.css'; // Import CSS

const ContactPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);
    const formRef = useRef(null); // Reference to the form element

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Save the form data to Firestore
            await addDoc(collection(db, 'contacts'), { ...formData, timestamp: new Date() });
            alert("Message sent successfully!");

            // Send form data via EmailJS
            await emailjs.sendForm(
                'service_tjv0ql8', // Your service ID
                'template_jddg67m', // Your template ID
                formRef.current, // Pass the form reference
                'xIzeCj-gZNtK2_X5p' // Your user ID
            );
            alert("Email sent successfully!");

            // Reset form data
            setFormData({ name: '', email: '', message: '' });
            formRef.current.reset(); // Reset the form

        } catch (error) {
            console.error("Error adding document or sending email: ", error);
            alert("Error sending message");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contact-section">
            <div className="contact-container">
                {/* Left Side: Image */}
                <div className="contact-image">
                    <img src="images/contactus.png" alt="Contact Us" />
                </div>
                

                {/* Right Side: Form */}
                <div className="contact-form-container">
                    
                    <h2>Contact Us</h2>
                    <p>We’d love to hear from you! Fill out the form below and we’ll get back to you soon.</p>
                    <form onSubmit={handleSubmit} className="contact-form" ref={formRef}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <button type="submit" disabled={loading}>{loading ? "Sending..." : "Send Message"}</button>
                    </form>
                    <div className="contact-info">
    <p><strong>Email:</strong><br></br> <a href="mailto:srilaxmiganapati@gmail.com">srilaxmiganapati@gmail.com</a></p>
    <p><strong>Phone:</strong> <br></br>Vamsi:<a href="tel:+919392223311"> +91 9392223311</a><br></br>Dinesh:<a href="tel:+917894006402"> +91 7894006402</a></p>
    <p><strong>Address:</strong> <br></br><a href="https://www.google.com/maps?q=Jeypore,+764001+Dist.+Koraput" target="_blank" rel="noopener noreferrer">Jeypore, 764001 Dist. Koraput</a></p>
</div>

                </div>
            </div>
        </div>
    );
};

export default ContactPage;