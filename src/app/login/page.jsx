import React from 'react'

const Login = () => {
    return (
        <section className="vh-100">
            <div className="container-fluid h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img
                            src="https://as2.ftcdn.net/v2/jpg/04/66/17/69/1000_F_466176911_L67vQjHZHVkzSzgptLrCLH0VGOj7y7pf.jpg"
                            className="img-fluid"
                            alt="Sample image"
                        />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form>

                            <h3 className='text-center mb-4'>Continue with Us</h3>
                            {/* Email input */}
                            <div className="form-outline mb-4">
                                <input
                                    type="email"
                                    id="form3Example3"
                                    className="form-control form-control-lg"
                                    placeholder="Enter a valid email address"
                                />
                                <label className="form-label" htmlFor="form3Example3">
                                    Email address
                                </label>
                            </div>
                            {/* Password input */}
                            <div className="form-outline mb-3">
                                <input
                                    type="password"
                                    id="form3Example4"
                                    className="form-control form-control-lg"
                                    placeholder="Enter password"
                                />
                                <label className="form-label" htmlFor="form3Example4">
                                    Password
                                </label>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                {/* Checkbox */}
                                <div className="form-check mb-0">
                                    <input
                                        className="form-check-input me-2"
                                        type="checkbox"
                                        defaultValue=""
                                        id="form2Example3"
                                    />
                                    <label className="form-check-label" htmlFor="form2Example3">
                                        Remember me
                                    </label>
                                </div>
                                <a href="#!" className="text-body">
                                    Forgot password?
                                </a>
                            </div>
                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button
                                    type="button"
                                    className="btn btn-primary btn-lg"
                                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                                >
                                    Login
                                </button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">
                                    Don't have an account?{" "}
                                    <a href="#!" className="link-danger">
                                        Register
                                    </a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Login