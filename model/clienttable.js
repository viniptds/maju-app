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

    getNumber()
    {
        return this.number;
    }

    getId()
    {
        return this.id;
    }

    getAmount()
    {
        return this.amount;
    }

    getArrive()
    {
        return this.arrive;
    }

    getLeave()
    {
        return this.leave;
    }

    getItems()
    {
        return this.items;
    }

    setId(id)
    {
        if(id != null && id > 0)
        {
            this.id = id;
        }
    }

    setNumber(number)
    {
        if(number != null && number > 0)
        {
            this.number = number;
        }
    }

    setAmount(amount)
    {
        if(amount != null && amount > 0)
        {
            this.amount = amount;
        }
    }

    setArrive(arrive)
    {
        if(arrive != null && arrive > 0)
        {
            this.arrive = arrive;
        }
    }

    setArrive(leave)
    {
        if(leave != null && leave > 0)
        {
            this.leave = leave;
        }
    }

    setItems(items)
    {
        if(items != null)
        {
            this.items = items;
        }
    }

    addItem(item)
    {
        if(item != null)
        {
            this.items.push(item);
        }
    }

    updateAmount()
    {
        let amount = 0;
        this.items.forEach(element => {
            amount = element.price;
        });
        this.setAmount(amount);
    }
}