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

## ** List Menu**

Display list of category menu after login.

- **URL**

  /list-menu

- **Method:**

  `GET`

- **URL Params**
  **Required:**
  None

- **Data Params**
  none

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**
    ```javascript
    "meals": [
        {
            "strCategory": "Beef"
        },
        {
            "strCategory": "Breakfast"
        },
        {
            "strCategory": "Chicken"
        }
    ]
    ```

* **Error Response:**

  - **Code:** 404 <br />
    **Content:**

    ```javascript
    err: "NOT FOUND",
    msg: "DATA NOT FOUND"
    ```

## ** List Category Menu**

Display list's category from user's choice.

- **URL**

  /menu/:category

- **Method:**

  `GET`

- **URL Params**
  **Required:**
  category=[string]

- **Data Params**
  none

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**
    ```javascript
    "meals": [
        {
            ........
        },
        {
            ...........
        },
        {
            ............
        }
    ]
    ```

* **Error Response:**

  - **Code:** 404 <br />
    **Content:**

    ```javascript
    err: "NOT FOUND",
    msg: "DATA NOT FOUND"
    ```

## ** Restaurant list by menu**

Display restaurant list by menu.

- **URL**

  /restaurant/:menu

- **Method:**

  `GET`

- **URL Params**
  **Required:**
  menu=[string]

- **Data Params**
  none

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**
    ```javascript
    "Restaurants": [
        {
            ........
        },
        {
            ...........
        },
        {
            ............
        }
    ]
    ```

* **Error Response:**

  - **Code:** 404 <br />
    **Content:**

    ```javascript
    err: "NOT FOUND",
    msg: "DATA NOT FOUND"
    ```

## ** Create new recipe**

Insert new recipe into database.

- **URL**

  /recipes/

- **Method:**

  `POST`

- **URL Params**
  **Required:**
  none

- **Data Params**
  instruction,
  UserId

- **Success Response:**

  - **Code:** 201 <br />
    **Content:**
    ```javascript
    data: ".....",
    msg: "create success"
    ```

* **Error Response:**

  - **Code:** 404 <br />
    **Content:**

    ```javascript
    err: "NOT FOUND",
    msg: "DATA NOT FOUND"
    ```

## ** Find user's recipe**

Search user's recipe.

- **URL**

  /recipes/

- **Method:**

  `GET`

- **URL Params**
  **Required:**
  none

- **Data Params**
  none

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**
    ```javascript
    data: ".....",
    msg: "find success"
    ```

* **Error Response:**

  - **Code:** 404 <br />
    **Content:**

    ```javascript
    err: "NOT FOUND",
    msg: "DATA NOT FOUND"
    ```

## ** Delete user's recipe**

Delete user's recipe by id.

- **URL**

  /recipes/:id

- **Method:**

  `DELETE`

- **URL Params**
  **Required:**
  id=[integer]

- **Data Params**
  none

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**
    none

* **Error Response:**

  - **Code:** 404 <br />
    **Content:**

    ```javascript
    err: "NOT FOUND",
    msg: "DATA NOT FOUND"
    ```
