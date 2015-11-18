var board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];
var turn = 0;
var net = new brain.NeuralNetwork({
        hiddenLayers: [8],
        learningRate: 0.6 // global learning rate, useful when training using streams
    });
var net2 = new brain.NeuralNetwork({
        hiddenLayers: [8],
        learningRate: 0.6 // global learning rate, useful when training using streams
    });

var data = eval($(".data").html());

function f3(n) {
    return Math.floor(n * 4) / 4;
}

function pickPos1() {

    //this.p1.push(result);

    utils.fetchBoard();

    // show the "Train network" button after we've selected a few entries

    //$("#test-box").show();
    //alert("done");

    var t = net.run(board);
    for (var x = 1; x < 5; x++) {
        for (var y = 1; y < 5; y++) {
            var cur = [];
            var i = 0;
            for (var m = 1; m < 5; m++) {
                cur[m - 1] = [];
                for (var l = 1; l < 5; l++) {
                    cur[m - 1][l - 1] = parseInt($("#board #x" + m + "y" + l).attr("value")) / 2;
                    i++;
                }
            }
            //console.log(tempBd);
            if (getPos(x, y, cur) == 0) {
                cur[x - 1][y - 1] = 1;
                //console.log(game_over(tempBd) );
                if (game_over(cur) == 1) {
                    console.log(game_over(cur));
                    t.x = Math.floor((x - 1)) / 4;
                    t.y = Math.floor((y - 1)) / 4;
                    console.log(t.x + "," + t.y + "," + utils.isGoodMove(Math.floor(t.x * 4 + 1), Math.floor(t.y * 4 + 1)));
                }
            }

        }
    }
    for (var x = 1; x < 5; x++) {
        for (var y = 1; y < 5; y++) {
            var cur = [];
            var i = 0;
            for (var m = 1; m < 5; m++) {
                cur[m - 1] = [];
                for (var l = 1; l < 5; l++) {
                    cur[m - 1][l - 1] = parseInt($("#board #x" + m + "y" + l).attr("value")) / 2;
                    i++;
                }
            }
            //console.log(tempBd);
            if (getPos(x, y, cur) == 0) {
                cur[x - 1][y - 1] = 0.5;
                //console.log(game_over(tempBd) );
                if (game_over(cur) == 0.5) {
                    console.log(game_over(cur));
                    t.x = Math.floor((x - 1)) / 4;
                    t.y = Math.floor((y - 1)) / 4;
                    console.log(t.x + "," + t.y + "," + utils.isGoodMove(Math.floor(t.x * 4 + 1), Math.floor(t.y * 4 + 1)));
                }
            }

        }
    }

    /* for (var x = 1; x < 5; x++) {
        for (var y = 1; y < 5; y++) {
            var tempBd = board.concat([]);
            //console.log(tempBd);
            if (getPos(x, y, tempBd) == 0) {
                setPos(x, y, tempBd, 0.5);
                if (game_over(tempBd) == 1 || game_over(tempBd) == 0.5) {
                    t.x = Math.floor((x - 1) * 4) / 4;
                    t.y = Math.floor((y - 1) * 4) / 4;
                    //console.log(t);
                }
            }
        }
    }*/
    var m = "#board #x" + Math.floor(t.x * 4 + 1) + "y" + Math.floor(t.y * 4 + 1);
    while (!utils.isGoodMove(Math.floor(t.x * 4 + 1), Math.floor(t.y * 4 + 1))) {
        t = {
            x: f3(Math.random()),
            y: f3(Math.random())
        };
        m = "#board #x" + Math.floor(t.x * 4 + 1) + "y" + Math.floor(t.y * 4 + 1);
        //this.trainNetwork();
        // t=net.run(board);
        //m="#x"+Math.floor(t.x*3+1)+"y"+Math.floor(t.y*3+1);
    }


    //if ($(m).attr("value") != 2 && $(m).attr("value") != 1) {
    $(m).attr("value", 1);
    $(m).addClass("x");
    utils.fetchBoard();
    // }

}
function pickPos2() {

    //this.p1.push(result);

    utils.fetchBoard();

    // show the "Train network" button after we've selected a few entries

    //$("#test-box").show();
    //alert("done");

    var t = net.run(board);
    for (var x = 1; x < 5; x++) {
        for (var y = 1; y < 5; y++) {
            var cur = [];
            var i = 0;
            for (var m = 1; m < 5; m++) {
                cur[m - 1] = [];
                for (var l = 1; l < 5; l++) {
                    cur[m - 1][l - 1] = parseInt($("#board #x" + m + "y" + l).attr("value")) / 2;
                    i++;
                }
            }
            //console.log(tempBd);
            if (getPos(x, y, cur) == 0) {
                cur[x - 1][y - 1] = 1;
                //console.log(game_over(tempBd) );
                if (game_over(cur) == 1) {
                    console.log(game_over(cur));
                    t.x = Math.floor((x - 1)) / 4;
                    t.y = Math.floor((y - 1)) / 4;
                    console.log(t.x + "," + t.y + "," + utils.isGoodMove(Math.floor(t.x * 4 + 1), Math.floor(t.y * 4 + 1)));
                }
            }

        }
    }
    for (var x = 1; x < 5; x++) {
        for (var y = 1; y < 5; y++) {
            var cur = [];
            var i = 0;
            for (var m = 1; m < 5; m++) {
                cur[m - 1] = [];
                for (var l = 1; l < 5; l++) {
                    cur[m - 1][l - 1] = parseInt($("#board #x" + m + "y" + l).attr("value")) / 2;
                    i++;
                }
            }
            //console.log(tempBd);
            if (getPos(x, y, cur) == 0) {
                cur[x - 1][y - 1] = 0.5;
                //console.log(game_over(tempBd) );
                if (game_over(cur) == 0.5) {
                    console.log(game_over(cur));
                    t.x = Math.floor((x - 1)) / 4;
                    t.y = Math.floor((y - 1)) / 4;
                    console.log(t.x + "," + t.y + "," + utils.isGoodMove(Math.floor(t.x * 4 + 1), Math.floor(t.y * 4 + 1)));
                }
            }

        }
    }

    /* for (var x = 1; x < 5; x++) {
        for (var y = 1; y < 5; y++) {
            var tempBd = board.concat([]);
            //console.log(tempBd);
            if (getPos(x, y, tempBd) == 0) {
                setPos(x, y, tempBd, 0.5);
                if (game_over(tempBd) == 1 || game_over(tempBd) == 0.5) {
                    t.x = Math.floor((x - 1) * 4) / 4;
                    t.y = Math.floor((y - 1) * 4) / 4;
                    //console.log(t);
                }
            }
        }
    }*/
    var m = "#board #x" + Math.floor(t.x * 4 + 1) + "y" + Math.floor(t.y * 4 + 1);
    while (!utils.isGoodMove(Math.floor(t.x * 4 + 1), Math.floor(t.y * 4 + 1))) {
        t = {
            x: f3(Math.random()),
            y: f3(Math.random())
        };
        m = "#board #x" + Math.floor(t.x * 4 + 1) + "y" + Math.floor(t.y * 4 + 1);
        //this.trainNetwork();
        // t=net.run(board);
        //m="#x"+Math.floor(t.x*3+1)+"y"+Math.floor(t.y*3+1);
    }


    //if ($(m).attr("value") != 2 && $(m).attr("value") != 1) {
    $(m).attr("value", 1);
    $(m).addClass("x");
    utils.fetchBoard();
    // }

}

