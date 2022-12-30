import React, { useEffect, useState } from "react";
import "./register.css";

const RegisterPage = () => {
    return (
        <div>
            <div className="registers">
                <div className="register-container">
                    <div className="createaccount">
                        Create Account
                        <div className="xxxaspartofbodimaji ">
                            xxxx as part of bodimaji
                            <div className="Rectangle1">
                                <input type="text"></input>
                            </div>
                            <div className="Rectangle1">
                                <input type="text" placeholder="Fullname"></input>
                            </div>
                            <div className="Rectangle1">
                                <input type="text" placeholder="Email Address"></input>
                            </div>
                            <div className="Rectangle1">
                                <input type="password" placeholder="Password"></input>
                            </div>
                            <div>Minimum 8 characters</div>
                            <div className="Rectangle1">
                                <input type="password" placeholder="Confirm Password"></input>
                            </div>
                            <div className="term">
                                <input type="checkbox" /> I agree to Terms & Conditions
                            </div>
                            <div>
                                <button className="Rectangle2">
                                    <div className="Register">Register</div>
                                </button>;
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default RegisterPage;