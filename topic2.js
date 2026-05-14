const topic2={
  title:'2. Tétel – István, az államalapító',
  subtitle:'A keresztény Magyar Királyság megalapítása',
  emoji:'👑',
  content: buildTopic2Content,
  concepts: buildTopic2Concepts,
  quiz: buildTopic2Quiz,
  videos: buildTopic2Videos,
};
// ===== TOPIC 2 CONTENT =====
function buildTopic2Content(){
  return `
  <div class="info-card">
    <h3>⚔️ Géza fejedelem és a nagy választás</h3>
    <p>A honfoglalás utáni évtizedekben a magyarok kalandozó hadjáratokat folytattak Európa-szerte. Azonban <strong>955-ben, az augsburgi csatában</strong> elszenvedett vereség után világossá vált: a nomád életmód nem folytatható tovább, mert a szomszédos keresztény birodalmak (Német-római Császárság, Bizánc) túl erőssé váltak.</p>
    <p style="margin-top:10px;"><strong>Géza fejedelem (972–997)</strong> ismerte fel, hogy a magyarság csak akkor maradhat fenn, ha csatlakozik a keresztény Európához.</p>
    <ul style="margin-top:10px;">
      <li><strong>Kereszténység felvétele:</strong> Ő maga is megkeresztelkedett.</li>
      <li><strong>Külpolitika:</strong> 973-ban követeket küldött a német-római császárhoz (Ottóhoz) Quedlinburgba, és hittérítőket kért.</li>
      <li><strong>Dinasztikus házasság:</strong> Fiát, Vajkot (aki a keresztségben az <em>István</em> nevet kapta), a bajor hercegnővel, <strong>Gizellával</strong> házasította össze – így az Árpád-ház rokonságba került a császári uralkodócsaláddal.</li>
      <li><strong>Pannonhalma:</strong> 996-ban bencés szerzeteseket hívott be, és megkezdte a pannonhalmi apátság építését. 💡 <em>Érdekesség: az építkezést Géza kezdi el, de István fejezi be 1002-ben.</em></li>
    </ul>
<div class="content-img-wrap" style="max-width:320px;margin:16px auto 0;">
  <img src="images/topic2_img0.png" alt="Keresztelési jelenet"/>
  <div class="content-img-caption">✝️ Vajk megkeresztelése – a leendő István király felveszi a kereszténységet. Gyula Benczúr festménye.</div>
</div>
    <div class="highlight-box">💡 Géza felesége a határozott jellemű <strong>Sarolt</strong> volt, az erdélyi fejedelmi házból. A fejedelem felismerte: Magyarország csak a kereszténység felvételével maradhat fenn Európában.</div>
  </div>

  <div class="info-card">
    <h3>⚔️ Harc a trónért: István és Koppány (997)</h3>
    <p>997-ben, Géza halála után <strong>kétféle öröklési rend</strong> feszült egymásnak – ez kulcskérdés volt az ország jövője szempontjából:</p>
    <table class="data-table">
      <tr><th>István</th><th>Koppány</th></tr>
      <tr><td>Az elsőszülött fiú örököl (primogenitúra)</td><td>A legidősebb rokon örököl (szeniorátus)</td></tr>
      <tr><td>Keresztény királyság felépítése</td><td>A régi nomád, pogány hagyomány folytatása</td></tr>
      <tr><td>Gizellával érkezett német lovagok támogatják</td><td>A pogány törzsek támogatják</td></tr>
    </table>
    <p style="margin-top:12px;">István a Gizellával érkezett <strong>német lovagok</strong> segítségével Veszprém közelében döntő győzelmet aratott Koppány felett. Koppányt kivégezték, testét négy részre vágták, és elküldték az ország négy várába (<strong>Veszprém, Győr, Esztergom, Gyulafehérvár</strong>) elrettentésül.</p>
  </div>

<div class="content-img-wrap" style="max-width:380px;margin:0 auto 20px;">
  <img src="images/topic2_img1.png" alt="Szent István szobor"/>
  <div class="content-img-caption">👑 Szent István király szobra – a Hősök terén, Budapest. Kezében kereszt és kard: a hit és a hatalom jelképe.</div>
</div>
  <div class="info-card">
    <h3>👑 A koronázás és az új királyság (1000/1001)</h3>
    <p>István szakítani akart a fejedelmi hagyományokkal, ezért <strong>királlyá koronáztatását</strong> kérte.</p>
    <ul>
      <li><strong>A korona:</strong> <strong>II. Szilveszter pápától</strong> kapta a koronát <strong>III. Ottó császár beleegyezésével</strong> – a két hatalom együtt ismerte el a Magyar Királyságot.</li>
      <li><strong>Időpont:</strong> 1000 karácsonyán (vagy 1001. január 1-jén) <strong>Esztergomban</strong> tették a fejére.</li>
      <li><strong>Függetlenség:</strong> Mivel a koronát a pápától kapta – bár III. Ottó császár is beleegyezett –, Magyarország szuverén állam maradt: nem vált sem a Német-római Császárság, sem a pápaság hűbéresévé.</li>
    </ul>
    <div class="highlight-box">🏅 Ez volt az egyik legokosabb politikai húzás: a pápai korona révén Magyarország <strong>független, egyenrangú európai állammá</strong> vált!</div>
  </div>

  <div class="info-card" style="border-color:rgba(212,175,55,.5);">
    <h3>🔍 Érdekesség: A Szent Korona titkai</h3>
    <p style="margin-bottom:14px;">Hazánk legfontosabb történelmi jelképe, amellyel évszázadokon át koronázták a magyar királyokat – de a koronának meglepően izgalmas titkai vannak.</p>

    <div style="background:rgba(212,175,55,.06);border-left:3px solid #d4af37;border-radius:0 8px 8px 0;padding:12px 15px;margin-bottom:8px;">
      <div style="font-family:'Share Tech Mono',monospace;font-size:.72rem;color:#d4af37;font-weight:700;text-transform:uppercase;letter-spacing:.1em;margin-bottom:6px;">⚙️ Felépítés és fizikai érdekességek</div>
      <p style="font-size:.9rem;color:#ccd4e8;line-height:1.7;">A korona két régebbi, különálló részből lett összeillesztve: az alsó, görög feliratos abroncsból (<strong>Corona Graeca</strong>) és a felső, latin feliratos pántokból (<strong>Corona Latina</strong>). Súlya: pontosan <strong>2056 gramm</strong> – több mint 2 kilogramm!<br>
      A tetején látható <strong>ferde kereszt</strong> egy régi baleset emléke: a 17. században egy sietős menekítés során rosszul zárták le a vasládáját, és a nehéz fedél rácsapódott.</p>
    </div>

    <div style="background:rgba(96,168,248,.05);border-left:3px solid #60a8f8;border-radius:0 8px 8px 0;padding:12px 15px;margin-bottom:8px;">
      <div style="font-family:'Share Tech Mono',monospace;font-size:.72rem;color:#60a8f8;font-weight:700;text-transform:uppercase;letter-spacing:.1em;margin-bottom:6px;">⚖️ A három feltétel – csak ez számított törvényes koronázásnak</div>
      <p style="font-size:.9rem;color:#ccd4e8;line-height:1.7;">A középkori Magyarországon csak azt fogadták el törvényes királynak, akinek koronázása egyszerre teljesített három feltételt:</p>
      <ul style="font-size:.9rem;color:#ccd4e8;line-height:1.8;padding-left:18px;margin-top:6px;">
        <li><strong>Székesfehérváron</strong> történt,</li>
        <li>az <strong>esztergomi érsek</strong> végezte,</li>
        <li>kizárólag <strong>ezzel a konkrét Szent Koronával</strong> hajtották végre.</li>
      </ul>
      <p style="font-size:.9rem;color:#ccd4e8;line-height:1.7;margin-top:8px;">E szabályt olyan komolyan vették, hogy <strong>Károly Róbertet háromszor kellett megkoronázni!</strong> Az első két alkalommal nem a Szent Koronát használták (az épp Kán László erdélyi vajda kezében volt), így a rendek nem ismerték el hatalmát egészen az <strong>1310-es, mindhárom feltételt teljesítő</strong> harmadik koronázásig.</p>
    </div>

    <div style="background:rgba(34,211,160,.05);border-left:3px solid #22d3a0;border-radius:0 8px 8px 0;padding:12px 15px;">
      <div style="font-family:'Share Tech Mono',monospace;font-size:.72rem;color:#22d3a0;font-weight:700;text-transform:uppercase;letter-spacing:.1em;margin-bottom:6px;">🌍 Kalandos történelem – elásva, Fort Knoxban, majd haza</div>
      <p style="font-size:.9rem;color:#ccd4e8;line-height:1.7;">Az 1848–49-es szabadságharc leverése után <strong>titokban elásták Orsovánál</strong>. A második világháború után évtizedekig az <strong>amerikai Fort Knoxban</strong> őrizték az aranytartalékkal együtt. A többször megmentett nemzeti kincs <strong>1978-ban tért haza</strong>, ma pedig Budapesten, az Országházban látható – ahol a nap 24 órájában fegyveres koronaőrök vigyázzák.</p>
    </div>
  </div>

  <div class="info-card">
    <h3>🗺️ Az ország egységének megteremtése</h3>
    <p>A koronázás után Istvánnak le kellett győznie a még ellenálló törzsfőket, hogy az egész ország felett valódi hatalma legyen:</p>
    <ul>
      <li><strong>Erdély:</strong> Legyőzte a terület urát, <strong>gyulát</strong> (tisztség) (anyai nagybátyját).</li>
      <li><strong>Maros-vidék:</strong> Legyőzte <strong>Ajtonyt</strong>.</li>
      <li><strong>Külső védekezés:</strong> 1030-ban II. Konrád német császár támadását a „felégetett föld" taktikájával verte vissza a magyar haderő.</li>
    </ul>
  </div>

  <div class="info-card">
    <h3>🏛️ Az államszervezet és a törvények</h3>
    <p>István modern közigazgatást épített ki, hogy akarata az ország minden pontján érvényesüljön:</p>
    <table class="data-table">
      <tr><th>Intézmény</th><th>Jellemzők</th></tr>
      <tr><td><strong>Vármegyerendszer</strong></td><td>Az országot vármegyékre osztotta, melyek központja egy-egy vár volt.</td></tr>
      <tr><td><strong>Ispán</strong></td><td>A király által kinevezett vezető a vármegye élén. Feladata az adószedés, bíráskodás és a katonaság vezetése.</td></tr>
      <tr><td><strong>Nádor</strong></td><td>A király után a legfontosabb világi méltóság. Bírói és katonai feladatai országos szintűek voltak.</td></tr>
      <tr><td><strong>Királyi tanács</strong></td><td>A királyt segítő testület egyházi és világi méltóságokból.</td></tr>
      <tr><td><strong>Pénzverés</strong></td><td>Ezüstpénzt, úgynevezett dénárt veretett – ez önálló gazdasági hatalmat jelzett.</td></tr>
    </table>
  </div>

  <div class="info-card">
    <h3>⛪ Az egyházszervezés és a hitélet</h3>
    <p>István felismerte, hogy a kereszténység az új állam alapja. Ezért szisztematikusan kiépítette az egyházi szervezetet:</p>
    <ul>
      <li><strong>Püspökségek:</strong> 8 püspökséget alapított (pl. Veszprém, Győr, Pécs).</li>
      <li><strong>Érsekségek:</strong> Az egyház központja <strong>Esztergom</strong> lett, emellett <strong>Kalocsa</strong> is érseki rangot kapott. (A független egyházszervezet kialakítása fontos volt a szuverenitás szempontjából.)</li>
    </ul>
    <p style="margin-top:10px;">Törvényei a keresztény életmódot kötelezővé tették:</p>
    <ul>
      <li>Minden <strong>10 falu</strong> köteles volt közös kőtemplomot építeni.</li>
      <li>Kötelező lett a <strong>vasárnapi templomba járás</strong>.</li>
      <li>Bevezette a <strong>tizedet</strong> (egyházi adó): a termény tizedrészét az egyháznak kellett adni.</li>
    </ul>
<div class="content-img-wrap" style="margin:16px 0 0;">
  <img src="images/topic2_img2.png" alt="Szent István egyházmegyéi térkép"/>
  <div class="content-img-caption">🗺️ Szent István egyházmegyéi – narancssárga: érseki székhelyek (Esztergom, Kalocsa), sárga: püspöki székhelyek. Piros pont: Fehérvár (a koronázó város) és Pannonhalma.</div>
</div>
    <div class="highlight-box">⛪ István 8 püspökséget és 2 érsekséget alapított – ezzel kiépült Magyarország önálló egyházi szervezete.</div>
  </div>

  <div class="info-card">
    <h3>😢 Tragédia és utódlás</h3>
    <p>István nagy reményeket fűzött fiához, <strong>Imre herceghez</strong>, akit Szent Gellért püspök nevelt, és akinek a király az <em>Intelmek</em> című művében adott tanácsokat az uralkodáshoz.</p>
    <div class="timeline">
      <div class="tl-item">
        <div class="tl-dot amber"></div>
        <div class="tl-year">1031</div>
        <div class="tl-title">Imre herceg halála</div>
        <div class="tl-desc">Imre egy vadászat során vadkanbalesetben meghalt. Ez hatalmas csapás volt Istvánnak.</div>
      </div>
      <div class="tl-item">
        <div class="tl-dot rose"></div>
        <div class="tl-year">1031–1038</div>
        <div class="tl-title">Dinasztikus válság</div>
        <div class="tl-desc">István nem talált megfelelő keresztény utódot. Pogány hitű unokatestvérét, Vazult alkalmatlanná tette az uralkodásra (megvakíttatta), Vazul fiait száműzte.</div>
      </div>
      <div class="tl-item">
        <div class="tl-dot teal"></div>
        <div class="tl-year">1038</div>
        <div class="tl-title">István halála</div>
        <div class="tl-desc">Unokaöccsét, az itáliai Orseolo Pétert tette meg trónörökösnek. Szent István stabil, európai mintájú országot hagyott maga után.</div>
      </div>
      <div class="tl-item">
        <div class="tl-dot amber"></div>
        <div class="tl-year">1083. aug. 20.</div>
        <div class="tl-title">Szentté avatás</div>
        <div class="tl-desc">Azóta tekintjük őt a magyar állam megalapítójának. Augusztus 20. ma is nemzeti ünnep.</div>
      </div>
    </div>
  </div>

  <div class="info-card" style="background:linear-gradient(135deg,#14532d,#052e16);border:2px solid #4ade80;color:#d1fae5;">
    <h3 style="color:#4ade80;">📋 Összefoglaló vázlat</h3>
    <ul>
      <li>🌍 <strong>Géza (972–997):</strong> Külpolitikai nyitás nyugat felé, István + Gizella házassága, Pannonhalma építésének megkezdése (996, István fejezi be 1002-ben)</li>
      <li>⚔️ <strong>997 – Koppány legyőzése:</strong> Kereszténység győz a pogányság felett – István lesz az örökös</li>
      <li>👑 <strong>István fejedelem, majd király (997/1000–1038):</strong> Az első magyar király, a keresztény állam megalapítója</li>
      <li>👑 <strong>1000/1001 – Koronázás:</strong> Pápától kapott korona → szuverén, független Magyarország</li>
      <li>🏛️ <strong>Államszervezet:</strong> Vármegyék + ispánok + nádor + dénár</li>
      <li>⛪ <strong>Egyház:</strong> 8 püspökség, Esztergom érseki székhely, tized, templomépítési kötelezettség</li>
      <li>😢 <strong>1031 – Imre halála:</strong> Dinasztikus válság, Vazul kizárása, Orseolo Péter az utód</li>
      <li>✨ <strong>1083 – Szentté avatás:</strong> Augusztus 20. = nemzeti ünnep</li>
    </ul>
  </div>`;
}
function buildTopic2Concepts(){
  const concepts=[
    {c:'purple',e:'⛪',t:'Érsek',d:'Az egyházi hierarchia legmagasabb rangú főpapja Magyarországon. István két érsekséget alapított: Esztergom (a főérsek székhelye) és Kalocsa. Az érsek több püspökség felett felügyel.'},
    {c:'amber',e:'🙏',t:'Püspök',d:'Egy egyházmegye (püspökség) vezetője. István 8 püspökséget alapított (pl. Veszprém, Győr, Pécs). A püspök felügyeli a templomokat és a papokat a saját területén.'},
    {c:'teal',e:'🏛️',t:'Vármegye',d:'István által létrehozott közigazgatási egység. Minden vármegye élén egy ispán állt. A rendszer az egész ország felügyeletét lehetővé tette a király számára.'},
    {c:'rose',e:'⚔️',t:'Ispán',d:'A király által kinevezett vezető, aki a vármegyét irányította. Feladata: adószedés, bíráskodás és a katonaság irányítása.'},
    {c:'blue',e:'🎖️',t:'Nádor',d:'A király után a legfontosabb világi méltóság az országban. Bírói és katonai feladatai országos szintűek voltak.'},
    {c:'green',e:'💰',t:'Dénár',d:'István által veretett ezüstpénz. Az önálló pénzverés a független államiság egyik fontos jele volt – jelzi, hogy Magyarország valódi európai állammá vált.'},
    {c:'purple',e:'⛪',t:'Tized',d:'Egyházi adó: a termény tizedrészét (10%-át) az egyháznak kellett adni. István vezette be ezt a törvényt. Az egyház többek között így finanszírozta a működését.'},
    {c:'amber',e:'📜',t:'Intelmek',d:'István király tanácsgyűjteménye fiának, Imre hercegnek. Az erényes keresztény királyság alapelveit foglalja össze. Az egyik legkorábbi magyar irodalmi emlék.'},
    {c:'teal',e:'🏅',t:'Szuverenitás',d:'Egy állam teljes függetlenségét és önállóságát jelenti. Leegyszerűsítve azt fejezi ki, hogy egy ország a „saját ura": maga hozza a törvényeit, maga dönt a sorsáról, és más államok nem parancsolhatnak neki.'},
    {c:'rose',e:'👨‍👦',t:'Orseolo Péter',d:'István unokaöccse, velencei származású. Imre halála és Vazul kizárása után ő lett a trónörökös. István halála után (1038) ő követte Istvánt a trónon.'},
    {c:'blue',e:'🙏',t:'II. Szilveszter pápa',d:'A pápa, aki a koronát küldte Istvánnak. Fontos: III. Ottó császár beleegyezésével történt, így mindkét nagyhatalom elismerte a Magyar Királyságot. A pápai korona révén Magyarország elkerülte a hűbéri függőséget.'},
    {c:'green',e:'🏰',t:'Pannonhalma',d:'Bencés apátság, amelyet Géza fejedelem kezdett el építeni 996-ban, és István király fejezett be 1002-ben. Az ország egyik legrégebbi és legfontosabb egyházi intézménye, ma is működik és UNESCO-védelem alatt áll.'},
  ];
  return `<h2 style="font-family:'Fredoka One',cursive;font-size:1.4rem;color:var(--purple);margin-bottom:16px;">💡 Kulcsfogalmak – Kattints rá a fogalomra a magyarázathoz!</h2>
  <div class="concepts-grid">${concepts.map(c=>`
    <div class="concept-card ${c.c}" onclick="toggleConcept(this)">
      <div class="concept-emoji">${c.e}</div>
      <div class="concept-term">${c.t}</div>
      <div class="concept-def">${c.d}</div>
      <div class="concept-hint">👆 Kattints a magyarázathoz</div>
    </div>`).join('')}</div>`;
}
// ===== TOPIC 2 QUIZ =====
const questions2=[
  {q:'Melyik csatában szenvedett vereséget a magyarság 955-ben, ami véget vetett a kalandozó hadjáratoknak?',a:['A pozsonyi csatában','Az augsburgi csatában','Az arkadiopoliszi csatában'],correct:1},
  {q:'Mi a nádor?',a:['A király után a legfontosabb világi méltóság, bírói és katonai feladatokkal','A katolikus egyház legmagasabb rangú főpapja Magyarországon','Az ország pénzügyeit irányító királyi tisztviselő'],correct:0},
  {q:'Kitől kapta István király a koronáját?',a:['A bizánci császártól','Csak II. Szilveszter pápától, a császár tudta nélkül','II. Szilveszter pápától, III. Ottó császár beleegyezésével'],correct:2},
  {q:'Miért volt fontos, hogy a korona a pápától érkezett és nem a császártól?',a:['Mert a pápa gazdagabb volt','Mert így Magyarország szuverén állam maradt, és nem vált hűbéressé','Mert a császár nem volt hajlandó koronát küldeni'],correct:1},
  {q:'Mi volt az ispán feladata a vármegyében?',a:['Csak templomokat épített','Adószedés, bíráskodás és a katonaság vezetése','Kizárólag egyházi ügyeket intézett'],correct:1},
  {q:'Hány püspökséget alapított Szent István?',a:['5 püspökséget','8 püspökséget','15 püspökséget'],correct:1},
  {q:'Mit jelent a tized?',a:['A termény tizedrészét az egyháznak kellett adni','Tíz naponta kellett templomba menni','Minden tizedik falut fel kellett menteni az adó alól'],correct:0},
  {q:'Mi történt Imre herceggel 1031-ben?',a:['Ellenségei megölték','Vadkanbalesetben elhunyt','Külföldi hadjáraton esett el'],correct:1},
  {q:'Ki lett István trónörököse Imre herceg halála után?',a:['Vazul, a pogány unokatestvér','Orseolo Péter, az itáliai unokaöccs','Gyula, az erdélyi törzsfő'],correct:1},
  {q:'Mikor avatták Szent Istvánt szentté?',a:['1038. augusztus 20-án','1000. karácsonyán','1083. augusztus 20-án'],correct:2},
  {q:'Kivel harcolt István a trónért?',a:['Koppánnyal, az apai ág idősebb rokonával','Vazullal, a pogány unokatestvérével','Gyulával, az erdélyi törzsfővel'],correct:0},
  {q:'Mi történt Koppánnyal az Istvánnal vívott harc után?',a:['Fogságba esett és börtönben halt meg','Kivégezték, testét négyfelé vágták és az ország négy várába küldték','Elmenekült Bizáncba és ott halt meg'],correct:1},
  {q:'Mit alapított Géza fejedelem?',a:['A vármegyerendszert és az ispáni tisztséget','A Pannonhalmi bencés apátságot','Az első magyar egyetemet Esztergomban'],correct:1},
  {q:'Mettől meddig volt király István?',a:['997-től 1038-ig','1000-től 1038-ig','1001-től 1040-ig'],correct:1},
];

