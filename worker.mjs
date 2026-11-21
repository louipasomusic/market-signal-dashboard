import voskLocal from "./vosk-loader.txt";
import voskEngine from "./vosk-engine.txt";
const page = "<!doctype html><html lang=\"en\"><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><title>JARVIS · Market Signal</title><style>*{box-sizing:border-box}html{color-scheme:dark;scroll-behavior:smooth}body{margin:0;background:#070e19;color:#e4f4ff;font:15px system-ui,sans-serif}button,input,select{font:inherit}button,input,select{background:#0d2031;color:#d8f4ff;border:1px solid #284760;border-radius:6px;padding:9px 12px}button{cursor:pointer}button:hover,a:hover{color:#8cf7ff;border-color:#55cfe5}button:focus-visible,a:focus-visible,input:focus-visible,select:focus-visible{outline:2px solid #5de5f3;outline-offset:3px}button:disabled{cursor:default;opacity:.55}a{color:#72dce6}p{color:#9cb5c8}ul{padding-left:20px}li{margin:8px 0}h1,h2,h3,p{margin-top:0}h2{font-size:18px}h3{font-size:14px}.workspace{display:grid;grid-template-columns:240px minmax(0,1fr);min-height:100vh}.agent-sidebar{padding:26px 18px;background:#091522;border-right:1px solid #20384d}.brand{display:block;font-size:27px;font-weight:800;letter-spacing:.24em;color:#86f0ff}.rail-links{display:grid;gap:6px;margin:26px 0}.rail-links a{padding:9px;border:1px solid #20384d;border-radius:6px;text-decoration:none}.tool-list{list-style:none;padding:0;color:#9cb5c8;font-size:13px}.tool-list strong{color:#e4f4ff;display:block}.main{min-width:0;padding:28px clamp(16px,3vw,48px);max-width:1550px;width:100%}.top{display:flex;justify-content:space-between;align-items:end;gap:12px;flex-wrap:wrap;margin-bottom:18px}.top h1{letter-spacing:.13em;margin:0;font-size:clamp(20px,3vw,30px)}.top form,.controls,.ranges,#list-command{display:flex;gap:8px;flex-wrap:wrap}.top input{width:94px}.grid{display:grid;grid-template-columns:minmax(0,2fr) minmax(245px,1fr);gap:16px}.card{border:1px solid #234458;border-radius:12px;background:linear-gradient(150deg,#102033,#091523);padding:20px;min-width:0}.card h2{letter-spacing:.05em}.chart-head{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap}button[aria-pressed=true]{color:#a1fbff;border-color:#52d7e6;background:#103749}#summary{color:#e4f4ff;font-size:32px;font-weight:650;margin:18px 0 10px}#details{font-size:13px;margin:12px 0 0}canvas{width:100%;height:290px}.voice{text-align:center}.core{width:112px;height:112px;border-radius:50%;margin:3px auto 18px;border:1px solid #4ebcda;display:grid;place-items:center;background:radial-gradient(circle,#20718a 0%,#0b2638 52%,#0b1829 70%);box-shadow:0 0 22px #2bc9ee44,inset 0 0 19px #2bc9ee44;color:#c9faff;letter-spacing:.15em;font-size:12px}.voice .controls{justify-content:center}.lists{display:grid;grid-template-columns:1fr 1fr;gap:10px}.lists ul{list-style:none;padding:0}.lists li button{padding:5px 8px;margin-bottom:2px}#list-command input{flex:1;min-width:160px}#news-items,#filings{font-size:14px}@media(max-width:900px){.workspace{grid-template-columns:190px minmax(0,1fr)}.grid{grid-template-columns:1fr}}@media(max-width:620px){.workspace{display:block}.agent-sidebar{border-right:0;border-bottom:1px solid #20384d}.rail-links{display:flex;flex-wrap:wrap;margin:12px 0}.main{padding:16px}.card{padding:14px}}\nbody{background:#03080d;color:#d9f8ff}.workspace{position:relative;isolation:isolate;background:radial-gradient(ellipse at 69% 31%,#12334688 0,transparent 48%),repeating-linear-gradient(0deg,#75ebff08 0 1px,transparent 1px 5px),radial-gradient(ellipse at 35% 50%,#081b32,#020509 75%)}.workspace:before{content:\"\";position:fixed;z-index:-1;pointer-events:none;inset:0;background:linear-gradient(#32d3ff15 1px,transparent 1px),linear-gradient(90deg,#32d3ff15 1px,transparent 1px);background-size:44px 44px;mask-image:radial-gradient(ellipse at 63% 55%,black 0%,transparent 82%)}.agent-sidebar{background:#031018d9;border-color:#277487;box-shadow:inset -5px 0 28px #46e7ee10}.brand,.top h1,.card h2,.agent-sidebar h2,.agent-sidebar h3{font-family:Consolas,monospace;text-transform:uppercase}.brand{text-shadow:0 0 15px #45dcf4bb}.top{align-items:center;border-bottom:1px solid #2b8697;padding-bottom:13px}.top h1{color:#99f5ff}.tool-list strong{color:#a7f4ff}.rail-links a,.card,button,input,select{border-radius:0}.rail-links a{border-width:0 0 1px 2px;background:#16334373}.card{position:relative;border-color:#286e83;background:linear-gradient(135deg,#061521e8,#07101bd6 60%,#102c38b3);box-shadow:inset 0 0 20px #83e9ff0b}.card:before,.card:after{content:\"\";position:absolute;width:25px;height:14px;pointer-events:none}.card:before{top:-1px;left:-1px;border-top:2px solid #8bfbff;border-left:2px solid #8bfbff}.card:after{bottom:-1px;right:-1px;border-bottom:2px solid #8bfbff;border-right:2px solid #8bfbff}.grid{grid-template-columns:minmax(0,2fr) minmax(280px,1fr)}.voice{overflow:hidden;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:395px;background:radial-gradient(circle at 50% 40%,#123e52a6 0%,#061521de 55%,#071019e8 100%)}.core{isolation:isolate;position:relative;width:192px;height:192px;max-width:70vw;max-height:70vw;border:0;background:radial-gradient(circle,#164d63 0%,#0c2638 37%,#6ee5ff70 38%,transparent 39%,transparent 44%,#a2f7ff99 45%,transparent 46%);box-shadow:none;font-family:Consolas,monospace;font-size:16px;text-shadow:0 0 12px #7ef6ff;letter-spacing:.19em}.core:before,.core:after{content:\"\";position:absolute;border-radius:50%;pointer-events:none}.core:before{inset:1px;background:repeating-conic-gradient(#8cf3ffd9 0deg 1deg,transparent 1deg 6deg);mask-image:radial-gradient(transparent 61%,black 62% 68%,transparent 69%);animation:hud-spin 40s linear infinite}.core:after{inset:14px;border:2px solid #236680;border-top-color:#affdff;border-bottom-color:#62e4ff;border-left-style:dashed;box-shadow:0 0 12px #3ad1ff66,inset 0 0 14px #3ad1ff44;animation:hud-spin 22s linear infinite reverse}.voice[data-active=true] .core{filter:brightness(1.35)}.voice[data-active=true] .core:after{animation-duration:4s}#voice-install{border-color:#52cede;color:#bbfaff}#voice-install[hidden]{display:none}@keyframes hud-spin{to{transform:rotate(1turn)}}@media(prefers-reduced-motion:reduce){.core:before,.core:after{animation:none}html{scroll-behavior:auto}}@media(max-width:900px){.grid{grid-template-columns:1fr}.voice{min-height:320px}}</style><div class=\"workspace\"><aside class=\"agent-sidebar\"><span class=\"brand\">JARVIS</span><nav class=\"rail-links\" aria-label=\"Workspace navigation\"><a href=\"#market\">Market</a><a href=\"#stock-lists\">Stock lists</a><a href=\"#news\">News</a><a href=\"#sec\">SEC filings</a></nav><h2>Workspace agent</h2><p id=\"agent-status\" role=\"status\">Checking assignment…</p><button id=\"appoint-agent\" disabled>Appoint JARVIS</button><h3 style=\"margin-top:24px\">Tools and skills</h3><ul class=\"tool-list\"><li><strong>Market charts</strong>Yahoo Finance, Alpaca IEX, Massive</li><li><strong>Voice controls</strong>On-device speech and dictation</li><li><strong>Premarket brief</strong>Weekdays at 9 a.m. ET in ChatGPT</li><li><strong>Company research</strong>Headlines and SEC filings</li><li><strong>Codex conversation</strong>Connection pending</li><li><strong>Agent Reach</strong>Connection pending</li></ul></aside><main class=\"main\"><header class=\"top\"><h1>MARKET OPERATIONS</h1><form id=\"lookup\"><input name=\"ticker\" aria-label=\"Stock ticker\" value=\"SPY\" maxlength=\"12\" required><select name=\"source\" aria-label=\"Price data source\"><option value=\"yahoo\">Yahoo Finance · Historical</option><option value=\"alpaca\">Alpaca Basic · IEX</option><option value=\"massive\">Massive · End of day</option></select><button>Load ticker</button></form></header><div class=\"grid\"><section class=\"card\" id=\"market\"><div class=\"chart-head\"><h2 id=\"symbol\">SPY</h2><nav class=\"ranges\" aria-label=\"Chart period\"><button data-range=\"7d\" aria-pressed=\"true\">7 days</button><button data-range=\"weekly\" aria-pressed=\"false\">Weekly</button><button data-range=\"monthly\" aria-pressed=\"false\">Monthly</button><button data-range=\"all\" aria-pressed=\"false\">All time</button></nav></div><p id=\"summary\" role=\"status\"></p><canvas hidden id=\"chart\" role=\"img\" aria-label=\"Historical closing prices\"></canvas><p id=\"details\"></p></section><section class=\"card voice\"><div class=\"core\" aria-hidden=\"true\">JARVIS</div><h2>Voice console</h2><p id=\"voice-status\" role=\"status\">Read headlines aloud or dictate a stock-list command.</p><div class=\"controls\"><button id=\"mic\">Dictate command</button><button id=\"read-news\">Read headlines</button><button id=\"stop-voice\">Stop</button></div></section><section class=\"card\" id=\"news\"><h2>Company news <span id=\"news-ticker\"></span></h2><button id=\"refresh-news\">Refresh news</button><p id=\"news-status\" role=\"status\"></p><ul id=\"news-items\"></ul></section><section class=\"card\" id=\"stock-lists\"><h2>Stock lists</h2><form id=\"list-command\"><input name=\"command\" aria-label=\"Stock list command\" placeholder=\"watch AMD or interested in NVDA\" maxlength=\"45\" required><button>Add</button></form><p id=\"list-status\" role=\"status\"></p><div class=\"lists\"><div><h3>Watching</h3><ul id=\"watching\"></ul></div><div><h3>Interested</h3><ul id=\"interested\"></ul></div></div></section><section class=\"card\" id=\"sec\"><h2>SEC filings</h2><p id=\"filingStatus\" role=\"status\"></p><ul id=\"filings\"></ul></section></div></main></div><script src=\"/dashboard.js\" defer></script></html>";

