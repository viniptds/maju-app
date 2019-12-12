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

    setPercTip(perc_tip)
    {
        this.perc_tip = perc_tip;
    }

}