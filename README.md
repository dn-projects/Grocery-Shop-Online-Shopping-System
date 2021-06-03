# Grocery shop online shopping system initial prototype
This application is a prototype system to demonstrate the structure of an e-commerce implementation for a client.
The prototype has been developed to give a client a better understanding, what a potential e-commerce system would look like
and what the structure is like. The application is not considered a final product regarding design and functionality but rather 
a sample that the client can use to understand how the admin and web page structure would work.

- The admin username for the prototype: `admin`
- The admin password for the prototype: `admin`

*ps. new stock will have to be added on [http://localhost:8080/adminSystem.html#/stock](http://localhost:8080/adminSystem.html#/stock)
for stock to appear on [http://localhost:8080](http://localhost:8080)*

## How to run the application

1. Visit [https://nodejs.org/en/download/](https://nodejs.org/en/download/) and
download the correct version of node.js for your machine.
2. Visit [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community) and 
download the correct version of MongoDB for your machine.
3. After downloading ***node.js*** and ***MongoDB*** on to your machine follow the steps below for your machines operating system
 
### Mac users:
1. Open a new ***Terminal*** window by pressing `command+space` to open ***Spotlight Search*** 
and then entering *'terminal'* into the search box
2. In the ***Terminal*** window enter the command `mongod`and press `enter`
3. Open a second ***Terminal*** tab by pressing `command+T`
4. In the second ***Terminal*** tab using the `cd` command, navigate to the directory where the **server.js** file is saved
5. In the second ***Terminal*** tab enter the command `node server.js`and press `enter` 
6. Head to [http://localhost:8080/admin.html](http://localhost:8080/admin.html) to see the admin system
7. Head to [http://localhost:8080](http://localhost:8080) to see the web page linked to the inventory system

### Windows users:
1. Open a new ***Command Prompt*** window by pressing the `Win` key and typing *'Command Prompt'* then press `enter` to run
2. In the ***Command Prompt*** window enter the command `mongod`and press `enter`
3. Open a second ***Command Prompt*** window by following step 1 from Windows users
4. In the second ***Command Prompt*** window using the `cd` command, navigate to the directory where the **server.js** file is saved
5. In the second ***Command Prompt*** window enter the command `node server.js`and press `enter`
6. Head to [http://localhost:8080/admin.html](http://localhost:8080/admin.html) to see the admin system
7. Head to [http://localhost:8080](http://localhost:8080) to see the web page linked to the inventory system
