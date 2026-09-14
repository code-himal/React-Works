import { Star, ShoppingCart } from "lucide-react";
import { toast } from "react-toastify";

export default function ProductCard({ item, isDark }) {
  const cardClasses = isDark
    ? "border-zinc-800 bg-zinc-900 text-zinc-50 shadow-zinc-950/40"
    : "border-zinc-200 bg-white text-zinc-900 shadow-zinc-200/60";

  const mutedText = isDark ? "text-zinc-400" : "text-zinc-500";
  const subtleBg = isDark ? "bg-zinc-800 text-zinc-100" : "bg-zinc-100 text-zinc-700";
  const accentBg = isDark ? "bg-orange-500/15 text-orange-300" : "bg-orange-100 text-orange-700";
  const primaryButton = isDark
    ? "bg-orange-500 text-white hover:bg-orange-400"
    : "bg-orange-500 text-white hover:bg-orange-600";

  const handleAddToCart = () => {
    toast.success(`${item.name} added to cart`, {
      position: "top-right",
      autoClose: 1800,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: isDark ? "dark" : "light",
    });
  };

  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-[28px] border p-3 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${cardClasses}`}
    >
      <div className="mb-4 flex items-center justify-between gap-2 px-1 pt-1">
        <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] ${accentBg}`}>
          {item.badge}
        </span>
        <span className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium ${subtleBg}`}>
          <Star className="h-3.5 w-3.5 fill-current text-amber-400" />
          {item.rating}
        </span>
      </div>

      <div className="overflow-hidden rounded-[20px] border border-zinc-200/10 bg-zinc-200/40">
        <img
          src={item.image}
          alt={item.name}
          className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-56"
          onError={(event) => {
            event.currentTarget.src = "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80";
          }}
        />
      </div>

      <div className="mt-4 flex flex-1 flex-col px-1 pb-1">
        <div className="flex items-center justify-between gap-2">
          <span className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${mutedText}`}>
            {item.category}
          </span>
          <span className={`rounded-full px-2 py-1 text-[10px] font-medium ${subtleBg}`}>
            In stock
          </span>
        </div>

        <h2 className="mt-3 text-xl font-bold leading-tight">{item.name}</h2>
        <p className={`mt-2 text-sm leading-6 ${mutedText}`}>{item.description}</p>

        <div className="mt-5 flex items-end justify-between gap-3">
          <div>
            <p className={`text-[11px] uppercase tracking-[0.18em] ${mutedText}`}>From</p>
            <p className="text-2xl font-black">${item.price}</p>
          </div>

          <button
            type="button"
            onClick={handleAddToCart}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${primaryButton}`}
          >
            <ShoppingCart className="h-4 w-4" />
            Add
          </button>
        </div>
      </div>
    </article>
  );
}