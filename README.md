# BetterAuth Customer Admin Login

A role-based authentication system that supports separate login flows and database tables for Admin and Customer users — all powered by a single, unified authentication library: BetterAuth.

This setup is ideal for applications that require different user roles with isolated data models but want to keep authentication logic clean, reusable, and secure.


## 🔑 Features
* 🔐 Single authentication library (BetterAuth)
* 👥 Separate tables/models for Admin and Customer
* 🔄 Independent login flows

<br />

## 🚀 Tech Stack
* BetterAuth (authentication library)
* NextJs
* DrizzleORM
* Database: PostgreSQL

<br />

## 📦 Installation
### A. Download Repository
1. Open terminal
2. Go to the directory you want to install the repo
3. Clone this repo
```
git clone https://github.com/derrekdev/betterauth-customer-admin-login.git
```
4. Add .env file on the root directory
5. Add the following Environment Variables
```
BETTER_AUTH_URL=
BETTER_AUTH_SECRET=
DATABASE_URL=
```
> [!NOTE]
> For BETTER_AUTH_URL & BETTER_AUTH_SECRET, read the installation guide for [better auth environment variables](https://www.better-auth.com/docs/installation#set-environment-variables)
>
> For DATABASE_URL, if you want to run this repository with the same setup as mine, use a local postgres database. the sample variable for it is postgres://{username}:{password}@localhost:{portnumber}/{database_name} <br />
> where: <br />
> {username} = database username  <br />
> {password} = database password  <br />
> {portnumber} = database port  <br />
> {database_name} = database name
> 
> If you have a different setup for your database, read the installation guide on [Drizzle ORM](https://orm.drizzle.team/docs/get-started). You might need to change some codes on drizzle and its schema.

### B. Copying the files
1.  Copy the following files in this repository to your project
