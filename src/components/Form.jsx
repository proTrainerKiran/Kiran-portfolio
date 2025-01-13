import React from 'react';
import background from '../assets/Form bg image.png';
import './Form.css'; // Assuming you have a CSS file for styling

const Form = () => {
    return (
        <div className="form-container" style={{ backgroundImage: `url(${background})` }}>
            <form className="form-content">
                <div className="form-group">
                    <input type="text" id="name" name="name" placeholder="Name*" />
                </div>
                <div className="form-group">
                    <input type="text" id="phone" name="phone" placeholder="Phone*" />
                </div>
                <div className="form-group">
                    <input type="email" id="email" name="email" placeholder="Email" />
                </div>
                <div className="form-group">
                    <select id="plans" name="plans">
                        <option value="" disabled selected>Plans</option>
                        <option value="basic">Basic</option>
                        <option value="standard">Standard</option>
                        <option value="premium">Premium</option>
                    </select>
                </div>
                <div className="form-group">
                    <textarea id="comments" name="comments" placeholder="Comments"></textarea>
                </div>
                <button type="submit">Get FIT Now </button>
            </form>
        </div>
    );
};

export default Form;