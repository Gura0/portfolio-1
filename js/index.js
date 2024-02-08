// JavaScript Document
<script>
	
let hanakotoba=["トルコキキョウ : 優美、希望、すがすがしい美しさ",
			   "かすみ草 : 幸福、親切、感謝、無邪気",
			   "胡蝶蘭(コチョウラン) : 幸せが飛んでくる、清純、あなたを愛します",
			   "ポインセチア : 祝福する、聖なる願い、清純",
			   "スズラン : 幸福の再来、純粋",
			   "スミレ : 小さな幸せ、小さな愛、誠実",
			   "スイートピー : 門出、別離、優しい思い出",
			   "ガーベラ : 希望、常に前進",
			   "ピンクのバラ : しとやか、可愛い人、美しい少女",
			   "チューリップ : 博愛、思いやり、名声、恋の宣言",
			   "ひまわり : 私はあなただけを見つめる、愛慕、崇拝",
			   "コスモス : 調和、乙女の純真",
			   "赤いバラ : あなたを愛しています、情熱、美、熱烈な恋",
			   "梅 : 高潔、上品、忠実",
			   "椿 : 控えめな素晴らしさ、気取らない優美さ"];
	
		
		let btn=document.getElementById("gacha")
		let disp=document.getElementById("hanakotoba-gacha")
		
		btn.addEventListener("click",function(){
			const num=Math.floor(Math.random()*hanakotoba.length);
			disp.innerHTML=hanakotoba[num]
		})
	</script>