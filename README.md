# questions 2-19-23 sunday

- Why does Postgres not have an array data type?
    It's not the proper way to store it in a relational database.

- MongoDB is a non-relational database that stores gigantic javascript objects

- In relational databases like Postgres - storing arrays is something you should never do.
- Postgres has an array data type, but don't.
- You should not do it.

Instead, this is the correct way to do this:
Two separate tables:
- students table
- grades table

students: `id`, email ,firstName, lastName
grades: id, `student_id`, score
    - `student_id` is the foreign key
    Example: The grade with id 1, score of 78, foreign key of student_id 1 to correspond with: the students table -> student with id 1
    
- How long did it take to move the grades into a separate json file?

Q: If you wanted to give each student additional skills, how would you store that in a relational database?
    A: It would be similar to what we did with grades, and you would need a separate json file for the skills that are connected to each user by a foreign key. That way you could add as many or as few skills for each user.

- Why does VS code rename the module.exports as `getStudentById: getStudentByIdV2` when using the keyboard shortcut to rename the query name to `getStudentByIdV2`?
And the studentsControllerV2 has no weird export and gives us what we want: `module.exports = studentsControllerV2`? (00:57:59)

- Why do we rename the route for v2 in App.js as `/v2/students` and not `/students/v2` ? (01:02:30)
Q: How do you version your API and why would you want to do that?
A: you need to version your API so you can make changes and not break clients
When it's ready, you can upgrade to v2. This way you won't break the frontend or other people's clients.

(01:04:53) Testing endpoints:
shows students with grades (original data)
// http://localhost:8888/students
// http://localhost:8888/students/4

shows students without the grades (using v2 data of only students)
// http://localhost:8888/v2/students
// http://localhost:8888/v2/students/4


Queries:
Example: http://localhost:8888/v2/students?start=0&end=100&limit=34&name=Mike
everything after the question mark
gets represented as a JavaScript object
console.log for request.query: `{ start: '0', end: '100', limit: '34', name: 'Mike' }`

http://localhost:8888/v2/students?include=grades
param called `include` and the name of the table `grades`
the API will return that related resource
- The way the API returns it, is it adds a key, such as a grades key, to the student, and is embedded in there.


(01:17:09)
for iterating through the grades `(const grades of grades){}`
- is there a better variable name than calling it `grades of grades`?

Also, the variable 'grades' is not being used in the for loop from:
`const { grades } = gradesDataV2;`

the json files were made by Mike using a script.


Is Mike in the wrong file? studentsQueries.js instead of studentsQueriesV2.js (01:24:46)

Next week - deploy our backend to Render
Working on our database
Can't use databases in Render, so we will use ElephantSQL for our database
Create our tables, populate our tables with students and grades
Take our queries and replace those with SQL queries. (Queries that we've written before)

- Testing `studentsQueriesV2.js` -> `getAllStudentsWithGradesV2(id)`
`http://localhost:8888/v2/students?include=grades`
should give us all students with their grades

## TODOs
1. Create a server with a healthcheck route
    - install Express
    - create server.js
    - create app.js
    - create our get / handler (healthcheck route)
    - listen on a port
    - listen on a port determined by an `env` variable

2. Create a /students route (in `app.js`)
    - grab the hard-coded data from the demo prompt API and create a json file
    - create the GET /students route handler
    - add try/catch to handle errors

3. Create a /students/:id route

## Questions to answer
### Creating a server
Why did Jordan set the main entry point to "app" instead of "server" in the package.json and is there a difference?

What is the difference between response.send("Hello world!") and the response.json?
`Answer:` [http://expressjs.com/en/5x/api.html#req](http://expressjs.com/en/5x/api.html#req)

Should we gitignore the .env file?
`Answer:` Yes

If the request gets an error, does it ever make it to the server or does it get an error before it gets to it?

What if a request causes an error and express is no longer running? How are we going to handle this issue?

### Building routes
why is it important to have a return inside of an if block when you already have a response? Is there a specific order we have to write our routes in our controllers?

```
npm i
```

Create `index.js` file

```
git init
git add .
git status
git commit -m "Initialize npm repo for server"
```

Go to [GitHub](https://github.com/) and make a repository
Push code to GitHub

## Express.js
```
npm install express
```

Add script to `package.json` file:
`"start": "node server.js",`

## Dotenv
```
npm install dotenv
```

`const PORT = process.env.PORT || 9000;`
can run something like this:
```
PORT=5001 node server.js
```

OR

add dotenv to `server.js`

# Connecting the backend to the frontend
## install cors
```
npm install cors
```


# Frontend (separate repo)
```
npx create-react-app student-app-frontend-nw-2023
```