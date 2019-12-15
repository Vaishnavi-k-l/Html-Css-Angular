function displaytype<T, U>(id: T, name : U) : void
{
    console.log(`id: ${id} (type : ${typeof id})`)
    console.log(`name : ${name} (type : ${typeof name})`);
}

displaytype<number, string>(1, "Steve");