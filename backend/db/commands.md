# Model Generation

## User
npx sequelize model:generate --name User --attributes username:string,email:string,hashedPassword:string

## Tag
npx sequelize model:generate --name Tag --attributes userId:integer,title:string

## Property
npx sequelize model:generate --name Property --attributes lat:text,long:text,userId:integer,tagId:integer

## Note
npx sequelize model:generate --name Note --attributes description:string,completed:boolean,dueDate:dateonly,body:string,propertyId:integer
