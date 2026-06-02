const victoryPointCard = {
	High: {name: '特別交換券', cost: 8, type: '勝利点', remain: 8, func: cardDammy, effect: '6点', image: 'images/point_6.jpg'},
	Middle: {name: 'ダマスカス鋼', cost: 5, type: '勝利点', remain: 8, func: cardDammy, effect: '3点', image: 'images/point_3.jpg'},
	Low: {name: 'ラジエルの書', cost: 2, type: '勝利点', remain: 8+3, func: cardDammy, effect: '1点', image: 'images/point_1.jpg'}
};
const treasurePointCard = {
	Gold: {name: '金月', cost: 6, type: '財宝', remain: 30, func: cardGold, effect: '3●', image: 'images/moon_Gold.png'},
	Silver: {name: '銀月', cost: 3, type: '財宝', remain: 40, func: cardSilver, effect: '2●', image: 'images/moon_Silver.png'},
	Bronze: {name: '銅月', cost: 0, type: '財宝', remain: 46+7, func: cardBronze, effect: '1●', image: 'images/moon_Bronze.png'}
};
//用いる王国カード
const kingdomCard = [
	{name: '地下貯蔵庫', cost: 2, type: 'アクション', remain: 10, func: cardDammy, effect: '+1アクション、手札を好きな枚数捨て、捨てた枚数だけドロー', image: 'images/dammy.jpg'},
	{name: '礼拝堂', cost: 2, type: 'アクション', remain: 10, func: cardDammy, effect: '手札を4枚まで廃棄可能', image: 'images/dammy.jpg'},
	{name: '家臣', cost: 3, type: 'アクション', remain: 10, func: cardDammy, effect: '+2●、デッキのトップを捨て、それがアクションなら使用できる', image: 'images/dammy.jpg'},
	{name: '工房', cost: 3, type: 'アクション', remain: 10, func: cardDammy, effect: '4コスト以下のカード1枚を獲得', image: 'images/dammy.jpg'},
	{name: '商人', cost: 3, type: 'アクション', remain: 10, func: cardDammy, effect: '+1ドロー+1アクション、銀貨1枚を使用すれば+1●', image: 'images/dammy.jpg'},
	{name: '前駆者', cost: 3, type: 'アクション', remain: 10, func: cardDammy, effect: '+1ドロー+1アクション、捨て札からデッキトップにカード1枚を置ける', image: 'images/dammy.jpg'},
	{name: '村', cost: 3, type: 'アクション', remain: 10, func: cardDammy, effect: '+1ドロー+2アクション', image: 'images/dammy.jpg'},
	{name: '改築', cost: 4, type: 'アクション', remain: 10, func: cardDammy, effect: '手札1枚を廃棄、(廃棄カードのコスト)+2コスト以下のカード1枚を獲得', image: 'images/dammy.jpg'},
	{name: '鍛冶屋', cost: 4, type: 'アクション', remain: 10, func: cardDammy, effect: '+3ドロー', image: 'images/dammy.jpg'},
	{name: '金貸し', cost: 4, type: 'アクション', remain: 10, func: cardDammy, effect: '銅貨1枚を廃棄してもよい、廃棄した場合+3●', image: 'images/dammy.jpg'},
	{name: '玉座の間', cost: 4, type: 'アクション', remain: 10, func: cardDammy, effect: '手札のアクション1枚を2回使用してもよい', image: 'images/dammy.jpg'},
	{name: '庭園', cost: 4, type: 'アクション', remain: 10, func: cardDammy, effect: 'デッキ10枚につき1点', image: 'images/dammy.jpg'},
	{name: '市場', cost: 5, type: 'アクション', remain: 10, func: cardMarket, effect: '+1ドロー+1アクション+1購入+1●', image: 'images/dammy.jpg'},
	{name: '衛兵', cost: 5, type: 'アクション', remain: 10, func: cardDammy, effect: '+1ドロー+1アクション、デッキの上2枚を見て、それぞれ廃棄するか、捨て札にするか、デッキの上に戻す。', image: 'images/dammy.jpg'},
	{name: '議事堂', cost: 5, type: 'アクション', remain: 10, func: cardDammy, effect: '+4ドロー+1購入、他プレイヤーも+1ドロー', image: 'images/dammy.jpg'},
	{name: '研究所', cost: 5, type: 'アクション', remain: 10, func: cardDammy, effect: '+2ドロー+1アクション', image: 'images/dammy.jpg'},
	{name: '鉱山', cost: 5, type: 'アクション', remain: 10, func: cardDammy, effect: '財宝1枚を廃棄、(廃棄カードのコスト)+3以下の財宝1枚を手札に獲得', image: 'images/dammy.jpg'},
	{name: '祝祭', cost: 5, type: 'アクション', remain: 10, func: cardfestival, effect: '+2アクション+1購入+2●', image: 'images/dammy.jpg'},
	{name: '書庫', cost: 5, type: 'アクション', remain: 10, func: cardDammy, effect: '手札が7枚になるまでカードを引く。アクションカードを引いた場合は脇に置け、7枚になるまで引いた後捨てる', image: 'images/dammy.jpg'},
	{name: '職人', cost: 6, type: 'アクション', remain: 10, func: cardDammy, effect: '5コスト以下のカード1枚を手札に獲得。手札1枚をデッキトップに置く', image: 'images/dammy.jpg'}
];
// 定数
const supplyKingdomNum = 10;
const initialHandNum = 5;
const phase = {action: 'アクションフェイズ', buy: '購入フェイズ', cleanup: 'クリーンアップフェイズ'};