let quizState2={q:[],idx:0,correct:0,answered:false};

function buildTopic2Quiz(){
  return `<div class="quiz-container">
    <div class="quiz-header">
      <h3>🎯 Mesterlövész Tudáspróba – 2. Akta</h3>
      <div class="quiz-counter" id="q2-counter">1 / 14</div>
    </div>
    <div class="quiz-body" id="quiz2-body">
      <div class="progress-dots" id="progress2-dots"></div>
      <div class="question-text" id="q2-text"></div>
      <div class="answers-grid" id="q2-answers"></div>
      <div class="feedback-box" id="feedback2"></div>
      <div style="text-align:right;margin-top:8px;clear:both;">
        <button class="next-btn" id="next2-btn" onclick="nextQuestion2()">Következő →</button>
      </div>
    </div>
    <div class="quiz-result" id="quiz2-result"></div>
  </div>`;
}

function initQuiz2(){
  quizState2.q=[...questions2].sort(()=>Math.random()-.5);
  quizState2.idx=0;quizState2.correct=0;quizState2.answered=false;
  document.getElementById('quiz2-body').style.display='block';
  document.getElementById('quiz2-result').style.display='none';
  renderQuestion2();
}

function renderQuestion2(){
  const q=quizState2.q[quizState2.idx];
  document.getElementById('q2-counter').innerText=`${quizState2.idx+1} / ${quizState2.q.length}`;
  document.getElementById('q2-text').innerText=q.q;
  const letters=['A','B','C'];
  const shuffled=[0,1,2].sort(()=>Math.random()-.5);
  document.getElementById('q2-answers').innerHTML=shuffled.map((origIdx,i)=>`
    <button class="answer-btn" data-correct="${origIdx===q.correct}" onclick="answerQ2(this)">
      <span class="answer-letter">${letters[i]}</span>${q.a[origIdx]}
    </button>`).join('');
  const dots=document.getElementById('progress2-dots');
  dots.innerHTML=Array.from({length:quizState2.q.length},(_,i)=>`<div class="dot ${i<quizState2.idx?(quizState2.q[i]._result==='c'?'correct':'wrong'):''}${i===quizState2.idx?'current':''}"></div>`).join('');
  document.getElementById('feedback2').style.display='none';
  document.getElementById('next2-btn').style.display='none';
  quizState2.answered=false;
}

