import Card from "../components/Card";
import { series, seriesEntry } from "../data/series";

function Git() {
  return (
    <section className="flex justify-center items-center w-full my-14">
      <div className="lg:m-0">
        {series.map((entry: seriesEntry, i: number) => (
          <a key={entry.path} href={entry.path}>
            <Card
              animate={false}
              title={`${i + 1}. ${entry.title}`}
              desc={entry.desc}
              kind={"default"}
              icon={entry.icon}
              style={entry.style}
              badge={entry.badge}
            />
          </a>
        ))}
      </div>
    </section>
  );
}

export default Git;
