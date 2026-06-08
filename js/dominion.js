// タイプ
const cardType = {Action: 'アクション', Point: '勝利点', Money: 'Moon'}
// 勝利点カード
const victoryPointCard = {
	High: {name: 'ダマスカス鋼', cost: 8, type: cardType.Point, remain: 8, func: cardHigh, effect: '+6点', image: 'images/point_6.jpg'},
	Middle: {name: '玉鋼', cost: 5, type: cardType.Point, remain: 8, func: cardMiddle, effect: '+3点', image: 'images/point_3.jpg'},
	Low: {name: 'ギガス鋼', cost: 2, type: cardType.Point, remain: 8+3, func: cardLow, effect: '+1点', image: 'images/point_1.jpg'}
};
// コイン(Moon)カード
const treasurePointCard = {
	Gold: {name: 'ゴールドムーン', cost: 6, type: cardType.Money, remain: 30, func: cardGold, effect: '+3Moon', image: 'images/moon_Gold.png'},
	Silver: {name: 'シルバームーン', cost: 3, type: cardType.Money, remain: 40, func: cardSilver, effect: '+2Moon', image: 'images/moon_Silver.png'},
	Bronze: {name: 'ブロンズムーン', cost: 0, type: cardType.Money, remain: 46+7, func: cardBronze, effect: '+1Moon', image: 'images/moon_Bronze.png'}
};
//用いる王国カード
const kingdomCard = {
	Cellar: {name: '騎空艇の貯蔵庫', cost: 2, type: cardType.Action, remain: 10, func: cardCellar, effect: '+1アクション<br><br>手札を好きな枚数捨て、捨てた枚数だけドロー', image: 'images/Cellar.png'},
	Chapel: {name: 'ゼエン教', cost: 2, type: cardType.Action, remain: 10, func: cardChapel, effect: '手札を4枚まで廃棄可能', image: 'images/Chapel.png'},
	Moat: {name: '空堀', cost: 2, type: cardType.Action, remain: 10, func: cardMoat, effect: '+2 カードを引く', image: 'images/Moat.png'},
	Vassal: {name: '氷皇の家臣', cost: 3, type: cardType.Action, remain: 10, func: cardVassal, effect: '+2Moon<br><br>デッキのトップを捨て、それがアクションなら使用できる', image: 'images/Vassal.png'},
	Workshop: {name: 'ククルの銃工房', cost: 3, type: cardType.Action, remain: 10, func: cardWorkshop, effect: '4コスト以下のカード1枚を獲得', image: 'images/Workshop.png'},
	Merchant: {name: '駄洒落好きな商人', cost: 3, type: cardType.Action, remain: 10, func: cardMerchant, effect: `+1ドロー<br>+1アクション<br><br>${treasurePointCard.Silver.name}1枚を使用すれば+1Moon`, image: 'images/Merchant.png'},
	Harbinger: {name: '森の前駆者', cost: 3, type: cardType.Action, remain: 10, func: cardHarbinger, effect: '+1ドロー<br>+1アクション<br>捨て札からデッキトップにカード1枚を置ける', image: 'images/Harbinger.png'},
	Village: {name: '故郷の村', cost: 3, type: cardType.Action, remain: 10, func: cardVillage, effect: '+1ドロー<br>+2アクション', image: 'images/Village.png'},
	Remodel: {name: '改築', cost: 4, type: cardType.Action, remain: 10, func: cardRemodel, effect: '手札1枚を廃棄、(廃棄カードのコスト)+2コスト以下のカード1枚を獲得', image: 'images/Remodel.png'},
	Smithy: {name: '若者の鍛冶屋', cost: 4, type: cardType.Action, remain: 10, func: cardSmithy, effect: '+3ドロー', image: 'images/Smithy.png'},
	Moneylender: {name: '金持ち', cost: 4, type: cardType.Action, remain: 10, func: cardMoneylender, effect: `${treasurePointCard.Bronze.name}1枚を廃棄してもよい、廃棄した場合+3Moon`, image: 'images/Moneylender.png'},
	ThroneRoom: {name: '玉座の間', cost: 4, type: cardType.Action, remain: 10, func: cardThroneRoom, effect: '手札のアクション1枚を2回使用してもよい', image: 'images/ThroneRoom.png'},
	Poacher: {name: '密漁者', cost: 4, type: cardType.Action, remain: 10, func: cardPoacher, effect: '+1ドロー<br>+1アクション<br>+1Moon<br><br>空になっているサプライの山札1つにつき、手札を1枚捨て札にする。', image: 'images/Poacher.png'},
	Gardens: {name: 'ウェールズの庭園', cost: 4, type: cardType.Point, remain: 10, func: cardGardens, effect: 'デッキ10枚につき1点', image: 'images/Gardens.png'},
	Market: {name: '市場(よろず屋)', cost: 5, type: cardType.Action, remain: 10, func: cardMarket, effect: '+1ドロー<br>+1アクション<br>+1購入<br>+1Moon', image: 'images/Market.png'},
	Sentry: {name: '年長の衛兵', cost: 5, type: cardType.Action, remain: 10, func: cardSentry, effect: '+1ドロー<br>+1アクション<br>デッキの上2枚を見て、それぞれ廃棄するか、捨て札にするか、デッキの上に戻す。', image: 'images/Sentry.png'},
	CouncilRoom: {name: '賑やかな議事堂', cost: 5, type: cardType.Action, remain: 10, func: cardCouncilRoom, effect: '+4ドロー<br>+1購入<br><br>', image: 'images/CouncilRoom.png'},
	Laboratory: {name: '開祖の研究所', cost: 5, type: cardType.Action, remain: 10, func: cardLaboratory, effect: '+2ドロー<br>+1アクション', image: 'images/Laboratory.png'},
	Mine: {name: 'バルツ鉱山', cost: 5, type: cardType.Action, remain: 10, func: cardMine, effect: `Moon1枚を廃棄、(廃棄カードのコスト)+3以下のMoon1枚を手札に獲得`, image: 'images/Mine.png'},
	Festival: {name: 'グラブルフェス', cost: 5, type: cardType.Action, remain: 10, func: cardFestival, effect: '+2アクション<br>+1購入<br>+2Moon', image: 'images/Festival.png'},
	Library: {name: '書庫', cost: 5, type: cardType.Action, remain: 10, func: cardLibrary, effect: '手札が7枚になるまでカードを引く。アクションカードを引いた場合は脇に置き、7枚になるまで引いた後捨てる', image: 'images/Library.png'},
	Artisan: {name: '頑固な職人', cost: 6, type: cardType.Action, remain: 10, func: cardArtisan, effect: '5コスト以下のカード1枚を手札に獲得。手札1枚をデッキトップに置く', image: 'images/Artisan.png'}
};

// 定数
const supplyKingdomNum = 10;
const initialHandNum = 5;
// アニメーションの実行時間/待機時間
const playWatiTime = 200;
const drowWatiTime = 400;
const trashWaitTime = 400;
const modalWatiTime = 300;
// フェイズ定数
const phase = {
	action: 'アクションフェイズ', 
	buy: '購入フェイズ', 
	cleanup: 'クリーンアップフェイズ',
	executeActionByCellar: 'アクション実行フェイズ(地下貯蔵庫)',
	executeActionByChapel: 'アクション実行フェイズ(礼拝堂)',
	executeActionByVassal: 'アクション実行フェイズ(家臣)',
	executeActionByWorkshop: 'アクション実行フェイズ(工房)',
	executeActionByHarbinger: 'アクション実行フェイズ(前駆者)',
	executeActionByRemodel: 'アクション実行フェイズ(改築)',
	executeActionByMoneylender: 'アクション実行フェイズ(金貸し)',
	executeActionByThroneRoom: 'アクション実行フェイズ(玉座の間)',
	executeActionByPoacher: 'アクション実行フェイズ(密猟者)',
	executeActionBySentry: 'アクション実行フェイズ(衛兵)',
	executeActionByMine: 'アクション実行フェイズ(鉱山)',
	executeActionByArtisan1: 'アクション実行フェイズ(職人1)',
	executeActionByArtisan2: 'アクション実行フェイズ(職人2)',
};
// アニメーション用の座標定数
const kingdomCoordinateTop = '19px';
const kingdomCoordinateBottom = '151px';
const kingdomCoordinateForSupply = [
	// 王国カードの座標
	{top: kingdomCoordinateTop, left: '799px'},
	{top: kingdomCoordinateTop, left: '657px'},
	{top: kingdomCoordinateTop, left: '516px'},
	{top: kingdomCoordinateTop, left: '383px'},
	{top: kingdomCoordinateTop, left: '230px'},
	{top: kingdomCoordinateBottom, left: '799px'},
	{top: kingdomCoordinateBottom, left: '657px'},
	{top: kingdomCoordinateBottom, left: '516px'},
	{top: kingdomCoordinateBottom, left: '373px'},
	{top: kingdomCoordinateBottom, left: '230px'}
];
const victoryCoordinateForSupply = {
	// 勝利点カードの座標
	High: {top: '5px', left: '1px'},
	Middle: {top: '102px', left: '1px'},
	Low: {top: '199px', left: '1px'}
};
const treasureCoordinateForSupply = {
	// Moonカードの座標
	Gold: {top: '5px', left: '107px'},
	Silver: {top: '102px', left: '107px'},
	Bronze: {top: '199px', left: '107px'}
};
const deckCoordinateForSupply = {top: '415px', left: '-5px', width: '80px'};
const handCoordinateForSupply = {top: '530px', left: '440px', width: '120px'};
const trashCoordinateForSupply = {top: '355px', left: '765px', width: '80px'};
const discardCoordinateForSupply = {top: '355px', left: '850px', width: '80px'};
const modalCoordinateForSupply = {top: '75px', left: '395px', width: '150px'};

const deckCoordinateForHandArea = {top: '-170px', left: '-30px', width: '80px'};
const handCoordinateForHandArea = {top: '0px', left: '400px', width: '120px'};
const modalCoordinateForHandArea = {top: '-500px', left: '400px', width: '150px'};
const trashCoordinateForHandArea = {top: '-130px', left: '760px', width: '80px'};
const discardCoordinateForHandArea = {top: '-215px', left: '840px', width: '80px'};

const handCoordinateForPlayArea = {top: '200px', left: '300px', width: '120px'};
const playCoordinateForPlayArea = {top: '0px', left: '300px', width: '120px'};
const trashCoordinateForPlayArea = {top: '20px', left: '620px', width: '80px'};
//変数
let myDeck = [];//name, cost, type, effect, image
let myHand = [];//id, name, cost, type, effect, image
let myTrash = [];//name, cost, type, effect, image
let playAreaCard = [];
let supplyKingdom = [];
let discard = [];
let tmpArea =[];
let stackCard = [];
// 各種カウントの初期値
let actionCount = 1;
let buyCount = 1;
let moonCount = 0;
let currentPoint = 1;
let currentPhase;
let exchangeCost = -1;
let MerchantFlag = false;
let dropIndex;