const client = `
const form = document.querySelector("#lookup");
const chart = document.querySelector("#chart");
const summary = document.querySelector("#summary");
const details = document.querySelector("#details");
let range = "7d";
let points = [];
let pricesRequest;
let filingsRequest;
const usd = new Intl.NumberFormat("en-US", {style:"currency",currency:"USD"});
const date = new Intl.DateTimeFormat("en-US", {timeZone:"UTC", dateStyle:"medium"});
const set = (id, value) => {
  document.getElementById(id).textContent = value;
  if (id === "voice-status") document.querySelector(".voice").dataset.active = String(value.startsWith("Listening") || value.startsWith("Reading"));
};
async function api(path, signal) {
  const response = await fetch(path, {signal});
  const body = await response.json();
  if (!response.ok) throw new Error(body.error || "Request failed");
  return body;
}
function draw() {
  if (!points.length) return;
  const {width, height} = chart.getBoundingClientRect();
  const scale = window.devicePixelRatio || 1;
  chart.width = width * scale;
  chart.height = height * scale;
  const ctx = chart.getContext("2d");
  ctx.scale(scale,scale);
  const values = points.map(point => point.close);
  const low = Math.min(...values);
  const high = Math.max(...values);
  const start = points[0].time;
  const end = points.at(-1).time;
  const left = Math.min(86, width / 3);
  ctx.font = "12px system-ui";
  ctx.fillStyle = "#b3bdcb";
  ctx.strokeStyle = "#303947";
  for (let i = 0; i < 5; i++) {
    const y = 12 + (height - 32) * i / 4;
    ctx.fillText(usd.format(high - (high-low)*i/4), 0, y+4, left-6);
    ctx.beginPath();ctx.moveTo(left,y);ctx.lineTo(width-8,y);ctx.stroke();
  }
  ctx.strokeStyle = "#72d9c2";
  ctx.fillStyle = "#72d9c2";
  ctx.lineWidth = 2;
  ctx.beginPath();
  points.forEach((point, i) => {
    const x = end === start ? (left+width)/2 : left + (width-left-8)*(point.time-start)/(end-start);
    const y = high === low ? (height-8)/2 : 12 + (height-32)*(high-point.close)/(high-low);
    if (points.length === 1) { ctx.arc(x,y,4,0,Math.PI*2); ctx.fill(); }
    else if (i === 0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
  });
  ctx.stroke();
}
async function loadPrices() {
  pricesRequest?.abort();
  const controller = pricesRequest = new AbortController();
  const symbol = form.elements.ticker.value.trim().toUpperCase();
  set("symbol", symbol);
  summary.textContent = "Loading prices…";
  details.textContent = "";
  points = [];
  chart.hidden = true;
  try {
    const query = new URLSearchParams({symbol, range, source:form.elements.source.value});
    const data = await api("/api/prices?" + query, controller.signal);
    if (controller.signal.aborted) return;
    points = data.points;
    if (!points.length) { summary.textContent = "No price bars returned for this period."; details.textContent = data.source; return; }
    const first = points[0], last = points.at(-1);
    const change = first.close && points.length > 1 ? (last.close / first.close - 1) * 100 : null;
    summary.textContent = usd.format(last.close) + (change === null ? "" : " · " + (change >= 0 ? "+" : "") + change.toFixed(2) + "%");
    details.textContent = data.source + " · " + data.frequency + " closes · " + date.format(first.time) + " to " + date.format(last.time) + " · " + points.length + " bars";
    chart.hidden = false;
    draw();
  } catch (error) {
    if (!controller.signal.aborted) summary.textContent = error.message;
  }
}
async function loadFilings() {
  filingsRequest?.abort();
  const controller = filingsRequest = new AbortController();
  const list = document.getElementById("filings");
  list.replaceChildren();
  set("filingStatus", "Loading filings…");
  try {
    const data = await api("/api/filings?" + new URLSearchParams({symbol:form.elements.ticker.value.trim().toUpperCase()}),controller.signal);
    if (controller.signal.aborted) return;
    set("filingStatus", data.filings.length ? data.company + (data.snapshotAsOf ? " · SEC snapshot retrieved " + date.format(Date.parse(data.snapshotAsOf)) + " · live refresh unavailable" : " · SEC EDGAR") : "No filings found for this ticker.");
    for (const filing of data.filings) {
      const li = document.createElement("li"), link = document.createElement("a");
      link.href = filing.url;
      link.textContent = filing.form + " · " + filing.date;
      li.append(link); list.append(li);
    }
  } catch (error) {
    if (!controller.signal.aborted) set("filingStatus", error.message);
  }
}
document.querySelectorAll("[data-range]").forEach(button => button.addEventListener("click", () => {
  range = button.dataset.range;
  document.querySelectorAll("[data-range]").forEach(item => item.setAttribute("aria-pressed", String(item === button)));
  loadPrices();
}));
form.addEventListener("submit", event => { event.preventDefault(); loadPrices(); loadFilings(); });
form.elements.source.addEventListener("change", loadPrices);
window.addEventListener("resize", draw);

const listKey = "market-signal-lists-v1";
const categories = ["watching", "interested"];
const tickerPattern = /^[A-Z][A-Z0-9.-]{0,11}$/;
let lists = {watching:[], interested:[]};
try {
  const saved = JSON.parse(localStorage.getItem(listKey));
  if (saved) for (const category of categories) {
    if (Array.isArray(saved[category])) lists[category] = Array.from(new Set(saved[category].filter(symbol => typeof symbol === "string" && tickerPattern.test(symbol))));
  }
} catch { set("list-status","Saved lists are unavailable in this browser."); }
function updateLists(updated, message) {
  lists = updated;
  try { localStorage.setItem(listKey, JSON.stringify(lists)); }
  catch { message += " Changes are available for this session only."; }
  set("list-status", message);
  renderLists();
}
function renderLists() {
  for (const category of categories) {
    const list = document.getElementById(category);
    list.replaceChildren();
    if (!lists[category].length) {
      const empty = document.createElement("li");
      empty.textContent = "No tickers yet.";
      list.append(empty);
    }
    for (const symbol of lists[category]) {
      const row = document.createElement("li");
      const open = document.createElement("button");
      open.type = "button";
      open.textContent = symbol;
      open.addEventListener("click", () => {
        form.elements.ticker.value = symbol;
        form.requestSubmit();
      });
      const remove = document.createElement("button");
      remove.type = "button";
      remove.textContent = "Remove";
      remove.setAttribute("aria-label","Remove " + symbol + " from " + category);
      remove.addEventListener("click", () => updateLists({...lists,[category]:lists[category].filter(item => item !== symbol)},symbol + " removed."));
      row.append(open," ",remove);
      list.append(row);
    }
  }
}
document.getElementById("list-command").addEventListener("submit", event => {
  event.preventDefault();
  const input = event.currentTarget.elements.command;
  const match = /^(watch|watching|interested(?: in)?) +\\$?([a-z][a-z0-9.-]{0,11})$/i.exec(input.value.trim());
  if (!match) { set("list-status","Try watch AMD or interested in NVDA."); return; }
  const category = match[1].toLowerCase().startsWith("watch") ? "watching" : "interested";
  const symbol = match[2].toUpperCase();
  if (lists[category].includes(symbol)) { set("list-status",symbol + " is already in " + category + "."); return; }
  updateLists({...lists,[category]:[...lists[category],symbol]},symbol + " added to " + category + ".");
  input.value = "";
});
renderLists();

let headlines = [];
let newsRequest;
let newsSymbol;
const timeET = new Intl.DateTimeFormat("en-US",{timeZone:"America/New_York",dateStyle:"medium",timeStyle:"short"});
async function loadNews() {
  newsRequest?.abort();
  const controller = newsRequest = new AbortController();
  const symbol = form.elements.ticker.value.trim().toUpperCase();
  newsSymbol = symbol;
  headlines = [];
  const items = document.getElementById("news-items");
  items.replaceChildren();
  set("news-ticker",symbol);
  set("news-status","Loading headlines…");
  try {
    const data = await api("/api/news?" + new URLSearchParams({symbol}),controller.signal);
    if (controller.signal.aborted) return;
    headlines = data.articles;
    set("news-status",headlines.length ? "Alpaca News · checked " + timeET.format(Date.now()) + " ET · feed may be delayed" : "No recent headlines returned.");
    for (const article of headlines) {
      const row = document.createElement("li");
      const link = document.createElement("a");
      link.href = article.url;
      link.rel = "noreferrer";
      link.textContent = article.headline;
      row.append(link," · " + article.publisher + " · " + timeET.format(Date.parse(article.published)) + " ET");
      items.append(row);
    }
  } catch (error) {
    if (!controller.signal.aborted) set("news-status",error.message);
  }
}
document.getElementById("refresh-news").addEventListener("click",loadNews);
form.addEventListener("submit",loadNews);
document.getElementById("read-news").addEventListener("click",() => {
  if (!headlines.length) { set("voice-status","Load headlines before reading them aloud."); return; }
  const synth = window.speechSynthesis;
  const voice = synth?.getVoices().find(item => item.localService && item.lang.toLowerCase().startsWith("en"));
  if (!voice) { set("voice-status","No local English voice is available in this browser."); return; }
  synth.cancel();
  const speech = new SpeechSynthesisUtterance("Recent headlines for " + newsSymbol + ". " + headlines.slice(0,3).map(item => item.publisher + ". " + item.headline).join(". "));
  speech.voice = voice;
  speech.onend = () => set("voice-status","Finished reading headlines.");
  speech.onerror = () => set("voice-status","The local voice stopped or was unavailable.");
  set("voice-status","Reading headlines aloud.");
  synth.speak(speech);
});
document.getElementById("stop-voice").addEventListener("click",() => { window.speechSynthesis?.cancel(); stopDictation?.(); });
const dictateButton = document.getElementById("mic");
let stopDictation;
let voiceModel;
async function downloadVoiceArchive() {
  const controller = new AbortController();
  let idle;
  const resetIdle = () => {
    clearTimeout(idle);
    idle = setTimeout(() => controller.abort(),25000);
  };
  try {
    resetIdle();
    const response = await fetch("/voice/english.tar.gz",{signal:controller.signal});
    if (!response.ok || !response.body) throw new Error("English model download returned HTTP " + response.status + ".");
    const reader = response.body.getReader();
    const chunks = [];
    let bytes = 0, reported = -1;
    for (;;) {
      const packet = await reader.read();
      if (packet.done) break;
      resetIdle();
      bytes += packet.value.byteLength;
      if (bytes > 50000000) throw new Error("English model download was larger than expected.");
      chunks.push(packet.value);
      const mb = Math.floor(bytes / 1000000);
      if (mb !== reported) {
        reported = mb;
        if (stopDictation) set("voice-status","Downloading English voice model · " + mb + " of 41 MB");
      }
    }
    if (bytes !== 41206679) throw new Error("English model download was incomplete.");
    return new Blob(chunks,{type:"application/gzip"});
  } catch (error) {
    if (error.name === "AbortError") throw new Error("The model download stalled for 25 seconds. Click Dictate command to retry.");
    throw error;
  } finally { clearTimeout(idle); controller.abort(); }
}
function loadVoiceModel() {
  if (!voiceModel) {
    voiceModel = (async () => {
      if (!window.Vosk) await new Promise((resolve,reject) => {
        const script = document.createElement("script");
        const timer = setTimeout(() => { script.remove(); reject(new Error("Speech engine script timed out.")); },20000);
        script.src = "/voice/vosk.js?v=2";
        script.onload = () => { clearTimeout(timer); resolve(); };
        script.onerror = () => { clearTimeout(timer); script.remove(); reject(new Error("Speech engine could not load.")); };
        document.head.append(script);
      });
      const archive = await downloadVoiceArchive();
      const modelUrl = URL.createObjectURL(archive);
      try {
        if (stopDictation) set("voice-status","Download complete. Initializing English speech on this device…");
        return await new Promise((resolve,reject) => {
          const model = new window.Vosk.Model(modelUrl,-1);
          const fail = message => { clearTimeout(timer); model.worker.terminate(); reject(new Error(message)); };
          const timer = setTimeout(() => fail("The speech engine did not finish initializing. Click Dictate command to retry."),60000);
          model.worker.addEventListener("error",() => fail("The browser blocked or failed to start the speech worker."),{once:true});
          model.on("error",event => fail("The speech engine failed to initialize: " + (event.error || "model error") + "."));
          model.on("load",event => {
            if (!event.result) { fail("The speech engine could not unpack the English model."); return; }
            clearTimeout(timer);
            resolve(model);
          });
        });
      } finally { URL.revokeObjectURL(modelUrl); }
    })().catch(error => { voiceModel = null; throw error; });
  }
  return voiceModel;
}
dictateButton.addEventListener("click", async () => {
  if (!navigator.mediaDevices?.getUserMedia || !window.AudioContext) {
    set("voice-status","This browser does not expose microphone capture to this page.");
    return;
  }
  if (dictateButton.disabled) return;
  dictateButton.disabled = true;
  const input = document.querySelector("#list-command").elements.command;
  let stream, context, source, processor, recognizer, timer;
  let ended = false;
  let finalText = "";
  let partial = "";
  function cleanup(message) {
    if (ended) return;
    ended = true;
    clearTimeout(timer);
    processor?.disconnect();
    source?.disconnect();
    stream?.getTracks().forEach(track => track.stop());
    recognizer?.remove();
    context?.close().catch(() => {});
    stopDictation = null;
    dictateButton.disabled = false;
    set("voice-status",message);
  }
  function stop() {
    const transcript = [finalText,partial].filter(Boolean).join(" ").trim();
    if (!transcript) { cleanup("No command was recognized. Try again and speak after Listening appears."); return; }
    input.value = transcript;
    input.focus();
    cleanup("Heard: " + transcript + " · Review it, then press Add.");
  }
  stopDictation = () => {
    if (recognizer) stop();
    else cleanup("Dictation canceled.");
  };
  try {
    set("voice-status","Waiting for microphone access…");
    context = new AudioContext();
    const resume = context.resume();
    const mic = navigator.mediaDevices.getUserMedia({audio:{channelCount:1,echoCancellation:true}});
    const microphone = mic.then(value => {
      if (ended) { value.getTracks().forEach(track => track.stop()); return; }
      stream = value;
    });
    await Promise.all([resume,microphone]);
    if (ended) return;
    set("voice-status","Loading the on-device English model. The first download is about 41 MB.");
    const model = await loadVoiceModel();
    clearTimeout(deadline);
    if (ended) return;
    recognizer = new model.KaldiRecognizer(context.sampleRate);
    recognizer.on("partialresult",event => {
      if (ended || !event.result.partial) return;
      partial = event.result.partial;
      set("voice-status","Listening · Heard: " + partial);
    });
    recognizer.on("result",event => {
      if (ended || !event.result.text) return;
      finalText = [finalText,event.result.text].filter(Boolean).join(" ");
      partial = "";
      stop();
    });
    source = context.createMediaStreamSource(stream);
    processor = context.createScriptProcessor(4096,1,1);
    processor.onaudioprocess = event => {
      if (ended) return;
      try { recognizer.acceptWaveform(event.inputBuffer); }
      catch { cleanup("The on-device engine could not process microphone audio."); }
    };
    source.connect(processor);
    processor.connect(context.destination);
    timer = setTimeout(stop,15000);
    set("voice-status","Listening on this device. Say a command.");
  } catch (error) {
    cleanup(error.name === "NotAllowedError" ? "This browser denied microphone access to the dashboard." :
      error.name === "NotFoundError" ? "The dashboard could not find a microphone." :
      error.message || "On-device dictation failed to initialize.");
  }
});
loadNews();

const appointButton = document.getElementById("appoint-agent");
async function loadAssignment() {
  try {
    const data = await api("/api/agent-assignment");
    set("agent-status",data.agent ? "Appointed to this workspace" : "No agent appointed.");
    appointButton.textContent = data.agent ? "JARVIS appointed" : "Appoint JARVIS";
    appointButton.disabled = Boolean(data.agent);
  } catch (error) { set("agent-status",error.message); }
}
appointButton.addEventListener("click",async () => {
  appointButton.disabled = true;
  try {
    const response = await fetch("/api/agent-assignment",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({agent:"jarvis"})});
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Assignment failed.");
    await loadAssignment();
  } catch (error) { set("agent-status",error.message); appointButton.disabled = false; }
});
loadAssignment();

loadPrices(); loadFilings();
`;

