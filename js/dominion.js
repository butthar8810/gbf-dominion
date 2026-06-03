const victoryPointCard = {
	High: {name: 'ダマスカス鋼', cost: 8, type: '勝利点', remain: 8, func: cardHigh, effect: '6点', image: 'images/point_6.jpg'},
	Middle: {name: '玉鋼', cost: 5, type: '勝利点', remain: 8, func: cardMiddle, effect: '3点', image: 'images/point_3.jpg'},
	Low: {name: 'ギガス鋼', cost: 2, type: '勝利点', remain: 8+3, func: cardLow, effect: '1点', image: 'images/point_1.jpg'}
};
const treasurePointCard = {
	Gold: {name: '金月', cost: 6, type: '財宝', remain: 30, func: cardGold, effect: '3Moon', image: 'images/moon_Gold.png'},
	Silver: {name: '銀月', cost: 3, type: '財宝', remain: 40, func: cardSilver, effect: '2Moon', image: 'images/moon_Silver.png'},
	Bronze: {name: '銅月', cost: 0, type: '財宝', remain: 46+7, func: cardBronze, effect: '1Moon', image: 'images/moon_Bronze.png'}
};
//用いる王国カード
const kingdomCard = [
	{name: 'アストラルアーム', cost: 2, type: 'アクション', remain: 10, func: cardAstralWeapons, effect: '+1アクション、手札を好きな枚数捨て、捨てた枚数だけドロー', image: 'images/Astral_Weapons.jpg'},
	{name: '礼拝堂', cost: 2, type: 'アクション', remain: 10, func: cardDammy, effect: '手札を4枚まで廃棄可能', image: 'images/dammy.jpg'},
	{name: 'ガチャチケット', cost: 3, type: 'アクション', remain: 10, func: cardGachaTicket, effect: '+2Moon、デッキのトップを捨て、それがアクションなら使用できる', image: 'images/Gacha_Ticket.png'},
	{name: '工房', cost: 3, type: 'アクション', remain: 10, func: cardDammy, effect: '4コスト以下のカード1枚を獲得', image: 'images/dammy.jpg'},
	{name: 'ラジエルの書・銅', cost: 3, type: 'アクション', remain: 10, func: cardSeferRazielBronze, effect: '+1ドロー+1アクション、銀月1枚を使用すれば+1Moon', image: 'images/Sefer_Raziel_1.jpg'},
	{name: 'ラジエルの書・銀', cost: 3, type: 'アクション', remain: 10, func: cardSeferRazielSilver, effect: '+1ドロー+1アクション、捨て札からデッキトップにカード1枚を置ける', image: 'images/Sefer_Raziel_2.jpg'},
	{name: 'ソウルシード', cost: 3, type: 'アクション', remain: 10, func: cardSoulBerry, effect: '+1ドロー+2アクション', image: 'images/Soul_Berry.jpg'},
	{name: 'プロヴィデンスグローブ ', cost: 4, type: 'アクション', remain: 10, func: cardProvidenceGrove, effect: '手札1枚を廃棄、(廃棄カードのコスト)+2コスト以下のカード1枚を獲得', image: 'images/Providence_Grove.jpg'},
	{name: '輝晶', cost: 4, type: 'アクション', remain: 10, func: cardCrystal, effect: '+3ドロー', image: 'images/Crystal.jpg'},
	{name: 'ルピ', cost: 4, type: 'アクション', remain: 10, func: cardLupi, effect: '銅貨1枚を廃棄してもよい、廃棄した場合+3Moon', image: 'images/lupi.jpg'},
	{name: 'カーバンクル', cost: 4, type: 'アクション', remain: 10, func: cardCarbuncle, effect: '手札のアクション1枚を2回使用してもよい', image: 'images/Carbuncle.jpg'},
	{name: 'ダマスカス骸晶', cost: 4, type: '勝利点', remain: 10, func: cardDamascusCrystal, effect: 'デッキ10枚につき1点', image: 'images/Damascus_Crystal.jpg'},
	{name: 'エリクシールハーフ', cost: 5, type: 'アクション', remain: 10, func: cardHalfElixirs, effect: '+1ドロー+1アクション+1購入+1Moon', image: 'images/Half_Elixirs.jpg'},
	{name: 'ラジエルの書・金', cost: 5, type: 'アクション', remain: 10, func: cardSeferRazielGold, effect: '+1ドロー+1アクション、デッキの上2枚を見て、それぞれ廃棄するか、捨て札にするか、デッキの上に戻す。', image: 'images/Sefer_Raziel_3.jpg'},
	{name: '月光晶', cost: 5, type: 'アクション', remain: 10, func: cardMoonlightStone, effect: '+4ドロー+1購入、他プレイヤーも+1ドロー', image: 'images/Moonlight_Stone.jpg'},
	{name: 'ソウルパウダー', cost: 5, type: 'アクション', remain: 10, func: cardSoulPowder, effect: '+2ドロー+1アクション', image: 'images/Soul_Powder.png'},
	{name: 'オプティマスグローブ', cost: 5, type: 'アクション', remain: 10, func: cardOptimusGlobe, effect: '財宝1枚を廃棄、(廃棄カードのコスト)+3以下の財宝1枚を手札に獲得', image: 'images/Optimus_Globe.jpg'},
	{name: 'エリクシール', cost: 5, type: 'アクション', remain: 10, func: cardElixirs, effect: '+2アクション+1購入+2Moon', image: 'images/Elixirs.png'},
	{name: '金剛晶', cost: 5, type: 'アクション', remain: 10, func: cardSunlightStone, effect: '手札が7枚になるまでカードを引く。アクションカードを引いた場合は脇に置き、7枚になるまで引いた後捨てる', image: 'images/Sunlight_Stone.jpg'},
	{name: 'シェロチケ', cost: 6, type: 'アクション', remain: 10, func: cardSiero, effect: '5コスト以下のカード1枚を手札に獲得。手札1枚をデッキトップに置く', image: 'images/Siero.jpg'}
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
let currentPoint = 1;
let currentPhase;
let SeferRazielBronzeFlag = false;


/*******************************************************/
/* startGame：ゲームスタート
/*******************************************************/
function startGame(){
	//モーダルの外側をクリックしたらモーダルを閉じる
	$(document).on('click',function(e) {
		if(!$(e.target).closest('.modal-body').length) {
			$('.modal-container').removeClass('active');
		}
	});

	//用いる王国カードを10種類決める
	supplyKingdom = shuffleArray(kingdomCard).slice(supplyKingdomNum);
	// デッキの準備
	setupDeck();

	// 次のカードをプレイ人数に応じた枚数だけ表向きの山札にして並べる
	supplyKingdom.sort((a, b) => b.cost - a.cost);
	updateSupplyDom();

	// デッキとした後にそこからカードを5枚引き、手札とする。
	drawDeckCard(initialHandNum);

	updatePointDom();
	updateActionDom();
	updateBuyDom();
	updateMoonDom();

	startTurn();

}
/*******************************************************/
/* startTurn：ゲームスタート
/*******************************************************/
function startTurn(){
	
	actionCount = 1;
	buyCount = 1;
	moonCount = 0;
	updatePointDom();
	updateActionDom();
	updateBuyDom();
	updateMoonDom();

	startActionPhase();

}
/*******************************************************/
/* startActionPhase：アクションフェイズを開始する
/*******************************************************/
function startActionPhase(){
	// アクションフェイズに設定
	changePhase(phase.action);
	updateNextPhaseBtnDom();
	updateInfomationDom();
	// 手札にアクションカードがなければ、次のフェイズに移行する
	if (myHand.findIndex((card) => card.type == 'アクション') == -1) {
		changeNextPhase();
	}
}
function startBuyPhase(){
	changePhase(phase.buy);
	updateNextPhaseBtnDom();
	updateInfomationDom();
}
function startCleanupPhase(){
	changePhase(phase.cleanup);
	updateNextPhaseBtnDom();
	updateInfomationDom();
	cleanUp();

	startTurn();
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
	updateTrashDom();
}
/*******************************************************/
/* drawSupplyCard：サプライからカードを取得する
/*******************************************************/
function buySupplyCard(supplyCard, count = 1){
	if (moonCount < supplyCard.cost) {
		alert('Moonが足りません');
		return;
	} else if (buyCount <= 0){
		alert('購入回数が足りません');
		return;
	}
	buyCount--;
	updateBuyDom();
	moonCount -=supplyCard.cost;
	updateMoonDom();
	drawSupplyCard(supplyCard, count);

	if (buyCount <= 0) {
		changeNextPhase();
	}
}
/*******************************************************/
/* drawDeckCard：デッキからカードをドローする
/*******************************************************/
function drawDeckCard(count = 1){
	if (myDeck.length < count) {
		// 捨て札をデッキに再構築する
		reconfigureDeck();
	} 

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
/* changeNextPhase：次のフェイズに移行する
/*******************************************************/
function changeNextPhase(){
	console.log(currentPhase);
	switch(currentPhase) {
		case phase.action:
			startBuyPhase();
			break;
		case phase.buy:
			startCleanupPhase();
			break;
		case phase.cleanup:
			startActionPhase();
			break;
		default:
			startActionPhase();
			break;
	}

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
	changePhaseDOM(ph);
}
function changePhaseDOM(ph){
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
/* reconfigureDeck：捨て札のカードをデッキに再構成する
/*******************************************************/
function cleanUp(){
	// プレイエリアのカードを捨て札エリアに格納
	playAreaCard.splice(0, playAreaCard.length).forEach((card) => {
		myDiscard.push(card);
	});
	// 手札を捨て札エリアに格納
	myHand.splice(0, myHand.length).forEach((card) => {
		myDiscard.push({
			name: card.name,
			cost: card.cost,
			type: card.type,
			effect: card.effect,
			image: card.image,
			func: card.func
		});
	});
	// ガードを5枚引く
	drawDeckCard(initialHandNum);
	updatePlayAreaDom();
	updateTrashDom();
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
function updateNextPhaseBtnDom(){
	switch(currentPhase){
		case phase.action:
			$(`.next-phase`).html(`アクション<br>フェイズ終了`);
			break;
		case phase.buy:
			$(`.next-phase`).html(`購入フェイズ<br>終了`);
			break;
		case phase.cleanup:
		default:
			break;
	}
}
function updateInfomationDom(){
	switch(currentPhase){
		case phase.action:
			$(`.info-text`).html(`アクションカードを使用してください`);
			break;
		case phase.buy:
			$(`.info-text`).html(`ムーンカードを使用してください`);
			break;
		case phase.cleanup:
		default:
			break;
	}
}
function updatePointDom(){
	currentPoint = 0;
	const handPointCard = myHand.filter(Hand => Hand.type === '勝利点');
	const deckPointCard = myDeck.filter(Hand => Hand.type === '勝利点');
	const discardPointCard = myDiscard.filter(Hand => Hand.type === '勝利点');
	handPointCard.forEach((card) => {
		currentPoint += card.func();
	});
	deckPointCard.forEach((card) => {
		currentPoint += card.func();
	});
	discardPointCard.forEach((card) => {
		currentPoint += card.func();
	});
	
	$(`.point-count`).html(currentPoint);
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
						playCard(card[0]);
						actionCount--;
						updateActionDom();
					} else if (actionCount <= 0) {
						alert("このフェイズでは使用できません");
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
		cardDiv.contextmenu(hand ,() => {
			$('.modal-content').html(`${hand.effect}`);
			$('.modal-container').addClass('active');
			return false;
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
		$(`.card${i}`).click(kingdom, () => {
			switch(currentPhase) {
				case phase.buy:
						buySupplyCard(kingdom);
					break;
				case phase.action:
				case phase.cleanup:
				default:
						alert("このフェイズでは購入はできません");
					break;
			}
		});
		$(`.card${i}`).contextmenu(kingdom ,() => {
			$('.modal-content').html(`${kingdom.effect}`);
			$('.modal-container').addClass('active');
			return false;
		});
	});
	$(".victory-point-area").html(``);
	for (const key in victoryPointCard) {
		$(".victory-point-area").append(`<div class="supply-card victory_${key}">${victoryPointCard[key].name}</div>`);
		$(`.victory_${key}`).append(`<img src="${victoryPointCard[key].image}"></img>`);
		$(`.victory_${key}`).append(`<div class="cost">${victoryPointCard[key].cost}</div>`);
		$(`.victory_${key}`).append(`<div class="remain">${victoryPointCard[key].remain}</div>`);
		$(`.victory_${key}`).click(victoryPointCard[key], () => {
			switch(currentPhase) {
				case phase.buy:
						buySupplyCard(victoryPointCard[key]);
					break;
				case phase.action:
				case phase.cleanup:
				default:
						alert("このフェイズでは購入はできません");
					break;
			}
		});
		$(`.victory_${key}`).contextmenu(victoryPointCard[key] ,() => {
			$('.modal-content').html(`${victoryPointCard[key].effect}`);
			$('.modal-container').addClass('active');
			return false;
		});
	};
	$(".treasure-point-area").html(``);
	for (const key in treasurePointCard) {
		$(".treasure-point-area").append(`<div class="supply-card treasure_${key}">${treasurePointCard[key].name}</div>`);
		$(`.treasure_${key}`).append(`<img src="${treasurePointCard[key].image}"></img>`);
		$(`.treasure_${key}`).append(`<div class="cost">${treasurePointCard[key].cost}</div>`);
		$(`.treasure_${key}`).append(`<div class="remain">${treasurePointCard[key].remain}</div>`);
		$(`.treasure_${key}`).click(treasurePointCard[key], () => {
			switch(currentPhase) {
				case phase.buy:
						buySupplyCard(treasurePointCard[key]);
					break;
				case phase.action:
				case phase.cleanup:
				default:
						alert("このフェイズでは購入はできません");
					break;
			}
		});
		$(`.treasure_${key}`).contextmenu(treasurePointCard[key] ,() => {
			$('.modal-content').html(`${treasurePointCard[key].effect}`);
			$('.modal-container').addClass('active');
			return false;
		});
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
function cardDammy(){}
function cardLow(){return 1;}
function cardMiddle(){return 3;}
function cardHigh(){return 6;}
function cardDamascusCrystal(){return (myHand.length/10);}
function cardBronze(){
	// 1メダル追加
	moonCount += 1;
	updateMoonDom();
}
function cardSilver(){
	// 3メダル追加
	moonCount += 3;
	if (SeferRazielBronzeFlag){
		moonCount += 1;
	}
	updateMoonDom();
}
function cardGold(){
	// 6メダル追加
	moonCount += 6;
	updateMoonDom();
}
function cardAstralWeapons(){
	// +1アクション、手札を好きな枚数捨て、捨てた枚数だけドロー
	actionCount += 1;
	updateActionDom();
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
			alert('捨てます');
		});
	});
}
function cardGachaTicket(){
	// +2Moon、デッキのトップを捨て、それがアクションなら使用できる
	moonCount += 2;
	updateMoonDom();

}
function cardSeferRazielBronze(){
	// +1ドロー+1アクション、銀月1枚を使用すれば+1Moon
	drawDeckCard(1);
	actionCount += 1;
	updateActionDom();
	// 銀月を使用したときに+1Moonするフラグを立てる
	SeferRazielBronzeFlag = true;
}
function cardSeferRazielSilver(){
	// +1ドロー+1アクション、捨て札からデッキトップにカード1枚を置ける
	drawDeckCard(1);
	actionCount += 1;
	updateActionDom();
}
function cardSeferRazielGold(){
	// +1ドロー+1アクション、デッキの上2枚を見て、それぞれ廃棄するか、捨て札にするか、デッキの上に戻す。
	drawDeckCard(1);
	actionCount += 1;
	updateActionDom();
}
function cardSoulBerry(){
	// +1ドロー+2アクション
	drawDeckCard(1);
	actionCount += 2;
	updateActionDom();
}
function cardSoulPowder(){
	// +2ドロー+1アクション
	drawDeckCard(2);
	actionCount += 1;
	updateActionDom();
}
function cardHalfElixirs(){
	//+1ドロー+1アクション+1購入+1Moon
	drawDeckCard(1);
	actionCount += 1;
	updateActionDom();
	buyCount += 1;
	updateBuyDom();
	moonCount += 1;
	updateMoonDom();
}
function cardElixirs(){
	//+2アクション+1購入+2Moon
	actionCount += 2;
	updateActionDom();
	buyCount += 1;
	updateBuyDom();
	moonCount += 2;
	updateMoonDom();
}
function cardProvidenceGrove(){
	// 手札1枚を廃棄、(廃棄カードのコスト)+2コスト以下のカード1枚を獲得
}
function cardOptimusGlobe(){
	// 財宝1枚を廃棄、(廃棄カードのコスト)+3以下の財宝1枚を手札に獲得
}
function cardCrystal(){
	// +3ドロー
	drawDeckCard(3);
}
function cardMoonlightStone(){
	// +4ドロー+1購入、他プレイヤーも+1ドロー
	drawDeckCard(4);
	buyCount += 1;
	updateBuyDom();
}
function cardSunlightStone(){
	// 手札が7枚になるまでカードを引く。アクションカードを引いた場合は脇に置き、7枚になるまで引いた後捨てる
}
function cardLupi(){
	// 銅貨1枚を廃棄してもよい、廃棄した場合+3Moon
}
function cardCarbuncle(){
	// 手札のアクション1枚を2回使用してもよい
}
function cardSiero(){
	// 5コスト以下のカード1枚を手札に獲得。手札1枚をデッキトップに置く
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