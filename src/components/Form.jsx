import React from 'react';
import background from '../assets/Form bg image.png';
import './Form.css'; // Assuming you have a CSS file for styling
import {sendEmail} from '../MiddleWare/EmailService/EmailService.js';

const Form = () => {
    const [data, setData] = React.useState({
        name: "",
        phone: "",
        email: "",
        plans: "",
        comments: ""
    });

    const [responseMessage, setResponseMessage] = React.useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const responseMessage = await sendEmail(data);
        if (responseMessage.success) {
            setResponseMessage("Email successfully sent!");
            setData({
                name: "",
                phone: "",
                email: "",
                plans: "",
                comments: ""
            });
        }
        else {
            setResponseMessage("Failed to send email. Please try again later.");
        };
    };

    React.useEffect(() => {
        if (responseMessage) {
            const timer = setTimeout(() => {
                setResponseMessage("");
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [responseMessage]);

    return (
        <div className="form-container" style={{ backgroundImage: `url(${background})` }}>
            <form className="form-content" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" id="name" name="name" placeholder="Name*" value={data.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <input type="text" id="phone" name="phone" placeholder="Phone*" value={data.phone} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <input type="email" id="email" name="email" placeholder="Email" value={data.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <select id="plans" name="plans" value={data.plans} onChange={handleChange} required>
                        <option value="" disabled>Plans</option>
                        <option value="1-on-1 Online - 5 days/1hr">1-on-1 Online - 5 days/1hr</option>
                        <option value="1-on-1 Online - 2 days/1hr">1-on-1 Online - 2 days/1hr</option>
                        <option value="45 days Diet Chart">45 days Diet Chart</option>
                    </select>
                </div>
                <div className="form-group">
                    <textarea id="comments" name="comments" placeholder="Comments" value={data.comments} onChange={handleChange} ></textarea>
                </div>
                <button type="submit">Get FIT Now</button>
            </form>
            {responseMessage && (
                <div style={{ marginTop: '20px', color: responseMessage.includes('successfully') ? 'White' : 'red' }}>
                    {responseMessage}
                </div>
            )}
        </div>
    );
};

export default Form;