const page = '<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Market Dashboard</title><style>*{box-sizing:border-box}body{margin:0;background:#101318;color:#e9edf4;font:16px system-ui}main{max-width:1000px;margin:auto;padding:32px 20px}h1{font-size:32px}h2{font-size:19px}p,small{color:#b3bdcb}section{background:#171c24;border:1px solid #303947;border-radius:12px;padding:20px;margin:14px 0}nav,form{display:flex;flex-wrap:wrap;gap:8px;margin:14px 0}button,input,select{font:inherit;color:inherit;background:#222a35;border:1px solid #495568;border-radius:7px;padding:8px 12px}button{cursor:pointer}button[aria-pressed=true]{background:#164a42;border-color:#58c9b1}canvas{width:100%;height:250px}a{color:#84dbc7}li{margin:8px 0}#summary{font-size:22px;color:#e9edf4}#filings{padding-left:20px}.workspace{display:grid;grid-template-columns:275px minmax(0,1fr);gap:24px;max-width:1300px;margin:auto;padding:0 20px}.workspace main{margin:0;padding-inline:0;min-width:0}.agent-sidebar{padding-top:32px}.agent-sidebar ul{padding-left:20px;line-height:1.4}@media(max-width:720px){.workspace{grid-template-columns:1fr;gap:0}.agent-sidebar{padding-top:8px}.workspace main{padding-top:0}}</style><div class="workspace"><aside class="agent-sidebar" aria-labelledby="agent-title"><section><h2 id="agent-title">Workspace agent</h2><h3>JARVIS</h3><p id="agent-status" role="status">Checking assignment…</p><button id="appoint-agent" disabled>Appoint JARVIS</button><h3>Tools and skills</h3><ul><li>Stock charts and SEC filings · Dashboard</li><li>Watching and Interested · Dashboard</li><li>Company headlines · Alpaca connection required</li><li>Paper portfolio · Alpaca Paper connection required</li><li>Voice and dictation · On-device browser support</li><li>Premarket research and public transcript review · Scheduled in ChatGPT</li><li>Agent Reach · Pending connection</li><li>Interactive Codex conversation · Pending connection</li></ul></section></aside><main><h1>Market Dashboard</h1><form id="lookup"><input name="ticker" aria-label="Stock ticker" value="SPY" maxlength="12" required><select name="source" aria-label="Price data source"><option value="alpaca">Alpaca Basic · IEX</option><option value="massive">Massive · End of day</option><option value="yahoo">Yahoo Finance · Historical</option></select><button>Load ticker</button></form><section aria-labelledby="lists-title"><h2 id="lists-title">My stock lists</h2><form id="list-command"><input name="command" aria-label="Stock list command" placeholder="watch AMD or interested in NVDA" maxlength="45" required><button>Add to list</button></form><p id="list-status" role="status"></p><h3>Watching</h3><ul id="watching"></ul><h3>Interested</h3><ul id="interested"></ul></section><section><h2 id="symbol">SPY</h2><nav aria-label="Chart period"><button data-range="7d" aria-pressed="true">7 days</button><button data-range="weekly" aria-pressed="false">Weekly</button><button data-range="monthly" aria-pressed="false">Monthly</button><button data-range="all" aria-pressed="false">All time</button></nav><p id="summary" role="status"></p><canvas hidden id="chart" role="img" aria-label="Historical closing prices"></canvas><p id="details"></p></section><section><h2>SEC filings</h2><p id="filingStatus" role="status"></p><ul id="filings"></ul></section><section><h2>Alpaca Paper</h2><p id="paper" role="status"></p></section><section aria-labelledby="jarvis-title"><h2 id="jarvis-title">JARVIS</h2><p id="voice-status" role="status">Read the selected ticker’s headlines aloud or dictate a stock-list command.</p><nav aria-label="Voice controls"><button id="read-news">Read headlines</button><button id="stop-voice">Stop voice</button><button id="mic">Dictate command</button></nav><h3>Company news <span id="news-ticker"></span></h3><button id="refresh-news">Refresh news</button><p id="news-status" role="status"></p><ul id="news-items"></ul></section></main></div><script src="/dashboard.js" defer></script></html>';

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
const set = (id, value) => document.getElementById(id).textContent = value;
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
    set("filingStatus", data.filings.length ? data.company : "No filings found.");
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
async function loadPaper() {
  try {
    const data = await api("/api/paper");
    set("paper", "Simulated equity " + usd.format(data.equity) + " · Cash " + usd.format(data.cash) + " · " + data.positions.length + " positions" + (data.positions.length ? " · " + data.positions.map(p => p.symbol + " " + p.quantity).join(", ") : ""));
  } catch (error) { set("paper", error.message); }
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
document.getElementById("stop-voice").addEventListener("click",() => window.speechSynthesis?.cancel());
let recognition;
document.getElementById("mic").addEventListener("click",async () => {
  if (recognition) return;
  const Speech = window.SpeechRecognition;
  if (!Speech?.available || !("processLocally" in Speech.prototype)) {
    set("voice-status","On-device dictation is unavailable. You can type your command.");
    return;
  }
  try {
    if (await Speech.available({langs:["en-US"],processLocally:true}) !== "available") {
      set("voice-status","On-device English dictation requires a browser language pack. You can type your command.");
      return;
    }
    if (recognition) return;
    recognition = new Speech();
    recognition.lang = "en-US";
    recognition.processLocally = true;
    recognition.onresult = event => {
      document.querySelector("#list-command").elements.command.value = event.results[0][0].transcript.trim().replace(/[.!?]+$/,"");
      set("voice-status","Review the dictated command and press Add to list.");
    };
    recognition.onerror = () => set("voice-status","On-device dictation failed. Check microphone access or type the command.");
    recognition.onend = () => { recognition = null; };
    recognition.start();
    set("voice-status","Listening on this device…");
  } catch {
    recognition = null;
    set("voice-status","On-device dictation could not start.");
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

loadPrices(); loadFilings(); loadPaper();
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
  try {
    response = await fetch(url, {...init, redirect: "error", signal: AbortSignal.timeout(8000)});
  } catch {
    throw new RequestError(502, source + " could not be reached.");
  }
  if (!response.ok) {
    const message = response.status === 429 ? " rate limit reached." : " returned HTTP " + response.status + ".";
    throw new RequestError(response.status === 429 ? 429 : 502, source + message);
  }
  try { return await response.json(); }
  catch { throw new RequestError(502, source + " returned an invalid response."); }
}
function alpacaHeaders(env, paper = false) {
  const key = paper ? env.ALPACA_PAPER_KEY_ID : env.ALPACA_DATA_KEY_ID;
  const secret = paper ? env.ALPACA_PAPER_SECRET : env.ALPACA_DATA_SECRET;
  if (!key || !secret) throw new RequestError(503, (paper ? "Alpaca Paper" : "Alpaca Basic") + " credentials are not configured.");
  return {"APCA-API-KEY-ID": key, "APCA-API-SECRET-KEY": secret};
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

let secDirectory;
async function filings(symbol, env) {
  if (!env.SEC_USER_AGENT) throw new RequestError(503,"SEC EDGAR contact information is not configured.");
  const options = {headers:{"User-Agent":env.SEC_USER_AGENT,Accept:"application/json"}};
  if (!secDirectory || secDirectory.expires <= Date.now()) {
    const next = upstream("https://www.sec.gov/files/company_tickers.json","SEC ticker directory",options);
    secDirectory = {expires:Date.now()+DAY,next};
    next.catch(() => { if (secDirectory?.next === next) secDirectory = null; });
  }
  const directory = await secDirectory.next;
  const company = Object.values(directory).find(entry => entry.ticker === symbol || entry.ticker.replaceAll("-",".") === symbol);
  if (!company) return {company:symbol,filings:[]};
  const data = await upstream("https://data.sec.gov/submissions/CIK" + String(company.cik_str).padStart(10,"0") + ".json","SEC filings",options);
  const recent = data.filings?.recent;
  return {company:data.name || company.title,filings:(recent?.accessionNumber || []).slice(0,10).map((id,i) => ({
    form:recent.form[i],date:recent.filingDate[i],
    url:"https://www.sec.gov/Archives/edgar/data/" + company.cik_str + "/" + id.replaceAll("-","") + "/" + encodeURIComponent(recent.primaryDocument[i]),
  }))};
}
async function paper(env) {
  const init = {headers:alpacaHeaders(env,true)};
  const origin = "https://paper-api.alpaca.markets/v2";
  const [account,positions] = await Promise.all([
    upstream(origin+"/account","Alpaca Paper",init),upstream(origin+"/positions","Alpaca Paper",init),
  ]);
  return {
    equity: Number(account.equity), cash: Number(account.cash),
    positions: positions.map(p => ({symbol:p.symbol,quantity:p.qty})),
  };
}
function send(body, status = 200, type = "application/json; charset=utf-8") {
  return new Response(type.startsWith("application/json") ? JSON.stringify(body) : body,{status,headers:{
    "Content-Type":type,"Cache-Control":"no-store","X-Content-Type-Options":"nosniff",
    "Content-Security-Policy":"default-src 'self'; style-src 'unsafe-inline'; frame-ancestors 'none'; base-uri 'none'",
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
    try {
      if (url.pathname === "/api/paper") return send(await paper(env));
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
