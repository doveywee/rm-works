"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { LayoutGrid, Map as MapIcon, SlidersHorizontal, Bed, Bath, Maximize } from "lucide-react";
import { listings, formatPrice, type Listing } from "./data";
import {
  PropertyCard,
  StatusBadge,
  MapEmbed,
} from "./components";
import { cx, serifCls } from "./ui";

const CITIES = ["All cities", "Chino Hills", "Irvine", "Claremont", "Rancho Cucamonga", "Diamond Bar", "Corona del Mar", "Chino", "Ontario"];
const TYPES = ["All types", "Single Family", "Condo", "Townhouse", "Luxury Estate", "New Construction"];
const PRICES: [string, number, number][] = [
  ["Any price", 0, Infinity],
  ["Up to $750K", 0, 750000],
  ["$750K – $1M", 750000, 1000000],
  ["$1M – $1.5M", 1000000, 1500000],
  ["$1.5M – $2.5M", 1500000, 2500000],
  ["$2.5M+", 2500000, Infinity],
];
const SORTS = ["Newest", "Price: High to Low", "Price: Low to High", "Largest"];

const selectCls =
  "w-full bg-white border border-[#E4DCCD] rounded-lg px-3 py-2.5 text-[14px] text-[#16181D] outline-none focus:border-[#B4924E] cursor-pointer";
const labelCls =
  "block text-[11px] font-semibold tracking-[0.1em] uppercase text-[#9a8f7d] mb-1";

