const player = (name)=>{
    
    if(typeof player.ids == "undefined"){
        player.ids = 0;
    }else{
        player.ids++;
    }

    let _name = name;
    let _id = player.ids;

    return{
        getName:()=>_name,
        getId:()=>_id
    };
}