const DAY = 86400000;
const ranges = {
  "7d": { days: 7, frequency: "Daily", alpaca: "1Day", massive: "day", yahoo: "1d" },
  weekly: { days: 182, frequency: "Weekly", alpaca: "1Week", massive: "week", yahoo: "1wk" },
  monthly: { days: 730, frequency: "Monthly", alpaca: "1Month", massive: "month", yahoo: "1mo" },
  all: { days: null, frequency: "Monthly", alpaca: "1Month", massive: "month", yahoo: "1mo" },
};
class RequestError extends Error {
  constructor(status, message) { super(message); this.status = status; }
}
async function upstream(url, source, init = {}) {
  let response;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(),8000);
  try {
    response = await fetch(String(url), {...init, redirect: "manual", signal: controller.signal});
  } catch {
    throw new RequestError(502, source + " could not be reached.");
  } finally { clearTimeout(timer); }
  if (!response.ok) {
    const message = response.status === 429 ? " rate limit reached." : " returned HTTP " + response.status + ".";
    throw new RequestError(response.status === 429 ? 429 : 502, source + message);
  }
  try { return await response.json(); }
  catch { throw new RequestError(502, source + " returned an invalid response."); }
}
function alpacaHeaders(env) {
  if (!env.ALPACA_DATA_KEY_ID || !env.ALPACA_DATA_SECRET) throw new RequestError(503,"Alpaca market data keys are not configured.");
  return {"APCA-API-KEY-ID":env.ALPACA_DATA_KEY_ID,"APCA-API-SECRET-KEY":env.ALPACA_DATA_SECRET};
}
function normalize(rows) {
  const points = rows.filter(p => Number.isFinite(p.time) && typeof p.close === "number" && Number.isFinite(p.close) && p.close > 0);
  return [...new Map(points.map(p => [p.time,p])).values()].sort((a,b) => a.time-b.time);
}
async function priceData(symbol, source, range, env) {
  const today = new Date().toISOString().slice(0,10);
  const start = range.days ? new Date(Date.now()-range.days*DAY).toISOString().slice(0,10) : null;
  let label, rows;
  if (source === "alpaca") {
    label = "Alpaca IEX · Split-adjusted · History available since 2016";
    const url = new URL("https://data.alpaca.markets/v2/stocks/" + encodeURIComponent(symbol) + "/bars");
    url.search = new URLSearchParams({feed:"iex", adjustment:"split", timeframe:range.alpaca, start:start || "2016-01-01", limit:"10000"});
    rows = [];
    const headers = alpacaHeaders(env);
    for (let page = 0; page < 10; page++) {
      const result = await upstream(url, "Alpaca IEX", {headers});
      rows.push(...(result.bars || []).map(bar => ({time:Date.parse(bar.t),close:bar.c})));
      if (!result.next_page_token) break;
      if (page === 9) throw new RequestError(502, "Alpaca history exceeded the page limit.");
      url.searchParams.set("page_token", result.next_page_token);
    }
  } else if (source === "massive") {
    if (!env.MASSIVE_API_KEY) throw new RequestError(503,"Massive credentials are not configured.");
    label = "Massive · End of day · Split-adjusted · Up to two years on Basic";
    const url = new URL("https://api.massive.com/v2/aggs/ticker/" + encodeURIComponent(symbol) + "/range/1/" + range.massive + "/" + ((!range.days || range.days >= 730) ? new Date(Date.now()-729*DAY).toISOString().slice(0,10) : start) + "/" + today);
    url.search = new URLSearchParams({adjusted:"true",sort:"asc",limit:"50000"});
    const result = await upstream(url,"Massive",{headers:{Authorization:"Bearer " + env.MASSIVE_API_KEY}});
    if (result.next_url) throw new RequestError(502,"Massive returned additional pages. Select a shorter window.");
    rows = (result.results || []).map(bar => ({time:bar.t,close:bar.c}));
  } else if (source === "yahoo") {
    label = "Yahoo Finance · Historical · Unofficial endpoint";
    const url = new URL("https://query1.finance.yahoo.com/v8/finance/chart/" + encodeURIComponent(symbol));
    url.search = new URLSearchParams(start ? {interval:range.yahoo,period1:String(Math.floor(Date.parse(start)/1000)),period2:String(Math.floor(Date.now()/1000))} : {interval:range.yahoo,range:"max"});
    const data = await upstream(url,"Yahoo Finance");
    const result = data.chart?.result?.[0];
    if (!result) throw new RequestError(502,"Yahoo Finance did not return chart data.");
    if (result.meta?.currency && result.meta.currency !== "USD") throw new RequestError(422,"The dashboard currently supports USD prices.");
    rows = (result.timestamp || []).map((timestamp,i) => ({time:timestamp*1000,close:result.indicators?.quote?.[0]?.close?.[i]}));
  } else {
    throw new RequestError(400,"Select a supported data source.");
  }
  return {symbol, source:label, frequency:range.frequency, points:normalize(rows)};
}
async function companyNews(symbol, env) {
  const url = new URL("https://data.alpaca.markets/v1beta1/news");
  const start = new Date(Date.now() - 7 * DAY).toISOString();
  url.search = new URLSearchParams({symbols:symbol,start,sort:"desc",limit:"12",include_content:"false"});
  const result = await upstream(url,"Alpaca News",{headers:alpacaHeaders(env)});
  return {articles:(result.news || []).flatMap(item => {
    if (typeof item.headline !== "string" || typeof item.source !== "string" || !Number.isFinite(Date.parse(item.created_at))) return [];
    let link;
    try { link = new URL(item.url); } catch { return []; }
    if (link.protocol !== "https:" || link.username || link.password) return [];
    return [{headline:item.headline,publisher:item.source,published:item.created_at,url:link.href}];
  }).sort((a,b) => Date.parse(b.published)-Date.parse(a.published))};
}