/*******************************************************/
/* startGame：ゲームスタート
/*******************************************************/
function startGame(){
	//用いる王国カードを10種類決める
	supplyKingdom = shuffleArray(Object.values(kingdomCard)).slice(0, supplyKingdomNum);
	// デッキの準備
	setupDeck();
	setupExplanationModal();
	setupSettingBtn();

	// 次のカードをプレイ人数に応じた枚数だけ表向きの山札にして並べる
	supplyKingdom.sort((a, b) => b.cost - a.cost);
	updateSupplyDom();

	// デッキとした後にそこからカードを5枚引き、手札とする。
	drawDeckCard(initialHandNum);

	updatePointDom();
	updateActionDom();
	updateBuyDom();
	updateMoonDom();

	setTimeout(() => {
		startTurn();
	}, drowWatiTime);
}
/*******************************************************/
/* setupDeck：初期デッキとなる10枚のカードを配る
/*******************************************************/
function setupDeck(){
	// プレイヤーに初期デッキとなる10枚のカードを配る
	drawSupplyCard(treasurePointCard.Bronze, 7);
	drawSupplyCard(victoryPointCard.Low, 3);
//	drawSupplyCard(kingdomCard.Sentry, 3);
	// 配ったカードをデッキに格納する
	reconfigureDeck();
}
/*******************************************************/
/* startTurn：ターンの始まり
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
	disabledMultipleBtn(false);
	updateMultipleBtnDom(`アクション<br>フェイズ終了`);
	updateInfomationDom(`アクションカードを使用してください`);
	// 手札にアクションカードがなければ、次のフェイズに移行する
	updateHandDom();
	if (findIndexHand('type', cardType.Action) == -1 || actionCount <= 0) {
		startBuyPhase();
	}
}
/*******************************************************/
/* startBuyPhase：購入フェイズを開始する
/*******************************************************/
function startBuyPhase(){
	changePhase(phase.buy);
	disabledMultipleBtn(false);
	updateMultipleBtnDom(`購入フェイズ<br>終了`);
	updateInfomationDom(`ムーンカードを使用してください`);
	updateHandDom();
}
/*******************************************************/
/* startCleanupPhase：クリーンアップフェイズを開始する
/*******************************************************/
function startCleanupPhase(){
	changePhase(phase.cleanup);
	disabledMultipleBtn(true);
	updateInfomationDom(`クリーンアップ中です。`);

	disabledMultipleBtn(true);
	// クリーンアップ処理を実行
	animateCleanupToTrash();

	deletAllPlayArea().forEach((card) => {
		pushTrash(card);
	});
	// 手札を捨て札エリアに格納
	deletAllHand().forEach((card) => {
		pushTrash(card);
	});

	// ガードを5枚引く
	drawDeckCard(initialHandNum);
	setTimeout(() => {
		updateTrashDom();
		updatePlayAreaDom();
		startTurn();
	}, drowWatiTime);
}

/*******************************************************/
/* setupExplanationModal：説明モーダルの初期設定
/*******************************************************/
function setupExplanationModal(){
	//モーダルの外側をクリックしたらモーダルを閉じる
	$(document).click((e) => {
		if(!$(e.target).closest('.explanation-modal-body').length) {
			closeExplanationModalDom();
		}
	});
}

/*******************************************************/
/* openExplanationModalDom：説明モーダル表示処理
/*******************************************************/
function openExplanationModalDom(card){
	const explanationModal = $('<div>');
	explanationModal.html(`
		<h1>${card.name}</h1>
		<img src="${card.image}">
		<div>${card.effect}</div>
	`);
	if (card.type == cardType.Point) {
		explanationModal.addClass('victory-card');
	} else if (card.type == cardType.Money) {
		explanationModal.addClass('treasure-card');
	} else if (card.type == cardType.Action) {
		explanationModal.addClass('kingdon-card');
	}
	explanationModal.addClass('explanation-modal-card');
	$('.explanation-modal-body').append(explanationModal);
	$('.explanation-modal').addClass('active');
}
/*******************************************************/
/* closeExplanationModalDom：説明モーダル非表示処理
/*******************************************************/
function closeExplanationModalDom(){
	$('.explanation-modal').removeClass('active');
	$('.explanation-modal-body').html('');
}
/*******************************************************/
/* setupSettingBtn：設定ボタンの初期設定
/*******************************************************/
function setupSettingBtn(){
	$('.setting-open-btn').click((e) => {
		openSettingModalDom();
	});
	$('.close-btn').click((e) => {
		closeSettingModalDom();
	});
	$(document).click((e) => {
		if(!$(e.target).closest('.setting-modal-body').length && !$(e.target).closest('.setting-open-btn').length) {
			closeSettingModalDom();
		}
	});
}
/*******************************************************/
/* openSettingModalDom：設定用モーダル表示処理
/*******************************************************/
function openSettingModalDom(){
	console.log("openSettingModalDom");
	$('.setting-modal').addClass('active');
}
/*******************************************************/
/* closeSettingModalDom：設定用モーダル非表示処理
/*******************************************************/
function closeSettingModalDom(){
	console.log("closeSettingModalDom");
	$('.setting-modal').removeClass('active');
}
/*******************************************************/
/* openModalDom：モーダル表示処理
/*******************************************************/
function openModalDom(title, width, ...openCard){
	const modalTitle = $('.modal-title');
	const modalContent = $('.modal-content');
	const modalCards = [];
	$('.modal-body').css('width', `${width}px`);
	// モーダルのタイトル部分を設定
	modalTitle.html(title);
	// モーダルコンテンツ内のカード部分を設定
	openCard.forEach((card, i) => {
		const modalCard = $('<div>');
		modalCard.addClass('modal-card available');
		if (card.type == cardType.Point) {
			modalCard.addClass('victory-card');
		} else if (card.type == cardType.Money) {
			modalCard.addClass('treasure-card');
		} else if (card.type == cardType.Action) {
			modalCard.addClass('kingdon-card');
		}
		modalCard.html(`
			<h1>${card.name}</h1>
			<img src="${card.image}" draggable='false'>
			<div>${card.effect}</div>
		`);
		modalCards.push(modalCard);
		modalContent.append(modalCard);
	});
	$('.modal').addClass('active');

	return modalCards;
}

/*******************************************************/
/* openModalForSentryDom：「衛兵」用モーダル表示処理
/*******************************************************/
function openModalForSentryDom(title, ...openCard){
	const modalContent = $('.modal-content');
	const modalCards = [];
	const dropTrashArea = $('<div>').addClass('modal-drop-area');
	const dropDiscardArea = $('<div>').addClass('modal-drop-area');
	const dropDeckArea = $('<div>').addClass('modal-drop-area');
	const dropDeckAreaBottom = $('<div>').addClass('modal-deck-area-order');
	const dropDeckAreaTop = $('<div>').addClass('modal-deck-area-order');
	const dropAreas = [
		dropTrashArea,
		dropDeckAreaBottom,
		dropDeckAreaTop,
		dropDiscardArea,
	];
	const width = 940;
	const top = 1;
	const bottom = 0;

	animateDeckToModal(openCard[top]);
	$('.modal-body').css('width', `${width}px`);
	// モーダルのタイトル部分を設定
	$('.modal-title').html(title);
	// 各エリアごとの設定
	dropTrashArea
		.attr('id', 'modal-trash-area')
		.append($('<h1>').html('捨て札'));
	dropDiscardArea
		.attr('id', 'modal-discard-area')
		.append($('<h1>').html('廃棄する'));
	dropDeckArea
		.attr('id', 'modal-deck-area')
		.append($('<h1>').html('山札'))
		.append($('<p>').html('下　　　　　　上'))
		.append(dropDeckAreaBottom)
		.append(dropDeckAreaTop);
	dropDeckAreaBottom.attr('id', 'modal-deck-bottom-area');
	dropDeckAreaTop.attr('id', 'modal-deck-top-area');
	// modalContentに各エリアを設定
	modalContent
		.append(dropTrashArea)
		.append(dropDeckArea)
		.append(dropDiscardArea);

	// モーダルコンテンツ内のカード部分を設定
	openCard.forEach((card, i) => {
		const modalCard = $('<div>');
		// modalCardのクラス設定
		if (card.type == cardType.Point) {
			modalCard.addClass('victory-card');
		} else if (card.type == cardType.Money) {
			modalCard.addClass('treasure-card');
		} else if (card.type == cardType.Action) {
			modalCard.addClass('kingdon-card');
		}
		modalCard
			.addClass('modal-card available')
			.attr('id', `drop-card${i}`)
			.attr('draggable', true)
		.html(`
			<h1>${card.name}</h1>
			<img src="${card.image}" draggable='false'>
			<div>${card.effect}</div>
		`);
		// 各カードのイベント登録
		modalCard.on('dragstart', () => {
			modalCard.addClass('hold');
			dropIndex = modalCard.attr('id');
			setTimeout(() => {modalCard.addClass('invisible');}, 0);
		});
		modalCard.on('dragend', () => {
			modalCard.removeClass('hold invisible');
		});
		modalCards.push(modalCard);
	});
	// 各カードを配置
	dropDeckAreaBottom.append(modalCards[bottom]);
	dropDeckAreaTop.append(modalCards[top]);
	// ドロップエリアのイベント登録
	dropAreas.forEach((area) => {
		area.on('dragover', (event) => {event.preventDefault();});
		area.on('dragenter', () => {area.addClass('hovered');});
		area.on('dragleave', () => {area.removeClass('hovered');});
	});

	// ドロップエリアのイベント登録を各エリアで実行
	dropTrashArea.on('drop', () => {
		dropTrashArea.removeClass('hovered');
		if (modalCards[bottom].attr('id') == dropIndex) {
			dropTrashArea.append(modalCards[0]);
		} else if (modalCards[1].attr('id') == dropIndex){
			dropTrashArea.append(modalCards[1]);
		}
	});
	dropDiscardArea.on('drop', () => {
		dropDiscardArea.removeClass('hovered');
		if (modalCards[bottom].attr('id') == dropIndex) {
			dropDiscardArea.append(modalCards[bottom]);
		} else if (modalCards[1].attr('id') == dropIndex){
			dropDiscardArea.append(modalCards[1]);
		}
	});
	dropDeckAreaBottom.on('drop', () => {
		dropDeckAreaBottom.removeClass('hovered');
		if (modalCards[bottom].attr('id') == dropIndex) {//drop-card0がデッキ「下」にドロップしたとき
			//かつ、drop-card1もデッキ「下」にある場合
			if ($($('#drop-card1').parent()[0]).attr('id') == 'modal-deck-bottom-area') {
				dropDeckAreaTop.append(modalCards[top]);
			}
			dropDeckAreaBottom.append(modalCards[bottom]);
		} else if (modalCards[top].attr('id') == dropIndex){//drop-card1がデッキ「下」にドロップしたとき
			//かつ、drop-card0もデッキ「下」にある場合
			if ($($('#drop-card0').parent()[0]).attr('id') == 'modal-deck-bottom-area') {
				dropDeckAreaTop.append(modalCards[bottom]);
			}
			dropDeckAreaBottom.append(modalCards[top]);
		}
	});
	dropDeckAreaTop.on('drop', () => {
		dropDeckAreaTop.removeClass('hovered');
		if (modalCards[bottom].attr('id') == dropIndex) {//drop-card0がデッキ「上」にドロップしたとき
			//かつ、drop-card1もデッキ「上」にある場合
			if ($($('#drop-card1').parent()[0]).attr('id') == 'modal-deck-top-area') {
				dropDeckAreaBottom.append(modalCards[top]);
			}
			dropDeckAreaTop.append(modalCards[0]);
		} else if (modalCards[top].attr('id') == dropIndex){//drop-card1がデッキ「上」にドロップしたとき
			//かつ、drop-card0もデッキ「上」にある場合
			if ($($('#drop-card0').parent()[0]).attr('id') == 'modal-deck-top-area') {
				dropDeckAreaBottom.append(modalCards[bottom]);
			}
			dropDeckAreaTop.append(modalCards[top]);
		}
	});
	$('.modal').addClass('active');
	return modalCards;
}


