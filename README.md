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
> For BETTER_AUTH_URL & BETTER_AUTH_SECRET, read the installation guide for [BetterAuth environment variables](https://www.better-auth.com/docs/installation#set-environment-variables)
>
> For DATABASE_URL, if you want to run this repository with the same setup as mine, use a local postgres database. the sample variable for it is postgres://{username}:{password}@localhost:{portnumber}/{database_name} <br />
> where: <br />
> {username} = database username  <br />
> {password} = database password  <br />
> {portnumber} = database port  <br />
> {database_name} = database name
> 
> If you have a different setup for your database, read the installation guide on [Drizzle ORM](https://orm.drizzle.team/docs/get-started). You might need to change some codes on drizzle and its schema.
> The files can be found on drizzle.config.js(on the root folder) and src/db 

### B. Copying the files (for better auth with separate tables for customer and admin only)
1. Add the following Environment Variables on your .env file
```
BETTER_AUTH_URL=
BETTER_AUTH_SECRET=
```
2.  Copy the following files and/or folder in this repository to your project
```
src/app/api/customer/auth/[...all]/route.ts
src/app/api/admin/auth/[...all]/route.ts
src/db/schema/admin-auth.ts
src/db/schema/customer-auth.ts
src/lib/admin-auth.ts
src/lib/admin-authClient.ts
src/lib/customer-auth.ts
src/lib/customer-authClient.ts

// if you're using DrizzleORM and Postgres database
src/db/index.ts
drizzle.config.ts
```
> [!NOTE]
> This setup was done using NextJs, DrizzleORM and Postgres(local) database. If your using a different approach, read the installation guide for [BetterAuth](https://www.better-auth.com/docs/installation). You may need to update some codes and file locations to make it work.
> Just make sure that you have a different table names with the same table columns for both customer and admin users.
> 
> If you're using the same setup, make sure to copy the files to the correct directory.

### B. Implementing it by code (only for better auth with separate tables for customer and admin)
The guide is still in progress.

