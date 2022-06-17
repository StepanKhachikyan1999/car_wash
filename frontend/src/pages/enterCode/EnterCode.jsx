// styles
import "./enterCode.scss"

import {Link} from "react-router-dom";

// custom imports
import Navbar from "../../components/navbar/Navbar";

const SendCode = () => {
    return (
        <div className='changeCodeSection'>
            <Navbar />
            <div className="mainDivEnterCode">
                <div className="cardStyle cardStyleEnterCode">
                    <form action="" method="post" name="signupForm" id="signupForm">
                        <h2 className="form_title">
                            Enter security code
                        </h2>
                        <br/>
                        <p>Please check your emails for a message with your code. Your code is 6 numbers long.</p>

                        <div className="inputDiv">
                            <label className="inputLabel" htmlFor="password">We sent your code to <br/>m*****p@m***.ru
                            </label>
                            <input placeholder="Write your email ..." type="email" name="email" required />
                        </div>

                        <div className="buttonWrapper">
                            <button type="submit" id="submitButtonCode"
                                    className="submitButton pure-button pure-button-primary">
                                <Link to="/change/changeCode/enterCode/finishChange"><span>Save changes</span></Link>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SendCode