/*******************************************************/
/* analysisModalForSentryDom：「衛兵」用モーダル解析処理
/*******************************************************/
function analysisModalForSentryDom(){
	const dropTrashCards = $('#modal-trash-area').children('div');
	const dropDiscardCards = $('#modal-discard-area').children('div');
	const dropDeckTopCards = $('#modal-deck-top-area').children('div');
	const dropDeckBottomCards = $('#modal-deck-bottom-area').children('div');
	const dropCards = [
		{id: 'drop-card0', name: $('#drop-card0').children('h1').html()},
		{id: 'drop-card1', name: $('#drop-card1').children('h1').html()}
	];

	if (dropDeckBottomCards.length > 0) {
		dropCards.forEach((dropCard) => {
			if($(dropDeckBottomCards[0]).attr('id') == dropCard.id){
				const index = findIndexTemporaryArea('name', dropCard.name);
				if( index !== -1 ){
					const deckCard = spliceTemporaryArea(index);
					animateModalToDeck(deckCard);
					unshiftDeck(deckCard);
				}
			}
		});
	}
	if (dropDeckTopCards.length > 0) {
		dropCards.forEach((dropCard) => {
			if($(dropDeckTopCards[0]).attr('id') == dropCard.id){
				const index = findIndexTemporaryArea('name', dropCard.name);
				if( index !== -1 ){
					const deckCard = spliceTemporaryArea(index);
					animateModalToDeck(deckCard);
					unshiftDeck(deckCard);
				}
			}
		});
	}
	console.log('myDeck');
	console.log(myDeck);
	for (let i = 0; i < dropTrashCards.length; i++) {
		dropCards.forEach((dropCard) => {
			if($(dropTrashCards[i]).attr('id') == dropCard.id){
				const index = findIndexTemporaryArea('name', dropCard.name);
				if( index !== -1 ){
					const trashCard = spliceTemporaryArea(index);
					pushTrash(trashCard);
					animateModalToTrash(trashCard);
				}
			}
		});
	}
	for (let i = 0; i < dropDiscardCards.length; i++) {
		dropCards.forEach((dropCard) => {
			if($(dropDiscardCards[i]).attr('id') == dropCard.id){
				const index = findIndexTemporaryArea('name', dropCard.name);
				if( index !== -1 ){
					const discardCard = spliceTemporaryArea(index);
					pushDiscard(discardCard);
					animateModalToDiscard(discardCard);
				}
			}
		});
	}
	deletAllTemporaryArea();
	updateTrashDom();
	updateDiscardDom();
	updateDeckDom();
}
/*******************************************************/
/* closeModalDom：モーダル非表示処理
/*******************************************************/
function closeModalDom(){
	$('.modal-title').html('');
	$('.modal-content').html('');
	$('.modal').removeClass('active');
}

/*******************************************************/
/* openModalTrashList：捨て札をモーダルで表示する
/*******************************************************/
function openModalTrashList(){
	const modalTitle = $('.modal-title');
	const modalContent = $('.modal-content');
	const width = 940;
	const title = '捨て札';
	$('.modal-body').css('width', `${width}px`);
	modalTitle.html(title);
	let trashCount = [];
	let trashIndex = 0;
	myTrash.forEach((card) => {
		animateTrashToModal(card);
		const trashIndex = findIndexTemporaryArea('name', card.name);
		if (trashIndex === -1) {
			const modalCard = $('<div>');
			const contentDiv = $('<div>');
			const remain = $('<div>');
			pushTemporaryArea({
				name: card.name,
				count: 1,
				div: remain
			});
			if (card.type == cardType.Point) {
				modalCard.addClass('victory-card');
			} else if (card.type == cardType.Money) {
				modalCard.addClass('treasure-card');
			} else if (card.type == cardType.Action) {
				modalCard.addClass('kingdon-card');
			}
			modalCard
				.addClass('modal-card')
				.addClass('available')
				.append(`<h1>${card.name}</h1>`)
				.append(`<img src='${card.image}'>`)
				.append(contentDiv);
			modalCard.click(card ,() => {
				const index = findIndexTrash('name', card.name);
				if (index !== -1){
					const trashCard = spliceTrash(index);
					unshiftDeck(trashCard);
					animateModalToDeck(card);
					updateTrashDom();
					updateDeckDom();
					closeModalDom();
					setTimeout(() => {
						endAction();
					}, modalWatiTime);
					return true;
				} else {
					return false;
				}
			});
			modalCard.contextmenu(card ,() => {
				openExplanationModalDom(card);
				return false;
			});
			contentDiv
				.html(card.effect)
				.append(remain);
			remain.html(1);
			modalContent.append(modalCard);
		} else {
			tmpArea[trashIndex].count++;
			tmpArea[trashIndex].div.html(tmpArea[trashIndex].count);
		}
	});
	$('.modal').addClass('active');
	deletAllTemporaryArea();
}
/*******************************************************/
/* drawSupplyCard：サプライからカードを取得する
/*******************************************************/
function drawSupplyCard(supplyCard, count = 1){
	if (supplyCard.remain <= 0) {
		debugAlert('指定したサプライのカードがありません');
		return false;
	}
	for(let i = 0; i < count; i++){
		// 獲得したカードは指示が無い限りは捨て札置き場に表向きにして置く
		pushTrash(supplyCard);
		supplyCard.remain--;
	}
	updateSupplyDom();
	updateTrashDom();
	updatePointDom();
	return true;
}
/*******************************************************/
/* drowSupplyCardToHand：サプライからカードを手札に入れる
/*******************************************************/
function drowSupplyCardToHand(supplyCard, count = 1){
	if (supplyCard.remain <= 0) {
		debugAlert('指定したサプライのカードがありません');
		return false;
	}
	pushHand(supplyCard);
	updateSupplyDom();
	updateHandDom();
	
	return true;
}
/*******************************************************/
/* drawSupplyCard：サプライからカードを取得する
/*******************************************************/
function buySupplyCard(supplyCard, count = 1){
	if (moonCount < supplyCard.cost) {
		debugAlert('Moonが足りません');
		return false;
	} else if (buyCount <= 0){
		debugAlert('購入回数が足りません');
		return false;
	}
	if (drawSupplyCard(supplyCard, count)){
		buyCount--;
		updateBuyDom();
		moonCount -= supplyCard.cost;
		updateMoonDom();
	}else{
		return false;
	}

	if (buyCount <= 0) {
		startCleanupPhase();
	}
	return true;
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
		if(myDeck.length > 0){
			// デッキから手札へカードを引く
			const card = shiftDeck();
			pushHand(card);
			animateDrowDeck(card);
		} else {
			break;
		}
	}
	updateDeckDom();
	setTimeout(() => {
		updateHandDom();
	}, drowWatiTime);
}
/*******************************************************/
/* playHandCard：カードをプレイする
/*******************************************************/
function playHandCard(index){
	const card = spliceHand(index);
	// 手札表示の更新
	updateHandDom();
	updatePlayAreaDom();
	pushPlayArea(card);
	animatePlayHandCard(card);
//	updatePlayAreaDom();
	pushStackCard(card.func);
	endAction();
}

/*******************************************************/
/* endAction：プレイしたカードの終了処理をする
/*******************************************************/
function endAction(){
	deletAllTemporaryArea();
	if ( stackCard.length === 0 ){
		startActionPhase();
		return true;
	}
	const playFunc = shiftStackCard();
	if (playFunc) {
		playFunc();
	}
	return true;
}
function endMoon(){
	if ( stackCard.length === 0 ){
		return true;
	}
	const playFunc = shiftStackCard();
	if (playFunc) {
		playFunc();
	}
	return true;
}
/*******************************************************/
/* reconfigureDeck：捨て札のカードをデッキに再構成する
/*******************************************************/
function reconfigureDeck(){
	// 捨て札をデッキに格納
	deletAllTrash().forEach((card) => {
		pushDeck(card);
	});
	//デッキをシャッフル
	myDeck = shuffleArray(myDeck);
	// DOM要素を更新
	updateDeckDom();
	updateTrashDom();
}


