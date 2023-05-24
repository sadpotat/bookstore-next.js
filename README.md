# bookstore-next.js

This project is a book e-commerce store ceated using Next.js, [MongoDB](https://www.mongodb.com/) and [Material UI](https://mui.com/). 

</br>

To run this project on your machine, clone it to your git repository first:  

```bash
 $ git clone https://github.com/sadpotat/bookstore-next.js.git
 ```
 </br>
 
Then, in the terminal or in Git Bash, navigate to the `bookstore3` folder and install all dependencies. I am using npm here:  

```bash
$ cd bookstore3
$ npm install
```
</br>

Next, run the development environment:  

```bash
$ npm run dev
```

Now navigate to http://localhost:3000 on any browser and you should see the site.

</br>

# The Backend

The entire database is hosted on **MongoDB**. All database requests are sent using the [Axios package](https://axios-http.com/).

I am currently hosting the project's data on my own MongoDB account. The uploaded files already contain a user and password for connecting to the collection. So for now, you will not need your own MongoDB account for running this project. **However, this account only has `find` permissions for the collection, so the `ADD`, `EDIT` and `DELETE` features will not work for you.**

If you are unable to connect, that might mean that I am no longer hosting the database. In that case, you will need a [MongoDB account](https://www.mongodb.com/cloud/atlas/register) to host your data. For reference, I have a copy of the collection containing book data at `bookstore3/sample_db.json`.

</br>

# The Frontend

The user interface uses **Material UI**.


## Home

<img src="https://github.com/sadpotat/bookstore-next.js/blob/main/for_readme/Home.JPG?raw=true">

## Browse by Categories

<img src="https://github.com/sadpotat/bookstore-next.js/blob/main/for_readme/Category.JPG?raw=true">

## All Books

<img src="https://github.com/sadpotat/bookstore-next.js/blob/main/for_readme/AllBooks.JPG?raw=true">

## Details

Here, the browser tab was zoomed out to capture all elements in the page.

<img src="https://github.com/sadpotat/bookstore-next.js/blob/main/for_readme/BookDetail.JPG?raw=true">

</br>

# Features

## Sorting results

As of now, query results can be sorted by book title, author and price in the ascending order. The following is a list sorted by price:

<img src="https://github.com/sadpotat/bookstore-next.js/blob/main/for_readme/AllBooksByPrice.JPG?raw=true">

</br>

## Add items to the database 

This page was initially intended to be accessible by the Admin account only. As I have not been able to implement User Registration/Authentication yet, this was left unrestricted. 

<img src="https://github.com/sadpotat/bookstore-next.js/blob/main/for_readme/Add.JPG?raw=true">

</br>

<details>
  <summary> How books are added to the database </summary>
  
  </br>
  
 Data written into form fields is sent as an object with a PUT request to the MongoDB cluster via the backend API:

<img src="https://github.com/sadpotat/bookstore-next.js/blob/main/for_readme/AddSuccess.JPG?raw=true">

The new books, cards and details page are dynamically generated from newly fetched data:

<img src="https://github.com/sadpotat/bookstore-next.js/blob/main/for_readme/AddedBookInLibrary.JPG?raw=true">

<img src="https://github.com/sadpotat/bookstore-next.js/blob/main/for_readme/AddedBookDetail.JPG?raw=true">

</details>

</br>

## Edit items in the database 

This page was also intended to be accessible by the Admin account only. As I have not been able to implement User Registration/Authentication yet, this was left unrestricted. 

<!-- <img src="https://github.com/sadpotat/bookstore-next.js/blob/main/for_readme/Edit.JPG?raw=true"> -->

</br>

<details>
  <summary> How items are edited </summary>
  
  </br>
  
The `EDIT` button at the bottom of the `details/{id}` page leads to a form with the properties of the item. Pressing `SUBMIT` sends a POST request to the MongoDB cluster via the backend API:
  
<img src="https://github.com/sadpotat/bookstore-next.js/blob/main/for_readme/EditSuccess.JPG?raw=true">

Redirects back to the details page which is dynamically generated again:

<img src="https://github.com/sadpotat/bookstore-next.js/blob/main/for_readme/EditedBookDetail.JPG?raw=true">
  
</details>

</br>

## Delete items from the database 

This page was also intended to be accessible by the Admin account only. As I have not been able to implement User Registration/Authentication yet, this was left unrestricted. 

</br>

<details>
  <summary> How items are deleted </summary>
  
  </br>
  
The `DELETE` button at the bottom of the `details/{id}` page sends a DELETE request to the MongoDB cluster via the backend API:
  
<img src="https://github.com/sadpotat/bookstore-next.js/blob/main/for_readme/DeleteSuccess.JPG?raw=true">

Redirects to the All Books page which now does not contain the deleted book:

<img src="https://github.com/sadpotat/bookstore-next.js/blob/main/for_readme/Deleted.JPG?raw=true">
  
</details>

</br>

# Yet to be implemented

Some other features I have planned are:
- Searchbar
- User authentication and registration
- Admin, Moderator and User accounts
- Moderators only have Edit previliges
- Store/modify User information in a separate collection
- Shopping cart
- Payment methods

</br>

# Credits

- Book data
  - [Adventure](https://reedsy.com/discovery/blog/best-adventure-books)
  - [Fiction](https://www.goodreads.com/shelf/show/top-10-fiction)
  - [Mystery](https://reedsy.com/discovery/blog/best-mystery-books)
  - [Science Fiction](https://www.panmacmillan.com/blogs/science-fiction-and-fantasy/best-new-science-fiction-books#best-scifi-books-of-all-time)
  - [Young Adult](https://reedsy.com/discovery/blog/young-adult-books)
- Animations
  - Book cover hover effect: [@yoann-b on Codepen](https://codepen.io/yoann-b/pens/public?cursor=ZD0xJm89MCZwPTEmdj01NzI0NjIzMg==)