function answerQ2(btn){
  if(quizState2.answered)return;
  quizState2.answered=true;
  const isCorrect=btn.dataset.correct==='true';
  document.querySelectorAll('#q2-answers .answer-btn').forEach(b=>{
    b.disabled=true;
    if(b.dataset.correct==='true')b.classList.add('correct');
  });
  if(isCorrect){
    btn.classList.add('correct');
    quizState2.correct++;
    quizState2.q[quizState2.idx]._result='c';
    const fb=document.getElementById('feedback2');
    fb.className='feedback-box correct';fb.innerText='🎉 Helyes! Zseniális válasz!';fb.style.display='block';
    startConfetti(30);
    if(window.mascotCorrect)mascotCorrect();
  } else {
    btn.classList.add('wrong');
    quizState2.q[quizState2.idx]._result='w';
    const fb=document.getElementById('feedback2');
    fb.className='feedback-box wrong';fb.innerText='❌ Sajnos nem ez volt a helyes válasz. Nézd meg a zöld gombot!';fb.style.display='block';
    if(window.mascotWrong)mascotWrong();
  }
  document.getElementById('next2-btn').style.display='block';
  document.getElementById('next2-btn').innerText=quizState2.idx===quizState2.q.length-1?'Eredmény megtekintése 🏆':'Következő kérdés →';
}