let myDeck = [];//name, cost, type, effect, image
let myHand = [];//id, name, cost, type, effect, image
let myDiscard = [];//name, cost, type, effect, image
let playAreaCard = [];
let supplyKingdom = [];
// 各種カウントの初期値
let actionCount = 1;
let buyCount = 1;
let moonCount = 0;
let currentPhase;



/*******************************************************/
/* startGame：ゲームスタート
/*******************************************************/
function startGame(){
	
	//用いる王国カードを10種類決める
	supplyKingdom = shuffleArray(kingdomCard).slice(supplyKingdomNum);
	// デッキの準備
	setupDeck();

	// 次のカードをプレイ人数に応じた枚数だけ表向きの山札にして並べる
	supplyKingdom.sort((a, b) => b.cost - a.cost);
	updateSupplyDom();

	// デッキとした後にそこからカードを5枚引き、手札とする。
	drawDeckCard(initialHandNum);

	startActionPhase();

}
/*******************************************************/
/* setupDeck：初期デッキとなる10枚のカードを配る
/*******************************************************/
function setupDeck(){
	// プレイヤーに初期デッキとなる10枚のカードを配る
	drawSupplyCard(treasurePointCard.Bronze, 7);
	drawSupplyCard(victoryPointCard.Low, 3);
	// 配ったカードをデッキに格納する
	reconfigureDeck();
}
/*******************************************************/
/* drawSupplyCard：サプライからカードを取得する
/*******************************************************/
function drawSupplyCard(supplyCard, count = 1){
	
	for(let i = 0; i < count; i++){
		// 獲得したカードは指示が無い限りは捨て札置き場に表向きにして置く
		myDiscard.push({
			name: supplyCard.name,
			cost: supplyCard.cost,
			type: supplyCard.type,
			effect: supplyCard.effect,
			image: supplyCard.image,
			func: supplyCard.func
		});
		supplyCard.remain--;
	}
}
/*******************************************************/
/* drawDeckCard：デッキからカードをドローする
/*******************************************************/
function drawDeckCard(count = 1){
	for(let i = 0; i < count; i++){
		// デッキから手札へカードを引く
		const card = myDeck.shift()
		myHand.push({
			id: myHand.length+1,
			name: card.name,
			cost: card.cost,
			type: card.type,
			effect: card.effect,
			image: card.image,
			func: card.func
		});
	}
	updateDeckDom();
	updateHandDom();
}
/*******************************************************/
/* playCard：カードをプレイする
/*******************************************************/
function playCard(card){
	console.log(card);

	playAreaCard.push({
		name: card.name,
		cost: card.cost,
		type: card.type,
		effect: card.effect,
		image: card.image,
		func: card.func
	});
	updatePlayAreaDom();
	card.func();
}
/*******************************************************/
/* reconfigureDeck：捨て札のカードをデッキに再構成する
/*******************************************************/
function reconfigureDeck(){
	// 捨て札をデッキに格納
	myDiscard.splice(0, myDiscard.length).forEach((card) => {
		myDeck.push(card);
	});
	//デッキをシャッフル
	myDeck = shuffleArray(myDeck);
	// DOM要素を更新
	updateDeckDom();
	updateTrashDom();
}
/*******************************************************/
/* startActionPhase：アクションフェイズを開始する
/*******************************************************/
function changePhase(ph){
	currentPhase = ph;
	$('.action-phase').removeClass('active');
	$('.buy-phase').removeClass('active');
	$('.cleanup-phase').removeClass('active');
	switch(ph){
		case phase.action:
			$('.action-phase').addClass('active');
			break;
		case phase.buy:
			$('.buy-phase').addClass('active');
			break;
		case phase.cleanup:
			$('.cleanup-phase').addClass('active');
			break;
		default:
			break;
	}
}
/*******************************************************/
/* startActionPhase：アクションフェイズを開始する
/*******************************************************/
function startActionPhase(){
	changePhase(phase.action);
}
/*******************************************************/
/* reconfigureDeck：捨て札のカードをデッキに再構成する
/*******************************************************/
function cleanUp(){
	// プレイエリアのカードを捨て札エリアに格納
	playAreaCard.splice(0, playAreaCard.length).forEach((card) => {
		myDiscard.push(card);
	});
	updatePlayAreaDom();
	updateTrashDom();
	//デッキをシャッフル
	// DOM要素を更新
}
/*******************************************************/
/* DOM要素の更新処理
/*******************************************************/
function updateActionDom(){
	$(`.action-count`).html(`${actionCount}`);
}
function updateBuyDom(){
	$(`.buy-count`).html(`${buyCount}`);
}
function updateMoonDom(){
	$(`.moon-count`).html(`${moonCount}`);
}
function updateDeckDom(){
	$(`.deck-count`).html(`${myDeck.length}`);
}
function updateTrashDom(){
	$(`.trash-count`).html(`${myDiscard.length}`);
}
function updateHandDom(){
	$(`.hand-info`).html('');
	myHand.forEach((hand, i) => {
		const cardDiv = $('<div>');
		$(`.hand-info`).append(
			cardDiv.css('left', i*(900/myHand.length)).addClass('hand-card').html(
				`${hand.name}<img src="${hand.image}">`
			)
		);
		// 手札クリック時の処理登録
		cardDiv.click(hand ,() => {
			switch(currentPhase) {
				case phase.action:
					if (hand.type == 'アクション' && actionCount > 0) {
						const index = myHand.findIndex((card) => card.id == hand.id);
						const card = myHand.splice(index, 1);
						// 手札表示の更新
						updateHandDom();
						actionCount--;
						playCard(card[0]);
					} else if (actionCount <= 0) {
						alert("アクションポイントが足りません");
					} else {
						alert("このフェイズでは使用できません");
					}
					break;
				case phase.buy:
					if (hand.type == '財宝') {
						const index = myHand.findIndex((card) => card.id == hand.id);
						const card = myHand.splice(index, 1);
						// 手札表示の更新
						updateHandDom();
						playCard(card[0]);
					} else {
						alert("このフェイズでは使用できません");
					}
					break;
				case phase.cleanup:
				default:
					alert("このフェイズでは使用できません");
					break;
			}
		});
	});

}
function updateSupplyDom(){
	$(".kingdon-area").html(``);
	supplyKingdom.forEach((kingdom, i) => {
		$(".kingdon-area").append(`<div class="supply-card card${i}">${kingdom.name}</div>`);
		$(`.card${i}`).append(`<img src="${kingdom.image}"></img>`);
		$(`.card${i}`).append(`<div class="cost">${kingdom.cost}</div>`);
		$(`.card${i}`).append(`<div class="remain">${kingdom.remain}</div>`);
	});
	$(".victory-point-area").html(``);
	for (const key in victoryPointCard) {
		$(".victory-point-area").append(`<div class="supply-card victory_${key}">${victoryPointCard[key].name}</div>`);
		$(`.victory_${key}`).append(`<img src="${victoryPointCard[key].image}"></img>`);
		$(`.victory_${key}`).append(`<div class="cost">${victoryPointCard[key].cost}</div>`);
		$(`.victory_${key}`).append(`<div class="remain">${victoryPointCard[key].remain}</div>`);
	};
	$(".treasure-point-area").html(``);
	for (const key in treasurePointCard) {
		$(".treasure-point-area").append(`<div class="supply-card treasure_${key}">${treasurePointCard[key].name}</div>`);
		$(`.treasure_${key}`).append(`<img src="${treasurePointCard[key].image}"></img>`);
		$(`.treasure_${key}`).append(`<div class="cost">${treasurePointCard[key].cost}</div>`);
		$(`.treasure_${key}`).append(`<div class="remain">${treasurePointCard[key].remain}</div>`);
	};
}
function updatePlayAreaDom(){
	$(`.play-area`).html('');
	playAreaCard.forEach((play, i) => {
		const cardDiv = $('<div>');
		$(`.play-area`).append(
			cardDiv.css('left', i*(585/playAreaCard.length)).addClass('play-card').html(
				`${play.name}<img src="${play.image}">`
			)
		);
	});
}

/*******************************************************/
/* 各カードの効果関数の宣言
/*******************************************************/
function cardDammy(){
	
}
function cardBronze(){
	// 1メダル追加
	moonCount += 1;
	updateMoonDom();
}
function cardSilver(){
	// 3メダル追加
	moonCount += 3;
	updateMoonDom();
}
function cardGold(){
	// 6メダル追加
	moonCount += 6;
	updateMoonDom();
}








function cardMarket(){
	//+1ドロー+1アクション+1購入+1●
	drawDeckCard(1);
	actionCount += 1;
	updateActionDom();
	buyCount += 1;
	updateBuyDom();
	moonCount += 1;
	updateMoonDom();
}


function cardfestival(){
	//+2アクション+1購入+2●
	actionCount += 2;
	updateActionDom();
	buyCount += 1;
	updateBuyDom();
	moonCount += 2;
	updateMoonDom();
}







// 配列のシャッフル
function shuffleArray(array) {
	const shuffled = [...array]; // 元の配列を破壊しないようにコピー
	const mt = new MersenneTwister();
	for (let i = shuffled.length - 1; i > 0; i--) {
		// 0 から i までのランダムなインデックスを生成
		const j = mt.nextInt(0, (i + 1));
		// 要素を交換
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}