# Book Spy Project
This project is a simple browser based application that was built to improve my understanding of interacting with API's (both locally, and external API's from the internet). In short, I make a call to the Goodreads.com API when someone searches for a keyword and then return results based on that query. From there, I save the results in my application on the server side and make other calls to my internal API to manipulate the data. The user can save their favorite books to a separate section of the application or delete books from that list as well. In addition, users can edit the title of the application using the 'change title' functionality. Since there is no database, the changes only last until someone navigates away from the page. All of the routing is mocked by using conditional rendering as I didn't know how to use react router at the time of building this project.

## Technologies
* **React** - Model View Controller JavaScript library
* **Node.js** - Server-side JavaScript environment
* **Express** - Server
* **Goodreads.com API** - Queried to provide information about authors and book titles

## Screenshots
### Landing Page
![Landing Page](https://i.imgur.com/NO426Cs.png)

### Search Results View
![Search Results View](https://i.imgur.com/1HkXsNg.png)

### Favorites View
![Favorites Page](https://i.imgur.com/RlvPJxV.png)

### Edit Title View
![Edit Title View](https://i.imgur.com/t81EFS8.png)