/*******************************************************/
/* pushMultiplebtn：マルチボタンが押された時の処理を行う
/*******************************************************/
function pushMultiplebtn(){
	switch(currentPhase) {
		case phase.action://アクションフェイズ
			startBuyPhase();
			break;
		case phase.buy://購入フェイズ
			startCleanupPhase();
			break;
		case phase.cleanup://クリーンアップフェイズ
			startActionPhase();
			break;
		case phase.executeActionByCellar://地下貯蔵庫
			cardCellarSub();
			break;
		case phase.executeActionByChapel://礼拝堂
			cardChapelSub();
			break;
		case phase.executeActionByVassal://家臣
			cardVassalSub();
			break;
		case phase.executeActionByRemodel://改築
			cardRemodelSub();
			break;
		case phase.executeActionByMoneylender://金貸し
			cardMoneylenderSub();
			break;
		case phase.executeActionByThroneRoom://玉座の間
			cardThroneRoomSub();
			break;
		case phase.executeActionByPoacher://密猟者
			cardPoacherSub();
			break;
		case phase.executeActionBySentry://衛兵
			cardSentrySub();
			break;
		case phase.executeActionByMine://鉱山
			cardMineSub();
			break;
		case phase.executeActionByArtisan2://職人2
			cardArtisanSubSub();
			break;
		default:
			debugAlert('ボタンは使えません');
			break;
	}
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
	const deckImage = $(`.deck-area`).children('img');
	if(myDeck.length <= 0){
		deckImage.addClass('empty');
	}else{
		deckImage.removeClass('empty');
	}
	$(`.deck-count`).html(`${myDeck.length}`);
}
function updateTrashDom(){
	const trashImage = $(`.trash-area`).children('img');
	if(myTrash.length <= 0){
		trashImage.addClass('empty');
	}else{
		trashImage.removeClass('empty');
	}
	$(`.trash-count`).html(`${myTrash.length}`);
}
function updateDiscardDom(){
	$(`.discard-count`).html(`${discard.length}`);
}
function updateMultipleBtnDom(text){
	$(`.multiple-btn`).html(text);
}
function updateInfomationDom(text){
	$(`.info-text`).html(text);
}
function updatePointDom(){
	currentPoint = 0;
	const handPointCard = myHand.filter(Hand => Hand.type === cardType.Point);
	const deckPointCard = myDeck.filter(Hand => Hand.type === cardType.Point);
	const discardPointCard = myTrash.filter(Hand => Hand.type === cardType.Point);
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
		const handCardDiv = $('<div>');
		handCardDiv
			.attr('id', `hand-card${hand.id}`)
			.addClass('hand-card')
			.html(`${hand.name}<img src="${hand.image}">`);
		if (hand.type == cardType.Point) {
			handCardDiv.addClass('victory-card');
		} else if (hand.type == cardType.Money) {
			handCardDiv.addClass('treasure-card');
		} else if (hand.type == cardType.Action) {
			handCardDiv.addClass('kingdon-card');
		}
		switch(currentPhase){
			case phase.action:
				if( hand.type == cardType.Action ){
					handCardDiv.addClass('available');
				}
				break;
			case phase.buy:
				if( hand.type == cardType.Money ){
					handCardDiv.addClass('available');
				}
				break;
			default:
				break;
		}
		// 手札クリック時の処理登録
		handCardDiv.click(hand ,() => {clickHandProcess(handCardDiv, hand);});
		handCardDiv.contextmenu(hand ,() => {
			openExplanationModalDom(hand);
			return false;
		});
		$(`.hand-info`).append(handCardDiv);
	});
}

function updateSupplyDom(){
	// サプライエリアの初期化
	$(".kingdon-area").html(``);
	$(".victory-point-area").html(``);
	$(".treasure-point-area").html(``);
	// サプライエリアの設定
	supplyKingdom.forEach((kingdom, i) => {
		const supplyCardDiv = $('<div>');
		supplyCardDiv
			.addClass('supply-card')
			.html(kingdom.name)
			.append(`<img src="${kingdom.image}"></img>`)
			.append(`<div class="cost">${kingdom.cost}</div>`)
			.append(`<div class="remain">${kingdom.remain}</div>`);
		if (kingdom.remain <= 0) {
			supplyCardDiv.addClass('empty-card');
		}else if (kingdom.type == cardType.Point) {
			supplyCardDiv.addClass('victory-card');
		} else if (kingdom.type == cardType.Money) {
			supplyCardDiv.addClass('treasure-card');
		} else if (kingdom.type == cardType.Action) {
			supplyCardDiv.addClass('kingdon-card');
		}
		supplyCardDiv.click(kingdom, () => {
			switch(currentPhase) {
				case phase.buy:
						if(buySupplyCard(kingdom)){
							animateDrowSupplyKingdom(kingdom, i);
						}
					break;
				case phase.executeActionByRemodel:
				case phase.executeActionByWorkshop:
					if (kingdom.cost <= exchangeCost) {
						const ret = drawSupplyCard(kingdom);
						if (ret) {
							animateDrowSupplyKingdom(kingdom, i);
							exchangeCost = -1;
							endAction();
						}
						
					}
					break;
				case phase.executeActionByArtisan1:
					if (kingdom.cost <= exchangeCost) {
						if (drowSupplyCardToHand(kingdom)){
							animateDrowSupplyKingdomToHand(kingdom, i);
							exchangeCost = -1;
							cardArtisanSub();
						}
					}
					break;
				default:
						debugAlert("このフェイズでは購入はできません");
					break;
			}
		});
		supplyCardDiv.contextmenu(kingdom ,() => {
			openExplanationModalDom(kingdom);
			return false;
		});
		$(".kingdon-area").append(supplyCardDiv);
	});
	for (const key in victoryPointCard) {
		const supplyCardDiv = $('<div>');
		supplyCardDiv.addClass('supply-card');
		if (victoryPointCard[key].remain <= 0) {
			supplyCardDiv.addClass('empty-card');
		} else {
			supplyCardDiv.addClass('victory-card');
		}
		supplyCardDiv
			.html(victoryPointCard[key].name)
			.append(`<img src="${victoryPointCard[key].image}"></img>`)
			.append(`<div class="cost">${victoryPointCard[key].cost}</div>`)
			.append(`<div class="remain">${victoryPointCard[key].remain}</div>`);
		supplyCardDiv.click(victoryPointCard[key], () => {
			switch(currentPhase) {
				case phase.buy:
						if(buySupplyCard(victoryPointCard[key])){
							animateDrowSupply(key);
						}
					break;
				case phase.executeActionByRemodel:
				case phase.executeActionByWorkshop:
					if (victoryPointCard[key].cost <= exchangeCost) {
						if (victoryPointCard[key].remain <= 0) {
							debugAlert('指定したサプライのカードがありません');
							break;
						}
						const ret = drawSupplyCard(victoryPointCard[key]);
						if (ret) {
							animateDrowSupply(key);
							exchangeCost = -1;
							endAction();
						}
					}
					break;
				case phase.executeActionByArtisan1:
					if (victoryPointCard[key].cost <= exchangeCost) {
						if (drowSupplyCardToHand(victoryPointCard[key])){
							animateDrowSupplyToHand(key);
							exchangeCost = -1;
							cardArtisanSub();
						}
					}
					break;
				default:
						debugAlert("このフェイズでは購入はできません");
					break;
			}
		});
		supplyCardDiv.contextmenu(victoryPointCard[key] ,() => {
			openExplanationModalDom(victoryPointCard[key]);
			return false;
		});
		$(".victory-point-area").append(supplyCardDiv);
	};
	for (const key in treasurePointCard) {
		const supplyCardDiv = $('<div>');
		supplyCardDiv.addClass('supply-card');
		if (treasurePointCard[key].remain <= 0) {
			supplyCardDiv.addClass('empty-card');
		}else {
			supplyCardDiv.addClass('treasure-card');
		}
		supplyCardDiv
			.html(treasurePointCard[key].name)
			.append(`<img src="${treasurePointCard[key].image}"></img>`)
			.append(`<div class="cost">${treasurePointCard[key].cost}</div>`)
			.append(`<div class="remain">${treasurePointCard[key].remain}</div>`);
		supplyCardDiv.click(treasurePointCard[key], () => {
			switch(currentPhase) {
				case phase.buy:
						if(buySupplyCard(treasurePointCard[key])){
							animateDrowSupply(key);
						}
					break;
				case phase.executeActionByRemodel:
				case phase.executeActionByMine:
				case phase.executeActionByWorkshop:
					if (treasurePointCard[key].cost <= exchangeCost) {
						if (drawSupplyCard(treasurePointCard[key])) {
							animateDrowSupply(key);
							exchangeCost = -1;
							endAction();
						}
					}
					break;
				case phase.executeActionByArtisan1:
					if (treasurePointCard[key].cost <= exchangeCost) {
						if (drowSupplyCardToHand(treasurePointCard[key])){
							animateDrowSupplyToHand(key);
							exchangeCost = -1;
							cardArtisanSub();
						}
					}
					break;
				default:
						debugAlert("このフェイズでは購入はできません");
					break;
			}
		});
		supplyCardDiv.contextmenu(treasurePointCard[key] ,() => {
			openExplanationModalDom(treasurePointCard[key]);
			return false;
		});
		$(".treasure-point-area").append(supplyCardDiv);
	};
}
function updatePlayAreaDom(){
	$(`.play-area`).html('');
	playAreaCard.forEach((play, i) => {
		const playCardDiv = $('<div>').addClass('play-card');
		if (play.type == cardType.Point) {
			playCardDiv.addClass('victory-card');
		} else if (play.type == cardType.Money) {
			playCardDiv.addClass('treasure-card');
		} else if (play.type == cardType.Action) {
			playCardDiv.addClass('kingdon-card');
		}
		playCardDiv.css('left', i*(500/playAreaCard.length));
		playCardDiv.html(`${play.name}<img src="${play.image}">`);
		$(`.play-area`).append(playCardDiv);
		playCardDiv.contextmenu(play ,() => {
			openExplanationModalDom(play);
			return false;
		});
	});
}
/*******************************************************/
/* クリック時の処理
/*******************************************************/
// 手札クリック時の処理
function clickHandProcess(handCardDiv, hand){
	const index = findIndexTemporaryArea('id', hand.id);
	switch(currentPhase) {
		case phase.action:
			if (actionCount <= 0) {
				debugAlert("アクションポイントが足りません");
				deletAllTemporaryArea();
				return false;
			}
			if (hand.type === cardType.Action && actionCount > 0) {
				const index = findIndexHand('id', hand.id);
				actionCount--;
				updateActionDom();
				playHandCard(index);
			} else {
				debugAlert("このフェイズでは使用できません");
				deletAllTemporaryArea();
				return false;
			}
			break;
		case phase.buy:
			if (hand.type == cardType.Money) {
				const index = findIndexHand('id', hand.id);
				playHandCard(index);
			} else {
				debugAlert("このフェイズでは使用できません");
				deletAllTemporaryArea();
				return false;
			}
			break;
		case phase.executeActionByCellar:
		case phase.executeActionByChapel:
			if (index === -1) {
				if(tmpArea.length < 4){
					pushTemporaryArea(hand);
					handCardDiv.addClass("select");
				}
			} else {
				spliceTemporaryArea(index);
				handCardDiv.removeClass("select");
			}
			break;
		case phase.executeActionByMine:
			if ( hand.type == cardType.Money) {
				if (index === -1) {
					if (tmpArea.length < 1){
						pushTemporaryArea(hand);
						handCardDiv.addClass("select");
					}
				} else {
					spliceTemporaryArea(index);
					handCardDiv.removeClass("select");
				}
			} else {
				debugAlert('Moonを選択してください。');
			}
			break;
		case phase.executeActionByMoneylender:
			if ( hand.name == treasurePointCard.Bronze.name) {
				if (index === -1) {
					if (tmpArea.length < 1){
						pushTemporaryArea(hand);
						handCardDiv.addClass("select");
					}
				} else {
					spliceTemporaryArea(index);
					handCardDiv.removeClass("select");
				}
			} else {
				debugAlert(`${treasurePointCard.Bronze.name}を選択してください。`);
			}
			break;
		case phase.executeActionByThroneRoom:
			if ( hand.type == cardType.Action ) {
				if (index === -1) {
					if (tmpArea.length < 1){
						pushTemporaryArea(hand);
						handCardDiv.addClass("select");
					}
				} else {
					spliceTemporaryArea(index);
					handCardDiv.removeClass("select");
				}
			} else {
				debugAlert(`${cardType.Action}を選択してください。`);
			}
			break;	
		case phase.executeActionByRemodel:
		case phase.executeActionByArtisan2:
			if (index === -1) {
				if(tmpArea.length < 1){
					pushTemporaryArea(hand);
					handCardDiv.addClass("select");
				}
			} else {
				spliceTemporaryArea(index);
				handCardDiv.removeClass("select");
			}
			break;
		case phase.executeActionByPoacher:
			if (index === -1) {
				let supplyCount = 0;
				supplyKingdom.forEach((supply) => {if(supply.remain === 0){supplyCount++;}});
				for (const key in victoryPointCard) {if(victoryPointCard[key].remain === 0){supplyCount++;}}
				for (const key in treasurePointCard) {if(treasurePointCard[key].remain === 0){supplyCount++;}}
				if(tmpArea.length < supplyCount){
					pushTemporaryArea(hand);
					handCardDiv.addClass("select");
				}
			} else {
				spliceTemporaryArea(index);
				handCardDiv.removeClass("select");
			}
			break;
		case phase.cleanup:
		default:
			debugAlert("このフェイズでは使用できません");
			return false;
	}
	return true;
}
/*******************************************************/
/* 各カードの効果関数の宣言
/*******************************************************/
function cardDammy(){}
// 勝利点の効果関数
function cardLow(){return 1;}
function cardMiddle(){return 3;}
function cardHigh(){return 6;}
// Moonの効果関数
function cardBronze(){
	// 1Moon追加
	moonCount += 1;
	updateMoonDom();
	endMoon();
}
function cardSilver(){
	// 2Moon追加
	moonCount += 2;
	if (MerchantFlag){
		moonCount += 1;
		MerchantFlag = false;
	}
	updateMoonDom();
	endMoon();
}
function cardGold(){
	// 3Moon追加
	moonCount += 3;
	updateMoonDom();
	endMoon();
}

