import React, { useState } from "react";
import "./newsletter.css";
import axios from 'axios';
import { Oval } from 'react-loader-spinner'

const Newsletter = () => {

    const [loading, setLoading] = useState(false)

    const [agree, setAgree] = useState(false)

    const [formData, setFormData] = useState({
        first_name: '',
        email: '',
    });

    const { first_name, email } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const onChecked = (e) => {
        setAgree(e.target.checked);
    }
    const onSubmit = (e) => {
        e.preventDefault()

        const config = {
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json'

            }
        }

        const body = JSON.stringify({
            email,
            first_name,
            agree
        })

        const fetchData = async () => {
            setLoading(true);
            try {
                await axios.post(
                    'http://localhost:8000/api/newsletter/signup/',
                    body,
                    config
                );
            } catch(err) {

            }
            setLoading(false);
        };

        fetchData();
    }



    return (<>

        <section class="news-letter" id="News-letter">
            <div class="news ">
                <div class="container">
                    <h1 class="news-heading">Subscribe To Get The Latest <br></br> News About Us</h1>
                    <p class="des how-de">Get the Latest news about how to food industry is moving <br></br> sign up to our newsletter now</p>
                    <form onSubmit={e => onSubmit(e)} action="">
                        <div>
                            <input className="news-input"
                                type='text'
                                name='first_name'
                                onChange={e => onChange(e)}
                                value={first_name}
                                placeholder="Enter your name"
                                maxlength="50"
                                required />
                        </div>
                        <div>
                            <input className="news-input"
                                type='email'
                                name='email'
                                onChange={e => onChange(e)}
                                value={email}
                                placeholder="Enter your email address"
                                maxlength="50"
                                required />
                        </div> <br></br>
                        <div>
                            <input
                                type='checkbox'
                                name='agree'
                                onChange={e => onChecked(e)}
                                checked={agree}
                                placeholder="Enter your email address"
                                required />
                            <label className='form-check-label'
                                style={{ marginLeft: '6px' }}
                                htmlFor='agree'> I agree to terms and conditions and conditions
                            </label>
                        </div> <br></br>
                        {
                            loading ? (
                                <div>
                                    <Oval class="oval" color="#00BFFF" height={50} width={50} />
                                </div>
                            ) : (
                                <button class="bt">Subscribe</button>
                            )
                        }

                    </form>
                </div>
            </div>
        </section>
    </>);
}

export default Newsletter;