function stalemate(inboard) {
    var b2 = inboard[0].concat(inboard[1]).concat(inboard[2]).concat(inboard[3]);
    for (var i = 0; i < 16; i++) {
        if (b2[i] == 0) return false;
    }
    return true;
}

function game_over(inboard) {
    if (!stalemate(inboard)) {
        var checks = [winnerQ(0, 1, 2, 3, inboard), winnerQ(4, 5, 6, 7, inboard),
            winnerQ(8, 9, 10, 11, inboard), winnerQ(12, 13, 14, 15, inboard),
            winnerQ(0, 4, 8, 12, inboard), winnerQ(1, 5, 9, 13, inboard),
            winnerQ(2, 6, 10, 14, inboard), winnerQ(3, 7, 11, 15, inboard),
            winnerQ(0, 5, 10, 15, inboard),
            winnerQ(3, 6, 9, 12, inboard)
        ];
        for (var i = 0; i < 10; i++) {
            if (checks[i] != false) {
                return Math.abs(checks[i]);
            }
        }
        return "none";
    } else {
        return 0;
    }
}

function winnerQ(p1, p2, p3, p4, inboard) {
    var c1 = inboard[Math.floor(p1 / 4)][p1 % 4];
    if (c1 == 0) return false;
    var c2 = inboard[Math.floor(p2 / 4)][p2 % 4];
    if (c1 != c2) return false;
    var c3 = inboard[Math.floor(p3 / 4)][p3 % 4];
    if (c1 != c3) return false;
    var c4 = inboard[Math.floor(p4 / 4)][p4 % 4];
    if (c1 != c4) return false;
    if (c1 == c2 && c1 == c3 && c1 == c4) {
        return c1;
    } else {
        return false;
    }
}
var utils = {
    encodeBoard: function() {
        return {
            board
        };
    },
    isGoodMove: function(x, y) {
        return parseInt($("#board #x" + x + "y" + y).attr("value")) == 0;
    },
    fetchBoard: function() {
        var i = 0;
        for (var x = 1; x < 5; x++) {
            for (var y = 1; y < 5; y++) {

                board[x - 1][y - 1] = parseInt($("#board #x" + x + "y" + y).attr("value")) / 2;
                i++;
            }
        }
        return {
            board
        };
    }
}
net.train([{
            input: [
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ],
            output: {
                x: 1 / 4,
                y: 1 / 4
            }
        }
    ], {
        iterations: 90
    });
