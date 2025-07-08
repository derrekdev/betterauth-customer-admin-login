# BetterAuth Customer Admin Login

A authentication system that supports separate login flows and database tables for Admin and Customer users — all powered by a single, unified authentication library: BetterAuth.

This setup is ideal for applications that require different user roles with isolated data models but want to keep authentication logic clean, reusable, and secure.


## 🔑 Features
* 🔐 Single authentication library (BetterAuth)
* 👥 Separate tables/models for Admin and Customer
* 🔄 Independent login flows

<br />

## 🚀 Tech Stack
* BetterAuth
* NextJs
* DrizzleORM
* Database: PostgreSQL

<br />

## 📦 Installation
### A. Download Repository
<br />
1. Open terminal
<br />
<br />
2. Go to the directory you want to install the repo
<br />
<br />
3. Clone this repo
<br />

```
git clone https://github.com/derrekdev/betterauth-customer-admin-login.git
```
<br />
4. Add .env file on the root directory
<br />
<br />
5. Add the following Environment Variables
<br />

```
BETTER_AUTH_URL=
BETTER_AUTH_SECRET=
DATABASE_URL=
```
> [!NOTE]
> For BETTER_AUTH_URL & BETTER_AUTH_SECRET, read the installation guide for [BetterAuth environment variables](https://www.better-auth.com/docs/installation#set-environment-variables)
>
> For DATABASE_URL, if you want to run this repository with the same setup, use a local postgres database. the sample variable for it is postgres://{username}:{password}@localhost:{portnumber}/{database_name} <br />
> where: <br />
> {username} = database username  <br />
> {password} = database password  <br />
> {portnumber} = database port  <br />
> {database_name} = database name
> 
> If you have a different setup for your database, read the installation guide on [Drizzle ORM](https://orm.drizzle.team/docs/get-started). You might need to change some codes on drizzle and its schema.
> The files can be found on drizzle.config.js(on the root folder) and src/db 

### B. Copying the files (for better auth with separate tables for customer and admin only)
<br />
1. Add the following Environment Variables on your .env file
<br />

```
BETTER_AUTH_URL=
BETTER_AUTH_SECRET=
```
<br />
2.  Copy the following files and/or folder in this repository to your project
<br />

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
<br />
1. Install BetterAuth on your project.
<br />
<br />
2. Add the following Environment Variables on your .env file

```
BETTER_AUTH_URL=
BETTER_AUTH_SECRET=
```
> [!NOTE]
> For BETTER_AUTH_URL & BETTER_AUTH_SECRET, read the installation guide for [BetterAuth environment variables](https://www.better-auth.com/docs/installation#set-environment-variables)
<br />
3. Create a file named customer-auth.ts, customer-authClient.ts, admin-auth.ts and admin-authClient.ts and save it in one of these locations:
<br />

```
Project root
lib/
utils/
```
> [!NOTE]
> If you have a different path location, read the installation guide for [BetterAuth instance](https://www.better-auth.com/docs/installation#create-a-better-auth-instance)
<br />
4. add this code for customer-auth.ts and admin-auth.ts.
<br />
<br />

customer-auth.ts: 
```
import { betterAuth } from "better-auth";

export const customerAuth = betterAuth({
  //...
})
```
admin-auth.ts: 
```
import { betterAuth } from "better-auth";

export const adminAuth = betterAuth({
  //...
})
```
<br />
5. Configure and connect your database to customerAuth(customer-auth.ts) and adminAuth(admin-auth.ts):
<br />
<br />

sample code using DrizzleORM
```
export const customerAuth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
});
```
> [!NOTE]
> This code work using DrizzleORM and Postgres Database. You might need to updated your configuration when using a different approach. Read the [BetterAuth Configure Database](https://www.better-auth.com/docs/installation#configure-database).
>
> Also don't forget to apply it on both customer-auth.ts and admin-auth.ts files.
<br />
6. Create database table schema for both customer and admin. Check the following files on this repository to copy the table schema structure.
<br />
<br />

customer schema:
```
/src/db/schema/customer-auth.ts
```
admin schema:
```
/src/db/schema/admin-auth.ts
```

Make sure that both customer's and admin's schema variables and table names are different. No need to change the column/field names on both tables. This will determine which table the data will be saved during the Authentication Process of BetterAuth.
<br />
<br />
Example of customer's schema and table name:
```
export const customerUser = pgTable("customer-user", {
  //...
});

export const customerSession = pgTable("customer-session", {
  //...
});

export const customerAccount = pgTable("customer-account", {
  //...
});

export const customerVerification = pgTable("customer-verification", {
  //...
});
```

Example of customer's schema and table name:
```
export const adminUser = pgTable("admin-user", {
  //...
});

export const adminSession = pgTable("admin-session", {
  //...
});

export const adminAccount = pgTable("admin-account", {
  //...
});

export const adminVerification = pgTable("admin-verification", {
  //...
});
```
> [!NOTE]
> This is using DrizzleORM and Postgres database, you might need to update your codes when adding your schema.

Also make sure that you add this variable for both customer and admin schema. Make sure that it matches the table name.

Variable under customer schema.
```
export const customerUserAuthenticationSchema = {
  user: customerUser,
  session: customerSession,
  account: customerAccount,
  verification: customerVerification,
};
```

Variable under admin schema.
```
export const adminUserAuthenticationSchema = {
  user: adminUser,
  session: adminSession,
  account: adminAccount,
  verification: adminVerification,
};
```
<br />
7. Connect your schema to your Auth instance for customerAuth(customer-auth.ts) and adminAuth(admin-auth.ts) under the database option.
<br />
<br />

customer-auth.ts
```
import { betterAuth } from "better-auth";

export const customerAuth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: customerUserAuthenticationSchema,
  }),
})
```
admin-auth.ts: 
```
import { betterAuth } from "better-auth";

export const adminAuth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: adminUserAuthenticationSchema,
  }),
})
```
> [!NOTE]
> This is using DrizzleORM and Postgres database, you might need to update your codes on your database option.
<br />
8. Add this client instance code for customer-authClient.ts and admin-authClient.ts.
<br />
<br />

customer-authClient.ts
```
import { createAuthClient } from "better-auth/react";

export const customerAuthClient = createAuthClient();
```
admin-authClient.ts
```
import { createAuthClient } from "better-auth/react";

export const adminAuthClient = createAuthClient();
```
<br />
9. Add the Mounth Handler for Customer and Admin. This should have a seperate directory.
<br />
<br />

Customer Mount Handler File Location:
```
/src/app/api/customer/auth/[...all]/route.ts
```
Admin Mount Handler File Location:
```
/src/app/api/admin/auth/[...all]/route.ts
```
> [!NOTE]
> This file location is using NextJS App Router, you might need to change it's directory if your using a different framework.
>
> Also for NextJs, make sure that the last path is <b>auth/[...all]</b>. This will make BetterAuth work and not cause issues. <br />
> Ex: /src/app/api/some/url/path/<b>auth/[...all]/route.ts</b>

<b>Customer Mount Handler code:</b>
```
import { customerAuth } from "@/lib/customer-auth"; // path to your auth file
import { toNextJsHandler } from "better-auth/next-js";

export const { POST, GET } = toNextJsHandler(customerAuth);
```

<b>Admin Mount Handler code:</b>
```
import { adminAuth } from "@/lib/customer-auth"; // path to your auth file
import { toNextJsHandler } from "better-auth/next-js";

export const { POST, GET } = toNextJsHandler(adminAuth);
```
> [!NOTE]
> Make sure your are using the the customerAuth for the custoemr Mount Handler and adminAuth for the admin Mount Handler.
<br />
10. Connect the Mount Handler using BasePath option to customer-auth.ts, customer-authClient.ts, admin-auth.ts and admin-authClient.ts instances.
<br />
<br />

customer-auth.ts
```
export const customerAuth = betterAuth({
  database: //... ,
  basePath: "/api/customer/auth",
});
```

admin-auth.ts
```
export const adminAuth = betterAuth({
  database: //... ,
  basePath: "/api/admin/auth",
});
```

customer-authClient.ts
```
export const customerAuthClient = createAuthClient({
  basePath: "/api/customer/auth",
});
```

admin-authClient.ts
```
export const adminAuthClient = createAuthClient({
  basePath: "/api/admin/auth",
});
```

> [!NOTE]
> Make sure your are using the correct URL path for both customer and admin instance.
> 
> If you want to check if you your Mount Handler is working type the ff URL on your browser: <br />
> customer: http://localhost:3000/api/customer/auth/ok <br />
> admin: http://localhost:3000/api/admin/auth/ok
> 