function nextQuestion2(){
  quizState2.idx++;
  if(quizState2.idx<quizState2.q.length){renderQuestion2();}
  else{showResult2();}
}

function showResult2(){
  document.getElementById('quiz2-body').style.display='none';
  const res=document.getElementById('quiz2-result');
  res.style.display='block';
  const score=quizState2.correct;
  const emoji=score>=13?'🏆':score>=11?'🥇':score>=8?'🥈':score>=5?'🥉':'💪';
  const msg=score>=13?'Fenomenális! Igazi mesterlövész vagy!':score>=11?'Kiváló munka, felderítő!':score>=8?'Szép teljesítmény! Még egy kis gyakorlás...':score>=5?'Jó próbálkozás! Olvass még egy kicsit!':'Gyakorolj sokat, ügynök!';
  const earnedXP=score*15;
  addXP(earnedXP);
  let unlockHtml2='';
  if(score>=12){
    unlockHtml2=`<div class="unlock-notice">🔓 Dosszié 03 feloldható! A kód: <strong>1031</strong></div>`;
  } else {
    unlockHtml2=`<div class="unlock-notice" style="background:var(--rose-l);border-color:var(--rose);color:var(--rose-d);">⚠️ Legalább 12/14 pont kell a következő dosszié kódjához! Próbáld újra!</div>`;
  }
  res.innerHTML=`<div class="result-emoji">${emoji}</div>
    <div class="result-score">${score} / 14</div>
    <div class="result-msg">${msg}</div>
    <div class="result-xp">⭐ +${earnedXP} XP megszerezve!</div>
    ${unlockHtml2}
    <button class="retry-btn" onclick="initQuiz2()">🔄 Újra próbálom</button>`;
}

