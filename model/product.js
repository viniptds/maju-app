class Product
{
    constructor()
    {
        id: 0;
        name: "";
        description: "";
        price: 0;
        category: "";
    }

    constructor(name, description, price, category)
    {
        this();
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
    }

    getId()
    {
        return this.id;
    }

    getName()
    {
        return this.name;
    }

    getDescription()
    {
        return this.description;
    }

    getPrice()
    {
        return this.price;
    }

    getCategory()
    {
        return this.category;
    }
    
    setId(id)
    {
        if(id != null && id > 0)
        {
            this.id = id;
        }
    }
    
    setName(name)
    {
        if(name != null && name.length() > 0)
        {
            this.name = name;
        }
    }

    setDescription(description)
    {
        if(description != null && description.length() > 0)
        {
            this.description = description;
        }
    }

    setPrice(price)
    {
        if(price != null && price.length() > 0)
        {
            this.price = price;
        }
    }

    setCategory(category)
    {
        if(category != null)
        {
            this.category = category;
        }
    }

}