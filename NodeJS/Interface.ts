interface User
{
    name: string;
    age?:number;  //optional
}

function greet(user: User)
{
    console.log('Hello ' + user.name);
}

function show(useer: User)
{
    console.log('Name: ' + useer.name );
}

const user =
{
    name : 'Vaish'
};

greet(user);

const customer1 =
{
    firstName: 'Adsd'
};

greet(customer1);

const customer =
    {
        name: 'Adlin'
    };

