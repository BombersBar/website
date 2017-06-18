function formatNumber(n){
    return n.toFixed(1).replace(/\.?0+$/,"");
}

export default function formatIskAmount(amount){
    if(amount > 1e9){
        amount /= 1e9;
        return formatNumber(amount) + " bil"
    }

    if(amount > 1e6){
        amount /= 1e6;
        return formatNumber(amount) + " mil"
    }

    if(amount > 1e3){
        amount /= 1e3;
        return formatNumber(amount) + "k"
    }

     return amount;
}