/*******************************************************/
/* 「地下貯蔵庫」の効果関数の宣言
/*******************************************************/
function cardCellar(){
	// +1アクション、手札を好きな枚数捨て、捨てた枚数だけドロー
	actionCount += 1;
	updateActionDom();
	
	changePhase(phase.executeActionByCellar);
	disabledMultipleBtn(false);
	updateMultipleBtnDom(`ＯＫ`);
	updateInfomationDom(`捨てるカードを選んでください`);

	updateHandDom();
}
function cardCellarSub(){
	drawDeckCard(tmpArea.length);
	while (tmpArea.length > 0) {
		const trashCard = shiftTemporaryArea();
		const index = findIndexHand('id', trashCard.id);
		const card = spliceHand(index);
		animateHnadToTrash(card);
		pushTrash(card);
	}
	updateTrashDom();
	setTimeout(() => {
		updateHandDom();
		endAction();
	}, drowWatiTime);
	return true;
}

/*******************************************************/
/* 「礼拝堂」の効果関数の宣言
/*******************************************************/
function cardChapel(){
	//手札を4枚まで廃棄可能
	changePhase(phase.executeActionByChapel);
	disabledMultipleBtn(false);
	updateMultipleBtnDom(`ＯＫ`);
	updateInfomationDom(`廃棄するカードを選んでください`);

	updateHandDom();
}
function cardChapelSub(){
	//手札を4枚まで廃棄可能
	while (tmpArea.length > 0) {
		const trashCard = shiftTemporaryArea();
		const index = findIndexHand('id', trashCard.id);
		const card = spliceHand(index);
		animateHnadToDiscard(card);
		pushDiscard(card);
	}
	setTimeout(() => {
		updateDiscardDom();
		endAction();
	}, drowWatiTime);
	return true;
}

/*******************************************************/
/* 「堀」の効果関数の宣言
/*******************************************************/
function cardMoat(){
	// +2ドロー/アタックカードが使用された時に公開すると効果を受けない
	drawDeckCard(2);
	
	setTimeout(() => {
		endAction();
	}, drowWatiTime);
}
/*******************************************************/
/* 「家臣」の効果関数の宣言
/*******************************************************/
function cardVassal(){
	// +2Moon、デッキのトップをtrashCard捨て、それがアクションなら使用できる
	moonCount += 2;
	updateMoonDom();
	if (myDeck.length <= 0){
		reconfigureDeck();
	}
	const trashCard = shiftDeck();
	if (trashCard.type == cardType.Action) {
		animateDeckToModal(trashCard);
		changePhase(phase.executeActionByVassal);
		disabledMultipleBtn(false);
		updateMultipleBtnDom(`使用しない`);
		updateInfomationDom(`アクションカードを使用しますか：${trashCard.name}`);
		pushTemporaryArea(trashCard);

		const modalCard = openModalDom(kingdomCard.Vassal.name, 500, trashCard)[0];
		modalCard.click(trashCard,() => {
			pushStackCard(trashCard.func);
			pushTrash(trashCard);
			updateTrashDom();
			closeModalDom();
			endAction();
		});
		modalCard.contextmenu(trashCard ,() => {
			openExplanationModalDom(trashCard);
			return false;
		});
		return true;
	} else {
		animateDeckToTrash(trashCard);
		pushTrash(trashCard);
	}

	updateDeckDom();
	updateTrashDom();
	setTimeout(() => {
		endAction();
	}, drowWatiTime);
	return true;
}
function cardVassalSub(){
	// +2Moon、デッキのトップをtrashCard捨て、それがアクションなら使用できる
	// トップのアクションを実行しないとき
	closeModalDom();
	const trashCard = shiftTemporaryArea();
	pushTrash(trashCard);
	updateTrashDom();
	endAction();
}

/*******************************************************/
/* 「工房」の効果関数の宣言
/*******************************************************/
function cardWorkshop(){
	//4コスト以下のカード1枚を獲得
	changePhase(phase.executeActionByWorkshop);
	disabledMultipleBtn(true);
	exchangeCost = 4;
	updateInfomationDom(`獲得するカードを選んでください（コスト${exchangeCost}以下）`);

}

/*******************************************************/
/* 「商人」の効果関数の宣言
/*******************************************************/
function cardMerchant(){
	// +1ドロー+1アクション、シルバームーン1枚を使用すれば+1Moon
	drawDeckCard(1);
	actionCount += 1;
	updateActionDom();
	// シルバームーンを使用したときに+1Moonするフラグを立てる
	MerchantFlag = true;
	
	setTimeout(() => {
		endAction();
	}, drowWatiTime);
}

/*******************************************************/
/* 「前駆者」の効果関数の宣言
/*******************************************************/
function cardHarbinger(){
	// +1ドロー+1アクション、捨て札からデッキトップにカード1枚を置ける
	drawDeckCard(1);
	actionCount += 1;
	updateActionDom();

	if (myTrash.length > 0){
		changePhase(phase.executeActionByHarbinger);
		disabledMultipleBtn(false);
		updateMultipleBtnDom(`しない`);
		updateInfomationDom(`${kingdomCard.Harbinger.name}:あなたの捨て札から1枚カードを山札の上に置きますか`);
		setTimeout(() => {
			updateHandDom();
		}, 400);
			const modalCards = openModalTrashList();
		return true;
	}
	setTimeout(() => {
		endAction();
	}, drowWatiTime);
	return true;
}

/*******************************************************/
/* 「村」の効果関数の宣言
/*******************************************************/
function cardVillage(){
	// +1ドロー+2アクション
	drawDeckCard(1);
	actionCount += 2;
	updateActionDom();
	setTimeout(() => {
		endAction();
	}, drowWatiTime);
}

/*******************************************************/
/* 「改築」の効果関数の宣言
/*******************************************************/
function cardRemodel(){
	// 手札1枚を廃棄、(廃棄カードのコスト)+2コスト以下のカード1枚を獲得
	if(myHand.length === 0){
		// 手札がなかった場合は何もしない
		endAction();
		return true;
	}
	changePhase(phase.executeActionByRemodel);
	disabledMultipleBtn(false);
	updateMultipleBtnDom(`ＯＫ`);
	updateInfomationDom(`廃棄するカードを選んでください`);

	updateHandDom();
}
function cardRemodelSub(){
	// 手札1枚を廃棄、(廃棄カードのコスト)+2コスト以下のカード1枚を獲得
	if(tmpArea.length === 0){
		return false;
	}
	const discardCard = shiftTemporaryArea();
	const index = findIndexHand('id', discardCard.id);
	if (index === -1) {
		return false;
	}
	const card = spliceHand(index);
	const cost = card.cost;
	animateHnadToDiscard(card);
	pushDiscard(card);
	updateDiscardDom();
	updateSupplyDom();
	exchangeCost = cost + 2;
	updateInfomationDom(`獲得するカードを選んでください（コスト${exchangeCost}以下）`);
	
	setTimeout(() => {
		updateHandDom();
	}, trashWaitTime);
	return true;
}

