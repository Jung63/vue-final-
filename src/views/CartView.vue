<template>
  <div class="bg-white sticky-top">
    <div class="container">
      <nav class="navbar px-0 navbar-expand-lg navbar-light bg-white">
        <a
          class="navbar-brand position-absolute"
          href="./index.html"
          style="left: 50%; transform: translate(-50%, -50%); top: 50%"
        >
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse bg-white custom-header-md-open"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link ps-0" href="./product.html">Lorem ipsum</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./detail.html">Lorem ipsum</a>
            </li>
          </ul>
        </div>
        <div class="d-flex">
          <a href="#"><i class="fas fa-heart me-5"></i></a>
          <a href="./cart-2.html"><i class="fas fa-shopping-cart"></i></a>
        </div>
      </nav>
    </div>
  </div>
  <div class="container">
    <div class="row justify-content-center">
      <div
        class="col-md-6 bg-white py-5"
        style="min-height: calc(100vh - 56px - 76px)"
      >
        <div class="d-flex justify-content-between">
          <h2 class="mt-2">Cart Detail</h2>
        </div>
        <div class="d-flex mt-4 bg-light">
          <img
            src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80"
            alt=""
            style="width: 120px; height: 120px; object-fit: cover"
          />
          <div class="w-100 p-3 position-relative">
            <a href="#" class="position-absolute" style="top: 16px; right: 16px"
              ><i class="fas fa-times"></i
            ></a>
            <p class="mb-0 fw-bold">Lorem ipsum</p>
            <p class="mb-1 text-muted" style="font-size: 14px">
              Lorem ipsum dolor sit amet
            </p>
            <div
              class="d-flex justify-content-between align-items-center w-100"
            >
              <div class="input-group w-50 align-items-center">
                <div class="input-group-prepend pe-1">
                  <a href="#"> <i class="fas fa-minus"></i></a>
                </div>
                <input
                  type="text"
                  class="
                    form-control
                    border-0
                    text-center
                    my-auto
                    shadow-none
                    bg-light
                    px-0
                  "
                  placeholder=""
                  aria-label="Example text with button addon"
                  aria-describedby="button-addon1"
                  value="1"
                />
                <div class="input-group-append ps-1">
                  <a href="#"><i class="fas fa-plus"></i></a>
                </div>
              </div>
              <p class="mb-0 ms-auto">NT$12,000</p>
            </div>
          </div>
        </div>
        <div class="d-flex mt-4 bg-light">
          <img
            src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80"
            alt=""
            style="width: 120px; height: 120px; object-fit: cover"
          />
          <div class="w-100 p-3 position-relative">
            <a href="#" class="position-absolute" style="top: 16px; right: 16px"
              ><i class="fas fa-times"></i
            ></a>
            <p class="mb-0 fw-bold">Lorem ipsum</p>
            <p class="mb-1 text-muted" style="font-size: 14px">
              Lorem ipsum dolor sit amet
            </p>
            <div
              class="d-flex justify-content-between align-items-center w-100"
            >
              <div class="input-group w-50 align-items-center">
                <div class="input-group-prepend pe-1">
                  <a href="#"> <i class="fas fa-minus"></i></a>
                </div>
                <input
                  type="text"
                  class="
                    form-control
                    border-0
                    text-center
                    my-auto
                    shadow-none
                    bg-light
                    px-0
                  "
                  placeholder=""
                  aria-label="Example text with button addon"
                  aria-describedby="button-addon1"
                  value="1"
                />
                <div class="input-group-append ps-1">
                  <a href="#"><i class="fas fa-plus"></i></a>
                </div>
              </div>
              <p class="mb-0 ms-auto">NT$12,000</p>
            </div>
          </div>
        </div>
        <table class="table mt-4 text-muted">
          <tbody>
            <tr>
              <th scope="row" class="border-0 px-0 font-weight-normal">
                Lorem ipsum
              </th>
              <td class="text-end border-0 px-0">NT$24,000</td>
            </tr>
            <tr>
              <th scope="row" class="border-0 px-0 pt-0 font-weight-normal">
                Lorem ipsum
              </th>
              <td class="text-end border-0 px-0 pt-0">NT$500</td>
            </tr>
          </tbody>
        </table>
        <div class="d-flex justify-content-between mt-4">
          <p class="mb-0 h4 fw-bold">Lorem ipsum</p>
          <p class="mb-0 h4 fw-bold">NT$24,500</p>
        </div>
        <a
          href="./checkout.html"
          class="btn btn-dark btn-block mt-4 rounded-0 py-3"
          >Lorem ipsum</a
        >
      </div>
    </div>
  </div>
  <div class="bg-dark">
    <div class="container">
      <div
        class="
          d-flex
          align-items-center
          justify-content-between
          text-white
          py-4
        "
      >
        <p class="mb-0">© 2020 LOGO All Rights Reserved.</p>
        <ul class="d-flex list-unstyled mb-0 h4">
          <li>
            <a href="#" class="text-white mx-3"
              ><i class="fab fa-facebook"></i
            ></a>
          </li>
          <li>
            <a href="#" class="text-white mx-3"
              ><i class="fab fa-instagram"></i
            ></a>
          </li>
          <li>
            <a href="#" class="text-white ms-3"><i class="fab fa-line"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