const secSnapshot = {"asOf":"2026-11-21T03:59:49.254Z","records":{"SPY":{"cik":884394,"company":"SPDR S&P 500 ETF TRUST","filings":[["NPORT-P","2026-08-28","000141036826089410","xslFormNPORT-P_X01/primary_doc.xml"],["N-30D","2026-05-29","000119312526247066","d75559dn30d.htm"],["NPORT-P","2026-05-28","000141036826055357","xslFormNPORT-P_X01/primary_doc.xml"],["N-CEN","2026-03-13","000141036826023904","xslFormN-CEN_X01/primary_doc.xml"],["NPORT-P","2026-02-26","000141036826020131","xslFormNPORT-P_X01/primary_doc.xml"],["497","2026-01-27","000119312526023648","d935960d497.htm"],["497","2026-01-26","000119312526022775","d77353d497.htm"],["485BPOS","2026-01-26","000119312526022316","d77353d485bpos.htm"]]},"AMD":{"cik":2488,"company":"ADVANCED MICRO DEVICES INC","filings":[["8-K","2026-11-20","000000248826000218","amd-20261118.htm"],["4","2026-11-19","000000248826000215","xslF345X06/wk-form4_1795122423.xml"],["4","2026-11-18","000000248826000213","xslF345X06/wk-form4_1795036763.xml"],["4","2026-11-17","000000248826000211","xslF345X06/wk-form4_1794950949.xml"],["4","2026-11-17","000000248826000209","xslF345X06/wk-form4_1794950650.xml"],["4","2026-11-17","000000248826000207","xslF345X06/wk-form4_1794950524.xml"],["4","2026-11-17","000000248826000205","xslF345X06/wk-form4_1794950405.xml"],["4","2026-11-17","000000248826000203","xslF345X06/wk-form4_1794950257.xml"]]},"NVDA":{"cik":1045810,"company":"NVIDIA CORP","filings":[["144","2026-11-19","000192109426001223","xsl144X01/primary_doc.xml"],["8-K","2026-11-17","000104581026000088","nvda-20261117.htm"],["13F-HR","2026-11-16","000104581026000084","xslForm13F_X02/primary_doc.xml"],["8-K","2026-11-12","000104581026000082","nvda-20261111.htm"],["4","2026-11-06","000119764726000013","xslF345X06/wk-form4_1793999520.xml"],["4/A","2026-10-13","000215218826000007","xslF345X06/wk-form4a_1791925767.xml"],["4","2026-10-09","000119764726000011","xslF345X06/wk-form4_1791579847.xml"],["4","2026-09-23","000169684126000014","xslF345X06/wk-form4_1790196985.xml"]]},"GOOGL":{"cik":1652044,"company":"Alphabet Inc.","filings":[["8-A12B","2026-11-20","000119312526470391","d142213d8a12b.htm"],["FWP","2026-11-20","000119312526469213","d21316dfwp.htm"],["424B5","2026-11-19","000119312526467927","d115240d424b5.htm"],["4","2026-11-16","000119312526464050","xslF345X06/ownership.xml"],["4","2026-11-16","000119312526463983","xslF345X06/ownership.xml"],["144","2026-11-12","000196858226001139","xsl144X01/primary_doc.xml"],["144","2026-11-12","000196858226001138","xsl144X01/primary_doc.xml"],["144","2026-11-12","000196858226001137","xsl144X01/primary_doc.xml"]]},"VOO":{"cik":36405,"company":"VANGUARD INDEX FUNDS","filings":[["40-17G","2026-10-09","000110465926115035","tm2624560d1_4017g.pdf"],["497","2026-09-16","000119312526392561","f46182d1.htm"],["NPORT-P","2026-08-28","000003640526000483","xslFormNPORT-P_X01/primary_doc.xml"],["NPORT-P","2026-08-28","000003640526000482","xslFormNPORT-P_X01/primary_doc.xml"],["NPORT-P","2026-08-28","000003640526000481","xslFormNPORT-P_X01/primary_doc.xml"],["NPORT-P","2026-08-28","000003640526000480","xslFormNPORT-P_X01/primary_doc.xml"],["NPORT-P","2026-08-28","000003640526000479","xslFormNPORT-P_X01/primary_doc.xml"],["NPORT-P","2026-08-28","000003640526000478","xslFormNPORT-P_X01/primary_doc.xml"]]},"AAPL":{"cik":320193,"company":"Apple Inc.","filings":[["4","2026-11-19","000114036126044952","xslF345X06/form4.xml"],["4","2026-11-18","000114036126044773","xslF345X06/form4.xml"],["144","2026-11-16","000192109426001188","xsl144X01/primary_doc.xml"],["4","2026-11-12","000114036126043484","xslF345X06/form4.xml"],["25-NSE","2026-11-09","000135445726001062","xslF25X02/primary_doc.xml"],["8-K","2026-11-09","000114036126042798","ef20085077_8k.htm"],["424B2","2026-11-06","000114036126042505","ny20084621x2_424b2.htm"],["FWP","2026-11-06","000114036126042173","ny20084621x3_fwp.htm"]]}}};
let secDirectory;
function secDocumentUrl(cik, accession, document) {
  return "https://www.sec.gov/Archives/edgar/data/" + cik + "/" + accession + "/" + document.split("/").map(encodeURIComponent).join("/");
}
async function filings(symbol, env) {
  const snapshot = Object.hasOwn(secSnapshot.records,symbol) ? secSnapshot.records[symbol] : null;
  try {
    return await liveFilings(symbol,env,snapshot);
  } catch (error) {
    if (!snapshot) throw error;
    return {company:snapshot.company, snapshotAsOf:secSnapshot.asOf, filings:snapshot.filings.map(([form,date,accession,document]) => ({
      form,date,url:secDocumentUrl(snapshot.cik,accession,document),
    }))};
  }
}
async function liveFilings(symbol, env, snapshot) {
  if (!env.SEC_USER_AGENT) throw new RequestError(503,"SEC EDGAR contact information is not configured.");
  const options = {headers:{"User-Agent":env.SEC_USER_AGENT,Accept:"application/json"}};
  let company = snapshot ? {cik_str:snapshot.cik,title:snapshot.company} : null;
  if (!company) {
  if (!secDirectory || secDirectory.expires <= Date.now()) {
    const next = upstream("https://www.sec.gov/files/company_tickers.json","SEC ticker directory",options);
    secDirectory = {expires:Date.now()+DAY,next};
    next.catch(() => { if (secDirectory?.next === next) secDirectory = null; });
  }
  const directory = await secDirectory.next;
  company = Object.values(directory).find(entry => entry.ticker === symbol || entry.ticker.replaceAll("-",".") === symbol);
  }
  if (!company) return {company:symbol,filings:[]};
  const data = await upstream("https://data.sec.gov/submissions/CIK" + String(company.cik_str).padStart(10,"0") + ".json","SEC filings",options);
  const recent = data.filings?.recent;
  return {company:data.name || company.title,filings:(recent?.accessionNumber || []).slice(0,10).map((id,i) => ({
    form:recent.form[i],date:recent.filingDate[i],
    url:secDocumentUrl(company.cik_str,id.replaceAll("-",""),recent.primaryDocument[i]),
  }))};
}
function send(body, status = 200, type = "application/json; charset=utf-8") {
  return new Response(type.startsWith("application/json") ? JSON.stringify(body) : body,{status,headers:{
    "Content-Type":type,"Cache-Control":"no-store","X-Content-Type-Options":"nosniff",
    "Permissions-Policy":"microphone=(self), on-device-speech-recognition=(self)",
    "Content-Security-Policy":"default-src 'self'; style-src 'unsafe-inline'; script-src 'self'; worker-src 'self'; connect-src 'self'; frame-ancestors 'none'; base-uri 'none'",
  }});
}
let accessKeys;
function decodeBase64(value) {
  const base64 = value.replaceAll("-","+").replaceAll("_","/");
  return Uint8Array.from(atob(base64), character => character.charCodeAt(0));
}
async function authorized(request, env) {
  const host = new URL(request.url).hostname;
  if (env.LOCAL_PREVIEW === "1" && ["localhost","127.0.0.1"].includes(host)) return true;
  if (!/^[a-z0-9-]+\.cloudflareaccess\.com$/i.test(env.ACCESS_TEAM_DOMAIN || "") || !env.ACCESS_AUD || !env.OWNER_EMAIL) return false;
  const token = request.headers.get("Cf-Access-Jwt-Assertion");
  if (!token || token.length > 12000) return false;
  try {
    const parts = token.split(".");
    if (parts.length !== 3) return false;
    const decoder = new TextDecoder();
    const header = JSON.parse(decoder.decode(decodeBase64(parts[0])));
    const claims = JSON.parse(decoder.decode(decodeBase64(parts[1])));
    const issuer = "https://" + env.ACCESS_TEAM_DOMAIN;
    const now = Date.now() / 1000;
    if (header.alg !== "RS256" || claims.iss !== issuer || !Array.isArray(claims.aud) ||
        !claims.aud.includes(env.ACCESS_AUD) || typeof claims.exp !== "number" || claims.exp <= now ||
        (claims.nbf !== undefined && (typeof claims.nbf !== "number" || claims.nbf > now)) ||
        claims.email?.toLowerCase() !== env.OWNER_EMAIL.toLowerCase()) return false;
    if (accessKeys?.issuer !== issuer || Date.now() >= accessKeys.expires) {
      const result = await upstream(issuer+"/cdn-cgi/access/certs","Cloudflare Access");
      accessKeys = {issuer, expires:Date.now()+300000, keys:result.keys};
    }
    const jwk = accessKeys.keys.find(key => key.kid === header.kid);
    if (!jwk) { accessKeys = null; return false; }
    const algorithm = {name:"RSASSA-PKCS1-v1_5", hash:"SHA-256"};
    const key = await crypto.subtle.importKey("jwk",jwk,algorithm,false,["verify"]);
    return await crypto.subtle.verify(algorithm,key,decodeBase64(parts[2]),new TextEncoder().encode(parts[0]+"."+parts[1]));
  } catch {
    return false;
  }
}