/*******************************************************/
/* 「鍛冶屋」の効果関数の宣言
/*******************************************************/
function cardSmithy(){
	// +3ドロー
	drawDeckCard(3);
	setTimeout(() => {
		endAction();
	}, drowWatiTime);
}
/*******************************************************/
/* 「金貸し」の効果関数の宣言
/*******************************************************/
function cardMoneylender(){
	// 銅貨1枚を廃棄してもよい、廃棄した場合+3Moon
	changePhase(phase.executeActionByMoneylender);
	disabledMultipleBtn(false);
	updateMultipleBtnDom(`ＯＫ`);
	updateInfomationDom(`廃棄するカード(${treasurePointCard.Bronze.name})を選んでください`);

	updateHandDom();
}
function cardMoneylenderSub(){
	if(tmpArea.length === 0){
		// 何も廃棄せずに終わる
		endAction();
		return true;
	}
	const discardCard = shiftTemporaryArea();
	const index = findIndexHand('id', discardCard.id);
	if (index === -1) {
		return false;
	}
	const card = spliceHand(index);
	animateHnadToDiscard(card);
	pushDiscard(card);
	updateDiscardDom();

	moonCount += 3;
	updateMoonDom();
	updateSupplyDom();
	setTimeout(() => {
		updateHandDom();
		endAction();
	}, trashWaitTime);
	return true;

}
/*******************************************************/
/* 「玉座の間」の効果関数の宣言
/*******************************************************/
function cardThroneRoom(){
	// 手札のアクション1枚を2回使用してもよい
	changePhase(phase.executeActionByThroneRoom);
	disabledMultipleBtn(false);
	updateMultipleBtnDom(`ＯＫ`);
	updateInfomationDom(`使用するアクションカードを選んでください`);

	updateHandDom();
}
function cardThroneRoomSub(){
	if(tmpArea.length === 0){
		// 何も廃棄せずに終わる
		endAction();
		return true;
	}
	const discardCard = shiftTemporaryArea();
	const index = findIndexHand('id', discardCard.id);
	if (index === -1) {
		return false;
	}
	const card = spliceHand(index);
	pushPlayArea(card);
	updatePlayAreaDom();
	pushStackCard(card.func);
	pushStackCard(card.func);
	endAction();
	return true;
	
}

/*******************************************************/
/* 「密猟者」の効果関数の宣言
/*******************************************************/
function cardPoacher(){
	//+1ドロー+1アクション+1●、(空のサプライの数)枚捨て札にする
	drawDeckCard(1);
	actionCount += 1;
	updateActionDom();
	moonCount += 1;
	updateMoonDom();

	let supplyCount = 0;
	supplyKingdom.forEach((supply) => {
		if(supply.remain === 0){
			supplyCount++;
		}
	});
	for (const key in victoryPointCard) {
		if(victoryPointCard[key].remain === 0){
			supplyCount++;
		}
	}
	for (const key in treasurePointCard) {
		if(treasurePointCard[key].remain === 0){
			supplyCount++;
		}
	}

	setTimeout(() => {
		if(supplyCount > 0) {
			changePhase(phase.executeActionByPoacher);
			disabledMultipleBtn(false);
			updateMultipleBtnDom(`ＯＫ`);
			updateInfomationDom(`捨てるカードを選んでください（${supplyCount}枚）`);
			updateHandDom();
			return true;
		}
		endAction();
	}, drowWatiTime);
	return true;
}
function cardPoacherSub(){
	//+1ドロー+1アクション+1●、(空のサプライの数)枚捨て札にする
	if(tmpArea.length === 0){
		// 何も捨てずに終わる
		endAction();
		return true;
	}
	while (tmpArea.length > 0) {
		const trashCard = shiftTemporaryArea();
		const index = findIndexHand('id', trashCard.id);
		if (index === -1) {
			return false;
		}
		const card = spliceHand(index);
		animateHnadToTrash(card);
		pushTrash(card);
	}
	setTimeout(() => {
		endAction();
	}, drowWatiTime);
	return true;
}
/*******************************************************/
/* 「庭園」の効果関数の宣言
/*******************************************************/
function cardGardens(){return Math.floor(myHand.length/10);}


/*******************************************************/
/* 「市場」の効果関数の宣言
/*******************************************************/
function cardMarket(){
	//+1ドロー+1アクション+1購入+1Moon
	drawDeckCard(1);
	actionCount += 1;
	updateActionDom();
	buyCount += 1;
	updateBuyDom();
	moonCount += 1;
	updateMoonDom();
	setTimeout(() => {
		endAction();
	}, drowWatiTime);
}

/*******************************************************/
/* 「衛兵」の効果関数の宣言
/*******************************************************/
function cardSentry(){
	// +1ドロー+1アクション、デッキの上2枚を見て、それぞれ廃棄するか、捨て札にするか、デッキの上に戻す。
	const top = 1;
	const bottom = 0;
	drawDeckCard(1);
	actionCount += 1;
	updateActionDom();

	if (myDeck.length < 2){
		reconfigureDeck();
	} 
	const topCard = shiftDeck();
	const bottomCard = shiftDeck();
	updateDeckDom();
	changePhase(phase.executeActionBySentry);
	disabledMultipleBtn(false);
	updateMultipleBtnDom(`ＯＫ`);
	updateInfomationDom(`衛兵効果：カードを廃棄か、捨て札か、山札に戻すか選ぶ`);
	const modalCards = openModalForSentryDom(kingdomCard.Sentry.name, bottomCard, topCard);
	pushTemporaryArea(topCard);
	pushTemporaryArea(bottomCard);
	modalCards[top].contextmenu(topCard ,() => {
		openExplanationModalDom(topCard);
		return false;
	});
	modalCards[bottom].contextmenu(bottomCard ,() => {
		openExplanationModalDom(bottomCard);
		return false;
	});
	return true;
}
function cardSentrySub(){
	analysisModalForSentryDom();
	
	closeModalDom();
	endAction();
	return true;
}
/*******************************************************/
/* 「議事堂」の効果関数の宣言
/*******************************************************/
function cardCouncilRoom(){
	// +4ドロー+1購入、他プレイヤーも+1ドロー
	drawDeckCard(4);
	buyCount += 1;
	updateBuyDom();
	setTimeout(() => {
		endAction();
	}, drowWatiTime);
}

/*******************************************************/
/* 「研究所」の効果関数の宣言
/*******************************************************/
function cardLaboratory(){
	// +2ドロー+1アクション
	drawDeckCard(2);
	actionCount += 1;
	updateActionDom();
	setTimeout(() => {
		endAction();
	}, drowWatiTime);
}

/*******************************************************/
/* 「鉱山」の効果関数の宣言
/*******************************************************/
function cardMine(){
	// Moon1枚を廃棄、(廃棄カードのコスト)+3以下のMoon1枚を手札に獲得
	changePhase(phase.executeActionByMine);
	disabledMultipleBtn(false);
	updateMultipleBtnDom(`ＯＫ`);
	updateInfomationDom(`廃棄するカード(Moon)を選んでください`);

	updateHandDom();
}
function cardMineSub(){
	// Moon1枚を廃棄、(廃棄カードのコスト)+3以下のMoon1枚を手札に獲得
	const discardCard = shiftTemporaryArea();
	const index = findIndexHand('id', discardCard.id);
	const card = spliceHand(index);
	const cost = card.cost;
	animateHnadToDiscard(card);
	pushDiscard(card);
	updateDiscardDom();
	updateSupplyDom();
	setTimeout(() => {
		updateHandDom();
	}, trashWaitTime);
	exchangeCost = cost + 3;
	updateInfomationDom(`獲得するカードを選んでください（コスト${exchangeCost}以下）`);
}

/*******************************************************/
/* 「祝祭」の効果関数の宣言
/*******************************************************/
function cardFestival(){
	//+2アクション+1購入+2Moon
	actionCount += 2;
	updateActionDom();
	buyCount += 1;
	updateBuyDom();
	moonCount += 2;
	updateMoonDom();
	endAction();
}

/*******************************************************/
/* 「書庫」の効果関数の宣言
/*******************************************************/
function cardLibrary(){
	// 手札が7枚になるまでカードを引く。アクションカードを引いた場合は脇に置き、7枚になるまで引いた後捨てる
	while (myHand.length < 7) {
		if (myDeck.length <= 0){
			reconfigureDeck();
		} 
		if(myDeck.length > 0){
			// デッキから手札へカードを引く
			const card = shiftDeck();
			if (card.type == cardType.Action){
				pushTemporaryArea(card);
				continue;
			}else{
				pushHand(card);
			}
		} else {
			break;
		}
	}
	const trash = deletAllTemporaryArea();
	trash.forEach((card) => {
		pushTrash(card);
	});
	updateDeckDom();
	updateHandDom();
	updateTrashDom();

	endAction();
}

/*******************************************************/
/* 「職人」の効果関数の宣言
/*******************************************************/
function cardArtisan(){
	// 5コスト以下のカード1枚を手札に獲得。手札1枚をデッキトップに置く
	changePhase(phase.executeActionByArtisan1);
	disabledMultipleBtn(true);
	exchangeCost = 5;
	updateInfomationDom(`獲得するサプライを選んでください（コスト${exchangeCost}以下）`);
	updateHandDom();
}

function cardArtisanSub(){
	// 5コスト以下のカード1枚を手札に獲得。手札1枚をデッキトップに置く
	changePhase(phase.executeActionByArtisan2);
	disabledMultipleBtn(false);
	updateMultipleBtnDom(`ＯＫ`);
	updateInfomationDom(`手札1枚をデッキトップに置いてください`);
	updateHandDom();
}
function cardArtisanSubSub(){
	// 5コスト以下のカード1枚を手札に獲得。手札1枚をデッキトップに置く
	const deckCard = shiftTemporaryArea();
	const index = findIndexHand('id', deckCard.id);
	const card = spliceHand(index);
	animateHnadToDeck(card);
	unshiftDeck(card);
	updateDeckDom();
	setTimeout(() => {
		updateHandDom();
		endAction();
	}, trashWaitTime);
}

