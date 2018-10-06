var pieces = {
    king: 'images/WK.svg',
    queen: 'images/WQ.svg', 
    rook: 'images/WR.svg', 
    bishop: 'images/WB.svg', 
    horse: 'images/WH.svg', 
}
$('.generateButton').on('click', function () {
    generate();
});

var randomPieceGenerator = function (arr) {
    return pieces[arr.pop()];
};

function fy(a,b,c,d){
 c=a.length;while(c)b=Math.random()*c--|0,d=a[c],a[c]=a[b],a[b]=d
}

// Gets max height of all passed elements
$.getSyncedHeight = function(elements) {
    var maxHeight = 0;
    $(elements).each(function() {
        $(this).css('min-height', '0px');
        var currentElementHeight = parseInt($(this).css('height'));
        if (currentElementHeight > maxHeight) {
            maxHeight = currentElementHeight;
        }
    });
    return maxHeight;
};
// syncs the height of all elements
$.fn.syncHeight = function() {
    var height = 0;
    height = $.getSyncedHeight(this);
    $(this).each(function() {
        $(this).css('min-height', height + 'px');
    });
};
$.fn.unSyncHeight = function() {
    $(this).each(function() {
        $(this).css('min-height', '');
    });
};

$(window).on('resize', function () {
    $('.chessbox').syncHeight();
});

$('.chessbox').syncHeight();

function generate() {
    var arrayOfPieces = ['horse', 'horse', 'king', 'queen', 'rook', 'rook', 'bishop', 'bishop'];
    fy(arrayOfPieces);

    $('.black-backline .chessbox').each(function () {
        var randomPiece = randomPieceGenerator(arrayOfPieces);
        $(this).html('<image src="' + randomPiece.replace('W', 'B') + '">');
        $('.white-backline .chessbox:nth-child('+ ($(this).index() + 1) + ')').html('<image src="' + randomPiece + '">');

        $('.black-frontline .chessbox').html('<image src="images/BP.svg">');
        $('.white-frontline .chessbox').html('<image src="images/WP.svg">');
    });
    $('.chessbox').syncHeight();
}

generate();