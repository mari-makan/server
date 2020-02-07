# rest-api-todo

## **Register new user account**

Create new user to database.

- **URL**

  /register

- **Method:**

  `POST`

- **URL Params**
  **Required:**
  None

- **Data Params**
  email,
  password

- **Success Response:**

  - **Code:** 201 <br />
    **Content:**
    ```javascript
    data: "{ id : 1, email : "admin@mail.com", password : "admin123" }",
    msg: "Account registered successfully"
    ```

* **Error Response:**

  - **Code:** 400 <br />
    **Content:**

    ```javascript
    err: "BAD REQUEST",
    msg: ["invalid email address"]

    OR
    err: "BAD REQUEST",
    msg: ["pas"]
    ```

## **Login user**

Login user.

- **URL**

  /login

- **Method:**

  `POST`

- **URL Params**
  **Required:**
  None

- **Data Params**
  email,
  password

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**

    ```javascript

    email: "admin@mail.com",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyLCJlbWFpbCI6ImFkbWluQG1haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkeDRTSkZ6enFxMVIwZjNiWWZGVEt1ZU5XY0UueTJ3ZDlQNjBDVGhPZGpocGpuc2tULmRoejYiLCJjcmVhdGVkQXQiOiIyMDIwLTAyLTA3VDAzOjE0OjE2LjU5MVoiLCJ1cGRhdGVkQXQiOiIyMDIwLTAyLTA3VDAzOjE0OjE2LjU5MVoifSwiaWF0IjoxNTgxMDQ1Mjg5fQ.uVOTuSJTpP3opugTk7r2Itp2OTdkeUNjj7Sn563MQ-g"

    ```

* **Error Response:**

  - **Code:** 400 <br />
    **Content:**

    ```javascript
    err: "WRONG LOGIN DATA",
    msg: "USERNAME OR PASSWORD IS WRONG"
    ```

## **Login google**

Login user with google OAuth.

- **URL**

  /googleLogin

- **Method:**

  `POST`

- **URL Params**
  **Required:**
  None

- **Data Params**
  none

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**

    ```javascript
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyLCJlbWFpbCI6ImFkbWluQG1haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkeDRTSkZ6enFxMVIwZjNiWWZGVEt1ZU5XY0UueTJ3ZDlQNjBDVGhPZGpocGpuc2tULmRoejYiLCJjcmVhdGVkQXQiOiIyMDIwLTAyLTA3VDAzOjE0OjE2LjU5MVoiLCJ1cGRhdGVkQXQiOiIyMDIwLTAyLTA3VDAzOjE0OjE2LjU5MVoifSwiaWF0IjoxNTgxMDQ1Mjg5fQ.uVOTuSJTpP3opugTk7r2Itp2OTdkeUNjj7Sn563MQ-g";
    ```

* **Error Response:**

  - **Code:** 400 <br />
    **Content:**

    ```javascript
    err: "WRONG LOGIN DATA",
    msg: "USERNAME OR PASSWORD IS WRONG"
    ```
