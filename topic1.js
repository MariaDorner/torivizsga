// ===== TOPIC 1 DATA =====
const topic1={
  title:'1. Tétel – Vándorlás és honfoglalás',
  subtitle:'A magyarok eredete, a sztyeppei vándorlás és a Kárpát-medence elfoglalása',
  emoji:'🐎',
  content: buildTopic1Content,
  concepts: buildTopic1Concepts,
  quiz: buildTopic1Quiz,
  videos: buildTopic1Videos,
};
// ===== TOPIC 1 CONTENT =====
function buildTopic1Content(){
  return `
  <div class="info-card">
    <h3>🌍 A magyarok eredete: Honnan jöttünk?</h3>
    <p>Képzeld el: valaki azt mondja, hogy a magyarok rokona a finn és az észt nép — de közben a magyarok lovon éltek, sztyeppéken vándoroltak és harcos nomádok voltak. Hogy illik ez össze? Ez az egyik legnagyobb rejtély a magyar történelemben, és a tudósok ma is vitatkoznak rajta.</p>
    <ul>
      <li><strong>Mit árul el a nyelvünk?</strong> A magyar nyelv szerkezete és szókincse alapján a finnugor nyelvcsaládba (azon belül az ugor ágba) tartozik. Legközelebbi nyelvrokonaink az obi-ugorok: a vogulok és az osztjákok, akik az Urál vidékén éltek — erdős, havas tájakon.</li>
      <li><strong>Mit árul el az életmódunk?</strong> A magyarok harcmodora, életmódja és számos szavunk (pl. ló, tinó, gyümölcs) a türk népektől származik. A sztyeppén, ahol a magyarok vándoroltak, az 5–9. század között a türk népek voltak a meghatározók.</li>
    </ul>
    <div class="highlight-box">💡 A tudósok ma úgy gondolják: a magyarok egy finnugor nyelvű nép és egy türk életmódú nép keveredéséből jöttek létre. Innen ered az a különleges kettősség, hogy nyelvünk rokon a finnel, de őseinket mégis lovas harcosokként ismerjük.</div>
  </div>

  <div class="info-card">
    <h3>🗺️ Vándorlás a sztyeppén: A honfoglalás állomásai</h3>
    <p>A magyarok több ezer kilométeres utat tettek meg kelet felől, amíg eljutottak mai hazájukba. A vándorlás főbb állomásai a következők voltak:</p>
    <table class="data-table">
      <tr><th>Állomáshely</th><th>Helyszín</th><th>Fontos események és jellemzők</th></tr>
      <tr><td><strong>Magna Hungaria</strong></td><td>Az Urál-hegység nyugati lába</td><td>Az „ősi Magyarország". 1236-ban Julianus barát itt talált rá az ott maradt magyarokra, akikkel megértették egymást.</td></tr>
      <tr><td><strong>Levédia</strong></td><td>A Don és a Dnyeper közötti terület</td><td>A terület nevét Levedi törzsfőről kapta. A magyarok a Kazár Birodalom fennhatósága alatt éltek itt, átvéve a kettős fejedelemséget.</td></tr>
      <tr><td><strong>Etelköz</strong></td><td>A Dnyeper és az Al-Duna közötti terület</td><td>Jelentése: „Folyóköz". Itt történt a vérszerződés, a hét törzs szövetsége, és itt választották Álmost fejedelemmé. Árpád Álmos halálát követően lett a vezér.</td></tr>
    </table>
<div class="content-img-wrap" style="margin:20px 0;">
  <img src="images/topic1_img0.png" alt="A magyarok vándorlása térkép"/>
  <div class="content-img-caption">🗺️ A magyarok vándorlása – Magna Hungaria → Levédia → Etelköz → Kárpát-medence. A piros nyilak a vándorlás irányát mutatják.</div>
</div>

  </div>

  <div class="info-card">
    <h3>👑 A kettős fejedelemség és a vérszerződés</h3>
    <p>Levédiában a magyarok átvették a kazároktól a kettős hatalmi rendszert:</p>
    <div class="highlight-box">
      <strong>Kende (vagy kündü):</strong> A szakrális, vallási vezető, aki az égiek felé képviselte a népet.<br><br>
      <strong>Gyula:</strong> A tényleges hatalmat gyakorló vezető, a hadsereg parancsnoka és a bírói ügyek intézője.
    </div>
    <p>Etelközben a törzsek <strong>(Nyék, Megyer, Kürtgyarmat, Tarján, Jenő, Kér, Keszi)</strong> szövetségét a vérszerződés pecsételte meg. (A hét törzshöz a kabarok is csatlakoztak — ők egy kazár eredetű nép voltak, akik szintén velük tartottak a Kárpát-medencébe.) A törzsek vezetői pedig a következők voltak: <strong>Álmos, Előd, Ond, Kond, Tas, Huba, Töhötöm.</strong> Ez a szoros szövetség olyan egységet teremtett, amelyben a törzsek többé nem válhattak külön politikai tényezőkké — így jött létre a Magyar Nagyfejedelemség.</p>
  </div>

  <div class="info-card">
    <h3>🦅 Ősmagyar vallás és hitvilág</h3>
    <p>Az ősmagyarok a honfoglalás idején még nem voltak keresztények. Vallásuk nagyon közel állt a természethez, tele volt szellemekkel, mondai állatokkal és varázslattal. Ezt a hitet <strong>sámánizmusnak vagy táltoshitnek</strong> nevezzük.</p>
    <div class="content-img-wrap"><img src="images/topic1_img1.png" alt="Turulmadár szobor"/><div class="content-img-caption">🦅 Turulmadár szobor – a magyarok egyik legfontosabb jelképe</div></div>
    <p style="margin-top:10px;">A közösség vallási vezetője és gyógyítója a <strong>táltos</strong> volt. A hiedelem szerint már születésekor kiválasztott volt (például foggal vagy hat ujjal született). Ő tartott a kapcsolatot a túlvilággal, de jósolt is. A magyarok szent állata a <strong>turulmadár</strong> (sólyomszerű) és a <strong>csodaszarvas</strong> volt.</p>
  <div class="content-img-wrap" style="max-width:340px;margin:16px auto;"><img src="images/topic1_img2.png" alt="Arany csodaszarvas"/><div class="content-img-caption">🦌 Arany szarvas – szkytha-hun művészeti emlék, a csodaszarvas jelképe</div></div>
  </div>

  <div class="info-card">
    <h3>🏕️ Életmód és „félelmetes" magyar harcmodor</h3>
    <p>A magyarok félnomád életmódot folytattak, ami az állattenyésztés és a földművelés ötvözetét jelentette.</p>
    <p style="margin-top:10px;font-weight:800;color:var(--purple-d);">Gazdálkodás és mindennapok</p>
    <p>A sztyeppén, azaz a füves pusztán élő magyarság vándorló életmódot folytatott. A főleg állattenyésztésből élő magyarok mindig oda hajtották állataikat, ahol dúsabb volt a fű. Ugyanakkor régészeti leletek a földművelés meglétét is mutatják, és ez legalább aratásig egy helyhez kötötte őseinket, ezért ezt az életmódot félnomádnak nevezik.</p>
    <ul>
      <li><strong>Állattartás:</strong> Hatalmas méneseket, gulyákat és nyájakat tartottak. Télen a folyóvölgyek védettebb szállásain (ahol a befagyott folyókon léket vágva itathattak), nyáron a dús legelőkön tartózkodtak.</li>
      <li><strong>Földművelés:</strong> A kemény sztyeppei talajt az úgynevezett csoroszlyás ekével törték fel, amely az ekevas előtt egy éles pengével hasította meg a földet. Elsősorban kölest, búzát és árpát termesztettek.</li>
      <li><strong>Lakóhely:</strong> Könnyen szétszedhető és szállítható nemezsátrakban, jurtákban laktak.</li>
<div class="content-img-wrap"><img src="images/topic1_img3.png" alt="Jurta"/><div class="content-img-caption">🏕️ Jurta (nemezsátor) – a magyarok hordozható, könnyen felállítható lakóhelye a sztyeppén</div></div>
    </ul>
    <p style="margin-top:10px;font-weight:800;color:var(--purple-d);">A hadviselés művészete</p>
    <p>A magyarok könnyűlovas harcmodora egy jó ideig rettegésben tartotta Európát. Főbb jellemzői:</p>
    <ul>
      <li><strong>Visszacsapó (reflex) íj:</strong> 300-400 méter távolságból is pontos és halálos volt, átütötte a páncélt is.</li>
      <div class="content-img-wrap" style="max-width:360px;margin:16px auto;"><img src="images/topic1_img4.png" alt="Visszacsapó reflex íj"/><div class="content-img-caption">🏹 A visszacsapó (reflex) íj felépítése – az A rész a kilőtt, B az íj, C a megfeszített állapot</div></div>
      <li><strong>Taktika:</strong> Kerülték a közvetlen közelharcot a páncélos lovasokkal. Nyílzáporral bontották meg az ellenség rendjét, majd színlelt megfutamodással csalták tőrbe őket. Amikor az ellenség alakzata felbomlott, hirtelen visszafordultak és szablyával támadtak.</li>
      <li><strong>Felszerelés:</strong> Használták a kengyelt, ami lehetővé tette, hogy lóháton hátrafelé is tudjanak nyilazni. Jellegzetes kiegészítőjük volt a tarsoly, amelyben az eszközöket tartották.</li>
    </ul>
  </div>

  <div class="info-card" style="border-color:rgba(212,175,55,.35);">
    <h3>🏰 Kárpát-medence dióhéjban – Ki volt itt előttünk? (5. sz. – 895)</h3>
    <p style="margin-bottom:16px;">A magyarok nem üres földet foglaltak el. Öt korszak, öt nép – íme a medence rövid előtörténete!</p>
    <div style="display:flex;flex-direction:column;gap:5px;">

      <div style="background:rgba(212,175,55,.06);border-left:3px solid #d4af37;border-radius:0 8px 8px 0;padding:11px 15px;display:flex;gap:12px;align-items:flex-start;">
        <div style="font-size:1.4rem;line-height:1;flex-shrink:0;">⚔️</div>
        <div>
          <div style="font-family:'Share Tech Mono',monospace;font-size:.68rem;color:#d4af37;font-weight:700;text-transform:uppercase;letter-spacing:.1em;">5. század első fele</div>
          <div style="font-family:'Share Tech Mono',monospace;font-size:.85rem;font-weight:700;color:#f0c840;margin:3px 0;">A HUNOK KORA</div>
          <div style="font-size:.88rem;color:#ccd4e8;line-height:1.6;">Attila király hatalmas birodalmat épít ki. Halálával (453) a birodalom azonnal szétesik.</div>
        </div>
      </div>

      <div style="text-align:center;color:rgba(212,175,55,.35);font-family:'Share Tech Mono',monospace;font-size:.75rem;letter-spacing:.15em;">▼</div>

      <div style="background:rgba(34,211,160,.05);border-left:3px solid #22d3a0;border-radius:0 8px 8px 0;padding:11px 15px;display:flex;gap:12px;align-items:flex-start;">
        <div style="font-size:1.4rem;line-height:1;flex-shrink:0;">🛡️</div>
        <div>
          <div style="font-family:'Share Tech Mono',monospace;font-size:.68rem;color:#22d3a0;font-weight:700;text-transform:uppercase;letter-spacing:.1em;">453 – 568</div>
          <div style="font-family:'Share Tech Mono',monospace;font-size:.85rem;font-weight:700;color:#6ee7ca;margin:3px 0;">A GERMÁNOK KORA</div>
          <div style="font-size:.88rem;color:#ccd4e8;line-height:1.6;">A gepidák és a longobárdok harcolnak a területért. A longobárdok 568-ban továbbállnak Itáliába.</div>
        </div>
      </div>

      <div style="text-align:center;color:rgba(212,175,55,.35);font-family:'Share Tech Mono',monospace;font-size:.75rem;letter-spacing:.15em;">▼</div>

      <div style="background:rgba(224,92,122,.05);border-left:3px solid #e05c7a;border-radius:0 8px 8px 0;padding:11px 15px;display:flex;gap:12px;align-items:flex-start;">
        <div style="font-size:1.4rem;line-height:1;flex-shrink:0;">🐎</div>
        <div>
          <div style="font-family:'Share Tech Mono',monospace;font-size:.68rem;color:#e05c7a;font-weight:700;text-transform:uppercase;letter-spacing:.1em;">568 – 8. század vége</div>
          <div style="font-family:'Share Tech Mono',monospace;font-size:.85rem;font-weight:700;color:#f9a8bb;margin:3px 0;">AZ AVAROK KORA</div>
          <div style="font-size:.88rem;color:#ccd4e8;line-height:1.6;">Egy nomád lovasnép, az avarok uralják a medencét több mint 200 évig. Birodalmukat a 790-es években a frankok (Nagy Károly) verik szét.</div>
        </div>
      </div>

      <div style="text-align:center;color:rgba(212,175,55,.35);font-family:'Share Tech Mono',monospace;font-size:.75rem;letter-spacing:.15em;">▼</div>

      <div style="background:rgba(96,168,248,.05);border-left:3px solid #60a8f8;border-radius:0 8px 8px 0;padding:11px 15px;display:flex;gap:12px;align-items:flex-start;">
        <div style="font-size:1.4rem;line-height:1;flex-shrink:0;">👑</div>
        <div>
          <div style="font-family:'Share Tech Mono',monospace;font-size:.68rem;color:#60a8f8;font-weight:700;text-transform:uppercase;letter-spacing:.1em;">9. század</div>
          <div style="font-family:'Share Tech Mono',monospace;font-size:.85rem;font-weight:700;color:#a5c8ff;margin:3px 0;">A MEGOSZTOTTSÁG KORA</div>
          <div style="font-size:.88rem;color:#ccd4e8;line-height:1.6;">Nincs egyetlen nagy úr: <strong>nyugaton a frankok</strong>, <strong>délkeleten a bolgárok</strong>, <strong>északon a szlávok</strong> (Nagymorva Birodalom) a befolyásosak.</div>
        </div>
      </div>

      <div style="text-align:center;color:rgba(212,175,55,.35);font-family:'Share Tech Mono',monospace;font-size:.75rem;letter-spacing:.15em;">▼</div>

      <div style="background:rgba(34,197,94,.07);border-left:3px solid #22c55e;border:1px solid rgba(34,197,94,.25);border-left:3px solid #22c55e;border-radius:0 8px 8px 0;padding:11px 15px;display:flex;gap:12px;align-items:flex-start;">
        <div style="font-size:1.4rem;line-height:1;flex-shrink:0;">🇭🇺</div>
        <div>
          <div style="font-family:'Share Tech Mono',monospace;font-size:.68rem;color:#22c55e;font-weight:700;text-transform:uppercase;letter-spacing:.1em;">895</div>
          <div style="font-family:'Share Tech Mono',monospace;font-size:.85rem;font-weight:700;color:#86efad;margin:3px 0;">A MAGYAR HONFOGLALÁS</div>
          <div style="font-size:.88rem;color:#ccd4e8;line-height:1.6;">Árpád vezetésével a magyar törzsek megérkeznek, és az egymással is vetélkedő birodalmakat kiszorítva <strong style="color:#4ade80;">véglegesen birtokba veszik a Kárpát-medencét.</strong></div>
        </div>
      </div>

    </div>
  </div>

  <div class="info-card">
    <h3>⚔️ A honfoglalás története (895–907) – újabb kutatások szerint 862-től</h3>
    <p>A honfoglalás nem egyetlen esemény, hanem egy tervezett folyamat volt, amelyet külső kényszer is gyorsított. 862-ben és 881-ben már frank uralom alatti területeket támadtak magyar seregek a Kárpát-medencében. Ezért szükséges a honfoglalás időrendjét felülbírálni, és arra gondolni, hogy a 9. század közepére a Magyar Nagyfejedelemség népe legalább részben átköltözött a Kárpát-medencébe, mert innen jobban figyelemmel kísérhette a frank területek politikai fejleményeit, mint Etelközből. A honfoglalást így 862–895/907 közé érdemes keltezni, és azt egy előre eltervezett, hosszan tartó folyamatként kell tekinteni.</p>
    <p style="margin-top:10px;font-weight:800;color:var(--purple-d);">Az elvándorlás okai</p>
    <p>895 körül a magyar főerők (Árpád vezetésével) távol voltak a szállásterülettől: részben a bizánci császár kérésére a bolgárok ellen harcoltak, részben a Kárpát-medencében kalandoztak. Ezt kihasználva a besenyők (a bolgárokkal szövetségben) lerohanták a védtelenül maradt etelközi szállásokat. Ez a támadás kényszerítette a magyarokat a gyorsabb beköltözésre.</p>
    <p style="margin-top:10px;font-weight:800;color:var(--purple-d);">A honfoglalás szakaszai</p>
    <div class="timeline">
      <div class="tl-item">
        <div class="tl-dot amber"></div>
        <div class="tl-year">895</div>
        <div class="tl-title">Beköltözés a Kárpát-medencébe</div>
        <div class="tl-desc">A magyarok a Vereckei-hágón és az erdélyi hágókon keresztül benyomultak a Kárpát-medencébe. Először a Dunától keletre fekvő területeket és Erdélyt szállták meg.</div>
      </div>
      <div class="tl-item">
        <div class="tl-dot purple"></div>
        <div class="tl-year">900</div>
        <div class="tl-title">Dunántúl (Pannónia) elfoglalása</div>
        <div class="tl-desc">A Dunától nyugatra eső területek is magyar kézbe kerültek.</div>
      </div>
      <div class="tl-item">
        <div class="tl-dot teal"></div>
        <div class="tl-year">902</div>
        <div class="tl-title">A Morva Birodalom megsemmisítése</div>
        <div class="tl-desc">A Felvidék nyugati részének birtoka is megszilárdult.</div>
      </div>
      <div class="tl-item">
        <div class="tl-dot amber"></div>
        <div class="tl-year">907</div>
        <div class="tl-title">Pozsonyi csata – A honfoglalás záróakkordja</div>
        <div class="tl-desc">A keleti frankok (bajorok) hatalmas sereggel támadtak, hogy kiűzzék a magyarokat. A magyar sereg azonban tönkreverte a támadókat, ezzel véglegesítették hatalmukat a Kárpát-medencében. Árpád fejedelem valószínűleg ebben az időben halt meg.</div>
      </div>
    </div>
  </div>

  <div class="info-card">
    <h3>🌍 Kalandozások: Hadjáratok Európa-szerte</h3>
    <p>A honfoglalást követő évtizedekben a magyarok számos hadjáratot indítottak Nyugat-Európa és Bizánc felé. Ezek nem egyszerű fosztogatások, hanem gyakran idegen uralkodók felkérésére indított, jól megtervezett katonai akciók voltak.</p>
    <ul>
      <li><strong>Sikerek:</strong> Eljutottak egészen Hispániáig (mai Spanyolország) és Konstantinápolyig. Európában ekkor született az ima: „A magyarok nyilaitól ments meg, Uram, minket!"</li>
      <li><strong>A végpontok:</strong> A nyugati kalandozásoknak a 955-ös augsburgi vereség vetett véget (a csatában foglyul ejtett Lehel és Bulcsú vezéreket ezután Regensburgban végezték ki). A délkeleti, Bizánc elleni hadjáratok az arkadiopoliszi csatával (970) zárultak le.</li>
    </ul>
    <div class="highlight-box">A kalandozások kora után a magyarságnak választania kellett: vagy beolvad az európai népek közé és felveszi a kereszténységet, vagy elpusztul. Ez a felismerés vezetett később Szent István államalapításához.</div>
    <div class="timeline" style="margin-top:16px;">
      <div class="tl-item">
        <div class="tl-dot purple"></div>
        <div class="tl-year">955</div>
        <div class="tl-title">Augsburgi vereség</div>
        <div class="tl-desc">Véget ért a nyugati kalandozások kora. Lehel és Bulcsú vezérek elveszítették életüket.</div>
      </div>
      <div class="tl-item">
        <div class="tl-dot teal"></div>
        <div class="tl-year">970</div>
        <div class="tl-title">Arkadiopoliszi csata</div>
        <div class="tl-desc">A Bizánc elleni kalandozások végpontja. Választút: kereszténység vagy pusztulás.</div>
      </div>
    </div>
  </div>

  <div class="info-card" style="background:linear-gradient(135deg,#14532d,#052e16);border:2px solid #4ade80;color:#d1fae5;">
    <h3 style="color:#4ade80;">📋 Történeti Gyorsvázlat (Szigorúan kulcsszavak)</h3>
    <ul>
      <li>🌍 <strong>Őshaza &amp; eredet:</strong> Urálon túli sztyeppe → ugor népektől való elkülönülés → türk hatás (szó- és tárgykölcsönzések)</li>
      <li>🗺️ <strong>Vándorlás:</strong> Magna Hungaria → Levédia (kettős fejedelemség: Kende + Gyula) → Etelköz (vérszerződés, Álmos → Árpád)</li>
      <li>👥 <strong>Törzsszövetség:</strong> 7 magyar törzs + kabarok → Kende (szakrális/vallási) + Gyula (katonai/tényleges vezető)</li>
      <li>🏕️ <strong>Életmód:</strong> Félnomád (állattartás + földművelés), jurta, visszacsapó íj, kengyel, tarsoly</li>
      <li>🏹 <strong>Harcmodor:</strong> Könnyűlovas, visszacsapó íj, színlelt megfutamodás</li>
      <li>⚔️ <strong>Honfoglalás (895–907):</strong> Besenyő nyomás → Vereckei-hágón át → Kárpát-medence elfoglalása → Pozsonyi csata (907)</li>
      <li>🌍 <strong>Kalandozások vége:</strong> Zsákmányszerzés Európában → 955 Augsburg (nyugat), 970 Arkadiopolisz (délkelet)</li>
    </ul>
  </div>`;
}