async function passwordAuthorized(request, env) {
  if (!env.OWNER_EMAIL || !env.OWNER_PASSWORD || env.OWNER_PASSWORD.length < 24 ||
      new URL(request.url).protocol !== "https:") return false;
  const header = request.headers.get("Authorization");
  if (!header?.startsWith("Basic ") || header.length > 4096) return false;
  try {
    const supplied = decodeBase64(header.slice(6));
    const expected = new TextEncoder().encode(env.OWNER_EMAIL + ":" + env.OWNER_PASSWORD);
    const [left, right] = await Promise.all([supplied,expected].map(async value =>
      new Uint8Array(await crypto.subtle.digest("SHA-256",value))));
    let difference = 0;
    for (let i = 0; i < left.length; i++) difference |= left[i] ^ right[i];
    return difference === 0;
  } catch {
    return false;
  }
}
function authenticationRequired(env) {
  const enabled = Boolean(env.OWNER_EMAIL && env.OWNER_PASSWORD?.length >= 24);
  const response = send(
    '<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Market Signal Dashboard Sign-in</title><main><h1>Market Signal Dashboard</h1><p>' +
      (enabled ? "Sign in with the owner email and dashboard password." :
        "Owner sign-in setup is pending. In Cloudflare Workers &amp; Pages, open market-signal-dashboard, then Settings, then Variables and Secrets. Add an encrypted OWNER_PASSWORD secret with a unique password of at least 24 characters.") +
      '</p></main></html>',
    enabled ? 401 : 503, "text/html; charset=utf-8");
  if (enabled) response.headers.set("WWW-Authenticate",'Basic realm="Market Signal Dashboard", charset="UTF-8"');
  return response;
}

