const victoryPointCard = {
	High: {name: 'ダマスカス鋼', cost: 8, type: '勝利点', remain: 8, func: cardHigh, effect: '+6点', image: 'images/point_6.jpg'},
	Middle: {name: '玉鋼', cost: 5, type: '勝利点', remain: 8, func: cardMiddle, effect: '+3点', image: 'images/point_3.jpg'},
	Low: {name: 'ギガス鋼', cost: 2, type: '勝利点', remain: 8+3, func: cardLow, effect: '+1点', image: 'images/point_1.jpg'}
};
const treasurePointCard = {
	Gold: {name: '金月', cost: 6, type: 'Moon', remain: 30, func: cardGold, effect: '+3Moon', image: 'images/moon_Gold.png'},
	Silver: {name: '銀月', cost: 3, type: 'Moon', remain: 40, func: cardSilver, effect: '+2Moon', image: 'images/moon_Silver.png'},
	Bronze: {name: '銅月', cost: 0, type: 'Moon', remain: 46+7, func: cardBronze, effect: '+1Moon', image: 'images/moon_Bronze.png'}
};
//用いる王国カード
const kingdomCard = [
	{name: '騎空艇の貨物室', cost: 2, type: 'アクション', remain: 10, func: cardCellar, effect: '+1アクション<br><br>手札を好きな枚数捨て、捨てた枚数だけドロー', image: 'images/Cellar.png'},
	{name: 'ゼエン教', cost: 2, type: 'アクション', remain: 10, func: cardChapel, effect: '手札を4枚まで廃棄可能', image: 'images/Chapel.png'},
	{name: '家臣トー', cost: 3, type: 'アクション', remain: 10, func: cardVassal, effect: '+2Moon<br><br>デッキのトップを捨て、それがアクションなら使用できる', image: 'images/Vassal.png'},
	{name: 'ククルの銃工房', cost: 3, type: 'アクション', remain: 10, func: cardWorkshop, effect: '4コスト以下のカード1枚を獲得', image: 'images/Workshop.png'},
	{name: '商人ｼｪﾛｶﾙﾃ', cost: 3, type: 'アクション', remain: 10, func: cardMerchant, effect: '+1ドロー<br>+1アクション<br><br>銀月1枚を使用すれば+1Moon', image: 'images/Merchant.png'},
	{name: '前駆者ｳｪﾙﾀﾞｰ', cost: 3, type: 'アクション', remain: 10, func: cardHarbinger, effect: '+1ドロー<br>+1アクション<br>捨て札からデッキトップにカード1枚を置ける', image: 'images/Harbinger.png'},
	{name: 'キハイゼル村', cost: 3, type: 'アクション', remain: 10, func: cardVillage, effect: '+1ドロー<br>+2アクション', image: 'images/Village.png'},
	{name: '改築', cost: 4, type: 'アクション', remain: 10, func: cardRemodel, effect: '手札1枚を廃棄、(廃棄カードのコスト)+2コスト以下のカード1枚を獲得', image: 'images/Remodel.png'},
	{name: '鍛冶屋', cost: 4, type: 'アクション', remain: 10, func: cardSmithy, effect: '+3ドロー', image: 'images/Smithy.png'},
	{name: '金貸し', cost: 4, type: 'アクション', remain: 10, func: cardMoneylender, effect: '銅貨1枚を廃棄してもよい、廃棄した場合+3Moon', image: 'images/Moneylender.png'},
	{name: '玉座の間', cost: 4, type: 'アクション', remain: 10, func: cardThroneRoom, effect: '手札のアクション1枚を2回使用してもよい', image: 'images/ThroneRoom.png'},
	{name: '庭園', cost: 4, type: '勝利点', remain: 10, func: cardGardens, effect: 'デッキ10枚につき1点', image: 'images/Gardens.png'},
	{name: '市場', cost: 5, type: 'アクション', remain: 10, func: cardMarket, effect: '+1ドロー<br>+1アクション<br>+1購入<br>+1Moon', image: 'images/Market.png'},
	{name: '衛兵ﾃﾞﾘﾌｫｰﾄﾞ', cost: 5, type: 'アクション', remain: 10, func: cardSentry, effect: '+1ドロー<br>+1アクション<br>デッキの上2枚を見て、それぞれ廃棄するか、捨て札にするか、デッキの上に戻す。', image: 'images/Sentry.png'},
	{name: '議事堂', cost: 5, type: 'アクション', remain: 10, func: cardCouncilRoom, effect: '+4ドロー<br>+1購入<br><br>他プレイヤーも+1ドロー', image: 'images/CouncilRoom.png'},
	{name: 'ｶﾘｵｽﾄﾛの研究所', cost: 5, type: 'アクション', remain: 10, func: cardLaboratory, effect: '+2ドロー<br>+1アクション', image: 'images/Laboratory.png'},
	{name: 'バルツ鉱山', cost: 5, type: 'アクション', remain: 10, func: cardMine, effect: 'Moon1枚を廃棄、(廃棄カードのコスト)+3以下のMoon1枚を手札に獲得', image: 'images/Mine.png'},
	{name: 'グラフェス', cost: 5, type: 'アクション', remain: 10, func: cardFestival, effect: '+2アクション<br>+1購入<br>+2Moon', image: 'images/Festival.png'},
	{name: '書庫', cost: 5, type: 'アクション', remain: 10, func: cardLibrary, effect: '手札が7枚になるまでカードを引く。アクションカードを引いた場合は脇に置き、7枚になるまで引いた後捨てる', image: 'images/Library.png'},
	{name: '職人ガラドア', cost: 6, type: 'アクション', remain: 10, func: cardArtisan, effect: '5コスト以下のカード1枚を手札に獲得。手札1枚をデッキトップに置く', image: 'images/Artisan.png'}
];
// 定数
const supplyKingdomNum = 10;
const initialHandNum = 5;
const phase = {
	action: 'アクションフェイズ', 
	buy: '購入フェイズ', 
	cleanup: 'クリーンアップフェイズ',
	executeActionByCellar: 'アクション実行フェイズ(地下貯蔵庫)',
	executeActionByChapel: 'アクション実行フェイズ(礼拝堂)',
	executeActionByRemodel: 'アクション実行フェイズ(工房)',
	executeActionByMine: 'アクション実行フェイズ(鉱山)',
	executeActionByVassal: 'アクション実行フェイズ(家臣)'
};

