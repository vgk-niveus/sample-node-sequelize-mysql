# sample-node-sequelize-mysql
Framework for a node.js application with sequelize ORM with mysql

# Steps to run the app
1. execute the extras\dbscript\testdb.sql script to create the database
2. verify app\config\db.config.js and update your db properties
3. npm install
4. npm start

# Steps to test the app

# Creating a tutorial
curl --location --request POST 'http://localhost:8080/api/tutorials' \
--header 'Content-Type: application/json' \
--data-raw '{
    "title":"JS TUTO",
    "description" : "Description of tutorials on JS"
}

# Retrieving all created tutorials
curl --location --request GET 'http://localhost:8080/api/tutorials' \
--header 'Content-Type: application/json' \
--data-raw '{
    "title":"JS TUTO",
    "description" : "Description of tutorials on JS"
}

Credits :: https://bezkoder.com/node-js-express-sequelize-mysql/