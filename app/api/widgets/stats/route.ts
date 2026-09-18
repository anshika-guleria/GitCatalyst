import { NextResponse } from "next/server";

import { fetchGitHubUser } from "@/lib/github";
import { getWidgetThemeColors } from "@/lib/widget-themes";
import type { WidgetIconStyle, WidgetSize, WidgetTheme } from "@/types/github";

const escapeSvgText = (value: string = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&apos;");

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = escapeSvgText(searchParams.get("username") || "anshikaguleria");
  const type = searchParams.get("type") || "stats";
  const theme = (searchParams.get("theme") || "pastel-dream") as WidgetTheme;
  const hideBorder = searchParams.get("border") === "false";
  const statusText = escapeSvgText(searchParams.get("status") || "Coding with calm focus");
  const size = (searchParams.get("size") || "standard") as WidgetSize;
  const showIcons = searchParams.get("icons") !== "false";
  const iconStyle = (searchParams.get("iconStyle") || "emoji") as WidgetIconStyle;

  const profile = await fetchGitHubUser(searchParams.get("username") || "anshikaguleria");
  const profileName = escapeSvgText(profile.name || username || "GitHub User");
  const profileBio = escapeSvgText(profile.bio || "Building polished developer tooling and delightful GitHub dashboards.");
  const profileStatus = escapeSvgText(statusText || "Coding with calm focus");
  const profileLogin = escapeSvgText(profile.login || username || "github-user");
  const p = getWidgetThemeColors(theme);
  const sizeMap = {
    compact: { width: 420, height: 210 },
    standard: { width: 460, height: 230 },
    wide: { width: 560, height: 260 },
  };
  const sizeMeta = sizeMap[size] ?? sizeMap.standard;
  const { width, height } = sizeMeta;
  const border = hideBorder ? "transparent" : p.border;
  const line = `stroke="${p.border}" stroke-width="1"`;
  const card = `fill="${p.cardBg}" stroke="${p.border}" stroke-width="1"`;
  const iconGlyphs = {
    emoji: { repo: "📦", followers: "👥", following: "🫶", gists: "🧩", activity: "⚡", impact: "🌍", streak: "🔥", graph: "📈" },
    badge: { repo: "◎", followers: "◉", following: "◌", gists: "⬢", activity: "✦", impact: "⬡", streak: "✹", graph: "▣" },
    minimal: { repo: "•", followers: "•", following: "•", gists: "•", activity: "•", impact: "•", streak: "•", graph: "•" },
  } as const;
  const renderChip = (glyph: string, x: number, y: number) => {
    if (!showIcons) return "";
    if (iconStyle === "badge") {
      return `<rect x="${x}" y="${y - 14}" width="22" height="22" rx="6" fill="${p.accent}" opacity="0.18"/><text x="${x + 11}" y="${y}" text-anchor="middle" class="sub">${glyph}</text>`;
    }
    if (iconStyle === "minimal") {
      return `<circle cx="${x + 11}" cy="${y - 3}" r="3" fill="${p.accent2}"/>`;
    }
    return `<text x="${x + 11}" y="${y}" text-anchor="middle" class="sub">${glyph}</text>`;
  };

  let svg = "";

  if (type === "stats") {
    svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none">
      <style>
        .title { font: 700 16px 'Segoe UI', Ubuntu, Sans-Serif; fill: ${p.accent}; }
        .sub { font: 500 10px 'Segoe UI', Ubuntu, Sans-Serif; fill: ${p.subtext}; }
        .val { font: 700 18px 'Segoe UI', Ubuntu, Sans-Serif; fill: ${p.text}; }
        .lbl { font: 500 11px 'Segoe UI', Ubuntu, Sans-Serif; fill: ${p.subtext}; }
      </style>
      <rect width="460" height="230" rx="20" fill="${p.bg}" stroke="${border}" stroke-width="1.5"/>
      <g transform="translate(25, 30)">
        <text x="0" y="0" class="title">${escapeSvgText(profile.name || username)}'s GitHub Stats</text>
        <text x="410" y="0" text-anchor="end" class="sub">GitCatalyst</text>
        <line x1="0" y1="14" x2="410" y2="14" ${line}/>
        <g transform="translate(0, 35)">
          <rect width="195" height="60" rx="14" ${card}/>
          <text x="15" y="24" class="lbl">Public Repositories</text>
          <text x="15" y="46" class="val">${profile.public_repos}</text>
          ${renderChip(iconGlyphs[iconStyle].repo, 165, 24)}
        </g>
        <g transform="translate(215, 35)">
          <rect width="195" height="60" rx="14" ${card}/>
          <text x="15" y="24" class="lbl">Followers</text>
          <text x="15" y="46" class="val">${profile.followers}</text>
          ${renderChip(iconGlyphs[iconStyle].followers, 380, 24)}
        </g>
        <g transform="translate(0, 110)">
          <rect width="195" height="60" rx="14" ${card}/>
          <text x="15" y="24" class="lbl">Following</text>
          <text x="15" y="46" class="val">${profile.following}</text>
          ${renderChip(iconGlyphs[iconStyle].following, 165, 99)}
        </g>
        <g transform="translate(215, 110)">
          <rect width="195" height="60" rx="14" ${card}/>
          <text x="15" y="24" class="lbl">Gists</text>
          <text x="15" y="46" class="val">${profile.public_gists}</text>
          ${renderChip(iconGlyphs[iconStyle].gists, 380, 99)}
        </g>
      </g>
    </svg>`;
  } else if (type === "activity") {
    svg = `<svg xmlns="http://www.w3.org/2000/svg" width="460" height="230" viewBox="0 0 460 230" fill="none">
      <style>
        .title { font: 700 16px 'Segoe UI', Sans-Serif; fill: ${p.accent}; }
        .lbl { font: 500 10px 'Segoe UI', Sans-Serif; fill: ${p.subtext}; }
        .val { font: 700 17px 'Segoe UI', Sans-Serif; fill: ${p.text}; }
        .mini { font: 500 11px 'Segoe UI', Sans-Serif; fill: ${p.subtext}; }
      </style>
      <rect width="460" height="230" rx="20" fill="${p.bg}" stroke="${border}" stroke-width="1.5"/>
      <g transform="translate(25, 30)">
        <text x="0" y="0" class="title">${username}'s Activity Pulse</text>
        <text x="410" y="0" text-anchor="end" class="mini">Weekly rhythm</text>
        <line x1="0" y1="14" x2="410" y2="14" ${line}/>
        <g transform="translate(0, 35)">
          <rect width="195" height="60" rx="14" ${card}/>
          <text x="15" y="24" class="lbl">Commits This Week</text>
          <text x="15" y="46" class="val">84 commits</text>
        </g>
        <g transform="translate(215, 35)">
          <rect width="195" height="60" rx="14" ${card}/>
          <text x="15" y="24" class="lbl">PR Reviews</text>
          <text x="15" y="46" class="val">26 reviewed</text>
        </g>
        <g transform="translate(0, 110)">
          <rect width="195" height="60" rx="14" ${card}/>
          <text x="15" y="24" class="lbl">Issues Closed</text>
          <text x="15" y="46" class="val">18 resolved</text>
        </g>
        <g transform="translate(215, 110)">
          <rect width="195" height="60" rx="14" ${card}/>
          <text x="15" y="24" class="lbl">Release Pace</text>
          <text x="15" y="46" class="val">2 releases</text>
        </g>
      </g>
    </svg>`;
  } else if (type === "impact") {
    svg = `<svg xmlns="http://www.w3.org/2000/svg" width="460" height="230" viewBox="0 0 460 230" fill="none">
      <style>
        .title { font: 700 16px 'Segoe UI', Sans-Serif; fill: ${p.accent}; }
        .lbl { font: 500 10px 'Segoe UI', Sans-Serif; fill: ${p.subtext}; }
        .val { font: 700 17px 'Segoe UI', Sans-Serif; fill: ${p.text}; }
        .tiny { font: 500 10px 'Segoe UI', Sans-Serif; fill: ${p.subtext}; }
      </style>
      <rect width="460" height="230" rx="20" fill="${p.bg}" stroke="${border}" stroke-width="1.5"/>
      <g transform="translate(25, 30)">
        <text x="0" y="0" class="title">${username}'s Community Impact</text>
        <text x="410" y="0" text-anchor="end" class="tiny">Reach score 94</text>
        <line x1="0" y1="14" x2="410" y2="14" ${line}/>
        <g transform="translate(0, 35)">
          <rect width="195" height="60" rx="14" ${card}/>
          <text x="15" y="24" class="lbl">Followers</text>
          <text x="15" y="46" class="val">1,280</text>
        </g>
        <g transform="translate(215, 35)">
          <rect width="195" height="60" rx="14" ${card}/>
          <text x="15" y="24" class="lbl">Forks</text>
          <text x="15" y="46" class="val">148</text>
        </g>
        <g transform="translate(0, 110)">
          <rect width="195" height="60" rx="14" ${card}/>
          <text x="15" y="24" class="lbl">Stars</text>
          <text x="15" y="46" class="val">2,340</text>
        </g>
        <g transform="translate(215, 110)">
          <rect width="195" height="60" rx="14" ${card}/>
          <text x="15" y="24" class="lbl">Watchers</text>
          <text x="15" y="46" class="val">412</text>
        </g>
      </g>
    </svg>`;
  } else if (type === "streak") {
    svg = `<svg xmlns="http://www.w3.org/2000/svg" width="460" height="200" viewBox="0 0 460 200" fill="none">
      <style>
        .title { font: 700 16px 'Segoe UI', Sans-Serif; fill: ${p.accent}; }
        .big { font: 800 24px 'Segoe UI', Sans-Serif; fill: ${p.text}; }
        .sub { font: 500 11px 'Segoe UI', Sans-Serif; fill: ${p.subtext}; }
      </style>
      <rect width="460" height="200" rx="20" fill="${p.bg}" stroke="${border}" stroke-width="1.5"/>
      <g transform="translate(25, 30)">
        <text x="0" y="0" class="title">${username}'s Contribution Streak</text>
        <line x1="0" y1="14" x2="410" y2="14" ${line}/>
        <g transform="translate(0, 35)">
          <rect width="410" height="100" rx="16" ${card}/>
          <text x="20" y="38" class="sub">Current Active Streak</text>
          <text x="20" y="72" class="big">186 Consecutive Days</text>
          <text x="390" y="70" text-anchor="end" class="sub">Jan 28 - Aug 03</text>
        </g>
      </g>
    </svg>`;
  } else if (type === "trending") {
    svg = `<svg xmlns="http://www.w3.org/2000/svg" width="460" height="230" viewBox="0 0 460 230" fill="none">
      <style>
        .title { font: 700 16px 'Segoe UI', Sans-Serif; fill: ${p.accent}; }
        .big { font: 800 20px 'Segoe UI', Sans-Serif; fill: ${p.text}; }
        .lbl { font: 500 10px 'Segoe UI', Sans-Serif; fill: ${p.subtext}; }
      </style>
      <rect width="460" height="230" rx="20" fill="${p.bg}" stroke="${border}" stroke-width="1.5"/>
      <g transform="translate(25, 30)">
        <text x="0" y="0" class="title">${username}'s Trending Snapshot</text>
        <line x1="0" y1="14" x2="410" y2="14" ${line}/>
        <g transform="translate(0, 35)">
          <rect width="126" height="70" rx="14" ${card}/>
          <text x="14" y="26" class="lbl">Discovery</text>
          <text x="14" y="48" class="big">91/100</text>
        </g>
        <g transform="translate(142, 35)">
          <rect width="126" height="70" rx="14" ${card}/>
          <text x="14" y="26" class="lbl">Release Pace</text>
          <text x="14" y="48" class="big">3.2 weeks</text>
        </g>
        <g transform="translate(284, 35)">
          <rect width="126" height="70" rx="14" ${card}/>
          <text x="14" y="26" class="lbl">PR Merge</text>
          <text x="14" y="48" class="big">1.6 days</text>
        </g>
        <g transform="translate(0, 120)">
          <rect width="410" height="70" rx="16" ${card}/>
          <text x="20" y="32" class="lbl">Momentum this month</text>
          <text x="20" y="56" class="big">+18.4% contribution growth</text>
        </g>
      </g>
    </svg>`;
  } else if (type === "analytics") {
    svg = `<svg xmlns="http://www.w3.org/2000/svg" width="460" height="245" viewBox="0 0 460 245" fill="none">
      <style>
        .title { font: 700 16px 'Segoe UI', Sans-Serif; fill: ${p.accent}; }
        .sub { font: 500 10px 'Segoe UI', Sans-Serif; fill: ${p.subtext}; }
        .val { font: 700 18px 'Segoe UI', Sans-Serif; fill: ${p.text}; }
        .tiny { font: 600 9px 'Segoe UI', Sans-Serif; fill: ${p.subtext}; }
      </style>
      <rect width="460" height="245" rx="20" fill="${p.bg}" stroke="${border}" stroke-width="1.5"/>
      <g transform="translate(24, 28)">
        <text x="0" y="0" class="title">${username}'s Analytics Graph</text>
        <text x="410" y="0" text-anchor="end" class="sub">7-day rhythm</text>
        <line x1="0" y1="14" x2="410" y2="14" ${line}/>
        <g transform="translate(0, 28)">
          <rect width="195" height="72" rx="14" ${card}/>
          <text x="14" y="24" class="sub">Total contributions</text>
          <text x="14" y="48" class="val">4,820</text>
          <text x="14" y="62" class="tiny">+12.8% from last week</text>
        </g>
        <g transform="translate(215, 28)">
          <rect width="195" height="72" rx="14" ${card}/>
          <text x="14" y="24" class="sub">Merged PRs</text>
          <text x="14" y="48" class="val">314</text>
          <text x="14" y="62" class="tiny">Median 1.2 days</text>
        </g>
        <g transform="translate(0, 116)">
          <rect width="410" height="96" rx="16" ${card}/>
          <rect x="20" y="54" width="22" height="22" rx="6" fill="${p.accent}" opacity="0.9"/>
          <rect x="56" y="46" width="22" height="30" rx="6" fill="${p.accent2}" opacity="0.95"/>
          <rect x="92" y="38" width="22" height="38" rx="6" fill="${p.accent}" opacity="0.8"/>
          <rect x="128" y="43" width="22" height="33" rx="6" fill="${p.accent2}" opacity="0.9"/>
          <rect x="164" y="32" width="22" height="44" rx="6" fill="${p.accent}" opacity="0.9"/>
          <rect x="200" y="24" width="22" height="52" rx="6" fill="${p.accent2}" opacity="0.95"/>
          <rect x="236" y="39" width="22" height="37" rx="6" fill="${p.accent}" opacity="0.8"/>
          <rect x="272" y="29" width="22" height="47" rx="6" fill="${p.accent2}" opacity="0.92"/>
          <rect x="308" y="36" width="22" height="40" rx="6" fill="${p.accent}" opacity="0.9"/>
          <rect x="344" y="26" width="22" height="50" rx="6" fill="${p.accent2}" opacity="0.96"/>
          <rect x="380" y="18" width="22" height="58" rx="6" fill="${p.accent}" opacity="0.9"/>
          <text x="20" y="26" class="sub">Weekly bars</text>
        </g>
      </g>
    </svg>`;
  } else if (type === "velocity") {
    svg = `<svg xmlns="http://www.w3.org/2000/svg" width="460" height="245" viewBox="0 0 460 245" fill="none">
      <style>
        .title { font: 700 16px 'Segoe UI', Sans-Serif; fill: ${p.accent}; }
        .lbl { font: 500 10px 'Segoe UI', Sans-Serif; fill: ${p.subtext}; }
        .val { font: 700 18px 'Segoe UI', Sans-Serif; fill: ${p.text}; }
      </style>
      <rect width="460" height="245" rx="20" fill="${p.bg}" stroke="${border}" stroke-width="1.5"/>
      <g transform="translate(24, 28)">
        <text x="0" y="0" class="title">${username}'s Velocity Curve</text>
        <text x="410" y="0" text-anchor="end" class="lbl">Momentum +18.4%</text>
        <line x1="0" y1="14" x2="410" y2="14" ${line}/>
        <g transform="translate(0, 28)">
          <rect width="410" height="92" rx="16" ${card}/>
          <polyline points="24,76 70,67 118,55 165,48 212,42 258,35 304,28 352,22 398,18" fill="none" stroke="${p.accent2}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          <polyline points="24,76 70,74 118,70 165,61 212,54 258,48 304,39 352,31 398,18" fill="none" stroke="${p.accent}" stroke-width="2" stroke-dasharray="5 5" stroke-linecap="round"/>
          <circle cx="398" cy="18" r="5" fill="${p.accent2}"/>
          <text x="24" y="26" class="lbl">Week-by-week momentum</text>
        </g>
        <g transform="translate(0, 136)">
          <rect width="126" height="72" rx="14" ${card}/>
          <text x="14" y="26" class="lbl">PR velocity</text>
          <text x="14" y="50" class="val">18.6/day</text>
        </g>
        <g transform="translate(142, 136)">
          <rect width="126" height="72" rx="14" ${card}/>
          <text x="14" y="26" class="lbl">Issue resolve</text>
          <text x="14" y="50" class="val">64/week</text>
        </g>
        <g transform="translate(284, 136)">
          <rect width="126" height="72" rx="14" ${card}/>
          <text x="14" y="26" class="lbl">Release cadence</text>
          <text x="14" y="50" class="val">2.1/mo</text>
        </g>
      </g>
    </svg>`;
  } else if (type === "comparison") {
    svg = `<svg xmlns="http://www.w3.org/2000/svg" width="460" height="245" viewBox="0 0 460 245" fill="none">
      <style>
        .title { font: 700 16px 'Segoe UI', Sans-Serif; fill: ${p.accent}; }
        .sub { font: 500 10px 'Segoe UI', Sans-Serif; fill: ${p.subtext}; }
        .val { font: 700 18px 'Segoe UI', Sans-Serif; fill: ${p.text}; }
      </style>
      <rect width="460" height="245" rx="20" fill="${p.bg}" stroke="${border}" stroke-width="1.5"/>
      <g transform="translate(24, 28)">
        <text x="0" y="0" class="title">${username}'s Metric Comparison</text>
        <line x1="0" y1="14" x2="410" y2="14" ${line}/>
        <g transform="translate(0, 28)">
          <rect width="126" height="72" rx="14" ${card}/>
          <text x="14" y="24" class="sub">Commits</text>
          <text x="14" y="48" class="val">2,480</text>
        </g>
        <g transform="translate(142, 28)">
          <rect width="126" height="72" rx="14" ${card}/>
          <text x="14" y="24" class="sub">Reviews</text>
          <text x="14" y="48" class="val">726</text>
        </g>
        <g transform="translate(284, 28)">
          <rect width="126" height="72" rx="14" ${card}/>
          <text x="14" y="24" class="sub">Releases</text>
          <text x="14" y="48" class="val">18</text>
        </g>
        <g transform="translate(0, 116)">
          <rect width="410" height="96" rx="16" ${card}/>
          <rect x="24" y="56" width="78" height="24" rx="8" fill="${p.accent}"/>
          <rect x="122" y="42" width="98" height="38" rx="8" fill="${p.accent2}"/>
          <rect x="240" y="38" width="76" height="42" rx="8" fill="${p.accent}" opacity="0.8"/>
          <rect x="336" y="50" width="54" height="30" rx="8" fill="${p.border}"/>
          <text x="24" y="30" class="sub">Output mix</text>
        </g>
      </g>
    </svg>`;
  } else if (type === "distribution") {
    svg = `<svg xmlns="http://www.w3.org/2000/svg" width="460" height="245" viewBox="0 0 460 245" fill="none">
      <style>
        .title { font: 700 16px 'Segoe UI', Sans-Serif; fill: ${p.accent}; }
        .sub { font: 500 10px 'Segoe UI', Sans-Serif; fill: ${p.subtext}; }
        .val { font: 700 18px 'Segoe UI', Sans-Serif; fill: ${p.text}; }
      </style>
      <rect width="460" height="245" rx="20" fill="${p.bg}" stroke="${border}" stroke-width="1.5"/>
      <g transform="translate(24, 28)">
        <text x="0" y="0" class="title">${username}'s Impact Distribution</text>
        <line x1="0" y1="14" x2="410" y2="14" ${line}/>
        <g transform="translate(0, 28)">
          <rect width="410" height="68" rx="16" ${card}/>
          <rect x="24" y="34" width="282" height="14" rx="7" fill="${p.accent2}"/>
          <rect x="306" y="34" width="76" height="14" rx="7" fill="${p.accent}"/>
          <rect x="382" y="34" width="4" height="14" rx="2" fill="${p.border}"/>
          <text x="24" y="24" class="sub">Followers 1,280 | Stars 2,340 | Forks 148</text>
        </g>
        <g transform="translate(0, 118)">
          <rect width="126" height="72" rx="14" ${card}/>
          <text x="14" y="24" class="sub">Followers</text>
          <text x="14" y="48" class="val">1,280</text>
        </g>
        <g transform="translate(142, 118)">
          <rect width="126" height="72" rx="14" ${card}/>
          <text x="14" y="24" class="sub">Forks</text>
          <text x="14" y="48" class="val">148</text>
        </g>
        <g transform="translate(284, 118)">
          <rect width="126" height="72" rx="14" ${card}/>
          <text x="14" y="24" class="sub">Stars</text>
          <text x="14" y="48" class="val">2,340</text>
        </g>
      </g>
    </svg>`;
  } else if (type === "network") {
    svg = `<svg xmlns="http://www.w3.org/2000/svg" width="460" height="245" viewBox="0 0 460 245" fill="none">
      <style>
        .title { font: 700 16px 'Segoe UI', Sans-Serif; fill: ${p.accent}; }
        .lbl { font: 500 10px 'Segoe UI', Sans-Serif; fill: ${p.subtext}; }
        .val { font: 700 17px 'Segoe UI', Sans-Serif; fill: ${p.text}; }
      </style>
      <rect width="460" height="245" rx="20" fill="${p.bg}" stroke="${border}" stroke-width="1.5"/>
      <g transform="translate(24, 28)">
        <text x="0" y="0" class="title">${username}'s Community Network</text>
        <line x1="0" y1="14" x2="410" y2="14" ${line}/>
        <g transform="translate(0, 30)">
          <rect width="410" height="92" rx="16" ${card}/>
          <circle cx="62" cy="72" r="8" fill="${p.accent2}"/>
          <circle cx="138" cy="44" r="8" fill="${p.accent}"/>
          <circle cx="214" cy="74" r="8" fill="${p.accent2}"/>
          <circle cx="292" cy="42" r="8" fill="${p.accent}"/>
          <circle cx="372" cy="66" r="8" fill="${p.accent2}"/>
          <path d="M62 72L138 44L214 74L292 42L372 66" stroke="${p.border}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <text x="20" y="26" class="lbl">Reach graph</text>
        </g>
        <g transform="translate(0, 138)">
          <rect width="126" height="72" rx="14" ${card}/>
          <text x="14" y="26" class="lbl">Followers</text>
          <text x="14" y="50" class="val">1,280</text>
        </g>
        <g transform="translate(142, 138)">
          <rect width="126" height="72" rx="14" ${card}/>
          <text x="14" y="26" class="lbl">Forks</text>
          <text x="14" y="50" class="val">148</text>
        </g>
        <g transform="translate(284, 138)">
          <rect width="126" height="72" rx="14" ${card}/>
          <text x="14" y="26" class="lbl">Stars</text>
          <text x="14" y="50" class="val">2,340</text>
        </g>
      </g>
    </svg>`;
  } else if (type === "banner") {
    svg = `<svg xmlns="http://www.w3.org/2000/svg" width="460" height="220" viewBox="0 0 460 220" fill="none">
      <style>
        .name { font: 800 18px 'Segoe UI', Sans-Serif; fill: ${p.accent}; }
        .bio { font: 400 12px 'Segoe UI', Sans-Serif; fill: ${p.text}; }
        .status { font: 600 11px 'Segoe UI', Sans-Serif; fill: ${p.accent2}; }
        .stat-val { font: 700 14px 'Segoe UI', Sans-Serif; fill: ${p.text}; }
        .stat-lbl { font: 500 10px 'Segoe UI', Sans-Serif; fill: ${p.subtext}; }
        .initials { font: 700 16px 'Segoe UI', Sans-Serif; fill: ${p.bg}; }
      </style>
      <rect width="460" height="220" rx="20" fill="${p.bg}" stroke="${border}" stroke-width="1.5"/>
      <g transform="translate(25, 25)">
        <circle cx="35" cy="35" r="28" fill="${p.accent}" opacity="0.24"/>
        <text x="35" y="42" text-anchor="middle" class="initials">${profileName.charAt(0).toUpperCase() || "G"}</text>
        <text x="80" y="28" class="name">${profileName}</text>
        <text x="80" y="48" class="status">${profileStatus}</text>
        <text x="0" y="90" class="bio">${profileBio}</text>
        <line x1="0" y1="110" x2="410" y2="110" ${line}/>
        <g transform="translate(0, 125)">
          <rect width="125" height="50" rx="12" ${card}/>
          <text x="12" y="22" class="stat-lbl">Repos</text>
          <text x="12" y="40" class="stat-val">${profile.public_repos}</text>
        </g>
        <g transform="translate(142, 125)">
          <rect width="125" height="50" rx="12" ${card}/>
          <text x="12" y="22" class="stat-lbl">Followers</text>
          <text x="12" y="40" class="stat-val">${profile.followers}</text>
        </g>
        <g transform="translate(285, 125)">
          <rect width="125" height="50" rx="12" ${card}/>
          <text x="12" y="22" class="stat-lbl">Following</text>
          <text x="12" y="40" class="stat-val">${profile.following}</text>
        </g>
      </g>
    </svg>`;
  } else if (type === "trophy") {
    svg = `<svg xmlns="http://www.w3.org/2000/svg" width="460" height="200" viewBox="0 0 460 200" fill="none">
      <style>
        .title { font: 700 16px 'Segoe UI', Sans-Serif; fill: ${p.accent}; }
        .t-title { font: 700 12px 'Segoe UI', Sans-Serif; fill: ${p.text}; }
        .t-sub { font: 400 10px 'Segoe UI', Sans-Serif; fill: ${p.subtext}; }
      </style>
      <rect width="460" height="200" rx="20" fill="${p.bg}" stroke="${border}" stroke-width="1.5"/>
      <g transform="translate(25, 30)">
        <text x="0" y="0" class="title">${username}'s Unlocked Badges</text>
        <line x1="0" y1="14" x2="410" y2="14" ${line}/>
        <g transform="translate(0, 35)">
          <rect width="195" height="55" rx="12" ${card}/>
          <text x="15" y="24" class="t-title">Streak Titan</text>
          <text x="15" y="42" class="t-sub">100+ days active streak</text>
        </g>
        <g transform="translate(215, 35)">
          <rect width="195" height="55" rx="12" ${card}/>
          <text x="15" y="24" class="t-title">Polyglot Wizard</text>
          <text x="15" y="42" class="t-sub">5+ production languages</text>
        </g>
        <g transform="translate(0, 100)">
          <rect width="195" height="55" rx="12" ${card}/>
          <text x="15" y="24" class="t-title">Star Magnet</text>
          <text x="15" y="42" class="t-sub">2,300+ stargazers</text>
        </g>
        <g transform="translate(215, 100)">
          <rect width="195" height="55" rx="12" ${card}/>
          <text x="15" y="24" class="t-title">PR Crusher</text>
          <text x="15" y="42" class="t-sub">300+ merged pull requests</text>
        </g>
      </g>
    </svg>`;
  } else if (type === "repo") {
    svg = `<svg xmlns="http://www.w3.org/2000/svg" width="460" height="220" viewBox="0 0 460 220" fill="none">
      <style>
        .title { font: 700 16px 'Segoe UI', Sans-Serif; fill: ${p.accent}; }
        .name { font: 700 18px 'Segoe UI', Sans-Serif; fill: ${p.text}; }
        .sub { font: 500 10px 'Segoe UI', Sans-Serif; fill: ${p.subtext}; }
        .tag { font: 600 10px 'Segoe UI', Sans-Serif; fill: ${p.accent2}; }
      </style>
      <rect width="460" height="220" rx="20" fill="${p.bg}" stroke="${border}" stroke-width="1.5"/>
      <g transform="translate(25, 30)">
        <text x="0" y="0" class="title">Featured Repository</text>
        <rect x="0" y="22" width="410" height="150" rx="16" ${card}/>
        <text x="20" y="54" class="name">git-catalyst</text>
        <text x="20" y="76" class="sub">GitHub analytics dashboard with custom README card builder.</text>
        <g transform="translate(20, 98)">
          <rect width="82" height="28" rx="10" fill="${p.bg}" stroke="${p.border}"/>
          <text x="14" y="19" class="sub">Stars 2,340</text>
        </g>
        <g transform="translate(112, 98)">
          <rect width="78" height="28" rx="10" fill="${p.bg}" stroke="${p.border}"/>
          <text x="14" y="19" class="sub">Forks 148</text>
        </g>
        <g transform="translate(200, 98)">
          <rect width="96" height="28" rx="10" fill="${p.bg}" stroke="${p.border}"/>
          <text x="14" y="19" class="sub">Issues 24</text>
        </g>
        <text x="20" y="148" class="tag">#nextjs #typescript #analytics #dashboard</text>
      </g>
    </svg>`;
  } else {
    svg = `<svg xmlns="http://www.w3.org/2000/svg" width="460" height="200" viewBox="0 0 460 200" fill="none">
      <style>
        .title { font: 700 16px 'Segoe UI', Sans-Serif; fill: ${p.accent}; }
        .lbl { font: 600 12px 'Segoe UI', Sans-Serif; fill: ${p.text}; }
        .pct { font: 500 11px 'Segoe UI', Sans-Serif; fill: ${p.subtext}; }
      </style>
      <rect width="460" height="200" rx="20" fill="${p.bg}" stroke="${border}" stroke-width="1.5"/>
      <g transform="translate(25, 30)">
        <text x="0" y="0" class="title">${username}'s Most Used Languages</text>
        <line x1="0" y1="14" x2="410" y2="14" ${line}/>
        <g transform="translate(0, 35)">
          <rect width="410" height="12" rx="6" fill="${p.border}"/>
          <rect width="200" height="12" rx="6" fill="${p.accent2}"/>
          <rect x="200" width="100" height="12" fill="${p.accent}"/>
          <rect x="300" width="60" height="12" fill="${p.subtext}"/>
          <rect x="360" width="50" height="12" rx="6" fill="${p.border}"/>
        </g>
        <g transform="translate(0, 70)">
          <circle cx="6" cy="6" r="6" fill="${p.accent2}"/>
          <text x="20" y="10" class="lbl">TypeScript</text>
          <text x="120" y="10" class="pct">48.5%</text>

          <circle cx="210" cy="6" r="6" fill="${p.accent}"/>
          <text x="224" y="10" class="lbl">CSS / Styled</text>
          <text x="330" y="10" class="pct">24.0%</text>

          <circle cx="6" cy="36" r="6" fill="${p.subtext}"/>
          <text x="20" y="40" class="lbl">Rust</text>
          <text x="120" y="40" class="pct">14.5%</text>

          <circle cx="210" cy="36" r="6" fill="${p.border}"/>
          <text x="224" y="40" class="lbl">Go</text>
          <text x="330" y="40" class="pct">8.5%</text>
        </g>
      </g>
    </svg>`;
  }

  return new NextResponse(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
