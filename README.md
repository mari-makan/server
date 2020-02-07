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
  None

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
