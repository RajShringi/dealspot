import Category from "@/components/Category";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <main className="text-gray-700">
      <Slider />
      <div>
        <Category />
      </div>
    </main>
  );
}
