import React from "react";
import "./SideBar.css";

const SideBar = () => {
  return (
    <>
      <nav
        id="navbar_position"
        class="navbar navbar-expand-md navbar-dark bg-secondary"
      >
        <div class="container-fluid">
          <button
            class="navbar-toggler me-2"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <a class="navbar-brand fw-bold me-auto ms-1 text-white" href="#">
            {" "}
            <span>
              <img src="./assets/images/stars_logo.png" alt="" />
            </span>{" "}
            Stars Academy
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul id="navbar_buttons" class="navbar-nav mb-lg-0 ms-auto">
              <li class="me-1 mb-1 mt-1">
                <button class="btn btn-primary">Talent Hunt</button>
              </li>
              <li class="me-1 mb-1 mt-1">
                <button class="btn btn-primary">Fee Structure</button>
              </li>
              <li class="me-1 mb-1 mt-1">
                <button class="btn btn-primary">Results</button>
              </li>
              <li class="me-1 mb-1 mt-1">
                <button class="btn btn-primary">Apply Online</button>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="bi bi-person-fill"></i>
                </a>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li>
                    <a class="dropdown-item" href="#">
                      Our Classes
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Our Courses
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Fee Structure
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        class="offcanvas offcanvas-start bg-secondary text-white"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div id="scrollbar_side" class="offcanvas-body">
          <nav class="nav-dark">
            <div id="sidebar_brand">
              <span class="brand">CT</span>
              <span class="brand_name">Creative Team</span>
            </div>
            <ul class="navbar-nav">
              <li>
                <a class="nav-link px-3 sidebar-link" role="button">
                  <span class="me-3">
                    <i class="bi bi-google-play"></i>
                  </span>
                  <span>Dashboard</span>
                </a>
              </li>
              <li>
                <a class="nav-link px-3 sidebar-link" role="button">
                  <span class="me-3">
                    <i class="bi bi-google-play"></i>
                  </span>
                  <span>Icons</span>
                </a>
              </li>
              <li>
                <a class="nav-link px-3 sidebar-link" role="button">
                  <span class="me-3">
                    <i class="bi bi-google-play"></i>
                  </span>
                  <span>Maps</span>
                </a>
              </li>
              <li>
                <a
                  class="nav-link px-3 sidebar-link"
                  data-bs-toggle="collapse"
                  href="#collapseExample_notifications"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample_notifications"
                >
                  <span class="me-3">
                    <i class="bi bi-google-play"></i>
                  </span>
                  <span>Notifications</span>
                  <span id="right-icon" class="ms-auto">
                    <i class="bi bi-chevron-down"></i>
                  </span>
                </a>
                <div class="collapse" id="collapseExample_notifications">
                  <ul class="navbar-nav ps-3">
                    <li>
                      <a href="#" class="nav-link px-3">
                        <span class="me-2">
                          <i class="bi bi-person-lines-fill"></i>
                        </span>
                        <span>Overview</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="nav-link px-3">
                        <span class="me-2">
                          <i class="bi bi-cpu"></i>
                        </span>
                        <span>Projects</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a class="nav-link px-3 sidebar-link" role="button">
                  <span class="me-3">
                    <i class="bi bi-google-play"></i>
                  </span>
                  <span>User Profile</span>
                </a>
              </li>
              <li>
                <a class="nav-link px-3 sidebar-link" role="button">
                  <span class="me-3">
                    <i class="bi bi-google-play"></i>
                  </span>
                  <span>Table List</span>
                </a>
              </li>
              <li>
                <a class="nav-link px-3 sidebar-link" role="button">
                  <span class="me-3">
                    <i class="bi bi-google-play"></i>
                  </span>
                  <span>Typography</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default SideBar;