let myDeck = [];//name, cost, type, effect, image
let myHand = [];//id, name, cost, type, effect, image
let myTrash = [];//name, cost, type, effect, image
let playAreaCard = [];
let supplyKingdom = [];
let tmpArea =[];
// 各種カウントの初期値
let actionCount = 1;
let buyCount = 1;
let moonCount = 0;
let currentPoint = 1;
let currentPhase;
let exchangeCost = -1;
let MerchantFlag = false;


/*******************************************************/
/* startGame：ゲームスタート
/*******************************************************/
function startGame(){

	//用いる王国カードを10種類決める
	supplyKingdom = shuffleArray(kingdomCard).slice(supplyKingdomNum);
	// デッキの準備
	setupDeck();
	setupExplanationModal();

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
	currentPhase = phase.action;
	updateNextPhaseBtnDom(`アクション<br>フェイズ終了`);
	updateInfomationDom(`アクションカードを使用してください`);
	// 手札にアクションカードがなければ、次のフェイズに移行する
	updateHandDom();
	if (myHand.findIndex((card) => card.type == 'アクション') == -1 || actionCount <= 0) {
		startBuyPhase();
	}
}
function startBuyPhase(){
	currentPhase = phase.buy;
	updateNextPhaseBtnDom(`購入フェイズ<br>終了`);
	updateInfomationDom(`ムーンカードを使用してください`);
	updateHandDom();
}
function startCleanupPhase(){
	currentPhase = phase.cleanup;
	updateInfomationDom(`クリーンアップ中です。`);
	// クリーンアップ処理を実行
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
/* setupDeck：初期デッキとなる10枚のカードを配る
/*******************************************************/
function setupExplanationModal(){
	//モーダルの外側をクリックしたらモーダルを閉じる
	$(document).on('click',function(e) {
		if(!$(e.target).closest('.explanation-modal-body').length) {
			$('.explanation-modal').removeClass('active');
			$('.explanation-modal-body').html('');
		}
	});
}
/*******************************************************/
/* openExplanationModalDom：モーダル表示処理
/*******************************************************/
function openExplanationModalDom(card){
	const explanationModal = $('<div>');
	explanationModal.html(`
		<h1>${card.name}</h1>
		<img src="${card.image}">
		<div>${card.effect}</div>
	`);
	if (card.type == '勝利点') {
		explanationModal.addClass('victory-card');
	} else if (card.type == 'Moon') {
		explanationModal.addClass('treasure-card');
	} else if (card.type == 'アクション') {
		explanationModal.addClass('kingdon-card');
	}
	explanationModal.addClass('explanation-modal-card');
	$('.explanation-modal-body').append(explanationModal);
	$('.explanation-modal').addClass('active');
}
/*******************************************************/
/* openModalDom：モーダル表示処理
/*******************************************************/
function openModalDom(card){
	const modalTitle = $('<div>');
	const modalContent = $('<div>');
	const modalCard = $('<div>');
	// モーダルのタイトル部分を設定
	modalTitle.addClass('modal-title');
	modalTitle.html(card.name);
	$('.modal-body').append(modalTitle);
	// モーダルのコンテンツ部分を設定
	modalContent.addClass('modal-content');
	modalCard.addClass('modal-card');
	modalCard.addClass('available');
	modalCard.html(`
		<h1>${card.name}</h1>
		<img src="${card.image}">
		<div>${card.effect}</div>
	`);
	if (card.type == '勝利点') {
		modalCard.addClass('victory-card');
	} else if (card.type == 'Moon') {
		modalCard.addClass('treasure-card');
	} else if (card.type == 'アクション') {
		modalCard.addClass('kingdon-card');
	}
	modalContent.append(modalCard);
	$('.modal-body').append(modalContent);
	$('.modal').addClass('active');
}
/*******************************************************/
/* closeModalDom：モーダル非表示処理
/*******************************************************/
function closeModalDom(){
	$('.modal-body').html('');
	$('.modal').removeClass('active');
}
/*******************************************************/
/* drawSupplyCard：サプライからカードを取得する
/*******************************************************/
function drawSupplyCard(supplyCard, count = 1){
	if (supplyCard.remain <= 0) {
		alert('指定したサプライのカードがありません');
		return false;
	}
	for(let i = 0; i < count; i++){
		// 獲得したカードは指示が無い限りは捨て札置き場に表向きにして置く
		myTrash.push({
			name: supplyCard.name,
			cost: supplyCard.cost,
			type: supplyCard.type,
			effect: supplyCard.effect,
			image: supplyCard.image,
			func: supplyCard.func
		});
		supplyCard.remain--;
	}
	updateSupplyDom();
	updateTrashDom();
	return true;
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
		startCleanupPhase();
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
		if(myDeck.length > 0){
			// デッキから手札へカードを引く
			const card = myDeck.shift();
			myHand.push({
				id: myHand.length+1,
				name: card.name,
				cost: card.cost,
				type: card.type,
				effect: card.effect,
				image: card.image,
				func: card.func
			});
		} else {
			break;
		}
		
	}
	updateDeckDom();
	updateHandDom();
}
/*******************************************************/
/* playHandCard：カードをプレイする
/*******************************************************/
function playHandCard(index){
	const card = myHand.splice(index, 1)[0];
	// 手札表示の更新
	updateHandDom();
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
/* pushMultiplebtn：マルチボタンが押された時の処理を行う
/*******************************************************/
function pushMultiplebtn(){
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
		case phase.executeActionByCellar:
			cardCellarSub();
			startActionPhase();
			break;
		case phase.executeActionByChapel:
			cardChapelSub();
			startActionPhase();
			break;
		case phase.executeActionByRemodel:
			cardRemodelSub();
			break;
		case phase.executeActionByMine:
			cardMineSub();
			break;
		case phase.executeActionByVassal:
			closeModalDom();
			cardGachaTicketSub();
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
	myTrash.splice(0, myTrash.length).forEach((card) => {
		myDeck.push(card);
	});
	//デッキをシャッフル
	myDeck = shuffleArray(myDeck);
	// DOM要素を更新
	updateDeckDom();
	updateTrashDom();
}

/*******************************************************/
/* reconfigureDeck：捨て札のカードをデッキに再構成する
/*******************************************************/
function cleanUp(){
	// プレイエリアのカードを捨て札エリアに格納
	playAreaCard.splice(0, playAreaCard.length).forEach((card) => {
		myTrash.push(card);
	});
	// 手札を捨て札エリアに格納
	myHand.splice(0, myHand.length).forEach((card) => {
		myTrash.push({
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
	$(`.trash-count`).html(`${myTrash.length}`);
}
function updateNextPhaseBtnDom(text){
	$(`.multiple-btn`).html(text);
}
function updateInfomationDom(text){
	$(`.info-text`).html(text);
}
function updatePointDom(){
	currentPoint = 0;
	const handPointCard = myHand.filter(Hand => Hand.type === '勝利点');
	const deckPointCard = myDeck.filter(Hand => Hand.type === '勝利点');
	const discardPointCard = myTrash.filter(Hand => Hand.type === '勝利点');
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
		handCardDiv.css('left', i*(900/myHand.length));
		handCardDiv.addClass('hand-card');
		if (hand.type == '勝利点') {
			handCardDiv.addClass('victory-card');
		} else if (hand.type == 'Moon') {
			handCardDiv.addClass('treasure-card');
		} else if (hand.type == 'アクション') {
			handCardDiv.addClass('kingdon-card');
		}
		switch(currentPhase){
			case phase.action:
				if( hand.type == 'アクション' ){
					handCardDiv.addClass('available');
				}
				break;
			case phase.buy:
				if( hand.type == 'Moon' ){
					handCardDiv.addClass('available');
				}
				break;
			default:
				break;
		}
		handCardDiv.html(`${hand.name}<img src="${hand.image}">`);
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
		supplyCardDiv.addClass('supply-card');
		if (kingdom.remain <= 0) {
			supplyCardDiv.addClass('empty-card');
		}else if (kingdom.type == '勝利点') {
			supplyCardDiv.addClass('victory-card');
		} else if (kingdom.type == 'Moon') {
			supplyCardDiv.addClass('treasure-card');
		} else if (kingdom.type == 'アクション') {
			supplyCardDiv.addClass('kingdon-card');
		}
		supplyCardDiv.html(kingdom.name);
		supplyCardDiv.append(`<img src="${kingdom.image}"></img>`);
		supplyCardDiv.append(`<div class="cost">${kingdom.cost}</div>`);
		supplyCardDiv.append(`<div class="remain">${kingdom.remain}</div>`);
		supplyCardDiv.click(kingdom, () => {
			switch(currentPhase) {
				case phase.buy:
						buySupplyCard(kingdom);
					break;
				case phase.executeActionByRemodel:
					if (kingdom.cost <= exchangeCost) {
						const ret = drawSupplyCard(kingdom);
						exchangeCost = -1;
						if (ret) {startActionPhase();}
					}
					break;
				default:
						alert("このフェイズでは購入はできません");
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
		supplyCardDiv.html(victoryPointCard[key].name);
		supplyCardDiv.append(`<img src="${victoryPointCard[key].image}"></img>`);
		supplyCardDiv.append(`<div class="cost">${victoryPointCard[key].cost}</div>`);
		supplyCardDiv.append(`<div class="remain">${victoryPointCard[key].remain}</div>`);
		supplyCardDiv.click(victoryPointCard[key], () => {
			switch(currentPhase) {
				case phase.buy:
						buySupplyCard(victoryPointCard[key]);
					break;
				case phase.executeActionByRemodel:
					if (victoryPointCard[key].cost <= exchangeCost) {
						const ret = drawSupplyCard(victoryPointCard[key]);
						exchangeCost = -1;
						if (ret) {
							startActionPhase();
						}
					}
					break;
				default:
						alert("このフェイズでは購入はできません");
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
		supplyCardDiv.html(treasurePointCard[key].name);
		supplyCardDiv.append(`<img src="${treasurePointCard[key].image}"></img>`);
		supplyCardDiv.append(`<div class="cost">${treasurePointCard[key].cost}</div>`);
		supplyCardDiv.append(`<div class="remain">${treasurePointCard[key].remain}</div>`);
		supplyCardDiv.click(treasurePointCard[key], () => {
			switch(currentPhase) {
				case phase.buy:
						buySupplyCard(treasurePointCard[key]);
					break;
				case phase.executeActionByRemodel:
				case phase.executeActionByMine:
					if (treasurePointCard[key].cost <= exchangeCost) {
						const ret = drawSupplyCard(treasurePointCard[key]);
						exchangeCost = -1;
						if (ret) {
							startActionPhase();
						}
					}
					break;
				default:
						alert("このフェイズでは購入はできません");
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
		const playCardDiv = $('<div>');
		playCardDiv.addClass('play-card');
		if (play.type == '勝利点') {
			playCardDiv.addClass('victory-card');
		} else if (play.type == 'Moon') {
			playCardDiv.addClass('treasure-card');
		} else if (play.type == 'アクション') {
			playCardDiv.addClass('kingdon-card');
		}
		playCardDiv.css('left', i*(585/playAreaCard.length));
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
	const index = tmpArea.findIndex((card) => card.id == hand.id);
	switch(currentPhase) {
		case phase.action:
			if (actionCount <= 0) {
				alert("アクションポイントが足りません");
				return false;
			}
			if (hand.type == 'アクション' && actionCount > 0) {
				const index = myHand.findIndex((card) => card.id == hand.id);
				actionCount--;
				updateActionDom();
				playHandCard(index);
			} else {
				alert("このフェイズでは使用できません");
				return false;
			}
			break;
		case phase.buy:
			if (hand.type == 'Moon') {
				const index = myHand.findIndex((card) => card.id == hand.id);
				playHandCard(index);
			} else {
				alert("このフェイズでは使用できません");
				return false;
			}
			break;
		case phase.executeActionByCellar:
		case phase.executeActionByChapel:
			if (index === -1) {
				if(tmpArea.length < 4){
					tmpArea.unshift(hand);
					handCardDiv.addClass("trash");
				}
			} else {
				tmpArea.splice(index, 1);
				handCardDiv.removeClass("trash");
			}
			break;
		case phase.executeActionByMine:
			if ( hand.type == 'Moon') {
				if (index === -1) {
					if (tmpArea.length < 1){
						tmpArea.unshift(hand);
						handCardDiv.addClass("trash");
					}
				} else {
					tmpArea.splice(index, 1);
					handCardDiv.removeClass("trash");
				}
			} else {
				alert('Moonを選択してください。');
			}
			break;
		case phase.cleanup:
		default:
			alert("このフェイズでは使用できません");
			return false;
			break;
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
}
function cardSilver(){
	// 2Moon追加
	moonCount += 2;
	if (MerchantFlag){
		moonCount += 1;
		MerchantFlag = false;
	}
	updateMoonDom();
}
function cardGold(){
	// 3Moon追加
	moonCount += 3;
	updateMoonDom();
}

/*******************************************************/
/* 「地下貯蔵庫」の効果関数の宣言
/*******************************************************/
function cardCellar(){
	// +1アクション、手札を好きな枚数捨て、捨てた枚数だけドロー
	actionCount += 1;
	updateActionDom();
	
	currentPhase = phase.executeActionByCellar;
	updateNextPhaseBtnDom(`ＯＫ`);
	updateInfomationDom(`捨てるカードを選んでください`);

	updateHandDom();
}
function cardCellarSub(){
	drawDeckCard(tmpArea.length);
	while (tmpArea.length > 0) {
		const trashCard = tmpArea.shift();
		const index = myHand.findIndex((card) => card.id == trashCard.id);
		const card = myHand.splice(index, 1);
		myTrash.push({
			name: card[0].name,
			cost: card[0].cost,
			type: card[0].type,
			effect: card[0].effect,
			image: card[0].image,
			func: card[0].func
		});
	}
	updateHandDom();
	updateTrashDom();
}

/*******************************************************/
/* 「礼拝堂」の効果関数の宣言
/*******************************************************/
function cardChapel(){
	//手札を4枚まで廃棄可能
	currentPhase = phase.executeActionByChapel;
	updateNextPhaseBtnDom(`ＯＫ`);
	updateInfomationDom(`廃棄するカードを選んでください`);

	updateHandDom();
}
function cardChapelSub(){
	//手札を4枚まで廃棄可能
	while (tmpArea.length > 0) {
		const trashCard = tmpArea.shift();
		const index = myHand.findIndex((card) => card.id == trashCard.id);
		const card = myHand.splice(index, 1);
	}
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
	const trashCard = myDeck.shift();
	if (trashCard.type == 'アクション') {
		currentPhase = phase.executeActionByVassal;
		updateNextPhaseBtnDom(`使用しない`);
		updateInfomationDom(`アクションカードを使用しますか：${trashCard.name}`);
		openModalDom(trashCard);
		tmpArea.unshift(trashCard);
		$('.modal-card').click(trashCard,() => {
			trashCard.func();
			myTrash.push(trashCard);
			updateTrashDom();
			closeModalDom();
			startActionPhase();
		});
		return true;
	} else {
		myTrash.push(trashCard);
	}

	updateDeckDom();
	updateTrashDom();
	startActionPhase();
	return true;
}
function cardVassalSub(){
	const trashCard = tmpArea.shift();
	myTrash.push(trashCard);
	updateTrashDom();
	startActionPhase();
}

/*******************************************************/
/* 「工房」の効果関数の宣言
/*******************************************************/
function cardWorkshop(){
	//4コスト以下のカード1枚を獲得
}

/*******************************************************/
/* 「商人」の効果関数の宣言
/*******************************************************/
function cardMerchant(){
	// +1ドロー+1アクション、銀月1枚を使用すれば+1Moon
	drawDeckCard(1);
	actionCount += 1;
	updateActionDom();
	// 銀月を使用したときに+1Moonするフラグを立てる
	MerchantFlag = true;
}

/*******************************************************/
/* 「前駆者」の効果関数の宣言
/*******************************************************/
function cardHarbinger(){
	// +1ドロー+1アクション、捨て札からデッキトップにカード1枚を置ける
	drawDeckCard(1);
	actionCount += 1;
	updateActionDom();

}

/*******************************************************/
/* 「村」の効果関数の宣言
/*******************************************************/
function cardVillage(){
	// +1ドロー+2アクション
	drawDeckCard(1);
	actionCount += 2;
	updateActionDom();
}

/*******************************************************/
/* 「改築」の効果関数の宣言
/*******************************************************/
function cardRemodel(){
	// 手札1枚を廃棄、(廃棄カードのコスト)+2コスト以下のカード1枚を獲得
	currentPhase = phase.executeActionByRemodel;
	updateNextPhaseBtnDom(`ＯＫ`);
	updateInfomationDom(`廃棄するカードを選んでください`);

	updateHandDom();
}
function cardRemodelSub(){
	// 手札1枚を廃棄、(廃棄カードのコスト)+2コスト以下のカード1枚を獲得
	if(tmpArea.length === 0){
		return false;
	}
	const discardCard = tmpArea.shift();
	const index = myHand.findIndex((card) => card.id == discardCard.id);
	if (index === -1) {
		return false;
	}
	const cost = myHand.splice(index, 1)[0].cost;
	updateSupplyDom();
	updateHandDom();

	exchangeCost = cost + 2;
	updateInfomationDom(`獲得するカードを選んでください（コスト${exchangeCost}以下）`);
	
	return true;
}

/*******************************************************/
/* 「鍛冶屋」の効果関数の宣言
/*******************************************************/
function cardSmithy(){
	// +3ドロー
	drawDeckCard(3);
}
/*******************************************************/
/* 「金貸し」の効果関数の宣言
/*******************************************************/
function cardMoneylender(){
	// 銅貨1枚を廃棄してもよい、廃棄した場合+3Moon
}

/*******************************************************/
/* 「玉座の間」の効果関数の宣言
/*******************************************************/
function cardThroneRoom(){
	// 手札のアクション1枚を2回使用してもよい
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
}

/*******************************************************/
/* 「衛兵」の効果関数の宣言
/*******************************************************/
function cardSentry(){
	// +1ドロー+1アクション、デッキの上2枚を見て、それぞれ廃棄するか、捨て札にするか、デッキの上に戻す。
	drawDeckCard(1);
	actionCount += 1;
	updateActionDom();
}

/*******************************************************/
/* 「議事堂」の効果関数の宣言
/*******************************************************/
function cardCouncilRoom(){
	// +4ドロー+1購入、他プレイヤーも+1ドロー
	drawDeckCard(4);
	buyCount += 1;
	updateBuyDom();
}

/*******************************************************/
/* 「研究所」の効果関数の宣言
/*******************************************************/
function cardLaboratory(){
	// +2ドロー+1アクション
	drawDeckCard(2);
	actionCount += 1;
	updateActionDom();
}

/*******************************************************/
/* 「鉱山」の効果関数の宣言
/*******************************************************/
function cardMine(){
	// Moon1枚を廃棄、(廃棄カードのコスト)+3以下のMoon1枚を手札に獲得
	currentPhase = phase.executeActionByMine;
	updateNextPhaseBtnDom(`ＯＫ`);
	updateInfomationDom(`廃棄するカード(Moon)を選んでください`);

	updateHandDom();
}
function cardMineSub(){
	// Moon1枚を廃棄、(廃棄カードのコスト)+3以下のMoon1枚を手札に獲得
	const discardCard = tmpArea.shift();
	const index = myHand.findIndex((card) => card.id == discardCard.id);
	const cost = myHand.splice(index, 1)[0].cost;
	updateSupplyDom();
	updateHandDom();

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
}

/*******************************************************/
/* 「祝祭」の効果関数の宣言
/*******************************************************/
function cardLibrary(){
	// 手札が7枚になるまでカードを引く。アクションカードを引いた場合は脇に置き、7枚になるまで引いた後捨てる
	while (myHand.length < 7) {
		if (myDeck.length <= 0){
			reconfigureDeck();
		} 
		if(myDeck.length > 0){
			// デッキから手札へカードを引く
			const card = myDeck.shift();
			if (card.type == 'アクション'){
				tmpArea.push(card);
				continue;
			}else{
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
		} else {
			break;
		}
	}
	const trash = tmpArea.splice(0, tmpArea.length);
	trash.forEach((card) => {
		myTrash.push({
			name: card.name,
			cost: card.cost,
			type: card.type,
			effect: card.effect,
			image: card.image,
			func: card.func
		});
	});
	updateDeckDom();
	updateHandDom();
	updateTrashDom();

	startActionPhase();
}

/*******************************************************/
/* 「職人」の効果関数の宣言
/*******************************************************/
function cardArtisan(){
	// 5コスト以下のカード1枚を手札に獲得。手札1枚をデッキトップに置く
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