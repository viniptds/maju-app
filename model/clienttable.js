class ClientTable
{
    constructor()
    {
        id: 0;
        number: 0;
        amount: 0;
        arrive: Date.now();
        leave: "";
        items: [];
    }

    constructor(number)
    {
        this();
        this.number = number;
    }

}