// ===== TOPIC 2 VIDEOS =====
function buildTopic2Videos(){
  const vids=[
    {e:'⚡',level:'alap',lt:'Beavatás – Legkönnyebb',title:'A magyar államalapítás – Gyorstalpaló',desc:'Háromperces, rendkívül pörgős és humoros animáció. Tökéletes első bevetés, amely rögtön beszippantja a diákokat a témába.',url:'https://www.youtube.com/watch?v=NKkGVidsFIM'},
    {e:'🎓',level:'alap',lt:'Kezdő',title:'Ezt érdemes tudni Szent Istvánról és az államalapításról',desc:'Látványos, rövid és lényegre törő animációs összefoglaló az államszervezés alapjairól. Nagyon könnyen követhető, vizuális típusú ügynököknek kötelező.',url:'https://www.youtube.com/watch?v=NCKotgI0xRo'},
    {e:'😄',level:'alap',lt:'Kezdő – Könnyed',title:'Szent István Király és az Államalapítás Története – Tökéletlen Történelem [TT]',desc:'Szórakoztató, könnyedebb stílusban előadott eligazítás az államalapításról. Jól egyensúlyoz a tények és a diákok számára élvezetes, lazább nyelvezet között.',url:'https://www.youtube.com/watch?v=4c_kurcSPnc'},
    {e:'📚',level:'kozepes',lt:'Középhaladó',title:'Géza fejedelemsége és István államszervező tevékenysége | Pécsi Tibor',desc:'Megbízható, tantermi stílusú tanári magyarázat a hatalomátvétel és a törvények hátteréről. Ideális a füzetben lévő vázlat elmélyítéséhez.',url:'https://www.youtube.com/watch?v=UBAAo6pRETg'},
    {e:'🎬',level:'kozepes',lt:'Haladó Megfigyelő',title:'Magyarország története S01E03',desc:'Komoly, dokumentarista stílusú archív felvétel a keresztény állam születéséről. Hosszabb, elmélyülős otthoni nyomozáshoz ajánlott.',url:'https://www.youtube.com/watch?v=SLqDiflpo1A'},
    {e:'🎬',level:'kozepes',lt:'Haladó Megfigyelő',title:'Magyarország története S01E04',desc:'A dokumentumfilm-sorozat folytatása, amely az intézményrendszer (vármegyék, egyház) megszilárdítására fókuszál. Történelemrajongóknak és szorgalmi feladatokhoz!',url:'https://www.youtube.com/watch?v=OLqN5THnLKs'},
    {e:'🎯',level:'profi',lt:'Mesterlövész – Legnehezebb',title:'Géza fejedelem és Szent István király uralkodása – Töri Érettségi',desc:'Rendkívül sűrű, vizsgára készülő nagykorú ügynököknek szánt anyag. Csak a legbátrabb 6. osztályosoknak ajánlott, akik a maximumot akarják nyújtani!',url:'https://www.youtube.com/watch?v=pzA611f1oqI'},
  ];
  return `<h2 style="font-family:'Fredoka One',cursive;font-size:1.4rem;color:var(--rose-d);margin-bottom:16px;">🎥 TITKOS VIDEÓARCHÍVUM: 2. AKTA (Nehézségi sorrendben)</h2>
  <div class="video-grid">${vids.map(v=>`
    <a href="${v.url}" target="_blank" class="video-card">
      <div class="video-thumb">${v.e}</div>
      <div class="video-info">
        <div class="video-level ${v.level}">${v.lt}</div>
        <div class="video-title">${v.title}</div>
        <div class="video-desc">${v.desc}</div>
      </div>
    </a>`).join('')}</div>`;
}

