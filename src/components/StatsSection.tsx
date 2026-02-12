export default function StatsSection() {
  const stats = [
    { value: "10+", label: "Years Excellence" },
    { value: "500+", label: "Happy Families" },
    { value: "50+", label: "Prime Projects" },
    { value: "₹200Cr+", label: "Managed Assets" }
  ];

  return (
    <section className="mt-20 md:bg-white text-white border-2 rounded-lg }">
      <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-12 p-3 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col flex-wrap justify-center items-center space-evenly space-y-2 group border-2 border-yellow-200 md:border-yellow-600 rounded-lg px-1 md:px-4">
            <h4 className="font-heading text-2xl lg:text-2xl pt-2 text-yellow-200 md:text-yellow-600 font-bold transition-transform group-hover:scale-110 duration-300">
              {stat.value}
            </h4>
            <p className="text-[10px] lg:text-xs uppercase tracking-[2px] font-semibold text-white md:text-black">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
 