const voiceAssets = {
  "/voice/engine-worker.js": [null,"text/javascript; charset=utf-8"],
  "/voice/vosk.js": ["https://cdn.jsdelivr.net/npm/vosk-browser@0.0.8/dist/vosk.js","text/javascript; charset=utf-8"],
  "/voice/english.tar.gz": ["https://fiddle-app.github.io/voice-models/vosk-model-small-en-us-0.15.tar.gz","application/gzip"],
};
async function serveVoiceAsset(path) {
  const [url,type] = voiceAssets[path];
  if (path === "/voice/engine-worker.js") return new Response(voskEngine,{headers:{
    "Content-Type":type,"Cache-Control":"private, max-age=86400","X-Content-Type-Options":"nosniff",
    "Content-Security-Policy":"default-src 'none'; script-src 'self' 'unsafe-eval'; connect-src 'self' blob:",
  }});
  if (path === "/voice/vosk.js") return new Response(voskLocal,{headers:{"Content-Type":type,"Cache-Control":"private, max-age=86400","X-Content-Type-Options":"nosniff"}});
  try {
    const upstream = await fetch(url,{redirect:"manual"});
    if (!upstream.ok) return send({error:"The speech model download is unavailable."},502);
    return new Response(upstream.body,{headers:{"Content-Type":type,"Cache-Control":"private, max-age=86400","X-Content-Type-Options":"nosniff"}});
  } catch {
    return send({error:"The speech model host could not be reached."},502);
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (!(await passwordAuthorized(request,env)) && !(await authorized(request,env))) {
      if (url.pathname === "/" && request.method === "GET") return authenticationRequired(env);
      return send({error:"Owner authentication required."},403);
    }

    if (url.pathname === "/api/agent-assignment") {
      if (!env.WORKSPACE_ASSIGNMENTS) return send({error:"Workspace assignment storage is not configured."},503);
      try {
        if (request.method === "GET") return send({agent:await env.WORKSPACE_ASSIGNMENTS.get("owner-agent")});
        if (request.method !== "PUT") return send({error:"Method not allowed."},405);
        if (request.headers.get("Origin") !== url.origin) return send({error:"Same-origin request required."},403);
        let body;
        try { body = await request.json(); } catch { return send({error:"Invalid assignment."},400); }
        if (body?.agent !== "jarvis") return send({error:"Unknown workspace agent."},400);
        if (await env.WORKSPACE_ASSIGNMENTS.get("owner-agent") !== "jarvis") await env.WORKSPACE_ASSIGNMENTS.put("owner-agent","jarvis");
        return send({agent:"jarvis"});
      } catch { return send({error:"Could not read or save the workspace assignment."},502); }
    }
    if (request.method !== "GET") return send({error:"Method not allowed."},405);
    if (url.pathname === "/") return send(page,200,"text/html; charset=utf-8");
    if (url.pathname === "/dashboard.js") return send(client,200,"text/javascript; charset=utf-8");
    if (Object.hasOwn(voiceAssets,url.pathname)) return serveVoiceAsset(url.pathname);
    try {
      if (!["/api/filings","/api/prices","/api/news"].includes(url.pathname)) return send({error:"Not found."},404);
      const symbol = (url.searchParams.get("symbol") || "").trim().toUpperCase();
      if (!/^[A-Z][A-Z0-9.-]{0,11}$/.test(symbol)) throw new RequestError(400,"Enter a valid U.S. ticker.");
      if (url.pathname === "/api/filings") return send(await filings(symbol,env));
      if (url.pathname === "/api/news") return send(await companyNews(symbol,env));
      const range = ranges[url.searchParams.get("range")];
      if (!Object.values(ranges).includes(range)) throw new RequestError(400,"Select a supported period.");
      return send(await priceData(symbol,url.searchParams.get("source"),range,env));
    } catch (error) {
      return error instanceof RequestError ? send({error:error.message},error.status) : send({error:"The dashboard could not process this response."},502);
    }
  },
};