// ===== OPEN TOPIC =====

// ===== DOSSZIÉ INTRO ANIMÁCIÓ =====
var _shownIntros = {};

var dossierIntros = {
  1:  { emoji:'🐎', color:'#4a3aaa', glow:'rgba(74,58,170,.4)',  accent:'#7c6ee0' },
  2:  { emoji:'👑', color:'#a07820', glow:'rgba(160,120,32,.4)', accent:'#d4af37' },
  3:  { emoji:'💀', color:'#8b0000', glow:'rgba(139,0,0,.4)',    accent:'#cc3333' },
  4:  { emoji:'💰', color:'#a07820', glow:'rgba(160,120,32,.4)', accent:'#d4af37' },
  5:  { emoji:'⚔️', color:'#185FA5', glow:'rgba(24,95,165,.4)', accent:'#60a8f8' },
  6:  { emoji:'🛡️', color:'#0f6e56', glow:'rgba(15,110,86,.4)', accent:'#22d3a0' },
  7:  { emoji:'📚', color:'#534AB7', glow:'rgba(83,74,183,.4)', accent:'#9b8ff0' },
  8:  { emoji:'🗺️', color:'#8b0000', glow:'rgba(139,0,0,.4)',   accent:'#cc3333' },
  9:  { emoji:'🦁', color:'#854F0B', glow:'rgba(133,79,11,.4)', accent:'#f59e0b' },
  10: { emoji:'🌍', color:'#0f6e56', glow:'rgba(15,110,86,.4)', accent:'#22d3a0' },
  11: { emoji:'✝️', color:'#534AB7', glow:'rgba(83,74,183,.4)', accent:'#9b8ff0' },
  12: { emoji:'👸', color:'#a07820', glow:'rgba(160,120,32,.4)', accent:'#d4af37' },
};
