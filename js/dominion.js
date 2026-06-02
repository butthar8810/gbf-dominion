const victoryPointCard = {
high: {name: '属州', cost: 8, type: '勝利点', remain: 8, effect: '6点(無くなるとゲーム終了)'},
middle: {name: '公領', cost: 5, type: '勝利点', remain: 8, effect: '3点'},
low: {name: '屋敷', cost: 2, type: '勝利点', remain: 8, effect: '1点(初期デッキ10枚のうちの3枚)'}
};
const treasurePointCard = {
gold: {name: '金月', cost: 6, type: '財宝', remain: 30, effect: '3●', image: 'images/moon_Gold.png'},
silver: {name: '銀月', cost: 3, type: '財宝', remain: 40, effect: '2●', image: 'images/moon_Silver.png'},
bronze: {name: '銅月', cost: 0, type: '財宝', remain: 46, effect: '1●(初期デッキ10枚のうちの7枚)', image: 'images/moon_Bronze.png'}
};
//用いる王国カード
const kingdomCard = [
{name: '地下貯蔵庫', cost: 2, type: 'アクション', remain: 10, effect: '+1アクション、手札を好きな枚数捨て、捨てた枚数だけドロー'},
{name: '礼拝堂', cost: 2, type: 'アクション', remain: 10, effect: '手札を4枚まで廃棄可能'},
{name: '家臣', cost: 3, type: 'アクション', remain: 10, effect: '+2●、デッキのトップを捨て、それがアクションなら使用できる'},
{name: '工房', cost: 3, type: 'アクション', remain: 10, effect: '4コスト以下のカード1枚を獲得'},
{name: '商人', cost: 3, type: 'アクション', remain: 10, effect: '+1ドロー+1アクション、銀貨1枚を使用すれば+1●'},
{name: '前駆者', cost: 3, type: 'アクション', remain: 10, effect: '+1ドロー+1アクション、捨て札からデッキトップにカード1枚を置ける'},
{name: '村', cost: 3, type: 'アクション', remain: 10, effect: '+1ドロー+2アクション'},
{name: '改築', cost: 4, type: 'アクション', remain: 10, effect: '手札1枚を廃棄、(廃棄カードのコスト)+2コスト以下のカード1枚を獲得'},
{name: '鍛冶屋', cost: 4, type: 'アクション', remain: 10, effect: '+3ドロー'},
{name: '金貸し', cost: 4, type: 'アクション', remain: 10, effect: '銅貨1枚を廃棄してもよい、廃棄した場合+3●'},
{name: '玉座の間', cost: 4, type: 'アクション', remain: 10, effect: '手札のアクション1枚を2回使用してもよい'},
{name: '庭園', cost: 4, type: '勝利点', remain: 10, effect: 'デッキ10枚につき1点'},
{name: '市場', cost: 5, type: 'アクション', remain: 10, effect: '+1ドロー+1アクション+1購入+1●'},
{name: '衛兵', cost: 5, type: 'アクション', remain: 10, effect: '+1ドロー+1アクション、デッキの上2枚を見て、それぞれ廃棄するか、捨て札にするか、デッキの上に戻す。'},
{name: '議事堂', cost: 5, type: 'アクション', remain: 10, effect: '+4ドロー+1購入、他プレイヤーも+1ドロー'},
{name: '研究所', cost: 5, type: 'アクション', remain: 10, effect: '+2ドロー+1アクション'},
{name: '鉱山', cost: 5, type: 'アクション', remain: 10, effect: '財宝1枚を廃棄、(廃棄カードのコスト)+3以下の財宝1枚を手札に獲得'},
{name: '祝祭', cost: 5, type: 'アクション', remain: 10, effect: '+2アクション+1購入+2●'},
{name: '書庫', cost: 5, type: 'アクション', remain: 10, effect: '手札が7枚になるまでカードを引く。アクションカードを引いた場合は脇に置け、7枚になるまで引いた後捨てる'},
{name: '職人', cost: 6, type: 'アクション', remain: 10, effect: '5コスト以下のカード1枚を手札に獲得。手札1枚をデッキトップに置く'}
];
const supplyKingdomNum = 10;

let myDeck = [];

function shuffleArray(array) {
    const cloneArray = [...array]

    for (let i = cloneArray.length - 1; i >= 0; i--) {
      let rand = Math.floor(Math.random() * (i + 1))
      // 配列の要素の順番を入れ替える
      let tmpStorage = cloneArray[i]
      cloneArray[i] = cloneArray[rand]
      cloneArray[rand] = tmpStorage
    }

    return cloneArray
}

function startGame(){
    //用いる王国カードを10種類決める
    const supplyKingdom = shuffleArray(kingdomCard).slice(supplyKingdomNum);
    // cost順にソート

    supplyKingdom.sort((a, b) => b.cost - a.cost);
    supplyKingdom.forEach((kingdom, i) => {
        $(".kingdon-area").append(`<div class="supply-card card${i}">${kingdom.name}</div>`);
        $(`.card${i}`).append(`<div class="cost">${kingdom.cost}</div>`);
        $(`.card${i}`).append(`<div class="remain">${kingdom.remain}</div>`);
    });
    victoryPointCard.forEach((victory, i) => {
        $(".victory-point-area").append(`<div class="supply-card victory${i}">${victory.name}</div>`);
        $(`.victory${i}`).append(`<div class="cost">${victory.cost}</div>`);
        $(`.victory${i}`).append(`<div class="remain">${victory.remain}</div>`);
    });
    treasurePointCard.forEach((treasure, i) => {
        $(".treasure-point-area").append(`<div class="supply-card treasure${i}">${treasure.name}</div>`);
        $(`.treasure${i}`).append(`<img src="${treasure.image}"></img>`);
        $(`.treasure${i}`).append(`<div class="cost">${treasure.cost}</div>`);
        $(`.treasure${i}`).append(`<div class="remain">${treasure.remain}</div>`);
    });

    setupDeck();
}
function setupDeck(){
    drawToDeckSupplyCard(treasurePointCard.bronze, 7);
    drawToDeckSupplyCard(victoryPointCard.low, 3);

}
function drawToDeckSupplyCard(card, count = 1){
    for(let i = 0; i < count, i++;){
        myDeck.push({
            name: card.name,
            cost: card.cost,
            type: card.type,
            effect: card.effect
        });
        card.remain--;
    }
}