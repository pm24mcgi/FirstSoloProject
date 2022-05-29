# Model Generation

## User
npx sequelize model:generate --name User --attributes username:string,email:string,hashedPassword:string

## Tag
npx sequelize model:generate --name Tag --attributes userId:integer,title:string

## Property
npx sequelize model:generate --name Property --attributes lat:text,long:text,userId:integer,tagId:integer

## Note
npx sequelize model:generate --name Note --attributes description:string,completed:boolean,dueDate:dateonly,body:string,propertyId:integer






# Seed Generation

## User
npx sequelize-cli seed:generate --name UsersSeed

## Tag
npx sequelize-cli seed:generate --name TagsSeed

## Property
npx sequelize-cli seed:generate --name PropertiesSeed

## Note
npx sequelize-cli seed:generate --name NotesSeed
