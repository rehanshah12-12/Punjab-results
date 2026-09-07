const boards=[
{name:"BISE Lahore",url:"https://www.biselahore.com/"},
{name:"BISE Rawalpindi",url:"https://biserawalpindi.edu.pk/"},
{name:"BISE Multan",url:"https://web.bisemultan.edu.pk/"},
{name:"BISE Faisalabad",url:"https://bisefsd.edu.pk/"},
{name:"BISE Gujranwala",url:"https://bisegrw.edu.pk/"},
{name:"BISE Sahiwal",url:"https://bisesahiwal.edu.pk/"},
{name:"BISE DG Khan",url:"https://bisedgkhan.edu.pk/"},
{name:"BISE Bahawalpur",url:"https://bisebwp.edu.pk/"},
{name:"BISE Sargodha",url:"https://bisesargodha.edu.pk/"}
];
function fillBoards(){
 const s=document.getElementById("board"); if(s) boards.forEach(b=>s.add(new Option(b.name,b.url)));
 const c=document.getElementById("boardCards"); if(c) c.innerHTML=boards.map(b=>`<div class="boardcard"><h3>🏫 ${b.name}</h3><p>Official board website</p><a target="_blank" rel="noopener" href="${b.url}">Open Official Site →</a></div>`).join("");
}
function openBoard(){const s=document.getElementById("board");if(!s||!s.value){alert("پہلے Board select کریں!");return}window.open(s.value,"_blank","noopener")}
function openChat(){document.getElementById("chat").classList.add("show");document.getElementById("msg").focus()}
function closeChat(){document.getElementById("chat").classList.remove("show")}
function add(text,type){const m=document.getElementById("messages"),d=document.createElement("div");d.className=type;d.textContent=text;m.appendChild(d);m.scrollTop=m.scrollHeight}
function reply(q){
 q=q.toLowerCase();
 if(q.includes("salam")||q.includes("السلام")) return "وعلیکم السلام! 😊 کیسے مدد کروں؟";
 if(q.includes("name")||q.includes("نام")) return "میرا نام Punjab Results Assistant 🤖 ہے۔";
 if(q.includes("board")||q.includes("بورڈ")||q.includes("boards")) return "Punjab کے 9 educational boards ہیں: Lahore, Rawalpindi, Multan, Faisalabad, Gujranwala, Sahiwal, DG Khan, Bahawalpur اور Sargodha۔";
 if(q.includes("result")||q.includes("ریزلٹ")||q.includes("نتیجہ")) return "Results page کھولیں، اپنا board منتخب کریں اور official website پر result check کریں۔";
 if(q.includes("9th")||q.includes("نویں")) return "9th class result کے لیے Results page سے اپنا board منتخب کریں۔";
 if(q.includes("10th")||q.includes("دسویں")) return "10th class result کے لیے Results page سے اپنا board منتخب کریں۔";
 if(q.includes("whatsapp")||q.includes("واٹس")) return "ہماری WhatsApp channel website کے Home اور Contact pages پر موجود ہے۔";
 if(q.includes("rechecking")||q.includes("ری چیک")) return "Rechecking کی availability board کے مطابق بدل سکتی ہے۔ متعلقہ official board website چیک کریں۔";
 if(q.includes("roll")||q.includes("رول")) return "Roll number slip/result کے لیے متعلقہ board کی official website استعمال کریں۔";
 if(q.includes("help")||q.includes("مدد")) return "آپ Result، Board، 9th، 10th، Roll No Slip، Rechecking یا WhatsApp کے بارے میں پوچھ سکتے ہیں۔";
 return "مجھے اس سوال کا مکمل جواب معلوم نہیں۔ Results page سے official board website کھول کر تازہ معلومات دیکھیں۔";
}
function ask(q){document.getElementById("msg").value=q;send()}
function send(){const i=document.getElementById("msg"),q=i.value.trim();if(!q)return;add(q,"user");i.value="";setTimeout(()=>add(reply(q),"bot"),300)}
fillBoards();

