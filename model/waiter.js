class Waiter
{
    constructor()
    {
        id: 0;
        name: "";
        perc_tip: 0;
    }
    
    constructor(name, perc_tip)
    {
        this();
        this.name = name;
        this.perc_tip = perc_tip;
    }

    getId()
    {
        return this.id;
    }

    getName()
    {
        return this.name;
    }

    getPerc_Tip()
    {
        return this.perc_tip;
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

    setPercTip(perc_tip)
    {
        if(perc_tip != null && perc_tip >= 0)
        {
            this.perc_tip = perc_tip;
        }
    }
    
}