/*****************************************************************************/
/* アニメーション関数
/*****************************************************************************/
/*******************************************************/
/* animateCleanupToTrash：クリーンアップの捨て札処理のアニメーション
/*******************************************************/
function animateCleanupToTrash(){
	const playCardDiv = $('.play-card');
	const handCardDiv = $('.hand-card');
	playCardDiv
		.css('transform', 'scale(0.7)')
		.css('left', '');
	playCardDiv.animate({
		top: trashCoordinateForPlayArea.top, 
		left: trashCoordinateForPlayArea.left,
		width: trashCoordinateForPlayArea.width 
	}, trashWaitTime);
	handCardDiv
		.removeClass('available')
		.css('position', 'absolute')
		.css('transform', 'scale(0.7)');
	handCardDiv.animate({ 
		top: trashCoordinateForHandArea.top,
		left: trashCoordinateForHandArea.left,
		width: trashCoordinateForHandArea.width
	}, trashWaitTime);
}
/*******************************************************/
/* animateDrowDeck：ドローのアニメーション
/*******************************************************/
function animateDrowDeck(card){
	const drowCardDiv = $('<div>');
	$('.hand-info').append(drowCardDiv);
	drowCardDiv
		.html(`${card.name}<img src="${card.image}">`)
		.addClass('hand-card')
		.removeClass('available')
		.css('position', 'absolute')
		.css('width', deckCoordinateForHandArea.width)
		.css('top', deckCoordinateForHandArea.top)
		.css('left', deckCoordinateForHandArea.left);
	if (card.type == cardType.Point) {
		drowCardDiv.addClass('victory-card');
	} else if (card.type == cardType.Money) {
		drowCardDiv.addClass('treasure-card');
	} else if (card.type == cardType.Action) {
		drowCardDiv.addClass('kingdon-card');
	}
	drowCardDiv.animate({
		left: handCoordinateForHandArea.left, 
		top: handCoordinateForHandArea.top,
		width: handCoordinateForHandArea.width
	}, drowWatiTime);
}
/*******************************************************/
/* animateDrowSupplyKingdom：王国カード購入のアニメーション
/*******************************************************/
function animateDrowSupplyKingdom(card, index){
	console.log(card);
	console.log(index);

	const supplyCardDiv = $('<div>');
	$('.supply-area').append(supplyCardDiv);
	supplyCardDiv
		.html(`${card.name}<img src="${card.image}">`)
		.addClass('get-supply-card')
		.css('position', 'absolute')
		.css('top', kingdomCoordinateForSupply[index].top)
		.css('left', kingdomCoordinateForSupply[index].left);
	if (card.type == cardType.Point) {
		supplyCardDiv.addClass('victory-card');
	} else if (card.type == cardType.Money) {
		supplyCardDiv.addClass('treasure-card');
	} else if (card.type == cardType.Action) {
		supplyCardDiv.addClass('kingdon-card');
	}
	supplyCardDiv.animate({
		top: trashCoordinateForSupply.top,
		left: trashCoordinateForSupply.left,
		width: trashCoordinateForSupply.width
	}, trashWaitTime);
	setTimeout(() => {
		supplyCardDiv.remove();
	}, trashWaitTime);
}
/*******************************************************/
/* animateDrowSupply：サプライ(勝利点・Moon)カード購入のアニメーション
/*******************************************************/
function animateDrowSupply(key){
	console.log(key);
	const supplyCardDiv = $('<div>');
	$('.supply-area').append(supplyCardDiv);
	supplyCardDiv
		.addClass('get-supply-card')
		.css('position', 'absolute');
	if(key in victoryCoordinateForSupply){
		// 勝利点の場合
		supplyCardDiv
			.html(`${victoryPointCard[key].name}<img src="${victoryPointCard[key].image}">`)
			.css('top', victoryCoordinateForSupply[key].top)
			.css('left', victoryCoordinateForSupply[key].left);
	} else if(key in treasureCoordinateForSupply){
		// Moonの場合
		console.log(key);
		supplyCardDiv
			.html(`${treasurePointCard[key].name}<img src="${treasurePointCard[key].image}">`)
			.css('top', treasureCoordinateForSupply[key].top)
			.css('left', treasureCoordinateForSupply[key].left);
	} else {
		return;
	}
	if (treasurePointCard[key].type == cardType.Point) {
		supplyCardDiv.addClass('victory-card');
	} else if (treasurePointCard[key].type == cardType.Money) {
		supplyCardDiv.addClass('treasure-card');
	} else if (treasurePointCard[key].type == cardType.Action) {
		supplyCardDiv.addClass('kingdon-card');
	}
	supplyCardDiv.animate({
		top: trashCoordinateForSupply.top,
		left: trashCoordinateForSupply.left,
		width: trashCoordinateForSupply.width
	}, trashWaitTime);
	setTimeout(() => {
		supplyCardDiv.remove();
	}, trashWaitTime);

}
/*******************************************************/
/* animateDrowSupplyKingdomToHand：王国カードを手札に取得するアニメーション
/*******************************************************/
function animateDrowSupplyKingdomToHand(card, index){
	console.log(card);
	console.log(index);

	const supplyCardDiv = $('<div>');
	$('.supply-area').append(supplyCardDiv);
	supplyCardDiv
		.html(`${card.name}<img src="${card.image}">`)
		.addClass('get-supply-card')
		.css('position', 'absolute')
		.css('top', kingdomCoordinateForSupply[index].top)
		.css('left', kingdomCoordinateForSupply[index].left);
	if (card.type == cardType.Point) {
		supplyCardDiv.addClass('victory-card');
	} else if (card.type == cardType.Money) {
		supplyCardDiv.addClass('treasure-card');
	} else if (card.type == cardType.Action) {
		supplyCardDiv.addClass('kingdon-card');
	}
	supplyCardDiv.animate({
		top: handCoordinateForSupply.top,
		left: handCoordinateForSupply.left,
		width: handCoordinateForSupply.width
	}, trashWaitTime);
	setTimeout(() => {
		supplyCardDiv.remove();
	}, trashWaitTime);
}
/*******************************************************/
/* animateDrowSupplyToHand：サプライ(勝利点・Moon)カードを手札に取得するアニメーション
/*******************************************************/
function animateDrowSupplyToHand(key){
	console.log(key);
	const supplyCardDiv = $('<div>');
	$('.supply-area').append(supplyCardDiv);
	supplyCardDiv
		.addClass('get-supply-card')
		.css('position', 'absolute');
	if(key in victoryCoordinateForSupply){
		// 勝利点の場合
		supplyCardDiv
			.html(`${victoryPointCard[key].name}<img src="${victoryPointCard[key].image}">`)
			.css('top', victoryCoordinateForSupply[key].top)
			.css('left', victoryCoordinateForSupply[key].left);
	} else if(key in treasureCoordinateForSupply){
		// Moonの場合
		console.log(key);
		supplyCardDiv
			.html(`${treasurePointCard[key].name}<img src="${treasurePointCard[key].image}">`)
			.css('top', treasureCoordinateForSupply[key].top)
			.css('left', treasureCoordinateForSupply[key].left);
	} else {
		return;
	}
	if (treasurePointCard[key].type == cardType.Point) {
		supplyCardDiv.addClass('victory-card');
	} else if (treasurePointCard[key].type == cardType.Money) {
		supplyCardDiv.addClass('treasure-card');
	} else if (treasurePointCard[key].type == cardType.Action) {
		supplyCardDiv.addClass('kingdon-card');
	}
	supplyCardDiv.animate({
		top: handCoordinateForSupply.top,
		left: handCoordinateForSupply.left,
		width: handCoordinateForSupply.width
	}, trashWaitTime);
	setTimeout(() => {
		supplyCardDiv.remove();
	}, trashWaitTime);

}
/*******************************************************/
/* animatePlayHandCard：手札からプレイするときのアニメーション
/*******************************************************/
function animatePlayHandCard(card){
	const playCardDiv = $('<div>');
	$('.play-area').append(playCardDiv);
	playCardDiv
		.html(`${card.name}<img src="${card.image}">`)
		.addClass('play-card')
		.css('position', 'absolute')
		.css('top', handCoordinateForPlayArea.width)
		.css('top', handCoordinateForPlayArea.top)
		.css('left', handCoordinateForPlayArea.left);
	if (card.type == cardType.Point) {
		playCardDiv.addClass('victory-card');
	} else if (card.type == cardType.Money) {
		playCardDiv.addClass('treasure-card');
	} else if (card.type == cardType.Action) {
		playCardDiv.addClass('kingdon-card');
	}
	playCardDiv.animate({
		top: playCoordinateForPlayArea.top,
		left: playCoordinateForPlayArea.left,
		width: playCoordinateForPlayArea.width
	}, playWatiTime);
	playCardDiv.contextmenu(card ,() => {
		openExplanationModalDom(card);
		return false;
	});
}
/*******************************************************/
/* animateHnadToDeck：手札からデッキ移動のアニメーション
/*******************************************************/
function animateHnadToDeck(card){
	const handCardDiv = $(`#hand-card${card.id}`);
	handCardDiv
		.removeClass('available')
		.css('position', 'absolute')
		.css('transform', 'scale(0.7)');
	handCardDiv.animate({
		top: deckCoordinateForHandArea.top,
		left: deckCoordinateForHandArea.left,
		width: deckCoordinateForHandArea.width
	}, trashWaitTime);
}

