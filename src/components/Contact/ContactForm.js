import React from 'react';
import { useForm } from "react-hook-form";
import { useForm as useFormspree } from "@formspree/react";
// import { register } from 'react-scroll/modules/mixins/scroller';

function ContactForm(){
    const [serverState, sendToFormspree] = useFormspree('xzbkwlpa');
    const { register, handleSubmit, errors, reset } = useForm();

    const handleClick = e => {
        Result(e);      
    };
    
    function Result(props){
        if (serverState.succeeded) {
            console.log('success!');
            reset();
            return(
                <div className="mb-0 pt-2">
                    <div className="sent-message">Your message has been sent. Thank you! {props.a}</div>
                </div>
            );
        }
        else{
            // console.log('failed!');
            // return(
            //     <div className="mb-0 pt-2">
            //         <div className="error-message">Form submission failed!{props.h}</div>
            //     </div>
            // );
            return null;
        }
    }

    return(
        <form onSubmit={handleSubmit(sendToFormspree)} method="POST" className="email-form">
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="name">Name*:</label>
                    <input 
                        type="text"
                        name="name"
                        className="form-control"
                        id="name" 
                        data-rule="minlen:4" 
                        placeholder="First and Last"
                        ref={register({ 
                            required: true 
                        })}
                    />
                    {errors.name && <div className="validate">This field is required.</div>}
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="name">Email*:</label>
                    <input 
                        type="email"
                        className="form-control"
                        name="_replyto"
                        id="email"
                        data-rule="email"
                        placeholder="example@abc.com"
                        ref={register({ 
                            required: true,
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                            }
                        })}
                    />
                    {errors._replyto && <div className="validate">This field is required.<br/>Ensure email is in the correct format.</div>}
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="name">Subject*:</label>
                <input 
                    type="text"
                    className="form-control"
                    name="_subject"
                    id="subject"
                    placeholder="What is your topic of discussion?"
                    ref={register({
                        required: true
                    })}
                />
                {errors._subject && <div className="validate">This field is required.</div> }
            </div>
            <div className="form-group">
                <label htmlFor="name">Message*:</label>
                <textarea 
                    className="form-control"
                    name="message"
                    rows="10"
                    placeholder="Write away!"
                    ref={register({
                        required: true
                    })}
                />
                {errors._subject && <div className="validate">This field is required.</div> }
            </div>
            <div className="text-center">
                <button onClick={handleClick} type="submit">Send Message</button>
            </div>
            <Result/>
        </form>
    );
}

export default ContactForm;

