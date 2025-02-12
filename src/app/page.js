import BasindaBiz from "./components/BasindaBiz";
import MainSlider from "./components/MainSlider";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="w-full  hidden md:block">
        <MainSlider />
      </div>
      <Projects />
      <BasindaBiz />
    </div>
  );
}