/*******************************************************/
/* animateHnadToTrash：手札から捨て札移動のアニメーション
/*******************************************************/
function animateHnadToTrash(card){
	const handCardDiv = $(`#hand-card${card.id}`);
	handCardDiv
		.removeClass('available')
		.css('position', 'absolute')
		.css('transform', 'scale(0.7)');
	handCardDiv.animate({
		top: trashCoordinateForHandArea.top,
		left: trashCoordinateForHandArea.left,
		width: trashCoordinateForHandArea.width
	}, trashWaitTime);
}
/*******************************************************/
/* animateHnadToDiscard：手札から廃棄へのアニメーション
/*******************************************************/
function animateHnadToDiscard(card){
	const handCardDiv = $(`#hand-card${card.id}`);
	handCardDiv
		.removeClass('available')
		.css('position', 'absolute')
		.css('width', handCoordinateForHandArea.width)
		.css('transform', 'scale(0.7)');
	handCardDiv.animate({
		top: discardCoordinateForHandArea.top,
		left: discardCoordinateForHandArea.left,
		width: discardCoordinateForHandArea.width
	}, trashWaitTime);
}
/*******************************************************/
/* animateDeckToTrash：デッキから捨て札移動のアニメーション
/*******************************************************/
function animateDeckToTrash(card){
	const cardDiv = $('<div>');
	$('.supply-area').append(cardDiv);
	cardDiv
		.html(`${card.name}<img src="${card.image}">`)
		.addClass('get-supply-card')
		.css('position', 'absolute')
		.css('width', deckCoordinateForSupply.width)
		.css('top', deckCoordinateForSupply.top)
		.css('left', deckCoordinateForSupply.left);

	if (card.type == cardType.Point) {
		cardDiv.addClass('victory-card');
	} else if (card.type == cardType.Money) {
		cardDiv.addClass('treasure-card');
	} else if (card.type == cardType.Action) {
		cardDiv.addClass('kingdon-card');
	}
	cardDiv.animate({
		top: trashCoordinateForSupply.top,
		left: trashCoordinateForSupply.left,
		width: trashCoordinateForSupply.width
	}, trashWaitTime);
	setTimeout(() => {
		cardDiv.remove();
	}, trashWaitTime);

}
/*******************************************************/
/* animateDeckToModal：デッキからモーダル移動のアニメーション
/*******************************************************/
function animateDeckToModal(card){
	const cardDiv = $('<div>');
	$('.supply-area').append(cardDiv);
	cardDiv
		.html(`${card.name}<img src="${card.image}">`)
		.addClass('get-supply-card')
		.css('position', 'absolute')
		.css('width', '130px')
		.css('top', deckCoordinateForSupply.top)
		.css('left', deckCoordinateForSupply.left);

	if (card.type == cardType.Point) {
		cardDiv.addClass('victory-card');
	} else if (card.type == cardType.Money) {
		cardDiv.addClass('treasure-card');
	} else if (card.type == cardType.Action) {
		cardDiv.addClass('kingdon-card');
	}
	cardDiv.animate({
		top: modalCoordinateForSupply.top,
		left: modalCoordinateForSupply.left,
		width: modalCoordinateForSupply.width
	}, modalWatiTime);

	setTimeout(() => {
		cardDiv.remove();
	}, modalWatiTime);
}
/*******************************************************/
/* animateModalToDeck：モーダルからデッキ移動のアニメーション
/*******************************************************/
function animateModalToDeck(card){
	const cardDiv = $('<div>');
	$('.supply-area').append(cardDiv);
	cardDiv
		.html(`${card.name}<img src="${card.image}">`)
		.addClass('get-supply-card')
		.css('position', 'absolute')
		.css('width', '150px')
		.css('top', modalCoordinateForSupply.top)
		.css('left', modalCoordinateForSupply.left);
	if (card.type == cardType.Point) {
		cardDiv.addClass('victory-card');
	} else if (card.type == cardType.Money) {
		cardDiv.addClass('treasure-card');
	} else if (card.type == cardType.Action) {
		cardDiv.addClass('kingdon-card');
	}
	cardDiv.animate({
		top: deckCoordinateForSupply.top,
		left: deckCoordinateForSupply.left,
		width: deckCoordinateForSupply.width
	}, modalWatiTime);
	setTimeout(() => {
		cardDiv.remove();
	}, modalWatiTime);
}
/*******************************************************/
/* animateTrashToModal：捨て札からモーダル移動のアニメーション
/*******************************************************/
function animateTrashToModal(card){
	const cardDiv = $('<div>');
	$('.supply-area').append(cardDiv);
	cardDiv
		.html(`${card.name}<img src="${card.image}">`)
		.addClass('get-supply-card')
		.css('position', 'absolute')
		.css('width', '80px')
		.css('top', trashCoordinateForSupply.top)
		.css('left', trashCoordinateForSupply.left);
	if (card.type == cardType.Point) {
		cardDiv.addClass('victory-card');
	} else if (card.type == cardType.Money) {
		cardDiv.addClass('treasure-card');
	} else if (card.type == cardType.Action) {
		cardDiv.addClass('kingdon-card');
	}
	cardDiv.animate({
		top: modalCoordinateForSupply.top,
		left: modalCoordinateForSupply.left,
		width: modalCoordinateForSupply.width
	}, modalWatiTime);
	setTimeout(() => {
		cardDiv.remove();
	}, modalWatiTime);
}
/*******************************************************/
/* animateModalToDeck：モーダルから捨て札移動のアニメーション
/*******************************************************/
function animateModalToTrash(card){
	const cardDiv = $('<div>');
	$('.supply-area').append(cardDiv);
	cardDiv
		.html(`${card.name}<img src="${card.image}">`)
		.addClass('get-supply-card')
		.css('position', 'absolute')
		.css('width', '150px')
		.css('top', modalCoordinateForSupply.top)
		.css('left', '83px' );
	if (card.type == cardType.Point) {
		cardDiv.addClass('victory-card');
	} else if (card.type == cardType.Money) {
		cardDiv.addClass('treasure-card');
	} else if (card.type == cardType.Action) {
		cardDiv.addClass('kingdon-card');
	}
	cardDiv.animate({
		top: trashCoordinateForSupply.top,
		left: trashCoordinateForSupply.left,
		width: trashCoordinateForSupply.width
	}, trashWaitTime);
	setTimeout(() => {
		cardDiv.remove();
	}, trashWaitTime);
}
/*******************************************************/
/* animateModalToDiscard：モーダルから廃棄へのアニメーション
/*******************************************************/
function animateModalToDiscard(card){
	const cardDiv = $('<div>');
	$('.supply-area').append(cardDiv);
	cardDiv
		.html(`${card.name}<img src="${card.image}">`)
		.addClass('get-supply-card')
		.css('position', 'absolute')
		.css('width', '150px')
		.css('top', modalCoordinateForSupply.top)
		.css('left', '700px' );
	if (card.type == cardType.Point) {
		cardDiv.addClass('victory-card');
	} else if (card.type == cardType.Money) {
		cardDiv.addClass('treasure-card');
	} else if (card.type == cardType.Action) {
		cardDiv.addClass('kingdon-card');
	}
	cardDiv.animate({
		top: discardCoordinateForSupply.top,
		left: discardCoordinateForSupply.left,
		width: discardCoordinateForSupply.width
	}, trashWaitTime);
	setTimeout(() => {
		cardDiv.remove();
	}, trashWaitTime);
}


/*****************************************************************************/
/* システム関数
/*****************************************************************************/
/*******************************************************/
/* changePhase：フェイズを変更する
/*******************************************************/
function changePhase(ph){
	$('.phase-count').html(ph);
	currentPhase = ph;
}
/*******************************************************/
/* pushDeck：デッキキューの末尾にカードを追加する
/*******************************************************/
function pushDeck(card){
	if ('id' in card) {
		myDeck.push({
			name: card.name,
			cost: card.cost,
			type: card.type,
			effect: card.effect,
			image: card.image,
			func: card.func
		});
	} else {
		myDeck.push(card);
	}
}
/*******************************************************/
/* unshiftDeck：デッキキューの先頭にデータを追加する
/*******************************************************/
function unshiftDeck(card){
	if ('id' in card) {
		myDeck.unshift({
			name: card.name,
			cost: card.cost,
			type: card.type,
			effect: card.effect,
			image: card.image,
			func: card.func
		});
	} else {
		myDeck.unshift(card);
	}
}
/*******************************************************/
/* shiftDeck：デッキキューの先頭からデータを取り出す
/*******************************************************/
function shiftDeck(){
	return myDeck.shift();
}
/*******************************************************/
/* pushHand：手札キューの末尾にカードを追加する
/*******************************************************/
function pushHand(card){
	// IDを採番しなおす
	myHand = myHand.map((user, index) => ({
		...user,
		id: index + 1
	}));
	// デッキから手札へカードを引く
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
/*******************************************************/
/* spliceHand：手札キューのIndex番目のデータを取り出す
/*******************************************************/
function spliceHand(index){
	return myHand.splice(index, 1)[0];
}
/*******************************************************/
/* findIndexHand：手札キューから検索する
/*******************************************************/
function findIndexHand(id, key){
	return myHand.findIndex((card) => card[id] == key);
}
/*******************************************************/
/* deletAllHand：手札キューをすべて削除する
/*******************************************************/
function deletAllHand(){
	return myHand.splice(0, myHand.length);
}
/*******************************************************/
/* pushTrash：捨て札キューの末尾にカードを追加する
/*******************************************************/
function pushTrash(card){
	if ('id' in card) {
		myTrash.push({
			name: card.name,
			cost: card.cost,
			type: card.type,
			effect: card.effect,
			image: card.image,
			func: card.func
		});
	} else {
		myTrash.push(card);
	}
}
/*******************************************************/
/* spliceTrash：捨て札キューのIndex番目のデータを取り出す
/*******************************************************/
function spliceTrash(index){
	return myTrash.splice(index, 1)[0];
}
/*******************************************************/
/* findIndexHand：手札キューから検索する
/*******************************************************/
function findIndexTrash(id, key){
	return myTrash.findIndex((card) => card[id] == key);
}
/*******************************************************/
/* deletAllTrash：捨て札キューをすべて削除する
/*******************************************************/
function deletAllTrash(){
	return myTrash.splice(0, myTrash.length);
}
/*******************************************************/
/* pushPlayArea：プレイエリアキューの末尾にカードを追加する
/*******************************************************/
function pushPlayArea(card){
	if ('id' in card) {
		playAreaCard.push({
			name: card.name,
			cost: card.cost,
			type: card.type,
			effect: card.effect,
			image: card.image,
			func: card.func
		});
	} else {
		playAreaCard.push(card);
	}
}
/*******************************************************/
/* deletAllPlayArea：プレイエリアキューをすべて削除する
/*******************************************************/
function deletAllPlayArea(){
	return playAreaCard.splice(0, playAreaCard.length);
}
/*******************************************************/
/* pushDiscard：廃棄キューの末尾にカードを追加する
/*******************************************************/
function pushDiscard(card){
	if ('id' in card) {
		discard.push({
			name: card.name,
			cost: card.cost,
			type: card.type,
			effect: card.effect,
			image: card.image,
			func: card.func
		});
	} else {
		discard.push(card);
	}
}
/*******************************************************/
/* pushTemporaryArea：一時用キューの末尾にカードを追加する
/*******************************************************/
function pushTemporaryArea(item){
	tmpArea.push(item);
}
/*******************************************************/
/* shiftTemporaryArea：一時用キューの先頭からデータを取り出す
/*******************************************************/
function shiftTemporaryArea(){
	return tmpArea.shift();
}
/*******************************************************/
/* spliceTemporaryArea：一時用キューのIndex番目のデータを取り出す
/*******************************************************/
function spliceTemporaryArea(index){
	return tmpArea.splice(index, 1)[0];
}
/*******************************************************/
/* findIndexTemporaryArea：一時用キューから検索する
/*******************************************************/
function findIndexTemporaryArea(id, key){
	return tmpArea.findIndex((card) => card[id] == key);
}
/*******************************************************/
/* spliceTemporaryArea：一時用キューをすべて削除する
/*******************************************************/
function deletAllTemporaryArea(){
	return tmpArea.splice(0, tmpArea.length);
}
/*******************************************************/
/* pushStackCard：カード効果実行キューの末尾にカードを追加する
/*******************************************************/
function pushStackCard(func){
	stackCard.push(func);
}
/*******************************************************/
/* shiftStackCard：カード効果実行キューの先頭からデータを取り出す
/*******************************************************/
function shiftStackCard(){
	return stackCard.shift();
}
/*******************************************************/
/* shuffleArray：配列のシャッフル
/*******************************************************/
function disabledMultipleBtn(flag){
	return $('.multiple-btn').prop('disabled', flag);
}
/*******************************************************/
/* shuffleArray：配列のシャッフル
/*******************************************************/
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

/*******************************************************/
/* debugAlert：デバッグ用アラート
/*******************************************************/
function debugAlert(text) {
	alert(text);
}
