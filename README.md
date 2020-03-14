# Jamstack Todos

## Fauna Database

- go to fauna.com
- Create a database
- Get the fauna db key and put it into .env file as FAUNA_SERVER_SECRET="YOURKEYHERE"
- Locally, create a graphql schema
- Go to GraphQL tab and upload your schema

## Wire it up to Netlify

- Make a netlify toml file (below)
-

```toml
# netlify.toml
[build]
  functions = "functions"

[[redirects]]
  from = 'api/*'
  to = 'netlify/functions/:splat'
  status = 200
```
