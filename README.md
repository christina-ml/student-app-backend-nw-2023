## TODOs
1. Create a server with a healthcheck route
    - install Express
    - create server.js
    - create app.js
    - create our get / handler (healthcheck route)
    - listen on a port
    - listen on a port determined by an `env` variable

2. Create a /students route

3. Create a /students/:id route

## Questions to answer
### Creating a server
Why did Jordan set the main entry point to "app" instead of "server" in the package.json and is there a difference?

What is the difference between response.send("Hello world!") and the response.json?
`Answer:` [http://expressjs.com/en/5x/api.html#req](http://expressjs.com/en/5x/api.html#req)

If the request gets an error, does it ever make it to the server or does it get an error before it gets to it? What if a request causes an error and express is no longer running? How are we going to handle this issue?

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