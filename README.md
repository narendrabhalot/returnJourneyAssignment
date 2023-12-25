


# returnJourneyAssignment

## Task1
- clone git repo and run cd Task1  commond
  after run node Task1.js

  ## Task2
- clone git repo and run cd Task2  commond
  after run node Task2.js

  ## Task1
- clone git repo and run cd Task3  commond
  after run node Task3.js


## Task4

- clone git repo and run cd Task4  commond
and go inside src file and run npm start commond


- Product Model
```yaml
{ 
  title: {string, mandatory},
  description: {string, mandatory},
  price: {number, mandatory, valid number/decimal},
 
}


### for get all product 

  run this URL on server   "http://localhost:3000/api/products"

  response: {
        "id": 1,
        "name": "Product 1",
        "description": "Description 1",
        "price": 10
    },

## Products API (
### POST /products
- Create a product document from request body.

- __Response format__
  - _**On success**_ - Return HTTP status 201. Also return the product document. The response should be a JSON object like [this](#successful-response-structure)
  - _**On error**_ - Return a suitable error message with a valid HTTP status code. The response should be a JSON object like [this](#error-response-structure)

### GET /products
- Returns all products in the collection 

using 
 
    
    


### GET /products/:productId
using this api 
  "http://localhost:3000/api/products/1"

- Returns product details by product id
- __Response format__
  - _**On success**_ - Return HTTP status 200. Also return the product documents. The response should be a JSON object like [this](#successful-response-structure)
  - _**On error**_ - Return a suitable error message with a valid HTTP status code. The response should be a JSON object like [this](#error-response-structure)

### PUT /products/:productId
- using this api 
  "http://localhost:3000/api/products/1"

### DELETE /products/:productId
-
- using this api 
  "http://localhost:3000/api/products/1"






