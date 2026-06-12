
function toppage(){
	// Infoモーダルの設定
	$('.toppage-credit-btn').click((e) => {
		$('.infomation-modal').addClass('active');
	});
	$('.close-infomation-modal-btn').click((e) => {
		$('.infomation-modal').removeClass('active');
	});
	// モーダルの設定
	$('.toppage-rule-btn').click((e) => {
		$('.rule-modal').addClass('active');
	});
	$('.close-rule-modal-btn').click((e) => {
		$('.rule-modal').removeClass('active');
	});
}