// ===== MAP LOGIC =====
const mapActive=new Set();
const mapInfo={
  1:'<strong>1. Magna Hungaria</strong> – Az „ősi Magyarország" az Urál-hegység nyugati lábánál. 1236-ban Julianus barát megtalálta az ott maradt rokon magyarokat, akikkel megértették egymást!',
  2:'<strong>2. Levédia</strong> – A Don és a Dnyeper folyók közötti terület. A Kazár Birodalom fennhatósága alatt éltek itt, és átvettük tőlük a kettős fejedelemség rendszerét.',
  3:'<strong>3. Etelköz</strong> – A Dnyeper és az Al-Duna közötti terület. Jelentése: „Folyóköz". Itt történt a vérszerződés és itt választották Álmost fejedelemmé! Árpád Álmos halálát követően lett a vezér.',
  4:'<strong>4. Honfoglalás (895)</strong> – A Kárpát-medence elfoglalása besenyő nyomásra. Árpád a Vereckei-hágón vezette be seregeit. A záróakkord: 907-es pozsonyi győzelem!',
  5:'<strong>5. Kalandozások</strong> – Magyar seregek Hispániától Bizáncig pusztítottak. Vége: 955 Augsburg (nyugat), 970 Arkadiopolisz (délkelet).',
};
function mapToggle(n,btn){
  if(mapActive.has(n)){mapActive.delete(n);btn.classList.remove('on');}
  else{mapActive.add(n);btn.classList.add('on');}
  // blobs
  [1,2,3,4].forEach(i=>{
    const b=document.getElementById('blob-'+i);
    if(b)b.style.opacity=mapActive.has(i)?'0.65':'0';
  });
  // labels
  [1,2,3,4].forEach(i=>{
    const l=document.getElementById('lbl-'+i);
    if(l)l.style.opacity=mapActive.has(i)?'1':'0';
  });
  // arrows 
  [[1,'arr-1'],[2,'arr-2'],[3,'arr-3']].forEach(([i,id])=>{
    const el=document.getElementById(id);
    if(el){el.style.opacity=mapActive.has(i)?'1':'0';el.style.strokeDashoffset=mapActive.has(i)?'0':'300';}
  });
  ['arr-4a','arr-4b','arr-4c','lbl-5a','lbl-5b','lbl-5c'].forEach(id=>{
    const el=document.getElementById(id);
    if(!el)return;
    if(id.startsWith('arr')){el.style.opacity=mapActive.has(5)?'1':'0';el.style.strokeDashoffset=mapActive.has(5)?'0':'400';}
    else el.style.opacity=mapActive.has(5)?'1':'0';
  });
  const texts=mapActive.size?Array.from(mapActive).map(k=>mapInfo[k]).join('<br><br>'):'👆 Kattints egy állomásra a részletek megjelenítéséhez!';
  document.getElementById('map-info').innerHTML=texts;
}

