const game = (player1 , player2)=>{
    
    const PLAYING = "playing",
    FINISHED = "finished",
    TIE = "tie";
    
    let _size = 3;
    let _stat = PLAYING;
    let _player1 = player1; // with X char 
    let _player2 = player2; // with O char
    let _winer = TIE;
    let _board = new Array(_size);

    for(let i = 0;i<_size;i++){
        _board[i] = new Array(_size);
    }

    const play = (player , x , y)=>{
        if(_board[x][y] != undefined){
            return -1;
        }
        if(player.getId() == _player1.getId()){
            _board[x][y] = 'X';
        }else{
            _board[x][y] = 'O';
        }
        return _check();
    };

    const _checkI =(i , j)=>{
        if(_board[i-1][j] === _board[i+1][j] && _board[i+1][j] === _board[i][j]
            && _board[i][j] != undefined){
            _stat = FINISHED;
            if(_board[i][j] === 'X'){
                _winer = _player1;  
                return 1;
            }else{
                _winer = _player2;
                return 2;
            }
        }
        return 0;
    };

    const _checkJ = (i , j)=>{
        if(_board[i][j-1] === _board[i][j+1] && _board[i][j] === _board[i][j+1]
            && _board[i][j] != undefined){
            _stat = FINISHED;
            if(_board[i][j] === 'X'){
                _winer = _player1;  
                return 1;
            }else{
                _winer = _player2;
                return 2;
            }
        }
        return 0;
    };

    const _checkIJ = (i , j)=>{
        if( (_board[i+1][j+1] === _board[i-1][j-1] && _board[i-1][j-1] === _board[i][j])
        || (_board[i+1][j-1] === _board[i-1][j+1] && _board[i-1][j+1] === _board[i][j]) ){

            if(_board[i][j] === undefined){
                return 0;
            }
            _stat = FINISHED;
            if(_board[i][j] === 'X'){
                _winer = _player1;  
                return 1;
            }else{
                _winer = _player2;
                return 2;
            }  
        }
        return 0;
    }
    const _check = ()=>{
        for(let i = 0;i<_size;i++){
            for(let j = 0;j<_size;j++){
                if(i === 1){
                    let res = _checkI(i , j);
                    if(res != 0){
                        return res;
                    }   
                }
                if(j === 1){
                    let res = _checkJ(i , j);
                    if(res!= 0){
                        return res;
                    }
                }
                if(i === j && j === 1){
                    let res = _checkIJ(i , j);
                    if(res!= 0){
                        return res;
                    }   
                }
            }
        }
        return 0;
    };
    return{
        play,
        getStat: ()=>_stat,
        getWiner: ()=>_winer,
        getBoard:()=>_board
    };
}
