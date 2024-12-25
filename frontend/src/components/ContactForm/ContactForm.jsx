import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
    const [firstNameFocused, setFirstNameFocused] = useState(false);
    const [lastNameFocused, setLastNameFocused] = useState(false);
    const [emailFocused, setEmailFocused] = useState(false);
    const [companyFocused, setCompanyFocused] = useState(false);
    const [phoneFocused, setPhoneFocused] = useState(false);
    const [queryFocused, setQueryFocused] = useState(false);

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: '',
        query: "",
    });

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { firstName, email, phone, query } = data;
        if (firstName && email && phone && query) {
            try {
                const response = await fetch(`${import.meta.env.VITE_SERVER_DOMAIN}/contact`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                });
    
                const dataRes = await response.json();
                console.log(dataRes);
    
                if (response.ok) {
                    alert("Submission successful");
    
                    // Reset data and focus states
                    setData({
                        firstName: "",
                        lastName: "",
                        email: "",
                        company: "",
                        phone: "",
                        query: "",
                    });
    
                    // Reset focus states to hide floating labels
                    setFirstNameFocused(false);
                    setLastNameFocused(false);
                    setEmailFocused(false);
                    setCompanyFocused(false);
                    setPhoneFocused(false);
                    setQueryFocused(false);
                } else {
                    alert("Submission failed");
                }
            } catch (error) {
                console.error("Error during submission:", error);
                alert("Submission failed due to an error.");
            }
        } else {
            alert("Please Enter required fields");
        }
    };
    

    console.log('Server Domain:', import.meta.env.VITE_SERVER_DOMAIN); // Debug statement

    return (
        <>
            <div>
                <div className='cformContainer'>
                    <form onSubmit={handleSubmit}>
                        <div className='cformName'>
                            <div className='cformLineBreaker'>
                                <label
                                    htmlFor="firstName"
                                    className={firstNameFocused ? 'cformFloatingLabel' : ''}
                                >
                                    First Name <span className='cformRequired'>*</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    placeholder="Your first name"
                                    value={data.firstName}
                                    onChange={handleOnChange}
                                    className='cformInput'
                                    onFocus={() => setFirstNameFocused(true)}
                                    onBlur={(e) => setFirstNameFocused(e.target.value !== '')}
                                    required
                                />
                            </div>
                            <div className='cformLineBreaker'>
                                <label
                                    htmlFor="lastName"
                                    className={lastNameFocused ? 'cformFloatingLabel' : ''}
                                >
                                    Last Name
                                </label>
                                <br />
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    placeholder="Your last name"
                                    value={data.lastName}
                                    onChange={handleOnChange}
                                    className='cformInput'
                                    onFocus={() => setLastNameFocused(true)}
                                    onBlur={(e) => setLastNameFocused(e.target.value !== '')}
                                />
                            </div>
                        </div>

                        <div className='cformLineBreaker'>
                            <label
                                htmlFor="email"
                                className={emailFocused ? 'cformFloatingLabel' : ''}
                            >
                                Your Email <span className='cformRequired'>*</span>
                            </label>
                            <br />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="example@dot.com"
                                value={data.email}
                                onChange={handleOnChange}
                                className='cformInput'
                                onFocus={() => setEmailFocused(true)}
                                onBlur={(e) => setEmailFocused(e.target.value !== '')}
                                required
                            />
                        </div>

                        <div className='cformLineBreaker'>
                            <label
                                htmlFor="company"
                                className={companyFocused ? 'cformFloatingLabel' : ''}
                            >
                                Company
                            </label>
                            <br />
                            <input
                                type="text"
                                id="company"
                                name="company"
                                placeholder="Your Company"
                                value={data.company}
                                onChange={handleOnChange}
                                className='cformInput'
                                onFocus={() => setCompanyFocused(true)}
                                onBlur={(e) => setCompanyFocused(e.target.value !== '')}
                            />
                        </div>

                        <div className='cformLineBreaker'>
                            <label
                                htmlFor="phone"
                                className={phoneFocused ? 'cformFloatingLabel' : ''}
                            >
                                Phone Number <span className='cformRequired'>*</span>
                            </label>
                            <br />
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                placeholder="Phone Number"
                                value={data.phone}
                                onChange={handleOnChange}
                                className='cformInput'
                                inputMode="numeric"
                                pattern="[\d\-\+]*"
                                onFocus={() => setPhoneFocused(true)}
                                onBlur={(e) => setPhoneFocused(e.target.value !== '')}
                                required
                            />
                        </div>

                        <div className='cformLineBreaker'>
                            <label
                                htmlFor="query"
                                className={queryFocused ? 'cformFloatingLabel' : ''}
                            >
                                What's on your mind? <span className='cformRequired'>*</span>
                            </label>
                            <br />
                            <textarea
                                id="query"
                                name="query"
                                value={data.query}
                                onChange={handleOnChange}
                                className='cformInput cformInputQuery'
                                onFocus={() => setQueryFocused(true)}
                                onBlur={(e) => setQueryFocused(e.target.value !== '')}
                                required
                            />
                        </div>
                        <div className='cformButtonContainer'>
                            <button type="submit" className='cformButton'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ContactForm;
