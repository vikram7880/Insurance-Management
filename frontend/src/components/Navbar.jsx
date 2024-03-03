import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-primary fw-bold">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <i className="fa-solid fa-house-chimney-crack" />
                </a>
                <button
                    className="navbar-toggler d-lg-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId"
                    aria-controls="collapsibleNavId"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" href="/">
                                Home
                                <span className="visually-hidden">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                href="/signup"
                                target="_self"
                            >
                                Signup
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                href="login"
                                target="_self"
                            >
                                Login
                            </Link>
                        </li>
                        {/* <li class="nav-item dropdown">
                  <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="dropdownId"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      >Dropdown</a
                  >
                  <div
                      class="dropdown-menu"
                      aria-labelledby="dropdownId"
                  >
                      <a class="dropdown-item" href="#"
                          >Action 1</a
                      >
                      <a class="dropdown-item" href="#"
                          >Action 2</a
                      >
                  </div>
              </li> */}
                    </ul>
                    <form className="d-flex my-2 my-lg-0">
                        <input
                            className="form-control me-sm-2 "
                            type="text"
                            placeholder="Search"
                        />
                        <button
                            className="btn btn-outline-dark my-2 my-sm-0 text-white"
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>

    )
}

export default Navbar