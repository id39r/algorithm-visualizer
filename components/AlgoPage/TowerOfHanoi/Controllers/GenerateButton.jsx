import { generateDiscs } from "/components/AlgoPage/TowerOfHanoi/HanoiUtils/generateDiscs";

export default function GenerateButton() {
  return (
    <div
      onClick={() => {
        generateDiscs();
      }}
      className="relative w-full h-full max-w-[250px] bg-blue-bg flex justify-center items-center text-text-1 font-space uppercase select-none border-l-[10px] border-blue text-lg hover:cursor-pointer hover:bg-blue hover:text-bg-1"
    >
      Generate Towers
    </div>
  );
}