// ===== KEY CONCEPTS =====
function buildTopic1Concepts(){
  const concepts=[
    {c:'purple',e:'🗣️',t:'Finnugor',d:'Nyelvcsalád, amelyhez a magyar is tartozik. Legközelebbi rokonaink: vogulok és osztjákok az Urál vidékéről.'},
    {c:'amber',e:'⚔️',t:'Türk jövevényszavak',d:'A török (türk) népektől átvett szavak, pl. ló, tinó, ökör, gyümölcs. Ezek is igazolják a szoros türk kapcsolatot.'},
    {c:'teal',e:'👑',t:'Kettős fejedelemség',d:'Kazároktól átvett hatalmi rendszer: Kende (szakrális vezető) + Gyula (katonai-bírói vezető).'},
    {c:'rose',e:'🤝',t:'Vérszerződés',d:'A 7 törzs szövetsége Etelközben. Álmost fejedelemmé választják – Árpád Álmos halálát követően lesz a vezér. Ezzel jön létre a Magyar Nagyfejedelemség.'},
    {c:'blue',e:'🏕️',t:'Félnomád életmód',d:'Olyan életforma, amelyben egy nép a legeltető állattenyésztés miatt még vándorol (általában a téli és nyári szálláshelyek között), de az év egy részében már letelepedve, egyszerű földműveléssel is foglalkozik. A vándorló magyarság is ezt az életmódot folytatta a honfoglalás előtt.'},
    {c:'green',e:'🏹',t:'Reflex íj',d:'A visszacsapó (reflex) íj 300-400 méterről is átütötte a páncélt. Ez volt a magyarok legfélelmetesebb fegyvere.'},
    {c:'purple',e:'🔮',t:'Táltos',d:'Az ősmagyarok vallási vezetője (kb.: papja) és gyógyítója. Foggal vagy hat ujjal született – már születésekor kiválasztott volt.'},
    {c:'amber',e:'🦅',t:'Turulmadár',d:'A magyarok egyik főszentállata, sólyomszerű madár. A turullegendában Álmos anyjának álmában jelent meg.'},
    {c:'teal',e:'🏹',t:'Kengyel',d:'A nyereghez rögzített talptámasz, amelynek köszönhetően a lovasok lóháton hátrafelé is tudtak nyilazni!'},
    {c:'rose',e:'📦',t:'Tarsoly',d:'A vitézek derekán lógó díszes táskaféle, amelyben eszközeiket tartották. A tarsolylemez gyönyörű díszítésű volt.'},
    {c:'blue',e:'🚪',t:'Vereckei-hágó',d:'A Kárpátok egyik hágója, amelyen át Árpád vezette be a magyar főerőket a Kárpát-medencébe 895-ben. Ma Ukrajnában található.'},
    {c:'green',e:'⚔️',t:'Pozsonyi csata (907)',d:'A magyar honfoglalás záróeseménye: a magyar sereg legyőzte a keleti-frank támadókat, ezzel véglegesítve a hatalmát a Kárpát-medencében.'},
    {c:'purple',e:'⚔️',t:'Hétvezér',d:'A hét törzs vezetői, akik a vérszerződéssel szövetséget kötöttek Etelközben: Álmos, Előd, Ond, Kond, Tas, Huba, Töhötöm. Álmos fia, Árpád lett a Magyar Nagyfejedelemség első fejedelme.'},
    {c:'amber',e:'🏕️',t:'Hét nemzetség (törzs)',d:'A honfoglalás idején a magyarok hét törzsből álltak: Nyék, Megyer, Kürtgyarmat, Tarján, Jenő, Kér, Keszi. A vérszerződéssel ezek a törzsek szoros politikai egységet alkottak – így jött létre a Magyar Nagyfejedelemség.'},
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
// ===== QUIZ =====
const questions=[
  {q:'Melyik két népesség keveredéséből jöhetett létre a magyar nép a tudósok szerint?',a:['Szláv és germán népekből','Finnugor és türk (török) népekből','Kelta és frank népekből'],correct:1},
  {q:'Melyik állomáshelyen történt a vérszerződés és Álmos fejedelemmé választása?',a:['Magna Hungaria','Levédia','Etelköz'],correct:2},
  {q:'A kettős fejedelemség idején mi volt a Gyula feladata?',a:['Ő volt a tényleges katonai parancsnok és bíró.','Ő volt a vallási vezető az égiek felé.','Ő felelt az adóbeszedésért.'],correct:0},
  {q:'Ki volt az ősmagyarok vallási vezetője és gyógyítója, akiről úgy hitték, hogy foggal vagy hat ujjal született?',a:['A kende','A táltos','A gyula'],correct:1},
  {q:'Milyen életmódot folytattak a magyarok a sztyeppén?',a:['Teljesen letelepedett, csak földművelésből éltek.','Kizárólag vadászatból éltek.','Félnomád életmódot, ami állattenyésztés és földművelés ötvözete volt.'],correct:2},
  {q:'Mi volt a magyar könnyűlovasok legfélelmetesebb fegyvere?',a:['A hosszú lándzsa','A kétkezes csatabárd','A visszacsapó (reflex) íj'],correct:2},
  {q:'Melyik ellenséges nép támadása kényszerítette a magyarokat a gyorsabb beköltözésre?',a:['A besenyők','A bajorok','A morvák'],correct:0},
  {q:'Melyik hágón keresztül nyomultak be a magyar főerők a Kárpát-medencébe 895-ben?',a:['A Vereckei-hágón','A Brenner-hágón','A Gyimesi-hágón'],correct:0},
  {q:'Miért volt sorsdöntő a 907-es pozsonyi csata?',a:['Mert itt veszítettünk a frankok ellen.','Mert a magyarok tönkreverték a bajor támadókat, véglegesítve a honfoglalást.','Mert itt békét kötöttek a bolgárokkal.'],correct:1},
  {q:'Melyik esemény vetett véget a magyarok nyugati irányú kalandozásainak?',a:['A 902-es morva hadjárat','A 928-as Magdeburgi-csata','A 955-ös augsburgi vereség'],correct:2},
];

let quizState={q:[],idx:0,correct:0,answered:false};

function buildTopic1Quiz(){
  return `<div class="quiz-container">
    <div class="quiz-header">
      <h3>🎯 Mesterlövész Tudáspróba</h3>
      <div class="quiz-counter" id="q-counter">1 / 10</div>
    </div>
    <div class="quiz-body" id="quiz-body">
      <div class="progress-dots" id="progress-dots"></div>
      <div class="question-text" id="q-text"></div>
      <div class="answers-grid" id="q-answers"></div>
      <div class="feedback-box" id="feedback"></div>
      <div style="text-align:right;margin-top:8px;clear:both;">
        <button class="next-btn" id="next-btn" onclick="nextQuestion()">Következő →</button>
      </div>
    </div>
    <div class="quiz-result" id="quiz-result"></div>
  </div>`;
}

function initQuiz(){
  quizState.q=[...questions].sort(()=>Math.random()-.5);
  quizState.idx=0;quizState.correct=0;quizState.answered=false;
  document.getElementById('quiz-body').style.display='block';
  document.getElementById('quiz-result').style.display='none';
  renderQuestion();
}

function renderQuestion(){
  const q=quizState.q[quizState.idx];
  document.getElementById('q-counter').innerText=`${quizState.idx+1} / 10`;
  document.getElementById('q-text').innerText=q.q;
  const letters=['A','B','C'];
  const shuffled=[0,1,2].sort(()=>Math.random()-.5);
  document.getElementById('q-answers').innerHTML=shuffled.map((origIdx,i)=>`
    <button class="answer-btn" data-correct="${origIdx===q.correct}" onclick="answerQ(this)">
      <span class="answer-letter">${letters[i]}</span>${q.a[origIdx]}
    </button>`).join('');
  const dots=document.getElementById('progress-dots');
  dots.innerHTML=Array.from({length:10},(_,i)=>`<div class="dot ${i<quizState.idx?(quizState.q[i]._result==='c'?'correct':'wrong'):''}${i===quizState.idx?'current':''}"></div>`).join('');
  document.getElementById('feedback').style.display='none';
  document.getElementById('next-btn').style.display='none';
  quizState.answered=false;
}

function answerQ(btn){
  if(quizState.answered)return;
  quizState.answered=true;
  const isCorrect=btn.dataset.correct==='true';
  document.querySelectorAll('.answer-btn').forEach(b=>{
    b.disabled=true;
    if(b.dataset.correct==='true')b.classList.add('correct');
  });
  if(isCorrect){
    btn.classList.add('correct');
    quizState.correct++;
    quizState.q[quizState.idx]._result='c';
    showFeedback(true,'🎉 Helyes! Zseniális válasz!');
    startConfetti(30);
    if(window.mascotCorrect)mascotCorrect();
  } else {
    btn.classList.add('wrong');
    quizState.q[quizState.idx]._result='w';
    const correctBtn=document.querySelector('.answer-btn[data-correct="true"]');
    if(correctBtn)correctBtn.classList.add('correct');
    showFeedback(false,'❌ Sajnos nem ez volt a helyes válasz. Nézd meg a zöld gombot!');
    if(window.mascotWrong)mascotWrong();
  }
  document.getElementById('next-btn').style.display='block';
  document.getElementById('next-btn').innerText=quizState.idx===9?'Eredmény megtekintése 🏆':'Következő kérdés →';
}

function showFeedback(ok,msg){
  const fb=document.getElementById('feedback');
  fb.className='feedback-box '+(ok?'correct':'wrong');
  fb.innerText=msg;
  fb.style.display='block';
}

function nextQuestion(){
  quizState.idx++;
  if(quizState.idx<10){renderQuestion();}
  else{showResult();}
}

function showResult(){
  document.getElementById('quiz-body').style.display='none';
  const res=document.getElementById('quiz-result');
  res.style.display='block';
  const score=quizState.correct;
  const emoji=score>=9?'🏆':score>=7?'🥇':score>=5?'🥈':score>=3?'🥉':'💪';
  const msg=score>=9?'Fenomenális! Igazi mesterlövész vagy!':score>=7?'Kiváló munka, felderítő!':score>=5?'Szép teljesítmény! Még egy kis gyakorlás...':score>=3?'Jó próbálkozás! Olvass még egy kicsit!':'Gyakorolj sokat, ügynök!';
  const earnedXP=score*15;
  addXP(earnedXP);
  let unlockHtml='';
  if(score>=8&&!badge0){
    badge0=true;
    document.getElementById('badge-0').classList.add('earned');
    unlockHtml+='<div class="unlock-notice">🏹 Kitüntetés megszerezhető: Honfoglaló!</div>';
  }
  if(score>=8){
    unlockHtml+='<div class="unlock-notice">🔑 Dosszié 02 kódja: <strong>907</strong> – Írd be a zárolt dosszié oldalán!</div>';
  } else {
    unlockHtml+='<div class="unlock-notice" style="background:var(--rose-l);border-color:var(--rose);color:var(--rose-d);">⚠️ Legalább 8/10 pont kell a következő dosszié kódjához! Próbáld újra!</div>';
  }
  res.innerHTML=`<div class="result-emoji">${emoji}</div>
    <div class="result-score">${score} / 10</div>
    <div class="result-msg">${msg}</div>
    <div class="result-xp">⭐ +${earnedXP} XP megszerezve!</div>
    ${unlockHtml}
    <button class="retry-btn" onclick="initQuiz()">🔄 Újra próbálom</button>
    <button class="next-btn" style="display:inline-block;float:none;" onclick="switchTabTo('videos');document.querySelectorAll('.tab').forEach((t,i)=>{t.classList.toggle('active',i===3);})">🎥 Videók megtekintése</button>`;
}

// ===== VIDEOS =====
function buildTopic1Videos(){
  const vids=[
    {e:'⚡',level:'alap',lt:'Beavatás – Legkönnyebb',title:'Időutazó: A magyar népvándorlás – Gyorstalpaló',desc:'Szigorúan titkos, kétperces gyorsjelentés (sitrep) időhiánnyal küzdő terepügynököknek! Pörgős vizuális eligazítás, amely villámgyors áttekintést ad az őshazából induló első manőverekről. Tökéletes belépő szintű aktabontás a 6. osztályos kadétoknak a küldetés megkezdéséhez.',url:'https://www.youtube.com/watch?v=eYDOO7Cw3NE'},
    {e:'⚡',level:'alap',lt:'Beavatás – Legkönnyebb',title:'Időutazó: A honfoglalás – Gyorstalpaló',desc:'A Kárpát-medencei behatolás legfontosabb taktikai mozzanatai, gyorsított tempóban dekódolva. Az előző gyorsjelentés közvetlen folytatása, amely dinamikusan mutatja be a területbiztosítást, anélkül, hogy felesleges évszám-halmazokkal terhelné a zöldfülű ügynökök memóriáját.',url:'https://www.youtube.com/watch?v=OzTaJpdMnFI'},
    {e:'😄',level:'alap',lt:'Kezdő – Könnyed',title:'Népünk története az őshazától a honfoglalásig – zanza.tv (Külső információs csatorna)',desc:'A Parancsnokság hivatalos, kiképzési célra dekódolt vizuális aktája. Tömör és logikusan felépített hírszerzési anyag a vonulási útvonalakról és a bázisépítésről. A legideálisabb titkos fegyver az ügynökök kezében egy közelgő elméleti ellenőrzés (kódnevén: témazáró dolgozat) sikeres abszolválásához.',url:'https://www.youtube.com/watch?v=3xQTdKfENOo'},
    {e:'📚',level:'kozepes',lt:'Középhaladó',title:'Pálfy Gyula: Magyarok vándorlása és a honfoglalás',desc:'Alapos, megbízható tempójú stratégiai eligazítás egyenesen az egyik vezető kiképzőtiszttől. Letisztult, húszperces elemzés, ami tökéletesen követhető, így egy elveszett műveleti napló (füzetvázlat) pótlására, vagy az otthoni bázison történő zavartalan felkészülésre is kiválóan alkalmas.',url:'https://www.youtube.com/watch?v=9T1NCbdKwtk'},
    {e:'🎬',level:'kozepes',lt:'Haladó',title:'dr. Kulcsár Árpád: A Magyar nép eredete, vándorlása és a honfoglalás',desc:'Magasabb biztonsági besorolású, mélyreható taktikai elemzés a téma egy kiemelt szakértőjétől. Klasszikus, frontális hírszerzői beszámoló (bő fél órás anyag). Látványos kémkütyük és trükkök helyett a nyers és megbízható tényeken van a hangsúly – elit ügynökök komolyabb bevetése előtti áttekintéshez elengedhetetlen.',url:'https://www.youtube.com/watch?v=o9jLqEZxsGk'},
    {e:'🕵️',level:'kozepes',lt:'Haladó Megfigyelő',title:'Magyarország története S01E01 – Úton a haza felé',desc:'Archív vizuális dokumentáció az őshazától a vándorlás útvonalán végrehajtott műveletekről. Alapos, lassabb folyású, részletekbe menő elemzés. Hossza és az átadott kódolt adatok sűrűsége miatt leginkább a terepen edződött, kitartó megfigyelőknek ajánlott kiterjesztett otthoni háttérkutatáshoz.',url:'https://www.youtube.com/watch?v=l8ygrIqqHYQ'},
    {e:'🎯',level:'profi',lt:'Mesterlövész – Legnehezebb',title:'Magyarország története S01E02 – A honfoglalás',desc:'A Kárpát-medencei területfoglalás szigorúan titkos, tűpontos rekonstrukciója. Ez a műveleti akta rengeteg geográfiai, geopolitikai és stratégiai összefüggéssel operál. Nehézségi foka "Vörös", így feldolgozása kizárólag a legelszántabb, hadtörténeti elemzésekért rajongó Mesterlövész-kadétoknak engedélyezett!',url:'https://www.youtube.com/watch?v=q62Rgo7voWI'},
  ];
  return `<h2 style="font-family:'Fredoka One',cursive;font-size:1.4rem;color:var(--rose-d);margin-bottom:16px;">🎥 TITKOS VIDEÓARCHÍVUM: A "HONFOGLALÁS" KÓDNEVŰ MŰVELET (Biztonsági besorolás szerinti sorrendben)</h2>
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