function FilterSelect({
  value,
  onChange,
  options,
  label,
}: {
  value: number;
  onChange: (i: number) => void;
  options: string[];
  label: string;
}) {
  return (
    <label className="block">
      <span className={labelCls}>{label}</span>
      <select value={value} onChange={(e) => onChange(Number(e.target.value))} className={selectCls}>
        {options.map((o, i) => (
          <option key={o} value={i}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

function NumberSelect({
  value,
  onChange,
  options,
  label,
  fmt,
}: {
  value: number;
  onChange: (n: number) => void;
  options: number[];
  label: string;
  fmt: (n: number) => string;
}) {
  return (
    <label className="block">
      <span className={labelCls}>{label}</span>
      <select value={value} onChange={(e) => onChange(Number(e.target.value))} className={selectCls}>
        {options.map((n) => (
          <option key={n} value={n}>
            {fmt(n)}
          </option>
        ))}
      </select>
    </label>
  );
}

export function ListingsExplorer() {
  const [view, setView] = useState<"grid" | "map">("grid");
  const [city, setCity] = useState(0);
  const [type, setType] = useState(0);
  const [price, setPrice] = useState(0);
  const [beds, setBeds] = useState(0);
  const [baths, setBaths] = useState(0);
  const [minSqft, setMinSqft] = useState(0);
  const [openOnly, setOpenOnly] = useState(false);
  const [sort, setSort] = useState(0);
  const [showFilters, setShowFilters] = useState(false);

  const results = useMemo(() => {
    let r = listings.filter((l) => {
      if (city > 0 && l.city !== CITIES[city]) return false;
      if (type > 0 && l.type !== TYPES[type]) return false;
      const [, lo, hi] = PRICES[price];
      if (l.price < lo || l.price > hi) return false;
      if (l.beds < beds) return false;
      if (l.baths < baths) return false;
      if (l.sqft < minSqft) return false;
      if (openOnly && l.status !== "Open House") return false;
      return true;
    });
    r = [...r].sort((a, b) => {
      switch (sort) {
        case 1:
          return b.price - a.price;
        case 2:
          return a.price - b.price;
        case 3:
          return b.sqft - a.sqft;
        default:
          return b.year - a.year;
      }
    });
    return r;
  }, [city, type, price, beds, baths, minSqft, openOnly, sort]);

  const countOpts = [0, 1, 2, 3, 4, 5];

  return (
    <div className="mx-auto max-w-7xl px-5 py-10">
      {/* Filter bar */}
      <div className="bg-[#F4EFE7] border border-[#E4DCCD] rounded-xl p-5">
        <div className="flex items-center justify-between gap-3 mb-4 lg:hidden">
          <button
            onClick={() => setShowFilters((s) => !s)}
            className="inline-flex items-center gap-2 text-[14px] font-medium text-[#16181D]"
          >
            <SlidersHorizontal size={16} /> Filters
          </button>
        </div>
        <div
          className={cx(
            "grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-7",
            !showFilters && "hidden lg:grid",
          )}
        >
          <FilterSelect value={city} onChange={setCity} options={CITIES} label="City" />
          <FilterSelect value={price} onChange={setPrice} options={PRICES.map((p) => p[0])} label="Price" />
          <NumberSelect value={beds} onChange={setBeds} options={countOpts} label="Beds" fmt={(n) => (n === 0 ? "Any" : `${n}+`)} />
          <NumberSelect value={baths} onChange={setBaths} options={countOpts} label="Baths" fmt={(n) => (n === 0 ? "Any" : `${n}+`)} />
          <FilterSelect value={type} onChange={setType} options={TYPES} label="Type" />
          <NumberSelect
            value={minSqft}
            onChange={setMinSqft}
            options={[0, 1500, 2000, 2500, 3000, 4000]}
            label="Min sqft"
            fmt={(n) => (n === 0 ? "Any" : `${n.toLocaleString()}+`)}
          />
          <FilterSelect value={sort} onChange={setSort} options={SORTS} label="Sort by" />
        </div>
        <div className="mt-4 flex items-center justify-between gap-3 flex-wrap">
          <label className="inline-flex items-center gap-2 text-[14px] font-medium text-[#3a3630] cursor-pointer">
            <input
              type="checkbox"
              checked={openOnly}
              onChange={(e) => setOpenOnly(e.target.checked)}
              className="w-4 h-4 accent-[#B4924E]"
            />
            Open houses only
          </label>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between gap-4 mt-7 mb-5">
        <p className="text-[14px] text-[#5b564d]">
          <span className="font-semibold text-[#16181D]">{results.length}</span> homes
          available
        </p>
        <div className="flex items-center gap-1 bg-[#F4EFE7] border border-[#E4DCCD] rounded-lg p-1">
          {([
            ["grid", LayoutGrid, "Grid"],
            ["map", MapIcon, "Map"],
          ] as const).map(([key, Icon, label]) => (
            <button
              key={key}
              onClick={() => setView(key)}
              className={cx(
                "inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md text-[13px] font-medium transition-colors",
                view === key ? "bg-white text-[#16181D] shadow-sm" : "text-[#8a8170]",
              )}
            >
              <Icon size={15} /> {label}
            </button>
          ))}
        </div>
      </div>

      {results.length === 0 ? (
        <div className="text-center py-24 text-[#8a8170]">
          No homes match these filters. Try widening your search.
        </div>
      ) : view === "grid" ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((l) => (
            <PropertyCard key={l.id} l={l} />
          ))}
        </div>
      ) : (
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-5 lg:h-[760px]">
          <div className="lg:overflow-y-auto pr-1 space-y-3 order-2 lg:order-1">
            {results.map((l) => (
              <MapRow key={l.id} l={l} />
            ))}
          </div>
          <div className="order-1 lg:order-2 rounded-xl overflow-hidden border border-[#E4DCCD] min-h-[360px] lg:h-full sticky top-24">
            <MapEmbed query="Chino Hills, CA" className="h-full min-h-[360px]" />
          </div>
        </div>
      )}
    </div>
  );
}

function MapRow({ l }: { l: Listing }) {
  return (
    <Link
      href={`/realty/listings/${l.id}`}
      className="flex gap-4 bg-white border border-[#EAE3D6] rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="relative w-36 shrink-0 bg-[#ECE4D6]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={l.images[0]} alt={l.title} loading="lazy" className="w-full h-full object-cover" />
        <div className="absolute top-2 left-2">
          <StatusBadge status={l.status} />
        </div>
      </div>
      <div className="py-3 pr-4 flex-1 min-w-0">
        <div className={cx(serifCls, "text-[20px] font-semibold text-[#16181D]")}>
          {formatPrice(l.status === "Sold" && l.soldPrice ? l.soldPrice : l.price)}
        </div>
        <div className="text-[13.5px] font-medium text-[#16181D] truncate">{l.address}</div>
        <div className="text-[12.5px] text-[#8a8170] truncate">
          {l.city}, CA · {l.neighborhood}
        </div>
        <div className="mt-2 flex items-center gap-3 text-[12.5px] text-[#3a3630]">
          <span className="flex items-center gap-1">
            <Bed size={13} className="text-[#B4924E]" /> {l.beds}
          </span>
          <span className="flex items-center gap-1">
            <Bath size={13} className="text-[#B4924E]" /> {l.baths}
          </span>
          <span className="flex items-center gap-1">
            <Maximize size={12} className="text-[#B4924E]" /> {l.sqft.toLocaleString()}
          </span>
        </div>
      </div>
    </Link>
  );
}
