var pieces = {
    king: 'images/WK.svg',
    queen: 'images/WQ.svg', 
    rook: 'images/WR.svg', 
    bishop: 'images/WB.svg', 
    horse: 'images/WH.svg', 
}
$('.generateButton').on('click', function () {
    var arrayOfPieces = ['king', 'queen', 'rook', 'rook', 'bishop', 'bishop', 'horse', 'horse'].sort(function () { return 0.5 - Math.random() });
    
    $('.black-backline>td').each(function () {
        var randomPiece = randomPieceGenerator(arrayOfPieces);
        $(this).html('<image src="' + randomPiece.replace('W', 'B') + '">');
        $('.white-backline>td:nth-child('+ ($(this).index() + 1) + ')').html('<image src="' + randomPiece + '">');
    });
});

var randomPieceGenerator = function (arr) {
    return pieces[arr.pop()];
};


