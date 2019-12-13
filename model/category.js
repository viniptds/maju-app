class Category
{
    constructor()
    {
        id: 0;
        name: "";
        this.getId() = new Event(this);
        this.getName() = new Event(this);
        this.setId() = new Event(this);
        this.setId() = new Event(this);
    }

    constructor(name)
    {
        this();
        this.name = name;
    }
    
    getId()
    {
        return this.id;
    }

    getName()
    {
        return this.name;
    }
    
    setName(name)
    {
        if(name != null && name.length() > 0)
        {
            this.name = name;
        }
    }

    setId(id)
    {
        if(id != null && id > 0)
        {
            this.id = id;
        }
    }

}