net2.train([{
            input: [
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ],
            output: {
                x: 1 / 4,
                y: 1 / 4
            }
        }
    ], {
        iterations: 90
    });
for (var i = 0; i < 200; i++) {
    var bd = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];
    var p1 = [];
    var p2 = [];
    var moves = 0;

    while (!isWin(bd) && moves < 16) {
        moves++;
        //console.log(moves);
        if (moves % 2 == 1) {
            var before = bd.concat([]);

            /*var result = {
            input: board,
            output: {
                x: choice.x,
                y: choice.y
            }
        };*/
            var t = net.run(bd);
            for (var x = 1; x < 5; x++) {
                for (var y = 1; y < 5; y++) {
                    var cur = [];

                    for (var m = 1; m < 5; m++) {
                        cur[m - 1] = [];
                        for (var l = 1; l < 5; l++) {
                            cur[m - 1][l - 1] = bd[m - 1][l - 1];

                        }
                    }
                    //console.log(tempBd);
                    if (getPos(x, y, cur) == 0) {
                        cur[x - 1][y - 1] = 1;
                        //console.log(game_over(tempBd) );
                        if (game_over(cur) == 1) {
                            //console.log(game_over(cur) );
                            t.x = Math.floor((x - 1)) / 4;
                            t.y = Math.floor((y - 1)) / 4;
                            //console.log(t.x+","+t.y+","+utils.isGoodMove(Math.floor(t.x * 4 + 1), Math.floor(t.y * 4 + 1)));
                        }
                    }

                }
            }
            for (var x = 1; x < 5; x++) {
                for (var y = 1; y < 5; y++) {
                    var cur = [];

                    for (var m = 1; m < 5; m++) {
                        cur[m - 1] = [];
                        for (var l = 1; l < 5; l++) {
                            cur[m - 1][l - 1] = bd[m - 1][l - 1];

                        }
                    }
                    //console.log(tempBd);
                    if (getPos(x, y, cur) == 0) {
                        cur[x - 1][y - 1] = 0.5;
                        //console.log(game_over(tempBd) );
                        if (game_over(cur) == 0.5) {
                            //console.log(game_over(cur) );
                            t.x = Math.floor((x - 1)) / 4;
                            t.y = Math.floor((y - 1)) / 4;
                            //console.log(t.x+","+t.y+","+utils.isGoodMove(Math.floor(t.x * 4 + 1), Math.floor(t.y * 4 + 1)));
                        }
                    }

                }
            }


            //console.log(t);
            //console.log(bd);
            if (!(t.x < 100)) {
                t = {
                    x: Math.floor(Math.random() * 4) / 4,
                    y: Math.floor(Math.random() * 4) / 4
                };

            }
            //console.log(t);
            var m = "#x" + Math.floor(t.x * 4 + 1) + "y" + Math.floor(t.y * 4 + 1);
            //console.log(bd);
            while (getPos(Math.floor(t.x * 4 + 1), Math.floor(t.y * 4 + 1), bd) != 0) {
                t = {
                    x: Math.floor(Math.random() * 4) / 4,
                    y: Math.floor(Math.random() * 4) / 4
                };

            }
            p1 = p1.concat([{
                        input: before,
                        output: {
                            x: t.x,
                            y: t.y
                        }
                    }
                ]);
            m = "#x" + Math.floor(t.x * 4 + 1) + "y" + Math.floor(t.y * 4 + 1);
            //this.trainNetwork();
            // t=net.run(board);
            //console.log(t);
            //m="#x"+Math.floor(t.x*3+1)+"y"+Math.floor(t.y*3+1);
            //$(m).attr("value", 1);
            setPos(Math.floor(t.x * 4 + 1), Math.floor(t.y * 4 + 1), bd, 0.5);
            //$(m).addClass("x");
        } else {
            var before = bd.concat([]);

            /*var result = {
            input: board,
            output: {
                x: choice.x,
                y: choice.y
            }
        };*/
            var t = {
                x: Math.floor(Math.random() * 4) / 4,
                y: Math.floor(Math.random() * 4) / 4
            };
            var t = net.run(bd);
            for (var x = 1; x < 5; x++) {
        for (var y = 1; y < 5; y++) {
            var cur = [];
            
            for (var m = 1;m < 5; m++) {
                cur[m - 1] = [];
                for (var l = 1; l < 5; l++) {
                    cur[m - 1][l - 1] =  bd[m - 1][l - 1];
                    
                }
            }
            //console.log(tempBd);
            if (getPos(x, y, cur) == 0) {
                cur[x-1][ y-1]=0.5;
                //console.log(game_over(tempBd) );
                if (game_over(cur) == 0.5) {
                    //console.log(game_over(cur) );
                    t.x = Math.floor((x - 1)) / 4;
                    t.y = Math.floor((y - 1)) / 4;
                    //console.log(t.x+","+t.y+","+utils.isGoodMove(Math.floor(t.x * 4 + 1), Math.floor(t.y * 4 + 1)));
                }
            }
            
        }
    }
            for (var x = 1; x < 5; x++) {
        for (var y = 1; y < 5; y++) {
            var cur = [];
            
            for (var m = 1;m < 5; m++) {
                cur[m - 1] = [];
                for (var l = 1; l < 5; l++) {
                    cur[m - 1][l - 1] =  bd[m - 1][l - 1];
                    
                }
            }
            //console.log(tempBd);
            if (getPos(x, y, cur) == 0) {
                cur[x-1][ y-1]=1;
                //console.log(game_over(tempBd) );
                if (game_over(cur) == 1) {
                    //console.log(game_over(cur) );
                    t.x = Math.floor((x - 1)) / 4;
                    t.y = Math.floor((y - 1)) / 4;
                    //console.log(t.x+","+t.y+","+utils.isGoodMove(Math.floor(t.x * 4 + 1), Math.floor(t.y * 4 + 1)));
                }
            }
            
        }
    }
    
            //console.log(t);
            //console.log(bd);
            if (!(t.x < 100)) {
                t = {
                    x: Math.floor(Math.random() * 4) / 4,
                    y: Math.floor(Math.random() * 4) / 4
                };

            }
            var m = "#x" + Math.floor(t.x * 4 + 1) + "y" + Math.floor(t.y * 4 + 1);

            while (getPos(Math.floor(t.x * 4 + 1), Math.floor(t.y * 4 + 1), bd) != 0) {
                t = {
                    x: Math.floor(Math.random() * 4) / 4,
                    y: Math.floor(Math.random() * 4) / 4
                };

            }
            p2 = p2.concat([{
                        input: before,
                        output: t
                    }
                ])
            m = "#x" + Math.floor(t.x * 4 + 1) + "y" + Math.floor(t.y * 4 + 1);
            //this.trainNetwork();
            // t=net.run(board);
            //console.log(t);
            //m="#x"+Math.floor(t.x*3+1)+"y"+Math.floor(t.y*3+1);
            // $(m).attr("value", 2);
            setPos(Math.floor(t.x * 4 + 1), Math.floor(t.y * 4 + 1), bd, 1);
            //$(m).addClass("x");
        }
    }
    if (game_over(bd) == 0.5) {
        data = data.concat(p1);
        net.train(data, {
                iterations: 90
            });

    }
    if (game_over(bd) == 1) {
        data = data.concat(p2);
        net.train(data, {
                iterations: 90
            });

    }
}
net.train(data, {
        iterations: 9000
    });
$(".data").html(JSON.stringify(data));
//$(".data").val(JSON.stringify(data));
//$(".data").attr("value",JSON.stringify(data));

function setPos(r, c, b, v) {
    b[r - 1][c - 1] = v;
}

function getPos(x, y, b) {
    //console.log(x, y);
    return b[x - 1][y - 1];
}

function isWin(inboard) {
    return game_over(inboard) != "none";
}
var trainer = {



    onError: function(event) {
        //$("#training-message").text("error training network: " + event.message);
    },

    showProgress: function(progress) {
        var completed = progress.iterations / trainer.iterations * 100;
        //$("#progress-completed").css("width", completed + "%");
    }
}



/* these functions are outside so we can just call toString() for 'view code'*/